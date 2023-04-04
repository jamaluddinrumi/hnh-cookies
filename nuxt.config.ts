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
    "@nuxt/image-edge",
    "@storyblok/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/critters",
  ],

  image: {
    provider: "storyblok"
  },

  storyblok: {
    accessToken: process.env.NUXT_STORYBLOK_TOKEN,
    apiOptions: {
      timeout: 180,
    },
  },
});
