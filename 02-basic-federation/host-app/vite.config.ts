import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        microfrontendOne: 'http://localhost:3002/microfrontend-one/remoteEntryMFE1.js',
        microfrontendTwo: 'http://localhost:3002/microfrontend-two/remoteEntryMFE2.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
