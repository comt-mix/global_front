<script setup>
import { useGtm } from "@gtm-support/vue-gtm";

const gtm = useGtm();

const goJobLink = (btnName) => {
  window.open("https://www.linkedin.com/hiring/jobs/3690144145/detail/", "_blank");

  gtm.trackEvent({
    event: "gtm_button_clicked",
    action: "click",
    gtm_button_name: btnName,
    noninteraction: false,
  });
};

const getGtmEvent = (name) => {
  const btnName = localStorage.getItem("BUTTON");

  gtm.trackEvent({
    event: "gtm_download_completed",
    action: "click",
    gtm_file_name: name,
    gtm_submit_type: btnName,
    noninteraction: false,
  });
};
</script>

<template>
  <div class="contents">
    <div class="common-page-visual-area complete">
      <div class="txt-box">
        <h1>
          {{ $t("Thank you") }}<br />
          {{ $t("We will contact you shortly.") }}
        </h1>
        <span>
          {{ $t("Average time taken : 2~3 business days") }}<br />
          <b class="fs-14 fw-500">
            {{ $t("*Korean HQ business hours") }} <br class="lg-br" />
            {{ $t("abc| 09:00 ~ 18:00 (KST) (Mon ~ Fri)") }}</b
          >
        </span>

        <a
          href="https://drive.google.com/file/d/1Ti8474_gcflwVt15eyGxdmTgq9PW8F_Q/view"
          download
          target="_blank"
          @click="getGtmEvent('Download the brochure')"
        >
          <button class="button-common black hp-48 ph-48 mt-40 fw-600">
            {{ $t("Download the brochure") }}
            <i class="ic-download ml-8 sm-br"></i>
          </button>
        </a>
      </div>
    </div>

    <div class="complete-section-01">
      <div class="contents-line-box">
        <div class="tit-box">
          <h1>
            {{ $t("Join us at") }} <br class="lg-br" />
            {{ $t("Smartscore Global,") }} <br class="lg-br sm-br" />
            {{ $t("we are waiting for you") }}
          </h1>
        </div>
        <div class="img-box">
          <div>
            <img
              src="https://image.smartscore.kr/smartscore_gloabl/images/m_recruit_img.png"
              alt=""
            />
          </div>
        </div>
        <button
          class="button-common size-100 hp-60 white"
          style="margin-top: -7px"
          @click="goJobLink('View Job Listings')"
        >
          {{ $t("View Job Listings") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
