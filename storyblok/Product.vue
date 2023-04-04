<script setup lang="ts">
const props = defineProps<{
  blok?: boolean;
}>();

const description = computed(() => renderRichText(props.blok.description));

const price = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
}).format(props.blok.price);
</script>

<template>
  <div v-editable="blok" class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 px-4">
    <div :class="blok.flipOrder ? 'lg:order-2' : 'lg:order-1'" class="prose order-2">
      <h2 class="title">{{ blok.title }}</h2>
      <h3 class="price">{{ price }}</h3>
      <div class="description" v-html="description"></div>
    </div>
    <div
      :class="blok.flipOrder ? 'lg:order-1' : 'lg:order-2'"
      class="order-1 prose prose-img:mb-4 lg:prose-img:mb-0"
    >
      <img class="photo" :src="blok.photo" alt="" srcset="" />
    </div>
  </div>
</template>
