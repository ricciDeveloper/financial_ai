import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        const { error } = await supabase
            .from('gastos_fixos')
            .delete()
            .eq('id', id);

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const body = await req.json();
        const { tipo, descricao, valor, diaVencimento, categoria } = body;

        const { data, error } = await supabase
            .from('gastos_fixos')
            .update({
                tipo,
                descricao,
                valor,
                dia_vencimento: diaVencimento,
                categoria
            })
            .eq('id', id)
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
