import type { DataSource } from "~/utils/type";

const storyblokApi = useStoryblokApi();

const random = Math.round(Math.random() * 10000000);

const { data } = await storyblokApi.get(`cdn/datasource_entries?cv=${random}`);

const config: Array<DataSource> = data.datasource_entries;

export function getConfig(dataName: string) {
  const result: DataSource = config.find(
    (dataSource) => dataSource.name === dataName
  );
  return result.value;
}
