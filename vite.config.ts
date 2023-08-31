import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
    base: '/frontend-avito-tech-test-assignment/',
    plugins: [react()],
});