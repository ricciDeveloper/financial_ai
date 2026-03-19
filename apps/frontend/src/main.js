import { createApp } from 'vue';
import { Quasar, Notify, Dialog } from 'quasar';
import axios from 'axios';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.css';
import App from './App.vue';
import router from './router';
import { supabase } from './services/supabase';
// Setup global Axios interceptor for JWT Auth
axios.interceptors.request.use(async (config) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.access_token) {
        config.headers.Authorization = `Bearer ${session.access_token}`;
    }
    return config;
});
const app = createApp(App);
app.use(Quasar, {
    plugins: {
        Notify,
        Dialog
    },
    config: {
        brand: {
            primary: '#1976d2',
            secondary: '#26A69A',
            accent: '#9C27B0',
            dark: '#1d1d1d',
            positive: '#21BA45',
            negative: '#C10015',
            info: '#31CCEC',
            warning: '#F2C037'
        }
    }
});
app.use(router);
app.mount('#q-app');
//# sourceMappingURL=main.js.map