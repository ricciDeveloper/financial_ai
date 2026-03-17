import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
            }
        }
    },
    plugins: [
        vue({
            template: { transformAssetUrls }
        }),
        quasar({
            // no sass config to keep it simple and load from dist css directly
        })
    ]
});
