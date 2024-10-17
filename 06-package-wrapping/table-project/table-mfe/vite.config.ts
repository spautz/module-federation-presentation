import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [
    react(),
    federation({
      name: 'table-mfe',
      filename: 'remoteEntry-table.js',
      exposes: {
        './render': './src/main.tsx',
        './Table': './src/Table.tsx',
      },
      shared: {
        react: { requiredVersion: '18' },
        'react-dom': { requiredVersion: '18' },
      },
    }),
  ],
  define: { 'process.env.NODE_ENV': '"production"' },
  server: {
    port: 3002,
    strictPort: true,
  },
  build: {
    cssCodeSplit: false,
    manifest: true,
    minify: false,
    modulePreload: false,
    sourcemap: true,
    target: 'esnext',
  },
});
