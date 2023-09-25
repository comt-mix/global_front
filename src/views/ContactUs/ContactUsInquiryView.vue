<script setup>
import InquiryApp from "@/components/ContactUs/InquiryApp.vue";
import InquiryCollaboration from "@/components/ContactUs/InquiryCollaboration.vue";
import InquiryService from "@/components/ContactUs/InquiryService.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const type = route.params.inquiryType;
</script>

<template>
  <div class="contents">
    <div class="common-page-visual-area contactus-form">

      <div class="pc">
        <div class="visual-banner-img bs-cover bs-c" style="background-image: url(https://image.smartscore.kr/smartscore_gloabl/images/mab_blue_bg.png)">
        </div>
        <div class="txt-box">
          <h1>
            {{ $t("Get up-to-date information on Smartscore Global") }}
          </h1>
        </div>
      </div>

      <div class="mobile">
        <div class="visual-banner-img">
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/images/m_contact_visual_bg.png"
            alt=""
          />
        </div>
        <div class="txt-box">
          <h1>
            {{ $t("Get up-to-date information on Smartscore Global") }}
          </h1>
        </div>
      </div>
    </div>

    <template v-if="type === 'service'">
      <InquiryService />
    </template>

    <template v-if="type === 'collaboration'">
      <InquiryCollaboration />
    </template>

    <template v-if="type === 'app'">
      <InquiryApp />
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
