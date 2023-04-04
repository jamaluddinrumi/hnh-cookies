<script setup lang="ts">
const props = defineProps<{
  blok?: Object;
}>();

console.log(props.blok);

const body = computed(() => renderRichText(props.blok.body));
</script>

<template>
  <div
    v-editable="blok"
    class="prose mx-auto mt-8 mb-12 lg:mb-16 prose-h1:text-2xl px-4"
  >
    <h1>{{ blok.title }}</h1>
    <div v-html="body"></div>
  </div>
</template>
