<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <footer class="container mx-auto px-4">
    <slot />
  </footer>
</template>
