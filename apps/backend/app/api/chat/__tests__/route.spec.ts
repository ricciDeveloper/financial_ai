import { describe, it, expect, vi } from 'vitest';
import { POST } from '../route';
import { NextRequest } from 'next/server';

// Mock dependências externas
vi.mock('../../../../lib/gemini', () => {
    return {
        geminiModel: {
            generateContent: vi.fn().mockResolvedValue({
                response: {
                    text: () => JSON.stringify({
                        tipo: 'gasto',
                        descricao: 'Ifood hamburguer',
                        valor: 35.5,
                        data: '2023-10-01T12:00:00Z',
                        categoria: 'Alimentação',
                        formaPagamento: 'pix'
                    })
                }
            })
        }
    };
});

vi.mock('../../../../lib/supabase', () => {
    return {
        supabase: {
            from: vi.fn().mockReturnValue({
                insert: vi.fn().mockReturnValue({
                    select: vi.fn().mockReturnValue({
                        single: vi.fn().mockResolvedValue({
                            data: {
                                id: '123e4567-e89b-12d3-a456-426614174000',
                                tipo: 'gasto',
                                descricao: 'Ifood hamburguer',
                                valor: 35.5,
                                data: '2023-10-01T12:00:00Z',
                                categoria: 'Alimentação',
                                forma_pagamento: 'pix'
                            },
                            error: null
                        })
                    })
                })
            })
        }
    };
});

describe('Chat API POST /api/chat', () => {
    it('should process user message, mock Gemini extraction, and save to mock Supabase', async () => {
        const req = new Request('http://localhost/api/chat', {
            method: 'POST',
            body: JSON.stringify({ message: 'Gastei 35.50 com um hamburguer no ifood no pix' })
        });

        const response = await POST(req);
        const json = await response.json();

        expect(response.status).toBe(200);
        expect(json.data.tipo).toBe('gasto');
        expect(json.data.valor).toBe(35.5);
        expect(json.data.categoria).toBe('Alimentação');
        expect(json.data.forma_pagamento).toBe('pix');
    });
});
