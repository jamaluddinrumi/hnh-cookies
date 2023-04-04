<script setup lang="ts">
import type { DataSource } from "~/utils/type";

const props = defineProps<{
  modelValue?: boolean;
}>();

const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get("cdn/datasource_entries");

const config: Array<DataSource> = data.datasource_entries;

function getConfig(dataName: string) {
  const result: DataSource | undefined = config.find(
    (dataSource) => dataSource.name === dataName
  );

  return result?.value;
}

const waUrl = getConfig("waUrl");
</script>

<template>
  <a
    id="floating-whatsapp"
    :href="waUrl"
    class="floating-whatsapp focus-visible=outline-none link:text-white fixed bottom-6 right-5 z-[9999] h-[60px] w-[60px] rounded-full text-center text-3xl text-white transition-transform duration-500 ease-in-out will-change-[transform,shadow] visited:text-white hover:text-white active:text-white lg:duration-1000 shadow"
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
