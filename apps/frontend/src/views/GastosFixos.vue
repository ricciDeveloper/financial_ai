<template>
  <q-page class="q-pa-lg" :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-1'">
    <div style="max-width: 800px; margin: 0 auto;">
      <h1 class="text-h4 text-weight-bold q-mb-xl" :class="$q.dark.isActive ? 'text-white' : 'text-dark'">Gastos Fixos Mensais</h1>
      
      <q-card class="modern-card q-mb-xl" :class="[$q.dark.isActive ? 'bg-grey-10' : 'bg-white']">
        <q-card-section class="q-pa-lg">
          <div class="row items-center justify-between q-mb-md">
            <div class="text-h6">{{ editMode ? 'Editar Lançamento Fixo' : 'Adicionar Novo Lançamento Fixo' }}</div>
            <q-btn v-if="editMode" flat color="grey" label="Cancelar" @click="cancelEdit" />
          </div>
          
          <div class="q-mb-md">
            <q-btn-toggle
              v-model="form.tipo"
              rounded
              unelevated
              toggle-color="primary"
              color="grey-3"
              text-color="grey-8"
              :class="$q.dark.isActive ? 'bg-grey-9 text-grey-4' : ''"
              :options="[
                {label: 'Despesa (Saída)', value: 'gasto'},
                {label: 'Receita (Entrada)', value: 'entrada'}
              ]"
              class="shadow-1"
            />
          </div>
          <q-form @submit="salvarGasto" class="row q-col-gutter-md">
            <div class="col-12 col-sm-6">
              <q-input v-model="form.descricao" outlined label="Descrição" placeholder="Ex: Netflix" :rules="[val => !!val || 'Obrigatório']" />
            </div>
            <div class="col-12 col-sm-6">
              <q-input v-model.number="form.valor" type="number" outlined label="Valor (R$)" placeholder="Ex: 39.90" :rules="[val => val > 0 || 'Valor inválido']" />
            </div>
            <div class="col-12 col-sm-6">
              <q-select v-model="form.categoria" outlined :options="categoriasHover" label="Categoria" :rules="[val => !!val || 'Obrigatório']" />
            </div>
            <div class="col-12 col-sm-6">
              <q-input v-model.number="form.diaVencimento" type="number" outlined label="Dia do Pagamento" placeholder="Ex: 10" :rules="[val => (val > 0 && val <= 31) || 'Dia inválido']" />
            </div>
            <div class="col-12 flex justify-end">
              <q-btn type="submit" :color="form.tipo === 'gasto' ? 'negative' : 'positive'" :label="editMode ? 'Salvar Alterações' : 'Cadastrar'" :icon="editMode ? 'save' : 'add'" :loading="submitting" class="q-px-lg rounded-borders" unelevated />
            </div>
          </q-form>
        </q-card-section>
      </q-card>

      <div class="text-h6 q-mb-md">Meus Lançamentos Fixos</div>
      
      <div v-if="loading" class="flex flex-center q-mt-md">
        <q-spinner-tail color="primary" size="3em" />
      </div>

      <div v-else class="column q-gutter-sm">
        <transition-group name="list" tag="div">
          <q-card v-for="gasto in gastos" :key="gasto.id" class="modern-list-card" :class="[$q.dark.isActive ? 'bg-grey-9' : 'bg-white', 'q-mb-sm']">
            <q-card-section class="row items-center justify-between q-py-sm">
              <div class="row items-center" style="flex: 1;">
                <q-avatar :color="gasto.tipo === 'gasto' ? 'red-1' : 'green-1'" :text-color="gasto.tipo === 'gasto' ? 'negative' : 'positive'" size="42px" class="q-mr-md" style="border-radius: 10px;">
                  <q-icon :name="gasto.tipo === 'gasto' ? 'south_west' : 'north_east'" size="20px" />
                </q-avatar>
                <div>
                  <div class="text-subtitle1 text-weight-bold">{{ gasto.descricao }}</div>
                  <div class="text-caption text-grey-5">{{ gasto.categoria }} &bull; Dia {{ gasto.diaVencimento }}</div>
                </div>
              </div>
              <div class="row items-center">
                <div class="text-subtitle1 text-weight-bold q-mr-md" :class="gasto.tipo === 'gasto' ? 'text-negative' : 'text-positive'">
                  {{ gasto.tipo === 'gasto' ? '- ' : '+ ' }}R$ {{ gasto.valor.toFixed(2) }}
                </div>
                <q-btn flat round color="primary" icon="edit" size="sm" class="q-mr-sm" @click="prepararEdicao(gasto)" />
                <q-btn flat round :color="gasto.tipo === 'gasto' ? 'negative' : 'grey'" icon="delete" size="sm" @click="deletarGasto(gasto.id!)" />
              </div>
            </q-card-section>
          </q-card>
        </transition-group>
        
        <div v-if="!gastos.length" class="text-center q-mt-xl text-grey-5">
          <q-icon name="event_available" size="4em" />
          <div class="text-h6 q-mt-sm">Nenhum lançamento fixo cadastrado.</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar';
