<script setup>
import { useRouter } from "vue-router";

defineProps({
  bannerType: {
    type: String,
    default: "",
  },
  dataList: {
    type: Object,
  },
  title: {
    type: String,
  },
});

const router = useRouter();
const goInquiryForm = (type) => {
  router.push(`/contact-us/${type}`);
};

const getDownloadBrochure = () => {};
</script>

<template>
  <div class="common-page-visual-area" :class="bannerType">
    <div class="visual-banner-img" v-if="dataList.src !== null">
      <img :src="dataList.src" alt="" />
    </div>
    <div class="txt-box">
      <span v-if="title !== null">{{ title }}</span>
      <h1 v-html="dataList.text"></h1>
      <span v-if="dataList.addText !== null" v-html="dataList.addText"></span>
      <button
        v-if="bannerType === 'complete'"
        class="button-common bg-242424 fc-ffffff hp-48 size-100 mt-50"
        @click="getDownloadBrochure"
      >
        Download the brochure
      </button>
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
