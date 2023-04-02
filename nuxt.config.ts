// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Private config that is only available on the server
    apiSecret: "123",
    // Config within public will be also exposed to the client
    public: {
      waNo: "",
      waUrl: "",
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-purgecss",
    "@nuxtjs/critters",
  ],
});
