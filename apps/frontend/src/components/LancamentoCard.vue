<template>
  <q-card class="modern-lancamento-card" :class="[$q.dark.isActive ? 'bg-grey-10' : 'bg-white', 'q-mb-sm']">
    <q-card-section class="q-py-md q-px-lg">
      <div class="row items-center no-wrap">
        
        <q-avatar :color="isGasto ? 'red-1' : 'green-1'" :text-color="isGasto ? 'negative' : 'positive'" size="46px" class="q-mr-md card-avatar">
          <q-icon :name="isGasto ? 'south_west' : 'north_east'" size="22px" />
        </q-avatar>

        <div class="col">
          <div class="text-subtitle1 text-weight-bold" :class="$q.dark.isActive ? 'text-white' : 'text-dark'" style="line-height: 1.2;">
            {{ lancamento.descricao }}
          </div>
          <div class="text-caption q-mt-xs" :class="$q.dark.isActive ? 'text-grey-5' : 'text-grey-7'">
            {{ formattedDate }} &bull; {{ lancamento.categoria || 'Não informada' }}
          </div>
        </div>

        <div class="col-auto text-right">
          <div class="text-subtitle1 text-weight-bold" :class="isGasto ? 'text-negative' : 'text-positive'">
            {{ isGasto ? '- ' : '+ ' }} R$ {{ lancamento.valor.toFixed(2) }}
          </div>
          <div class="text-caption text-uppercase q-mt-xs" :class="$q.dark.isActive ? 'text-grey-6' : 'text-grey-5'" style="font-size: 11px; letter-spacing: 0.5px;">
            <span v-if="lancamento.formaPagamento">
              {{ lancamento.formaPagamento.replace('_', ' ') }}
            </span>
            <span v-else-if="lancamento.origemEntrada">
              {{ lancamento.origemEntrada.replace('_', ' ') }}
            </span>
            <span v-else>Indefinido</span>
          </div>
        </div>

      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import type { Lancamento } from '@finance/shared';

const $q = useQuasar();

const props = defineProps<{
  lancamento: Lancamento;
}>();

const isGasto = computed(() => props.lancamento.tipo === 'gasto');

const formattedDate = computed(() => {
  return new Date(props.lancamento.data).toLocaleDateString([], { day: '2-digit', month: 'short' });
});
</script>

<style scoped>
.modern-lancamento-card {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.02);
  transition: transform 0.2s, box-shadow 0.2s;
}
.modern-lancamento-card:hover {
  transform: translateY(-2px) scale(1.005);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.body--dark .modern-lancamento-card {
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.02);
}
.body--dark .modern-lancamento-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}
.card-avatar {
  border-radius: 12px;
}
.body--dark .card-avatar.bg-red-1 {
  background: rgba(193, 0, 21, 0.15) !important;
}
.body--dark .card-avatar.bg-green-1 {
  background: rgba(33, 186, 69, 0.15) !important;
}
</style>
