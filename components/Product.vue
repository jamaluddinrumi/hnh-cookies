<script setup lang="ts">
const props = defineProps<{
  flipOrder?: boolean;
}>();
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8">
    <div :class="flipOrder ? 'lg:order-2' : 'lg:order-1'" class="prose order-2">
      <h2><slot name="title" /> (Rp<slot name="price" />)</h2>
      <p>
        <slot name="description" />
      </p>
      <p>
        <slot name="description2" />
      </p>
    </div>
    <div
      :class="flipOrder ? 'lg:order-1' : 'lg:order-2'"
      class="order-1 prose prose-img:mb-4 lg:prose-img:mb-0"
    >
      <slot name="photo" />
    </div>
  </div>
</template>
