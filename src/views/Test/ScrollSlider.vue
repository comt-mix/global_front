<script setup>
import { ref } from "vue";

// pc, mobile 2가지 값 props로 들어올 예정
defineProps({
  device: {
    type: String,
    default: "pc",
  },
});

const images = ["/test1.jpg", "/test2.jpg", "/test3.png", "/test4.jpg"];

const currIdx = ref(0);
const slideWidth = 900;

const handleWheel = (event) => {
  if (event.deltaY > 0) {
    currIdx.value = Math.min(currIdx.value + 1, images.length - 1);
  } else {
    currIdx.value = Math.max(currIdx.value - 1, 0);
  }
};

const goToSlide = (index) => {
  currIdx.value = index;
};
</script>

<template>
  <div class="slider" @wheel="handleWheel">
    <div class="slides" :style="{ transform: `translateX(${-currIdx * slideWidth}px)` }">
      <img class="slide" v-for="(image, index) in images" :key="index" :src="image" />
    </div>

    <div class="navigation-manual">
      <button
        class="slider-btn"
        v-for="index in images.length"
        :key="index"
        :class="{ active: currIdx === index - 1 }"
        @click="goToSlide(index - 1)"
      />
    </div>
  </div>
</template>

<style scoped>
.slider {
  width: 800px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
}

.slides {
  width: 3000px;
  height: 500px;
  display: flex;
  transition: transform 2s ease-in-out;
}

.slide {
  flex-shrink: 0;
  width: 30%;
  height: 500px;
  transition: 2s;
}

.navigation-manual {
  position: absolute;
  width: 800px;
  margin-top: -40px;
  display: flex;
  justify-content: center;
}

.slider-btn {
  border: 2px solid black;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
}

.slider-btn:not(:last-child) {
  margin-right: 40px;
}
.slider-btn.active {
  background-color: black;
}

.slider-btn:hover {
  background-color: black;
}
</style>
