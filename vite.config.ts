import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://tannineo.github.io/react-lib/',
  plugins: [react(), WindiCSS()],
})
