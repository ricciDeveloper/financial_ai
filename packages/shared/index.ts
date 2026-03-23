export type TipoLancamento = 'gasto' | 'entrada';

export type FormaPagamento =
  | 'dinheiro' | 'cartão_crédito' | 'cartão_débito'
  | 'pix' | 'transferência' | 'boleto' | 'outro';

export type OrigemEntrada =
  | 'salário' | 'freelance' | 'investimento'
  | 'presente' | 'reembolso' | 'outro';

export interface Lancamento {
  id?: string;
  tipo: TipoLancamento;
  descricao: string;
  valor: number;                          // sempre positivo
  data: string;                           // ISO 8601
  categoria: string;                      // inferida pela IA
  formaPagamento?: FormaPagamento;        // se tipo === 'gasto'
  origemEntrada?: OrigemEntrada;          // se tipo === 'entrada'
  observacoes?: string;
  criadoEm?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'system';
  content: string;
  timestamp: string;
}

export interface ResumoFinanceiro {
  saldo: number;
  totalGastos: number;
  totalEntradas: number;
  gastosPorCategoria: Record<string, number>;
  entradasPorCategoria: Record<string, number>;
  fluxoDeCaixa: { data: string; totalDia: number }[];
  fluxoMensal: { mes: string; ganhos: number; gastos: number }[];
}

export interface GastoFixo {
  id?: string;
  tipo: TipoLancamento;
  descricao: string;
  valor: number;
  diaVencimento: number;
  categoria: string;
  criadoEm?: string;
}
