<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

defineProps({
  images: Array,
  default: () => [
    {
      id: Number,
      alt: String,
      src: String,
      text: String,
      GCName: String,
    },
  ],
  size: {
    type: Number,
    default: 1.5,
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
</script>

<template>
  <div>
    <carousel :autoplay="3000" :items-to-show="size" :wrap-around="true">
      <slide v-for="img in images" :key="img.id" class="slide-item">
        <img class="slide-img" :src="img.src" :alt="img.alt" />
        <div class="ss-slide-info-box">
          <p v-html="img.text"></p>
          <p v-html="img.GCName"></p>
        </div>
      </slide>
      <template #addons>
        <div class="navi">
          <navigation v-if="navigation" />
        </div>
        <pagination v-if="pagination" />
      </template>
    </carousel>
  </div>
</template>

<style></style>
