<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean;
}>();

const appConfig = useAppConfig();
</script>

<template>
  <a
    id="floating-whatsapp"
    :href="appConfig.waUrl"
    class="floating-whatsapp focus-visible=outline-none link:text-white fixed bottom-6 right-5 z-[9999] h-[60px] w-[60px] rounded-full text-center text-3xl text-white transition-transform duration-500 ease-in-out will-change-[transform,shadow] visited:text-white hover:text-white active:text-white lg:duration-1000"
    target="_blank"
    alt="kontak whatsapp"
  >
    <Icon name="logos:whatsapp-icon" class="mt-[14px]" />
  </a>
</template>

<style lang="scss" scoped>
#floating-whatsapp {
  @apply bg-[#00ff5f] bg-gradient-to-b from-[#00ff5f] to-[#25d366];
}
</style>
