import { NextResponse } from 'next/server';
import { createAuthClient } from '../../../lib/supabase';

export async function GET(req: Request) {
    try {
        const supabase = createAuthClient(req);
        const { data, error } = await supabase
            .from('gastos_fixos')
            .select('*')
            .order('dia_vencimento', { ascending: true });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        const formattedData = data.map(item => ({
            id: item.id,
            tipo: item.tipo,
            descricao: item.descricao,
            valor: item.valor,
            diaVencimento: item.dia_vencimento,
            categoria: item.categoria,
            criadoEm: item.criado_em
        }));

        return NextResponse.json({ data: formattedData });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { tipo, descricao, valor, diaVencimento, categoria } = body;
        
        const supabase = createAuthClient(req);

        const { data, error } = await supabase
            .from('gastos_fixos')
            .insert([
                {
                    tipo,
                    descricao,
                    valor,
                    dia_vencimento: diaVencimento,
                    categoria
                }
            ])
            .select()
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
