import { createRouter, createWebHistory } from 'vue-router';
import Chat from '../views/Chat.vue';
import Dashboard from '../views/Dashboard.vue';
import Lancamentos from '../views/Lancamentos.vue';
import GastosFixos from '../views/GastosFixos.vue';
import Login from '../views/Login.vue';
import { supabase } from '../services/supabase';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', name: 'login', component: Login },
        { path: '/chat', name: 'chat', component: Chat },
        { path: '/dashboard', name: 'dashboard', component: Dashboard },
        { path: '/lancamentos', name: 'lancamentos', component: Lancamentos },
        { path: '/gastos-fixos', name: 'gastos-fixos', component: GastosFixos },
        { path: '/', redirect: '/chat' },
        { path: '/:pathMatch(.*)*', redirect: '/login' }
    ]
});
// Protect all routes
router.beforeEach(async (to, from, next) => {
    console.log('Navigating to:', to.path, 'Match count:', to.matched.length);
    const { data: { session } } = await supabase.auth.getSession();
    if (to.name !== 'login' && !session) {
        console.log('Redirecting to login (no session)');
        next({ name: 'login' });
    }
    else if (to.name === 'login' && session) {
        console.log('Redirecting to chat (session exists)');
        next({ name: 'chat' });
    }
    else {
        next();
    }
});
export default router;
//# sourceMappingURL=index.js.map