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
      strong: String,
      h1: String,
      p: String,
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
  type: { type: String },
  caddie: { type: Boolean },
  time: { type: Number}
});
</script>

<template>
  <div class="wanna-go-home">
    <base-infinite-slide />
    <carousel :autoplay="time" :items-to-show="size" :wrap-around="true"  autoplayTimeout="caddie ? 5000 : '1000'">
      <template v-if="!caddie">
        <slide v-for="img in images" :key="img" class="slide-item">
          <div class="txt-box" id="type">
            <strong>{{ img.strong }}</strong>
            <h1 v-html="img.h1"></h1>
            <p v-html="img.p"></p>
          </div>
          <div class="img-box">
            <img :src="img.src" />
          </div>
        </slide>
      </template>
      <template v-else>
        <slide v-for="img in images" :key="img" class="slide-item bg-f8f8f8">
          <div class="img-box">
            <img :src="img.src" />
          </div>
          <div class="txt-box" id="type">
            <strong>{{ img.strong }}</strong>
            <h1 v-html="img.h1"></h1>
            <p v-html="img.p"></p>
          </div>
        </slide>
      </template>

      <template #addons>
        <navigation v-if="navigation" />
        <pagination v-if="pagination" />
      </template>
    </carousel>
  </div>
</template>

<style scoped lang="scss"></style>
