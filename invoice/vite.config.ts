import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@styles':path.resolve(__dirname,'src/styles'),
      '@components':path.resolve(__dirname,'src/components'),
      '@pages':path.resolve(__dirname,'src/pages'),
    }
  }
})
