<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = [
  {
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/home_slide_img_01.jpg'
  },
  {
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/home_slide_img_01.jpg'
  },
  {
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/home_slide_img_01.jpg'
  },
  {
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/home_slide_img_01.jpg'
  },
  {
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/home_slide_img_01.jpg'
  },
  {
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/home_slide_img_01.jpg'
  },
  {
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/home_slide_img_01.jpg'
  }
];

const currIdx = ref(1);
const imgwidth = ref(null);
const totalImages = images.length;




const prevSlide = () => {
  currIdx.value = (currIdx.value - 1) % totalImages;
};

const nextSlide = () => {
  currIdx.value = (currIdx.value + 1) % totalImages;


};

let autoSlideTimer;

const getImageWidth = () => {
  const imageElement = document.querySelector(".slide-img");
  if (imageElement) {
    imgwidth.value = imageElement.offsetWidth + 21
  }
};



onMounted(() => {
  autoSlideTimer = setInterval(nextSlide, 3000);

  const imageElement = document.querySelector('.slide-img');
  if (imageElement.complete) {
    getImageWidth();
  } else {
    imageElement.onload = getImageWidth;
  }

});



onUnmounted(() => {
  clearInterval(autoSlideTimer);
});

</script>


<template>
  <div class="ss-slide-wrapper">
    <div class="slide ss-slide-container">
      <div class="ss-slide-track" :style="{ transform: `translateX(-${ currIdx * imgwidth}px)` }">
        <div class="ss-slide-item" v-for="(image, index) in images" :key="index">
          <img class="slide-img" :src="image.src" :alt="image.alt" />
          <div class="ss-slide-info-box">
            <p>
              The multilingual aspect is huge <br />
              as an international golf course with <br />
              international clientele
            </p>
            <p>
              King’s Rock C.C | Korea
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--
    <button @click="prevSlide" class="ss-slide-prev-btn">⬅</button>
    <button @click="nextSlide" class="ss-slide-next-btn">➡</button>
  -->
</template>

