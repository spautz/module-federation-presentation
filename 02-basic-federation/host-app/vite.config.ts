import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [react()],
  // define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    minify: false,
    sourcemap: true,

    rollupOptions: {
      external: ['/microfrontend-one/index.js', '/microfrontend-two/index.js'],
    },
  },
});
