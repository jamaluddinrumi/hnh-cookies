<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean;
}>();

const story = await useAsyncStoryblok("halaman-depan", { version: "draft" });
</script>

<template>
  <Head>
    <Title> HNH Cookies - Delicious Made Better </Title>
    <Meta property="og:title" content="HNH Cookies - Delicious Made Better" />
    <Meta property="og:type" content="food" />
    <Meta property="og:url" content="https://hnh-cookies.pages.dev/" />
    <Meta property="og:image" content="/cookies-time.webp" />
    <Meta property="og:site_name" content="HNH Cookies" />
    <Meta property="og:locale" content="id_ID" />
    <Meta
      property="og:description"
      content="Cookies Time! Choco Chips Cookies, Baton Cookies, Choctart semua ada di sini! Yuk!"
    />
  </Head>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
