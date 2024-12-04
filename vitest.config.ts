// import { defineVitestConfig } from "@nuxt/test-utils/config";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "happy-dom",
  },
});

// export default defineVitestConfig({
//   // any custom Vitest config you require
//   test: {
//     globals: true,
//     environmentOptions: {
//       nuxt: {
//         mock: {
//           intersectionObserver: true,
//           indexedDb: true,
//         },
//       },
//     },
//   },
// });
