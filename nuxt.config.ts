// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
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
