import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // Base path is important for GitHub Pages (usually /repo-name/)
    // When running locally it falls back to '/'
    base: '/upskill', 
  };
});
