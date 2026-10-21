import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        lib: {
            entry: fileURLToPath(new URL('./src/client/index.jsx', import.meta.url)),
            formats: ['es'],
            fileName: () => 'server-folders.js',
        },
    },
});
