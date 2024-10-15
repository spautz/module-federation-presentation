import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [
    react(),
    federation({
      filename: 'remoteEntry-header.js',
      name: 'remote',
      exposes: {
        './render': './src/main.tsx',
        './Header': './src/Header.tsx',
      },
      remotes: {},
      shared: {
        react: {
          requiredVersion: packageJson.dependencies.react,
          singleton: true,
        },
        'react-dom': {
          requiredVersion: packageJson.dependencies.react,
          singleton: true,
        },
      },
    }),
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
