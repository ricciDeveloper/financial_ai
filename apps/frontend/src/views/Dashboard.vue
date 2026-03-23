<template>
  <q-page class="q-pa-lg" :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-1'">
    <div style="max-width: 1200px; margin: 0 auto;">
      
      <!-- Cabeçalho e Filtro de Datas -->
      <div class="row items-center justify-between q-mb-xl">
        <h1 class="text-h4 text-weight-bold q-ma-none" :class="$q.dark.isActive ? 'text-white' : 'text-dark'">Dashboard</h1>
        
        <div class="row items-center q-gutter-md">
          <q-input 
            v-model="dates.start" 
            outlined 
            dense 
            type="date"
            class="bg-white rounded-borders"
            :dark="$q.dark.isActive"
            label="Início" />
          <q-input 
            v-model="dates.end" 
            outlined 
            dense 
            type="date"
            class="bg-white rounded-borders"
            :dark="$q.dark.isActive"
            label="Fim" />
            
          <q-btn outline rounded color="primary" icon="refresh" label="Atualizar" @click="fetchResumo" :loading="loading" />
        </div>
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
      
      <div v-else-if="resumo">
        <!-- Components de Cards Resumo -->
        <ResumoFinanceiroCard :resumo="resumo" class="q-mb-xl" />

        <!-- Nova sessão de Gráficos -->
        <div class="row q-col-gutter-lg">
          <!-- Gráfico de Resumo Mensal (Ganhos vs Gastos) -->
          <div class="col-12">
            <q-card class="modern-card q-pa-md" :class="[$q.dark.isActive ? 'bg-grey-10' : 'bg-white']">
              <div class="text-h6 q-mb-md">Resumo Mensal (Ganhos vs Gastos)</div>
              <vue-apex-charts type="bar" height="300" :options="barChartOptions" :series="barSeries" />
            </q-card>
          </div>

          <!-- Gráficos de Categoria (Pizza) -->
          <div class="col-12 col-md-6">
            <q-card class="modern-card q-pa-md" :class="[$q.dark.isActive ? 'bg-grey-10' : 'bg-white']">
              <div class="text-h6 q-mb-md">Gastos por Categoria</div>
              <div v-if="gastosPieSeries.length">
                <vue-apex-charts type="donut" height="280" :options="gastosPieOptions" :series="gastosPieSeries" />
              </div>
              <div v-else class="text-center text-grey-5 q-py-lg">Nenhum gasto registrado.</div>
            </q-card>
          </div>
          
          <div class="col-12 col-md-6">
            <q-card class="modern-card q-pa-md" :class="[$q.dark.isActive ? 'bg-grey-10' : 'bg-white']">
              <div class="text-h6 q-mb-md">Entradas por Categoria</div>
               <div v-if="entradasPieSeries.length">
                <vue-apex-charts type="donut" height="280" :options="entradasPieOptions" :series="entradasPieSeries" />
              </div>
              <div v-else class="text-center text-grey-5 q-py-lg">Nenhuma entrada registrada.</div>
            </q-card>
          </div>

        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar';
import type { ResumoFinanceiro } from '@finance/shared';
import ResumoFinanceiroCard from '../components/ResumoFinanceiro.vue';
import VueApexCharts from 'vue3-apexcharts';
import type { ApexOptions } from 'apexcharts';

const $q = useQuasar();
const resumo = ref<ResumoFinanceiro | null>(null);
const loading = ref(true);
const error = ref('');

// Para controlar os filtros date - default para últimos 6 meses para mostrar retroativos
const dateObj = new Date();
const dates = ref({
  start: new Date(dateObj.getFullYear(), dateObj.getMonth() - 5, 1).toISOString().split('T')[0],
  end: new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0).toISOString().split('T')[0]
});

const isDark = computed(() => $q.dark.isActive);

// Configuração do Gráfico de Barras (Resumo Mensal Agrupado)
const barSeries = computed(() => [
  {
    name: 'Ganhos',
    data: resumo.value?.fluxoMensal.map(m => m.ganhos) || []
  },
  {
    name: 'Gastos',
    data: resumo.value?.fluxoMensal.map(m => m.gastos) || []
  }
]);

const barChartOptions = computed<ApexOptions>(() => {
  const monthNames = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'june',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];

  return {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      background: 'transparent'
    },
    theme: { mode: isDark.value ? 'dark' : 'light' },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 4,
        dataLabels: {
          position: 'top',
        },
      },
    },
    colors: ['#4CAF50', '#F44336'], // Verde para Ganhos, Vermelho para Gastos
    dataLabels: {
      enabled: true,
      formatter: (val: number, opts: any) => {
        if (val === 0) return '';
        const seriesName = opts.w.config.series[opts.seriesIndex].name.toLowerCase().slice(0, 5);
        return `${seriesName} ${val.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: [isDark.value ? '#fff' : '#333'],
        fontWeight: 500
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: resumo.value?.fluxoMensal.map(m => {
        const [year, month] = m.mes.split('-');
        return monthNames[parseInt(month) - 1];
      }) || [],
      labels: {
        style: {
          fontWeight: 600
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `R$ ${val.toFixed(0)}`
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right'
    },
    tooltip: {
      y: {
        formatter: (val: number) => `R$ ${val.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
      }
    }
  };
});

// Configuração Pie - Gastos
const gastosPieSeries = computed(() => {
  return resumo.value ? Object.values(resumo.value.gastosPorCategoria) : [];
});
const gastosPieOptions = computed<ApexOptions>(() => ({
  chart: { type: 'donut', background: 'transparent' },
  theme: { mode: isDark.value ? 'dark' : 'light' },
  labels: resumo.value ? Object.keys(resumo.value.gastosPorCategoria) : [],
  colors: ['#EF5350', '#EC407A', '#AB47BC', '#7E57C2', '#FFCA28', '#FF7043'],
  plotOptions: {
    pie: { donut: { size: '65%' } }
  },
  dataLabels: { enabled: false },
  legend: { position: 'bottom' }
}));

const entradasPieSeries = computed(() => {
  return resumo.value ? Object.values(resumo.value.entradasPorCategoria) : [];
});
const entradasPieOptions = computed<ApexOptions>(() => ({
  chart: { type: 'donut', background: 'transparent' },
  theme: { mode: isDark.value ? 'dark' : 'light' },
  labels: resumo.value ? Object.keys(resumo.value.entradasPorCategoria) : [],
  colors: ['#66BB6A', '#26A69A', '#29B6F6', '#26C6DA', '#9CCC65', '#D4E157'],
  plotOptions: {
    pie: { donut: { size: '65%' } }
  },
  dataLabels: { enabled: false },
  legend: { position: 'bottom' }
}));


const fetchResumo = async () => {
  loading.value = true;
  error.value = '';
  try {
    const response = await axios.get('/api/resumo', {
      params: {
        startDate: new Date(dates.value.start).toISOString(),
        endDate: new Date(dates.value.end + 'T23:59:59').toISOString()
      }
    });
    resumo.value = response.data.data;
  } catch (e: any) {
    error.value = 'Houve um erro ao carregar o dashboard.';
    console.error(e);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchResumo();
});
</script>

<style scoped>
.modern-card {
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.02);
}
.body--dark .modern-card {
  border: 1px solid rgba(255,255,255,0.05);
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}
.rounded-borders {
  border-radius: 8px !important;
}
</style>
