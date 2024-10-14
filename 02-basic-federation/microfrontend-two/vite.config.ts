import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [
    react(),
    federation({
      name: 'microfrontend-two',
      filename: '../remoteEntryMFE2.js',
      exposes: {
        './render': './src/main.tsx',
        './App': './src/App.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    cssCodeSplit: false,
    manifest: true,
    minify: false,
    modulePreload: false,
    sourcemap: true,
    target: 'esnext',
  },
});
