<script setup lang="ts">
import Hero from "./components/Hero.vue";
// import StoreTest from "./components/StoreTest.vue";
import Swiper from "./components/Swiper.vue";

defineOptions({
  name: "Home",
});
</script>

<template>
  <Hero />
  <Swiper/>
  <!-- <StoreTest /> -->
</template>

<style scoped></style>
