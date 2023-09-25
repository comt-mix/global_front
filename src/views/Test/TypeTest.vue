<script setup>
import { useRouter } from "vue-router";
import { TYPES } from "@/constants/topVisualInfo";

defineProps({
  bannerType: {
    type: String,
    default: "",
  },
  inquiryType: {
    type: Array,
    default: () => {
      return [];
    },
  },
  title: {
    type: String,
    default: "Smartscore Global",
  },
  dataList: {
    type: Object,
    default: TYPES.HOME,
  },
});

const router = useRouter();
const goInquiryForm = (type) => {
  router.push(`/contact-us/${type}`);
};
</script>

<template>
  <div class="common-page-visual-area" :class="bannerType === 'home' ? '' : bannerType">
    <div class="visual-banner-img">
      <img :src="dataList.src" alt="" />
    </div>
    <div class="txt-box">
      <p v-if="title">{{ title }}</p>
      <h1 v-html="dataList.text"></h1>
    </div>
    <template v-if="inquiryType">
      <div class="button-box">
        <button class="button-common black size-100 hp-51" @click="goInquiryForm(inquiryType[0])">
          Download our brochure
        </button>
      </div>
      <div class="contact-us-box" @click="goInquiryForm(inquiryType[1])">Contact US</div>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
