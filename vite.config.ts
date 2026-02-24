import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Generates .d.ts files so your users get full TypeScript autocompletion
    dts({ include: ['src'], insertTypesEntry: true })
  ],
  build: {
    lib: {
      // Defines the entry point for the library
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'fluid',
      // Common formats for modern and legacy bundlers
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // Prevents bundling React into your library's final output
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    // Optimizes for modern browsers (Vite 8 default)
    target: 'esnext',
    minify: 'esbuild',
  },
});