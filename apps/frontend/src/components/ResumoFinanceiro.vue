<template>
  <div class="row q-col-gutter-md q-pt-md">
    <div class="col-12 col-md-4">
      <q-card class="modern-card card-gradient-primary text-white" :class="{'dark-shadow': $q.dark.isActive}">
        <q-card-section class="q-pa-lg">
          <div class="row items-center q-mb-sm">
            <q-icon name="account_balance" size="sm" class="q-mr-sm opacity-80" />
            <div class="text-subtitle2 text-uppercase opacity-80 letter-spacing">Saldo Atual</div>
          </div>
          <div class="text-h3 text-weight-bolder">R$ {{ resumo.saldo.toFixed(2) }}</div>
        </q-card-section>
      </q-card>
    </div>
    
    <div class="col-12 col-md-4">
      <q-card class="modern-card card-gradient-positive text-white" :class="{'dark-shadow': $q.dark.isActive}">
        <q-card-section class="q-pa-lg">
          <div class="row items-center q-mb-sm">
            <q-icon name="trending_up" size="sm" class="q-mr-sm opacity-80" />
            <div class="text-subtitle2 text-uppercase opacity-80 letter-spacing">Entradas do Mês</div>
          </div>
          <div class="text-h3 text-weight-bolder">R$ {{ resumo.totalEntradas.toFixed(2) }}</div>
        </q-card-section>
      </q-card>
    </div>
    
    <div class="col-12 col-md-4">
      <q-card class="modern-card card-gradient-negative text-white" :class="{'dark-shadow': $q.dark.isActive}">
        <q-card-section class="q-pa-lg">
          <div class="row items-center q-mb-sm">
            <q-icon name="trending_down" size="sm" class="q-mr-sm opacity-80" />
            <div class="text-subtitle2 text-uppercase opacity-80 letter-spacing">Gastos do Mês</div>
          </div>
          <div class="text-h3 text-weight-bolder">R$ {{ resumo.totalGastos.toFixed(2) }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ResumoFinanceiro } from '@finance/shared';
import { useQuasar } from 'quasar';

const $q = useQuasar();

defineProps<{
  resumo: ResumoFinanceiro;
}>();
</script>

<style scoped>
.modern-card {
  border-radius: 20px;
  overflow: hidden;
  border: none !important;
  box-shadow: 0 10px 30px rgba(25, 118, 210, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.modern-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(25, 118, 210, 0.25);
}
.dark-shadow {
  box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
}
.dark-shadow:hover {
  box-shadow: 0 15px 35px rgba(0,0,0,0.45) !important;
}
.opacity-80 {
  opacity: 0.8;
}
.letter-spacing {
  letter-spacing: 0.5px;
}
.card-gradient-primary {
  background: linear-gradient(135deg, #1976D2 0%, #1565C0 100%);
}
.card-gradient-positive {
  background: linear-gradient(135deg, #21BA45 0%, #1a9636 100%);
  box-shadow: 0 10px 30px rgba(33, 186, 69, 0.15);
}
.card-gradient-negative {
  background: linear-gradient(135deg, #C10015 0%, #9e0011 100%);
  box-shadow: 0 10px 30px rgba(193, 0, 21, 0.15);
}
</style>
