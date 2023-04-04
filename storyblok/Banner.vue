<script setup lang="ts">
const props = defineProps<{
  blok?: Object;
}>();
</script>

<template>
  <div v-editable="blok">
    <NuxtImg
      provider="storyblok"
      format="webp"
      :src="blok.image"
      width="1280"
      height="600"
    />
  </div>
</template>
