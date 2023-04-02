<script setup lang="ts">
const props = defineProps<{
  flipOrder?: boolean;
}>();
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <div :class="flipOrder ? 'order-2' : 'order-1'" class="prose">
      <h2><slot name="title" /> (Rp<slot name="price" />)</h2>
      <p>
        <slot name="description" />
      </p>
      <p>
        <slot name="description2" />
      </p>
    </div>
    <div :class="flipOrder ? 'order-1' : 'order-2'">
      <slot name="photo" />
    </div>
  </div>
</template>
