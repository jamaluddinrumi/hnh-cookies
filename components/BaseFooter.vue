<script setup lang="ts">
import "~/assets/fonts/anaktoria/fonts.css";

const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <footer
    class="footer footer-center p-10 bg-primary text-primary-content container mx-auto mt-16"
  >
    <div>
      <img src="/logo.png" class="max-w-[10rem]" />
      <p class="font-bold">
        <span class="calistoga">HNH COOKIES</span> <br />
        <span class="anaktoria"> DELICIOUS MADE BETTER </span>
      </p>
      <p>Since 2023</p>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="https://www.instagram.com/hnh_cookies/" target="_blank">
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
