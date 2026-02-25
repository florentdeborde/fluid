/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const projectDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() as any,
    dts({
      include: ['src'],
      insertTypesEntry: true
    })
  ] as any[],
  build: {
    lib: {
      entry: resolve(projectDir, 'src/index.ts'),
      name: 'fluid',
      formats: ['es', 'umd'],
      fileName: (format: string) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        }
      }
    },
    target: 'esnext',
    minify: 'esbuild'
  },
  test: {
    projects: [
      {
        name: 'unit',
        test: {
          environment: 'jsdom',
          include: ['src/**/*.test.{ts,tsx}'],
          setupFiles: ['./vitest.setup.ts']
        }
      },
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(projectDir, '.storybook')
          }) as any
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }
    ]
  }
} as any);