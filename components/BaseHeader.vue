<script setup lang="ts">
import "@fontsource/calistoga";
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

const sitename = getConfig("sitename");
</script>

<template>
  <header class="navbar bg-base-100 container mx-auto px-4">
    <NuxtLink href="/" class="mx-auto">
      <span class="text-secondary text-xl normal-case calistoga">
        {{ sitename }}
      </span>
    </NuxtLink>
  </header>
</template>

<style scoped>
.calistoga {
  font-family: "Calistoga", cursive;
}
</style>
