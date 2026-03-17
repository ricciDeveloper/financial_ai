<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="['modern-header', $q.dark.isActive ? 'bg-dark' : 'bg-white text-dark']" elevated>
      <q-toolbar class="q-px-lg q-py-sm">
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" class="q-mr-sm" />
        
        <q-avatar size="32px" class="q-mr-sm bg-primary text-white shadow-3">
          <q-icon name="account_balance_wallet" />
        </q-avatar>
        <q-toolbar-title class="text-weight-bold text-h6" style="letter-spacing: 0.5px;">
          Finance AI
        </q-toolbar-title>

        <q-space />
        
        <q-btn 
          flat 
          round 
          :icon="$q.dark.isActive ? 'wb_sunny' : 'nights_stay'" 
          @click="$q.dark.toggle()"
          class="hover-effect transition-transform"
        />
      </q-toolbar>
    </q-header>

    <q-drawer 
      show-if-above 
      v-model="leftDrawerOpen" 
      side="left" 
      behavior="default"
      :class="[$q.dark.isActive ? 'bg-dark-page border-right-dark' : 'bg-grey-1 border-right-light']"
      :width="260"
    >
      <div class="q-pa-md text-caption text-weight-bold text-uppercase text-grey-6 q-mt-sm q-mb-xs">Navegação</div>
      
      <q-list class="q-px-sm">
        <q-item clickable v-ripple to="/chat" exact active-class="modern-active-item" class="border-radius-item q-mb-sm transition-ease">
          <q-item-section avatar><q-icon name="forum" size="sm" /></q-item-section>
          <q-item-section class="text-weight-medium">Assistente Chat</q-item-section>
        </q-item>
        
        <q-item clickable v-ripple to="/dashboard" exact active-class="modern-active-item" class="border-radius-item q-mb-sm transition-ease">
          <q-item-section avatar><q-icon name="space_dashboard" size="sm" /></q-item-section>
          <q-item-section class="text-weight-medium">Dashboard</q-item-section>
        </q-item>
        
        <q-item clickable v-ripple to="/lancamentos" exact active-class="modern-active-item" class="border-radius-item q-mb-sm transition-ease">
          <q-item-section avatar><q-icon name="receipt_long" size="sm" /></q-item-section>
          <q-item-section class="text-weight-medium">Lançamentos</q-item-section>
        </q-item>
        
        <q-item clickable v-ripple to="/gastos-fixos" exact active-class="modern-active-item" class="border-radius-item q-mb-sm transition-ease">
          <q-item-section avatar><q-icon name="event_repeat" size="sm" /></q-item-section>
          <q-item-section class="text-weight-medium">Gastos Fixos</q-item-section>
        </q-item>
      </q-list>
      
      <div class="absolute-bottom q-pa-md text-center text-caption text-grey-5">
        Feito com Next.js + Vue
      </div>
    </q-drawer>

    <q-page-container :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-2'" class="transition-bg">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const leftDrawerOpen = ref(false);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// Persist dark mode state based on quasar settings if needed
onMounted(() => {
  const savedDark = localStorage.getItem('darkMode');
  if (savedDark !== null) {
    $q.dark.set(savedDark === 'true');
  } else {
    $q.dark.set('auto');
  }
});

watch(() => $q.dark.isActive, (val) => {
  localStorage.setItem('darkMode', String(val));
});
</script>

<style>
/* Global Modern Utilities */
.border-radius-item {
  border-radius: 12px !important;
}

.modern-active-item {
  background: var(--q-primary) !important;
  color: white !important;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
}

.body--dark .modern-active-item {
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.2);
}

.transition-ease {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.transition-ease:hover:not(.modern-active-item) {
  background: rgba(0,0,0,0.05);
  transform: translateX(4px);
}
.body--dark .transition-ease:hover:not(.modern-active-item) {
  background: rgba(255,255,255,0.05);
}

.transition-bg {
  transition: background-color 0.4s ease;
}

.border-right-light {
  border-right: 1px solid rgba(0,0,0,0.05) !important;
}
.border-right-dark {
  border-right: 1px solid rgba(255,255,255,0.05) !important;
}

.bg-dark-page {
  background-color: #121212 !important;
}

.modern-header {
  backdrop-filter: blur(10px);
  background-color: rgba(255,255,255,0.85) !important;
}
.body--dark .modern-header {
  background-color: rgba(18,18,18,0.85) !important;
  color: white !important;
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
