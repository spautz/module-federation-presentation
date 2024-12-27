import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [
    federation({
      name: 'table_microfrontend',
      filename: 'assets/remoteEntry-table.js',
      exposes: {
        '.': './src/main.tsx',
      },
      shared: {
        react: {
          requiredVersion: packageJson.dependencies.react,
        },
        'react-dom': {
          requiredVersion: packageJson.dependencies.react,
        },
      },
    }),
    react(),
  ],
  define: { 'process.env.NODE_ENV': '"production"' },
  server: {
    port: 3001,
    strictPort: true,
  },
  build: {
    cssCodeSplit: false,
    manifest: true,
    minify: false,
    modulePreload: false,
    sourcemap: true,
    target: 'chrome89',
  },
});
