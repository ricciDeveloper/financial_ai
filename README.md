# Finance Chat System

Este repositório contém o sistema completo de controle financeiro via Chat inteligente utilizando Next.js, Vue 3, Quasar e Gemini.

## 🏗️ Estrutura do Monorepo

- `apps/backend/`: API executada via Next.js App Router conectado ao Supabase. Processa requisições via Gemini.
- `apps/frontend/`: Aplicação visual executada via Vite com Vue 3 e Quasar UI.
- `packages/shared/`: Pacote contendo as definições de Tipos em TypeScript, compartilhados entre as aplicações.

## 🚀 Setup e Execução Local

1. Instale as dependências usando `npm`:
```bash
npm install
```

2. Configure o ambiente criando um `.env` usando o arquivo de exemplo:
```bash
cp .env.example .env
```
(Preencha com sua `GEMINI_API_KEY`, credenciais do Supabase, etc). O App precisa do banco de dados configurado no Supabase com uma tabela `lancamentos`.

**DDL Recomendado para o Supabase:**
```sql
CREATE TABLE lancamentos (
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
```

3. Geração e Inicialização:
No diretório raiz, execute:
```bash
npm run dev
```

O Frontend rodará em `http://localhost:3000` (via Vite proxy).
A API Next.js rodará na porta `3001` (processando inteligência e rotas do Supabase).

## 🌍 Deploy

- Repositório está configurado para Deploy na Vercel via o arquivo `vercel.json`.
- A Vercel interpretará `frontend` e `backend` perfeitamente, servindo as API's Next sob a rota `/api/*`.
