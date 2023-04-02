<script setup lang="ts">
import "@fontsource/calistoga";

const props = defineProps<{
  modelValue?: boolean;
}>();

const appConfig = useAppConfig();
</script>

<template>
  <header class="navbar bg-base-100 container mx-auto px-4">
    <NuxtLink href="/" class="mx-auto">
      <span class="text-secondary text-xl normal-case calistoga">
        HNH COOKIES
      </span>
    </NuxtLink>
  </header>
</template>

<style scoped>
.calistoga {
  font-family: "Calistoga", cursive;
}
</style>
