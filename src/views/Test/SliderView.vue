<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

defineProps({
  size: {
    type: Number,
    default: 2.5,
  },
  navigation: {
    type: Boolean,
    default: false,
  },
  pagination: {
    type: Boolean,
    default: false,
  },
});

const images = ["/test1.jpg", "/test2.jpg", "/test3.png", "/test4.jpg", "/test5.jpg"];
</script>

<template>
  <div class="wanna-go-home">
    <carousel :autoplay="3000" :items-to-show="size" :wrap-around="true">
      <slide v-for="img in images" :key="img">
        <img :src="img" />
      </slide>
      <template #addons>
        <navigation v-if="navigation" />
        <pagination v-if="pagination" />
      </template>
    </carousel>
  </div>
</template>

<style></style>
