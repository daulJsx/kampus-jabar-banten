import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    globals: true,
    environmentOptions: {
      nuxt: {
        mock: {
          intersectionObserver: true,
          indexedDb: true,
        },
      },
    },
  },
});
