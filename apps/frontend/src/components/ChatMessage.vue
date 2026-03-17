<template>
  <div class="q-pa-sm row justify-center">
    <div style="width: 100%; max-width: 800px">
      <q-chat-message
        :name="name"
        :text="[text]"
        :sent="sent"
        :bg-color="sent ? 'primary' : ($q.dark.isActive ? 'grey-9' : 'white')"
        :text-color="sent ? 'white' : ($q.dark.isActive ? 'white' : 'dark')"
        class="modern-chat-bubble"
      >
        <template v-slot:stamp>
          <span class="text-caption q-mt-xs block" :class="sent ? 'text-blue-2' : 'text-grey-5'">
            {{ formattedTime }}
          </span>
        </template>
      </q-chat-message>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const props = defineProps<{
  name: string;
  text: string;
  sent: boolean;
  timestamp: string;
}>();

const formattedTime = computed(() => {
  if (!props.timestamp) return '';
  const date = new Date(props.timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
});
</script>

<style>
.modern-chat-bubble {
  margin-bottom: 8px;
}
.modern-chat-bubble .q-message-text {
  border-radius: 18px !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  padding: 12px 18px;
  line-height: 1.5;
  font-size: 15px;
}
.body--dark .modern-chat-bubble .q-message-text {
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
.modern-chat-bubble .q-message-name {
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 4px;
}
</style>
