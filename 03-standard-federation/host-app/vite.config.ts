import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // mode: 'production',
  base: '/host-app/',
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        'header-mfe':
          mode === 'development'
            ? 'http://localhost:3001/assets/remoteEntry-header.js'
            : 'http://localhost:3003/header-mfe/assets/remoteEntry-header.js',
        'table-mfe':
          mode === 'development'
            ? 'http://localhost:3002/assets/remoteEntry-table.js'
            : 'http://localhost:3003/table-mfe/assets/remoteEntry-table.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
}));
