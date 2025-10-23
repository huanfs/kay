import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"],
    "@atoms/*":["src/components/atoms/*"],
    "@molecules/*":["src/components/molecules/*"],
    "@templates/*":["src/components/templates/*"],
    "@store/*":["src/store/*"],
    "@utils/*":["src/utils/*"],
  }
});
