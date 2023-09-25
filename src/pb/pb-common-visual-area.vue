<script setup>
import "vue3-carousel/dist/carousel.css";
import BaseInfiniteSlide from "@/components/common/BaseInfiniteSlide.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";


defineProps({
  visualBannerType: {
    type: String,
    default: "home",
  },
});


const images = [
  {
    id: 0,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_product_visual_banner_01.png',
    text: 'Non-stop, all-in-one <br /> efficient course management,<br />it\'s the beginning of Digitalization',
    GCName: 'Easy management of clubs through the tablet',
  },
  {
    id: 1,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_product_visual_banner_02.png',
    text: 'Much less complaints due to precise tee-off time<br /> tracking thanks to Smartscore\'s live course<br /> management solution',
    GCName: 'The Bluffs Ho Tram Strip | Vietnam',
  },
  {
    id: 3,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_product_visual_banner_03.png',
    text: 'We can provide quality service to our customers with<br /> the reduced burden of manually writing down the scores',
    GCName: 'Skylake G.C | vietnam',
  },
  {
    id: 4,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_product_visual_banner_04.png',
    text: 'Smartscore tablets are fabulous - <br />bright and stand out in the sunshine,<br />portable and easy to use',
    GCName: 'Van tri G.C | Vietnam',
  },
  {
    id: 5,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_product_visual_banner_05.png',
    text: 'Even not being on-site, GM is still able to make <br />informed decisions in real-time',
    GCName: 'Montgomery C.C | Vietnam',
  }
];



</script>
<template>
  <!-- home -->
  <template v-if="visualBannerType === 'home'">
    <!-- pc -->
    <div class="common-page-visual-area home pc">
      <div class="visual-banner-img"></div>
      <div class="txt-box">
        <p>Smartscore Global</p>
        <h1>
          BRINGING THE SMART <br />
          TO YOUR GAME
        </h1>
        <button class="button-common primary hp-74 ph-46 fs-20 mt-40">Request a Demo</button>

        <div class="button-box">
          <p>
            Want to know about Smartscore Global? <br />
            Download our brochure today!
          </p>
          <button class="button-common black wd-192 hp-51">
            Download <i class="ic-download"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="common-page-visual-area home mobile">
      <div class="visual-banner-img">
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/images/m_home_visual_bg.jpg"
          alt=""
        />
      </div>
      <div class="txt-box">
        <p>Smartscore Global</p>
        <h1>
          BRINGING <br class="lg-br" />
          THE SMART <br class="lg-br" />
          TO YOUR GAME
        </h1>
      </div>
      <div class="button-box">
        <button class="button-common black size-100 hp-51">Download our brochure</button>
      </div>
      <div class="contact-us-box">Contact US</div>
    </div>
  </template>

  <!-- product -->
  <template v-if="visualBannerType === 'product'">
    <!-- 모바일 -->
    <div class="common-page-visual-area product mobile">
      <div class="visual-banner-img">
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/images/m_product_visual_bg.jpg"
          alt=""
        />
      </div>
      <div class="txt-box">
        <h1>
          Non-stop, all-in-one <br class="lg-br" />
          efficient course <br class="lg-br" />
          management, <br class="lg-br" />
          it’s the beginning <br class="lg-br" />
          of Digitalization
        </h1>
      </div>
      <div class="button-box">
        <button class="button-common black size-100 hp-51">Download our brochure</button>
      </div>
      <div class="contact-us-box">Contact US</div>
    </div>

    <!-- 피씨 -->
    <div class="common-page-visual-area product pc">
