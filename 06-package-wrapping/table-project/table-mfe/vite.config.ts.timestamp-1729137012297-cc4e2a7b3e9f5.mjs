// vite.config.ts
import { defineConfig } from 'file:///C:/Users/spautz/dev/git/module-federation-presentation/06-package-wrapping/node_modules/.pnpm/vite@5.4.8/node_modules/vite/dist/node/index.js';
import federation from 'file:///C:/Users/spautz/dev/git/module-federation-presentation/06-package-wrapping/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.6/node_modules/@originjs/vite-plugin-federation/dist/index.mjs';
import react from 'file:///C:/Users/spautz/dev/git/module-federation-presentation/06-package-wrapping/node_modules/.pnpm/@vitejs+plugin-react@4.3.2_vite@5.4.8/node_modules/@vitejs/plugin-react/dist/index.mjs';
var vite_config_default = defineConfig({
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
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzcGF1dHpcXFxcZGV2XFxcXGdpdFxcXFxtb2R1bGUtZmVkZXJhdGlvbi1wcmVzZW50YXRpb25cXFxcMDYtcGFja2FnZS13cmFwcGluZ1xcXFx0YWJsZS1wcm9qZWN0XFxcXHRhYmxlLW1mZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcc3BhdXR6XFxcXGRldlxcXFxnaXRcXFxcbW9kdWxlLWZlZGVyYXRpb24tcHJlc2VudGF0aW9uXFxcXDA2LXBhY2thZ2Utd3JhcHBpbmdcXFxcdGFibGUtcHJvamVjdFxcXFx0YWJsZS1tZmVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3NwYXV0ei9kZXYvZ2l0L21vZHVsZS1mZWRlcmF0aW9uLXByZXNlbnRhdGlvbi8wNi1wYWNrYWdlLXdyYXBwaW5nL3RhYmxlLXByb2plY3QvdGFibGUtbWZlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tICdAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbic7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgbW9kZTogJ3Byb2R1Y3Rpb24nLFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIG5hbWU6ICd0YWJsZS1tZmUnLFxuICAgICAgZmlsZW5hbWU6ICdyZW1vdGVFbnRyeS10YWJsZS5qcycsXG4gICAgICBleHBvc2VzOiB7XG4gICAgICAgICcuL3JlbmRlcic6ICcuL3NyYy9tYWluLnRzeCcsXG4gICAgICAgICcuL1RhYmxlJzogJy4vc3JjL1RhYmxlLnRzeCcsXG4gICAgICB9LFxuICAgICAgc2hhcmVkOiB7XG4gICAgICAgIHJlYWN0OiB7IHJlcXVpcmVkVmVyc2lvbjogJzE4JyB9LFxuICAgICAgICAncmVhY3QtZG9tJzogeyByZXF1aXJlZFZlcnNpb246ICcxOCcgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlZmluZTogeyAncHJvY2Vzcy5lbnYuTk9ERV9FTlYnOiAnXCJwcm9kdWN0aW9uXCInIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDIsXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxuICAgIG1hbmlmZXN0OiB0cnVlLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgbW9kdWxlUHJlbG9hZDogZmFsc2UsXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMGUsU0FBUyxvQkFBb0I7QUFDdmdCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUCxZQUFZO0FBQUEsUUFDWixXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sT0FBTyxFQUFFLGlCQUFpQixLQUFLO0FBQUEsUUFDL0IsYUFBYSxFQUFFLGlCQUFpQixLQUFLO0FBQUEsTUFDdkM7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRLEVBQUUsd0JBQXdCLGVBQWU7QUFBQSxFQUNqRCxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsY0FBYztBQUFBLElBQ2QsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLElBQ2YsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
