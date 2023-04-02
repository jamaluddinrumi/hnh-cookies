<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost rounded-full">
        <span class="text-secondary font-bold text-xl normal-case calistoga">
          HNH
        </span>
        <span class="text-secondary font-light text-lg normal-case ml-1">Cookies</span>
      </a>
    </div>
    <div class="flex-none">
      <a
        href="https://wa.me/6282111112119"
        target="_blank"
        class="btn btn-primary gap-1 btn-circle lg:btn-block hover:text-base-content lg:px-4"
      >
        <Icon name="logos:whatsapp-icon" class="h-6 w-6 lg:h-4 lg:w-4" />
        <span class="hidden lg:inline">082-111-112-119</span>
      </a>
    </div>
  </div>
</template>

<style>
.calistoga {
  font-family: "Calistoga", cursive;
}
</style>
