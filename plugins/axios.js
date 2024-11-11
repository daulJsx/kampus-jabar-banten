// plugins/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://apicampusdir.civitas.id",
  headers: {
    "api-key": "4Qe7h5NcgCu1EPDzCKIO",
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("axios", api);
});
