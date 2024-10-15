import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

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
            ? 'http://localhost:3001/remoteEntry-header.js'
            : 'http://localhost:3000/header-mfe/remoteEntry-header.js',
        'table-mfe':
          mode === 'development'
            ? 'http://localhost:3002/remoteEntry-table.js'
            : 'http://localhost:3000/table-mfe/remoteEntry-table.js',
        // "header-mfe": {
        //   type: 'module',
        //   name: 'header-mfe',
        //   entry:
        //     mode === 'development'
        //       ? 'http://localhost:3001/remoteEntry-header.js'
        //       : 'http://localhost:3000/header-mfe/remoteEntry-header.js',
        //   entryGlobalName: 'remote',
        //   shareScope: 'default',
        // },
        // "table-mfe": {
        //   type: 'module',
        //   name: 'table-mfe',
        //   entry:
        //     mode === 'development'
        //       ? 'http://localhost:3002/remoteEntry-table.js'
        //       : 'http://localhost:3000/table-mfe/remoteEntry-table.js',
        //   entryGlobalName: 'remote',
        //   shareScope: 'default',
        // },
      },
      // shared: ["react", 'react-dom'],
    }),
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
