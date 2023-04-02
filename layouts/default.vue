<script setup lang="ts">
import "@fontsource/inter";
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white/40 to-primary/40">
    <BaseHeader />
    <main>
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
