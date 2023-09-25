<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
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
  // 슬라이드 블릿
  navigation: Boolean,
  // 슬라이드 화살표
  arrow : Boolean
});

const currIdx = ref(1);
const imgwidth = ref(null);

const prevSlide = () => {
  currIdx.value = (currIdx.value - 1) % props.images.length;
};

const nextSlide = () => {
  currIdx.value = (currIdx.value + 1) % props.images.length;
};

let autoSlideTimer;

const getImageWidth = () => {
  const imageElement = document.querySelector(".slide-img");
  if (imageElement) {
    imgwidth.value = imageElement.offsetWidth + 21;
  }
};

const handleWheel = (event) => {
  if (event.deltaY > 0) {
    currIdx.value = Math.min(currIdx.value + 1, props.images.length - 1);
  } else {
    currIdx.value = Math.max(currIdx.value - 1, 0);
  }
};

onMounted(() => {
  autoSlideTimer = setInterval(nextSlide, 3000);

  const imageElement = document.querySelector(".slide-img");
  if (imageElement.complete) {
    getImageWidth();
  } else {
    imageElement.onload = getImageWidth;
  }
});

onUnmounted(() => {
  clearInterval(autoSlideTimer);
});

const goToSlide = (index) => {
  currIdx.value = index;
};
// TODO: GCName 별도 tag 없을 시 v-html 수정하기
</script>

<template>
  <div class="ss-slide-wrapper">
    <div class="slide ss-slide-container" @wheel="handleWheel">
      <div class="ss-slide-track" :style="{ transform: `translateX(-${currIdx * imgwidth}px)` }">
        <div class="ss-slide-item" v-for="image in images" :key="image.id">
          <img class="slide-img" :src="image.src" :alt="image.alt" />
          <div class="ss-slide-info-box">
            <p v-html="image.text"></p>
            <p v-html="image.GCName"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-option-box" v-if="arrow">
      <button @click="prevSlide" class="ss-slide-prev-btn">
        <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_prev_btn.svg" />
      </button>
      <button @click="nextSlide" class="ss-slide-next-btn">
        <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_next_btn.svg" />
      </button>
    </div>
  </div>
  <div class="navigation" v-if="navigation">
    <button
      class="slider-btn"
      v-for="index in images.length"
      :key="index"
      :class="{ active: currIdx === index - 1 }"
      @click="goToSlide(index - 1)"
    />
  </div>
</template>

<style scoped>
.navigation {
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
