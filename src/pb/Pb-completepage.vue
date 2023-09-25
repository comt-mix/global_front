<script setup>
import PbHeader from "@/pb/Pb-header.vue";
import PbFooter from "@/pb/Pb-footer.vue";
import PbCommonVisualArea from "@/pb/pb-common-visual-area.vue";
</script>

<template>
  <pb-header />
  <div class="contents">
    <pb-common-visual-area :visual-banner-type="'complete'" />

    <div class="complate-section-01">
      <div class="contents-line-box">
        <div class="contents-line-box">
          <div class="tit-box">
            <h1>
              Join us at <br class="lg-br"/>
              Smartscore Global, <br class="lg-br sm-br"/>
              we are waiting for you
            </h1>
          </div>
          <div class="img-box">
            <div>
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_recruit_img.png" alt=""/>
            </div>
          </div>
          <button class="button-common size-100 hp-60 white" style="margin-top:-7px;">
            View Job Listings
          </button>
        </div>
      </div>
    </div>
  </div>
  <pb-footer />
</template>
