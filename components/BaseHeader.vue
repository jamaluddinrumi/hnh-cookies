<script setup lang="ts">
import "@fontsource/calistoga";

const props = defineProps<{
  modelValue?: boolean;
}>();

const sitename = getConfig("sitename");
</script>

<template>
  <header class="navbar bg-base-100 container mx-auto px-4">
    <NuxtLink href="/" class="mx-auto">
      <span class="text-secondary text-xl normal-case calistoga">
        {{ sitename }}
      </span>
    </NuxtLink>
  </header>
</template>

<style scoped>
.calistoga {
  font-family: "Calistoga", cursive;
}
</style>
