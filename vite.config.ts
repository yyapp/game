import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages 프로젝트 사이트는 /<repo>/ 하위에 배포됩니다.
// 빌드 시에만 base를 '/game/'으로, 로컬 dev는 '/' 유지.
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/game/' : '/',
  plugins: [react()],
}))
