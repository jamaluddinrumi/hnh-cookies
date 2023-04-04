// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    build: {
      target: "esnext",
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },

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
    "@storyblok/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/critters",
  ],

  storyblok: {
    accessToken: process.env.NUXT_STORYBLOK_TOKEN,
    apiOptions: {
      timeout: 180,
      cache: {
        clear: "auto",
        type: "memory",
      },
    },
  },
});
