-- 1. Garante que as tabelas existem (caso não existam)
CREATE TABLE IF NOT EXISTS public.lancamentos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tipo TEXT NOT NULL,
  descricao TEXT NOT NULL,
  valor NUMERIC NOT NULL,
  data TIMESTAMP WITH TIME ZONE NOT NULL,
  categoria TEXT NOT NULL,
  forma_pagamento TEXT,
  origem_entrada TEXT,
  observacoes TEXT,
  criado_em TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.gastos_fixos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tipo TEXT NOT NULL DEFAULT 'gasto',
  descricao TEXT NOT NULL,
  valor NUMERIC NOT NULL,
  dia_vencimento INTEGER NOT NULL,
  categoria TEXT NOT NULL,
  criado_em TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Adiciona a coluna user_id se ela não existir
ALTER TABLE public.lancamentos ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) DEFAULT auth.uid();
ALTER TABLE public.gastos_fixos ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) DEFAULT auth.uid();

-- 3. Habilitar RLS (Row Level Security)
ALTER TABLE public.lancamentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gastos_fixos ENABLE ROW LEVEL SECURITY;

-- 4. Criar políticas (Policies) para Lançamentos
-- Nota: Deleta as políticas anteriores se existirem para evitar erro de duplicidade
DROP POLICY IF EXISTS "Ver proprios lancamentos" ON public.lancamentos;
DROP POLICY IF EXISTS "Inserir proprios lancamentos" ON public.lancamentos;
DROP POLICY IF EXISTS "Atualizar proprios lancamentos" ON public.lancamentos;
DROP POLICY IF EXISTS "Deletar proprios lancamentos" ON public.lancamentos;

CREATE POLICY "Ver proprios lancamentos" ON public.lancamentos FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Inserir proprios lancamentos" ON public.lancamentos FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Atualizar proprios lancamentos" ON public.lancamentos FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Deletar proprios lancamentos" ON public.lancamentos FOR DELETE USING (auth.uid() = user_id);

-- 5. Criar políticas (Policies) para Gastos Fixos
DROP POLICY IF EXISTS "Ver proprios gastos" ON public.gastos_fixos;
DROP POLICY IF EXISTS "Inserir proprios gastos" ON public.gastos_fixos;
DROP POLICY IF EXISTS "Atualizar proprios gastos" ON public.gastos_fixos;
DROP POLICY IF EXISTS "Deletar proprios gastos" ON public.gastos_fixos;

CREATE POLICY "Ver proprios gastos" ON public.gastos_fixos FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Inserir proprios gastos" ON public.gastos_fixos FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Atualizar proprios gastos" ON public.gastos_fixos FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Deletar proprios gastos" ON public.gastos_fixos FOR DELETE USING (auth.uid() = user_id);
