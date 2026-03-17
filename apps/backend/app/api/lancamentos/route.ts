import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const tipo = searchParams.get('tipo');

        let query = supabase.from('lancamentos').select('*').order('data', { ascending: false });

        if (tipo) {
            query = query.eq('tipo', tipo);
        }

        const { data, error } = await query;

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        const formattedData = data.map((item: any) => ({
            id: item.id,
            tipo: item.tipo,
            data: item.data,
            descricao: item.descricao,
            valor: item.valor,
            categoria: item.categoria,
            formaPagamento: item.forma_pagamento,
            origemEntrada: item.origem_entrada,
            observacoes: item.observacoes,
            criadoEm: item.criado_em,
        }));

        return NextResponse.json({ data: formattedData });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
