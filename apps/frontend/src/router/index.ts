import { createRouter, createWebHistory } from 'vue-router';
import Chat from '../views/Chat.vue';
import Dashboard from '../views/Dashboard.vue';
import Lancamentos from '../views/Lancamentos.vue';
import GastosFixos from '../views/GastosFixos.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/chat' },
        { path: '/chat', name: 'chat', component: Chat },
        { path: '/dashboard', name: 'dashboard', component: Dashboard },
        { path: '/lancamentos', name: 'lancamentos', component: Lancamentos },
        { path: '/gastos-fixos', name: 'gastos-fixos', component: GastosFixos }
    ]
});

export default router;
