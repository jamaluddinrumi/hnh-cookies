<script setup lang="ts">
import "@fontsource/inter/variable.css";
</script>

<template>
  <Head>
    <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
  </Head>
  <div class="min-h-screen bg-gradient-to-b from-white/40 to-primary/40">
    <BaseHeader />
    <main>
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>

<style>
p,
.inter-var {
  font-family: "InterVariable", system-ui;
}
</style>
