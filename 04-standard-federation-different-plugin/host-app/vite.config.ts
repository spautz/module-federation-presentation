import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // mode: 'production',
  base: '/host-app/',
  plugins: [
    federation({
      name: 'host-app',
      remotes: {
        'header-mfe': {
          type: 'module',
          name: 'header-mfe',
          entry:
            mode === 'development'
              ? 'http://localhost:3001/assets/remoteEntry-header.js'
              : 'http://localhost:3004/header-mfe/assets/remoteEntry-header.js',
          // shareScope: 'default',
        },
        'table-mfe': {
          type: 'module',
          name: 'table-mfe',
          entry:
            mode === 'development'
              ? 'http://localhost:3002/assets/remoteEntry-table.js'
              : 'http://localhost:3004/table-mfe/assets/remoteEntry-table.js',
          // shareScope: 'default',
        },
      },
      // shared: ["react", 'react-dom'],
    }),
    react(),
  ],
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: 'chrome89',
    minify: false,
    cssCodeSplit: false,
  },
}));
