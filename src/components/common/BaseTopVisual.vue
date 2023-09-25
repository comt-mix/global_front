<script setup>
import { useRouter } from "vue-router";

defineProps({
  bannerType: {
    type: String,
    default: "",
  },
  inquiryType: {
    type: Array,
  },
  title: {
    type: String,
  },
  dataList: {
    type: Object,
  },
});

const router = useRouter();
const goInquiryForm = (type) => {
  router.push(`/contact-us/${type}`);
};
</script>

<template>
  <div class="common-page-visual-area" :class="bannerType">
    <!-- product, digital, app top 공통 -->
    <template v-if="bannerType !== 'company'">
      <div class="visual-banner-img">
        <img :src="dataList.src" alt="" />
      </div>
      <div class="txt-box">
        <p v-if="title !== null">{{ title }}</p>
        <h1 v-html="$t('mainTitle')"></h1>
      </div>
    </template>

    <!-- company만 조건이 달라 한번에 조건문으로 분기 -->
    <template v-else>
      <div class="visual-banner-img" style="background-color: #000">
        <img :src="dataList.src" alt="" style="opacity: 0" />
      </div>
      <div class="txt-box">
        <span>{{ title }}</span>
        <h1 v-html="dataList.text"></h1>
        <p v-html="dataList.addText"></p>
      </div>
      <!-- company만 하부 버튼이 이미지여서 우선 slot으로 처리해 둠 -->
      <slot />
    </template>

    <!-- product 공통 하부 버튼-->
    <template v-if="inquiryType">
      <div class="button-box">
        <button
          class="button-common size-100 hp-51"
          :class="device === 'pc' ? 'bg-ffffff' : 'black'"
          @click="goInquiryForm(inquiryType[0])"
        >
          {{ $t("brochure") }}
        </button>
      </div>
      <div class="contact-us-box" @click="goInquiryForm(inquiryType[1])">{{ $t("contactus") }}</div>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
