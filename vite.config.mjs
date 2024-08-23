// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     // proxy: {
//     //   "/api": {
//     //     target: "https://portfolio-backend-2nog.onrender.com",
//     //     changeOrigin: true,
//     //   },
//     // },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://portfolio-backend-2nog.onrender.com",
        changeOrigin: true,
        secure: false, // Use this if you are working with HTTPS in local development and facing issues.
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: if your backend doesn't use the `/api` prefix
      },
    },
  },
});
