<script setup>
import { watchEffect } from "vue";
import { RouterView } from "vue-router";

const getDevice = () => {
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 768) {
    document.body.classList.add("pc");
    document.body.id = "pc";
  } else {
    document.body.classList.add("mobile");
    document.body.id = "mobile";
  }


  window.addEventListener("resize",() => {
    let viewportWidth2 = window.innerWidth;
    if (viewportWidth2 >= 768) {
      document.body.id = "pc";
    } else {
      document.body.id = "mobile"
    }
  })


};

const getLanguage = () => {
  const getCurrentLang = () => {
    // 영어
    if (document.documentElement.lang === "en") return "en";
    // 베트남어
    if (document.documentElement.lang === "vn") return "vn";
    // 태국어
    if (document.documentElement.lang === "th") return "th";
    // 인도네시아
    if (document.documentElement.lang === "id") return "id";
  };

  const langCode = getCurrentLang();
  document.body.classList.add(langCode);
};


watchEffect(() => {
  getDevice();
  getLanguage();
});



</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss"></style>