<!--      <base-infinite-slide :images="images" :size="1"/>-->
      <div class="wanna-go-home">
        <carousel :autoplay="3000" :items-to-show="1" :wrap-around="true">
          <slide
              v-for="(img,index) in images"
              :key="img"
              class="slide-item"
              :style="{'background-image' : 'url(' + img.src + ')'}"
              style="background-size: cover"
          >
            <div class="txt-box">
              <h1 v-html="img.text"></h1>
            </div>
            <div class="slide-details-box mt-50">
              <div>
                <span class="slide-be-number">{{index + 1}}/{{images.length}}</span>
                <p v-html="img.GCName"></p>
              </div>
            </div>
          </slide>
          <template #addons>
            <navigation v-if="navigation" />
            <pagination v-if="pagination" />
          </template>
        </carousel>

      </div>

    </div>
  </template>

  <!-- digital -->
  <template v-if="visualBannerType === 'digital'">
    <!-- 모바일 -->
    <div class="common-page-visual-area digital mobile">
      <div class="visual-banner-img">
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/images/m_digital_visual_bg.jpg"
          alt=""
        />
      </div>
      <div class="txt-box">
        <h1>
          SMARTSCORE Global<br class="lg-br" />
          is setting the new trend<br class="lg-br" />
          in Course Operations
        </h1>
      </div>
      <div class="button-box">
        <button class="button-common bg-ffffff size-100 hp-51">Download our brochure</button>
      </div>
      <div class="contact-us-box">Contact US</div>
    </div>

    <!-- 피씨 -->
    <div class="common-page-visual-area digital pc">
      <div class="visual-banner-img"></div>
      <div class="txt-box">
        <h1>
          SMARTSCORE Global is setting <br />
          the new trend <br />
          in Course Operations
        </h1>
      </div>
      <div class="button-box">
        <p>Download the brochure for a better understanding of our services</p>
        <button class="button-common black wd-192 hp-51">
          Download
          <i class="ic-download"></i>
        </button>
      </div>
    </div>
  </template>

  <!-- company -->
  <template v-if="visualBannerType === 'company'">
    <!-- pc -->
    <div class="common-page-visual-area company pc">
      <div class="visual-banner-img" style="background-color: #000">
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/images/m_digital_visual_bg.jpg"
          alt=""
          style="opacity: 0"
        />
      </div>
      <div class="txt-box">
        <span class="fs-22">company</span>
        <h1 class="fs-62">
          Expanding globally,<br />
          SMARTSCORE
        </h1>
        <p class="fs-21">
          Smartscore aims to digitalize all aspects of the golf industry,<br class="sm-br" />
          connecting golfers and golf courses for innovative golf experience.
        </p>
      </div>
      <div class="button-box">
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_arrow_down_bold.png"
          alt=""
        />
      </div>
    </div>

    <!-- mobile -->
    <div class="common-page-visual-area company mobile">
      <div class="visual-banner-img" style="background-color: #000">
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/images/m_digital_visual_bg.jpg"
          alt=""
          style="opacity: 0"
        />
      </div>
      <div class="txt-box">
        <span>company</span>
        <h1>
          Expanding globally,<br />
          SMARTSCORE
        </h1>
        <p>
          Smartscore aims to digitalize<br class="lg-br" />
          all aspects of the golf industry,<br class="sm-br" />
          connecting golfers and golf courses<br class="lg-br" />
          for innovative golf experience.
        </p>
      </div>
      <div class="button-box">
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_arrow_down_bold.png"
          alt=""
        />
      </div>
    </div>
  </template>

  <!-- app -->
  <template v-if="visualBannerType === 'app'">

    <!-- pc -->
    <div class="common-page-visual-area app pc bg-f8f8f8">
      <div class="contents-line-box">
        <div class="visual-banner-img">
          <img
              src="https://image.smartscore.kr/smartscore_gloabl/images/m_app_visual_bg.png"
              alt=""
          />
        </div>
        <div class="txt-box">
          <h1>
            From score management,<br />
            golf course information,<br  />
            golf community,<br />
            All-in-One
          </h1>
        </div>
        <div class="img-box">
          <img
              src="https://image.smartscore.kr/smartscore_gloabl/images/pc_app_visual_img.png"
              alt=""
          />

        </div>

      </div>
    </div>

    <!-- 모바일 -->
    <div class="common-page-visual-area app mobile">
      <div class="visual-banner-img">
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/images/m_app_visual_bg.png"
          alt=""
        />
      </div>
      <div class="txt-box">
        <h1>
          From score management,<br class="lg-br" />
          golf course information,<br class="lg-br" />
          golf community,<br class="lg-br" />
          All-in-One
        </h1>
      </div>
    </div>
  </template>

  <!-- contactus -->
  <template v-if="visualBannerType === 'contactus'">
    <div class="common-page-visual-area contactus">
      <div class="txt-box">
        <span>Contact us</span>
        <h1>
          Questions? <br />
          We are here to help!
        </h1>
        <p>
          We will be in touch within 2-3<br class="lg-br" />
          working days after the submission.<br class="sm-br" />
          The more information you provide,<br class="lg-br" />
          the more precise consultation can be provided.
        </p>
      </div>
    </div>
  </template>

  <!-- contactus-form -->
  <template v-if="visualBannerType === 'contactus-form'">
    <div class="common-page-visual-area contactus-form">
      <div class="visual-banner-img">
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/images/m_contact_visual_bg.png"
          alt=""
        />
      </div>
      <div class="txt-box">
        <h1>
          Get up-to-date information<br class="lg-br" />
          on Smartscore Global
        </h1>
      </div>
    </div>
  </template>

  <!-- complete -->
  <template v-if="visualBannerType === 'complete'">
    <div class="common-page-visual-area complete">
      <div class="txt-box">
        <h1>
          Thank you.<br />
          We will contact you<br class="lg-br" />
          shortly.
        </h1>
        <span>
          Average time taken : 2~3 business days<br />
          *Korean HQ business hours<br class="lg-br" />
          | 09:00 ~ 18:00 (KST) (Mon ~ Fri)
        </span>

        <button class="button-common black hp-48 ph-48 mt-40">
          Download the brochure
        </button>
      </div>
    </div>
  </template>


</template>
