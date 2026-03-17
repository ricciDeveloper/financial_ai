import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const startDateParam = searchParams.get('startDate');
        const endDateParam = searchParams.get('endDate');

        const date = new Date();
        // Default to current month if no dates are provided
        const startDate = startDateParam || new Date(date.getFullYear(), date.getMonth(), 1).toISOString();
        const endDate = endDateParam || new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59).toISOString();

        const { data: lancamentos, error } = await supabase
            .from('lancamentos')
            .select('tipo, valor, categoria, data')
            .gte('data', startDate)
            .lte('data', endDate)
            .order('data', { ascending: true });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // Buscando gastos fixos para incorporar no cálculo
        const { data: gastosFixos } = await supabase.from('gastos_fixos').select('*');

        let totalGastos = 0;
        let totalEntradas = 0;
        const gastosPorCategoria: Record<string, number> = {};
        const entradasPorCategoria: Record<string, number> = {};
        const fluxoPorDia: Record<string, number> = {};

        // Adiciona o saldo inicial zerado na startDate
        const startDayStr = startDate.split('T')[0];
        fluxoPorDia[startDayStr] = 0;

        lancamentos?.forEach((item) => {
            const valor = Number(item.valor);
            const dayStr = item.data.split('T')[0];

            if (!fluxoPorDia[dayStr]) {
                fluxoPorDia[dayStr] = 0;
            }

            if (item.tipo === 'gasto') {
                totalGastos += valor;
                gastosPorCategoria[item.categoria] = (gastosPorCategoria[item.categoria] || 0) + valor;
                fluxoPorDia[dayStr] -= valor;
            } else if (item.tipo === 'entrada') {
                totalEntradas += valor;
                entradasPorCategoria[item.categoria] = (entradasPorCategoria[item.categoria] || 0) + valor;
                fluxoPorDia[dayStr] += valor;
            }
        });

        // Incorporar Gastos Fixos
        if (gastosFixos) {
            const gFStartDate = new Date(startDate);
            const gFEndDate = new Date(endDate);

            let iterDate = new Date(gFStartDate.getFullYear(), gFStartDate.getMonth(), 1);
            const endMonthTime = new Date(gFEndDate.getFullYear(), gFEndDate.getMonth(), 1).getTime();

            while (iterDate.getTime() <= endMonthTime) {
                const year = iterDate.getFullYear();
                const month = iterDate.getMonth();

                gastosFixos.forEach((gf: any) => {
                    const gfDate = new Date(year, month, gf.dia_vencimento);
                    gfDate.setUTCHours(12);

                    if (gfDate >= gFStartDate && gfDate <= gFEndDate) {
                        const val = Number(gf.valor);
                        const dayStr = gfDate.toISOString().split('T')[0];

                        if (!fluxoPorDia[dayStr]) fluxoPorDia[dayStr] = 0;

                        if (gf.tipo === 'entrada') {
                            totalEntradas += val;
                            entradasPorCategoria[gf.categoria] = (entradasPorCategoria[gf.categoria] || 0) + val;
                            fluxoPorDia[dayStr] += val;
                        } else {
                            // gasta fallback to existing behavior 
                            totalGastos += val;
                            gastosPorCategoria[gf.categoria] = (gastosPorCategoria[gf.categoria] || 0) + val;
                            fluxoPorDia[dayStr] -= val;
                        }
                    }
                });
                iterDate.setMonth(iterDate.getMonth() + 1);
            }
        }

        const sortedDays = Object.keys(fluxoPorDia).sort();
        let runningTotal = 0;

        const fluxoEvolucao = sortedDays.map(dia => {
            runningTotal += fluxoPorDia[dia];
            return {
                data: dia,
                totalDia: runningTotal
            };
        });

        if (fluxoEvolucao.length === 1) {
            const parts = fluxoEvolucao[0].data.split('-');
            const numDia = parseInt(parts[2], 10) + 1;
            const fakeDate = `${parts[0]}-${parts[1]}-${numDia.toString().padStart(2, '0')}`;
            fluxoEvolucao.push({
                data: fakeDate,
                totalDia: fluxoEvolucao[0].totalDia
            });
        }

        const saldo = totalEntradas - totalGastos;

        return NextResponse.json({
            data: {
                saldo,
                totalGastos,
                totalEntradas,
                gastosPorCategoria,
                entradasPorCategoria,
                fluxoDeCaixa: fluxoEvolucao // Enviaremos a conta acumulada pro chart ficar mais bonito
            }
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
