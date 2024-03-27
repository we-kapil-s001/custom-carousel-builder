<template>
  <div>
    <h1 class="text-2xl font-bold text-center mb-2">Vue-3 Carousel (npm)</h1>
    <Carousel :items-to-show="2">
      <Slide v-for="n in 10" :key="n">
        {{ n }}
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>
