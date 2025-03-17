import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Remove tailwindcss() from plugins
  server: {
    historyApiFallback: true, // Fixes 404 on refresh
  },
});