import type { GastoFixo } from '@finance/shared';

const $q = useQuasar();
const gastos = ref<GastoFixo[]>([]);
const loading = ref(true);
const submitting = ref(false);

const editMode = ref(false);
const editingId = ref<string | null>(null);

const categoriasHover = ['Lazer & Entretenimento', 'Moradia', 'Alimentação', 'Saúde', 'Educação', 'Transporte', 'Salário', 'Serviços', 'Outros'];

const form = ref({
  tipo: 'gasto' as 'gasto' | 'entrada',
  descricao: '',
  valor: null as number | null,
  diaVencimento: null as number | null,
  categoria: ''
});

const fetchGastos = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/api/gastos-fixos');
    gastos.value = res.data.data;
  } catch (error) {
    if (error) console.error(error);
  } finally {
    loading.value = false;
  }
};

const prepararEdicao = (gasto: GastoFixo) => {
  editMode.value = true;
  editingId.value = gasto.id!;
  form.value = {
    tipo: gasto.tipo,
    descricao: gasto.descricao,
    valor: gasto.valor,
    diaVencimento: gasto.diaVencimento,
    categoria: gasto.categoria
  };
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const cancelEdit = () => {
  editMode.value = false;
  editingId.value = null;
  form.value = { tipo: 'gasto', descricao: '', valor: null, diaVencimento: null, categoria: '' };
};

const salvarGasto = async () => {
  submitting.value = true;
  try {
    if (editMode.value && editingId.value) {
      const res = await axios.put(`/api/gastos-fixos/${editingId.value}`, form.value);
      const index = gastos.value.findIndex(g => g.id === editingId.value);
      if (index !== -1) gastos.value[index] = res.data.data;
      $q.notify({ type: 'positive', message: 'Gasto atualizado!' });
    } else {
      const res = await axios.post('/api/gastos-fixos', form.value);
      gastos.value.push(res.data.data);
      $q.notify({ type: 'positive', message: 'Gasto cadastrado com sucesso!' });
    }
    cancelEdit();
  } catch (error) {
    $q.notify({ type: 'negative', message: 'Erro ao salvar gasto fixo.' });
  } finally {
    submitting.value = false;
  }
};

const deletarGasto = async (id: string) => {
  $q.dialog({
    title: 'Atenção',
    message: 'Deseja realmente excluir esse gasto recorrente?',
    cancel: true,
    persistent: true
  }).onOk(async () => {
    try {
      await axios.delete(`/api/gastos-fixos/${id}`);
      gastos.value = gastos.value.filter(g => g.id !== id);
      $q.notify({ type: 'info', message: 'Excluído com sucesso.' });
    } catch {
      $q.notify({ type: 'negative', message: 'Falha ao excluir.' });
    }
  });
};

onMounted(fetchGastos);
</script>

<style scoped>
.modern-card {
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}
.modern-list-card {
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.03);
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid rgba(0,0,0,0.03);
}
.body--dark .modern-list-card {
  border-color: rgba(255,255,255,0.05);
}
.modern-list-card:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
