import { NextResponse } from 'next/server';
import { geminiModel } from '../../../lib/gemini';
import { createAuthClient } from '../../../lib/supabase';
import { Lancamento } from '@finance/shared';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        const today = new Date().toISOString();
        const prompt = `
Você é um assistente financeiro. O usuário enviará uma mensagem informando um ganho ou um gasto. 
Extraia os dados financeiros e retorne somente JSON válido com o seguinte schema (exatamente este formato TypeScript convertendo para JSON):

type TipoLancamento = 'gasto' | 'entrada'
type FormaPagamento = 'dinheiro' | 'cartão_crédito' | 'cartão_débito' | 'pix' | 'transferência' | 'boleto' | 'outro'
type OrigemEntrada = 'salário' | 'freelance' | 'investimento' | 'presente' | 'reembolso' | 'outro'

interface Lancamento {
  tipo: TipoLancamento
  descricao: string
  valor: number // sempre positivo
  data: string // ISO 8601
  categoria: string // inferida pela IA, ex: 'Alimentação', 'Transporte', 'Salário'
  formaPagamento?: FormaPagamento | null
  origemEntrada?: OrigemEntrada | null
  observacoes?: string | null
}

Se algum campo não puder ser inferido, use null. 
Infira a categoria com base na descrição (ex: "almoço" -> "Alimentação"). 
Interprete datas relativas como "hoje", "ontem", "semana passada" com base na data atual fornecida: ${today}.

Mensagem do usuário: "${message}"
`;

        const result = await geminiModel.generateContent(prompt);
        const textResponse = result.response.text();

        // Clean up markdown block if present
        const cleanedText = textResponse.replace(/```json/gi, '').replace(/```/g, '').trim();

        let parsedLancamento: Lancamento;
        try {
            parsedLancamento = JSON.parse(cleanedText);
        } catch (e) {
            console.error('Failed to parse Gemini response:', cleanedText);
            return NextResponse.json({ error: 'Failed to process the message properly.' }, { status: 500 });
        }

        // Persist to Supabase
        const supabaseAuth = createAuthClient(req);
        const { data, error } = await supabaseAuth
            .from('lancamentos')
            .insert([
                {
                    tipo: parsedLancamento.tipo,
                    descricao: parsedLancamento.descricao,
                    valor: parsedLancamento.valor,
                    data: parsedLancamento.data,
                    categoria: parsedLancamento.categoria,
                    forma_pagamento: parsedLancamento.formaPagamento,
                    origem_entrada: parsedLancamento.origemEntrada,
                    observacoes: parsedLancamento.observacoes,
                }
            ])
            .select()
            .single();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ error: 'Failed to save to database' }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error: any) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
