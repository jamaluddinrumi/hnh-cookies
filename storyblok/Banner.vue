<script setup lang="ts">
const props = defineProps<{
  blok?: Object;
}>();
</script>

<template>
  <div v-editable="blok">
    <img :src="blok.image" alt="" srcset="" />
  </div>
</template>
