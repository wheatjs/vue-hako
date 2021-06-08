import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'vue-hako',
      entry: './src/main.ts',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    WindiCSS({
      scan: {
        include: ['demo/**/*.{vue,html,jsx,tsx}'],
      },
      preflight: true,
    }),
  ],
})
