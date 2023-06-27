import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx',
                'resources/js/app.js',
                'resources/js/assets/js/flowbite.js',
            ],
            refresh: true,
        }),
    ],
    optimizeDeps: {
        exclude: ['js-big-decimal']
    },
});
