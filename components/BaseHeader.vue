<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost rounded-full">
        <span class="text-secondary font-bold text-xl normal-case">
          ● HNH • Cookies ●
        </span>
      </a>
    </div>
    <div class="flex-none">
      <a
        href="https://wa.me/6282111112119"
        target="_blank"
        class="btn btn-primary rounded-full hover:text-base-content"
      >
        <Icon name="logos:whatsapp-icon" class="h-4 w-4 mr-1" />
        <span class="">082-111-112-119</span>
      </a>
    </div>
  </div>
</template>
