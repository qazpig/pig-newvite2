import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/', // 這很重要,確保路由正確運作
  build: {
    outDir: 'dist'
  }
})
