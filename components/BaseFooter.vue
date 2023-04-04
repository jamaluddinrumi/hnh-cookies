<script setup lang="ts">
import "~/assets/fonts/anaktoria/fonts.css";
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
const slogan = getConfig("slogan");
const bebas = getConfig("bebas");
const igUrl = getConfig("igUrl");
</script>

<template>
  <footer
    class="footer footer-center p-10 bg-primary text-primary-content container mx-auto mt-16"
  >
    <div>
      <img src="/logo.png" class="max-w-[10rem]" />
      <p class="font-bold">
        <span class="calistoga">{{ sitename }}</span> <br />
        <span class="anaktoria"> {{ slogan }} </span>
      </p>
      <p>{{ bebas }}</p>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a :href="igUrl" target="_blank">
          <Icon name="skill-icons:instagram" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.calistoga {
  font-family: "Calistoga", cursive;
}

.anaktoria {
  font-family: "AnaktoriaRegular";
  font-weight: normal;
  font-style: normal;
}
</style>
