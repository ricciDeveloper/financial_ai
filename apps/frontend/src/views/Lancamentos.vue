<template>
  <q-page class="q-pa-lg" :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-1'">
    <div style="max-width: 800px; margin: 0 auto;">
      <div class="row items-center justify-between q-mb-xl">
        <h1 class="text-h4 text-weight-bold q-ma-none" :class="$q.dark.isActive ? 'text-white' : 'text-dark'">Meus Lançamentos</h1>
        <q-btn-toggle
          v-model="filtroAtivo"
          rounded
          unelevated
          toggle-color="primary"
          color="grey-3"
          text-color="grey-8"
          :class="$q.dark.isActive ? 'bg-grey-9 text-grey-4' : ''"
          :options="[
            {label: 'Todos', value: 'todos'},
            {label: 'Entradas', value: 'entrada'},
            {label: 'Gastos', value: 'gasto'}
          ]"
          class="shadow-1"
        />
      </div>

      <div v-if="loading" class="flex flex-center q-mt-xl">
        <q-spinner-tail color="primary" size="3em" />
      </div>
      
      <div v-else-if="error" class="q-mt-xl">
        <q-banner :class="$q.dark.isActive ? 'bg-red-9' : 'bg-red-1'" class="text-negative rounded-borders shadow-1">
          <template v-slot:avatar>
            <q-icon name="error_outline" color="negative" />
          </template>
          {{ error }}
        </q-banner>
      </div>
      
      <div v-else class="column">
        <transition-group name="list" tag="div">
          <LancamentoCard 
            v-for="l in lancamentosFiltrados" 
            :key="l.id!" 
            :lancamento="l" 
          />
        </transition-group>
        
        <div v-if="!lancamentosFiltrados.length" class="text-center q-mt-xl">
          <q-icon name="inbox" size="4em" color="grey-4" />
          <div class="text-h6 text-grey-5 q-mt-sm">Nenhum lançamento encontrado.</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar';
import type { Lancamento } from '@finance/shared';
import LancamentoCard from '../components/LancamentoCard.vue';

const $q = useQuasar();
const lancamentos = ref<Lancamento[]>([]);
const loading = ref(true);
const error = ref('');
const filtroAtivo = ref<'todos' | 'entrada' | 'gasto'>('todos');

const lancamentosFiltrados = computed(() => {
  if (filtroAtivo.value === 'todos') return lancamentos.value;
  return lancamentos.value.filter(l => l.tipo === filtroAtivo.value);
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/lancamentos');
    lancamentos.value = response.data.data;
  } catch (e: any) {
    error.value = 'Erro ao carregar os lançamentos';
    console.error(e);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
