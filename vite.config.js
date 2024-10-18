import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000, // 원하는 포트로 설정
    hmr: {
      protocol: 'ws', // 필요한 경우 설정
      host: 'localhost'
    }
  }
})


