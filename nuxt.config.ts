// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  plugins: ["~/plugins/axios.js"],
  css: [
    "@fortawesome/fontawesome-free/css/all.min.css",
    "@/assets/styles/main.scss",
  ],
});
