<template>
  <q-page class="column no-wrap" style="height: calc(100vh - 66px)">
    <div class="col chat-container items-center justify-center column q-pa-md overflow-hidden relative-position" 
         :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-1'">
      
      <q-scroll-area class="full-width full-height scroll-area" ref="scrollAreaRef">
        <div class="q-py-md">
          <ChatMessage
            v-for="msg in messages"
            :key="msg.id"
            :name="msg.role === 'user' ? 'Você' : 'Assistente AI'"
            :text="msg.content"
            :sent="msg.role === 'user'"
            :timestamp="msg.timestamp"
          />
          <div v-if="loading" class="q-pa-md flex justify-center">
            <q-spinner-dots color="primary" size="2em" />
          </div>
        </div>
      </q-scroll-area>
    </div>

    <div class="q-pa-md border-top" :class="$q.dark.isActive ? 'bg-dark-page border-dark' : 'bg-white border-light'">
      <div style="max-width: 800px; margin: 0 auto; width: 100%;">
        <q-input
          v-model="inputMsg"
          rounded
          outlined
          placeholder="Descreva seu gasto ou entrada..."
          @keyup.enter="sendMessage"
          :disable="loading"
          class="modern-input"
          :bg-color="$q.dark.isActive ? 'grey-10' : 'grey-2'"
        >
          <template v-slot:append>
            <q-btn 
              round 
              dense 
              flat 
              icon="send" 
              color="primary" 
              @click="sendMessage" 
              :disable="loading || !inputMsg.trim()" 
              class="transition-transform hover-scale"
            />
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar';
import type { ChatMessage as MsgType, Lancamento } from '@finance/shared';
import ChatMessage from '../components/ChatMessage.vue';

const $q = useQuasar();
const inputMsg = ref('');
const loading = ref(false);
const scrollAreaRef = ref<any>(null);

const messages = ref<MsgType[]>([
  {
    id: Date.now().toString(),
    role: 'system',
    content: 'Olá! Sou seu assistente financeiro. Me conte o que você gastou ou ganhou hoje. Ex: "Gastei 45 reais no almoço no débito" ou "Recebi 5000 de salário".',
    timestamp: new Date().toISOString()
  }
]);

const scrollToBottom = () => {
  nextTick(() => {
    if (scrollAreaRef.value) {
      scrollAreaRef.value.setScrollPosition('vertical', 999999, 300);
    }
  });
};

const sendMessage = async () => {
  const text = inputMsg.value.trim();
  if (!text) return;

  const userMsg: MsgType = {
    id: Date.now().toString(),
    role: 'user',
    content: text,
    timestamp: new Date().toISOString()
  };
  messages.value.push(userMsg);
  inputMsg.value = '';
  scrollToBottom();

  loading.value = true;
  try {
    const { data } = await axios.post('/api/chat', { message: text });
    
    const lancamento: Lancamento = data.data;
    
    let answerText = '';
    if (lancamento.tipo === 'gasto') {
      answerText = `✅ Gasto registrado: ${lancamento.descricao} no valor de R$ ${lancamento.valor.toFixed(2)} (${lancamento.categoria}).`;
    } else {
      answerText = `🤑 Entrada registrada: R$ ${lancamento.valor.toFixed(2)} como ${lancamento.descricao} (${lancamento.categoria}).`;
    }

    const aiMsg: MsgType = {
      id: Date.now().toString(),
      role: 'system',
      content: answerText,
      timestamp: new Date().toISOString()
    };
    messages.value.push(aiMsg);
  } catch (error: any) {
    if (error.response?.data?.error) {
       console.error(error.response.data.error);
    }
    $q.notify({
      type: 'negative',
      message: 'Falha ao processar a mensagem. Tente novamente.',
      position: 'top',
      actions: [{ icon: 'close', color: 'white' }]
    });
    
    messages.value.push({
      id: Date.now().toString(),
      role: 'system',
      content: 'Desculpe, tive um problema ao tentar entender ou salvar sua informação. Tem certeza que ela foi clara?',
      timestamp: new Date().toISOString()
    });
  } finally {
    loading.value = false;
    scrollToBottom();
  }
};
</script>

<style scoped>
.chat-container {
  flex: 1 1 auto;
}
.scroll-area {
  height: 100%;
}
.border-top {
  z-index: 10;
}
.border-light {
  border-top: 1px solid rgba(0,0,0,0.05);
}
.border-dark {
  border-top: 1px solid rgba(255,255,255,0.05);
}
.modern-input :deep(.q-field__control) {
  border-radius: 28px !important;
  box-shadow: 0 2px 12px rgba(0,0,0,0.03);
  transition: all 0.3s ease;
}
.modern-input :deep(.q-field__control:hover) {
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.body--dark .modern-input :deep(.q-field__control) {
  box-shadow: 0 2px 12px rgba(0,0,0,0.2);
}
.hover-scale {
  transition: transform 0.2s;
}
.hover-scale:hover {
  transform: scale(1.1);
}
</style>
