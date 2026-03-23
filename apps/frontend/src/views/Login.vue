<template>
  <div class="login-container q-pa-md flex flex-center">
    <q-card class="login-card" bordered>
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Financial AI - {{ isSignup ? 'Criar Conta' : 'Login' }}</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
          <q-input
            v-if="isSignup"
            filled
            v-model="name"
            label="Nome Completo"
            lazy-rules
            :rules="[val => val && val.length > 0 || 'Por favor digite seu nome']"
          />

          <q-input
            filled
            v-model="email"
            label="Email"
            type="email"
            lazy-rules
            :rules="[val => val && val.length > 0 || 'Por favor digite seu email']"
          />

          <q-input
            filled
            v-model="password"
            label="Senha"
            type="password"
            lazy-rules
            :rules="[val => val && val.length > 0 || 'Por favor digite sua senha']"
          />

          <div class="column q-gutter-y-sm q-mt-md">
            <q-btn unelevated color="primary" type="submit" :label="isSignup ? 'Cadastrar' : 'Entrar'" :loading="loading" class="full-width" />
            <q-btn flat color="primary" :label="isSignup ? 'Já tenho conta' : 'Criar nova conta'" @click="isSignup = !isSignup" class="full-width" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { supabase } from '../services/supabase';

const isSignup = ref(false);
const name = ref('');
const email = ref('');
const password = ref('');
const loading = ref(false);

const router = useRouter();
const $q = useQuasar();

const handleSubmit = async () => {
  if (isSignup.value) {
    await handleSignup();
  } else {
    await handleLogin();
  }
};

const handleLogin = async () => {
  loading.value = true;
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    
    if (error) throw error;
    
    $q.notify({ type: 'positive', message: 'Login realizado com sucesso!' });
    router.push('/dashboard');
  } catch (error: any) {
    let msg = error.message;
    if (msg === 'Invalid login credentials') msg = 'Credenciais inválidas';
    $q.notify({ type: 'negative', message: msg });
  } finally {
    loading.value = false;
  }
};

const handleSignup = async () => {
  loading.value = true;
  try {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          full_name: name.value
        }
      }
    });
    
    if (error) throw error;
    
    $q.notify({ type: 'positive', message: 'Conta criada! Verifique seu email ou tente logar.' });
    isSignup.value = false;
  } catch (error: any) {
    $q.notify({ type: 'negative', message: error.message });
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background-color: #f5f5f5;
}
.login-card {
  width: 100%;
  max-width: 400px;
}
</style>
