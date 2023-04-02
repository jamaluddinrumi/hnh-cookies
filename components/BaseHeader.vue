<script setup lang="ts">
import "@fontsource/calistoga";

const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <header class="navbar bg-base-100 container mx-auto px-4">
    <div class="flex-1">
      <NuxtLink href="/">
        <span class="text-secondary text-xl normal-case calistoga">
          HNH COOKIES
        </span>
      </NuxtLink>
    </div>
    <div class="flex-none">
      <a
        href="https://wa.me/6282111112119"
        target="_blank"
        class="btn btn-primary gap-1 btn-circle lg:btn-block hover:text-base-content lg:px-4"
      >
        <Icon name="logos:whatsapp-icon" class="h-6 w-6 lg:h-4 lg:w-4" />
        <span class="hidden lg:inline font-bold inter-var">082-111-112-119</span>
      </a>
    </div>
  </header>
</template>

<style scoped>
.calistoga {
  font-family: "Calistoga", cursive;
}
</style>
