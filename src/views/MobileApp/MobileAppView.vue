<script setup>
import { ref } from "vue";
import { APP_TAB_LIST, APP_TAB_DEPTH_LIST } from "@/constants/tabList";
import { useRouter } from "vue-router";
import QRtagModal from "@/components/modal/QRtagModal.vue";
import { useGtm } from "@gtm-support/vue-gtm";

const router = useRouter();
const gtm = useGtm();

const culTab = ref(0);
const culDepthTab = ref(0);
const isClicked = ref(false);
const qrName = ref("");

const qrCodeLayer = (qrname, btnName) => {
  gtm.trackEvent({
    event: "gtm_button_clicked",
    action: "click",
    gtm_button_name: btnName,
    noninteraction: false,
  });

  isClicked.value = true;
  qrName.value = qrname;
};

const goCodeLink = (btnName) => {
  if (btnName === "Appstore") {
    window.open(
      "https://apps.apple.com/vn/app/%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%8A%A4%EC%BD%94%EC%96%B4/id969887573",
      "_blank"
    );
  }
  if (btnName === "Google Play store") {
    window.open(
      "https://play.google.com/store/apps/details?id=com.smartscore.rawady.smartscore",
      "_blank"
    );
  }

  gtm.trackEvent({
    event: "gtm_button_clicked",
    action: "click",
    gtm_button_name: btnName,
    noninteraction: false,
  });
};

const tabClick = (index) => {
  culTab.value = index;
};

const depthTabClick = (index) => {
  culDepthTab.value = index;
};

const inquiryFormType = (type, btnName) => {
  gtm.trackEvent({
    event: "gtm_button_clicked",
    action: "click",
    gtm_button_name: btnName,
    noninteraction: false,
  });

  localStorage.setItem("BUTTON", btnName);

  router.push(`/contact-us/${type}`);
};
</script>

<template>
  <div class="contents">
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
            {{ $t("From score management,") }}<br />
            {{ $t("golf course information,") }}<br />
            {{ $t("golf community,") }}<br />
            {{ $t("All-in-One") }}
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
          {{ $t("From score management,") }}<br class="lg-br" />
          {{ $t("golf course information,") }}<br class="lg-br" />
          {{ $t("golf community,") }}<br class="lg-br" />
          {{ $t("All-in-One") }}
        </h1>
      </div>
    </div>

    <div class="app-section-01">
      <div class="pc">
        <div class="contents-line-box">
          <div class="dp-f justify-between align-items-center">
            <div class="tit-box ph-0">
              <h1 class="fs-22">{{ $t("Next level of golf, explore right now") }}</h1>
            </div>
            <div class="dp-f">
              <button
                class="button-common white hp-53 ph-46 fs-16"
                @click="qrCodeLayer('app', 'Appstore')"
              >
                {{ $t("Appstore") }}
              </button>
              <button
                class="button-common black hp-53 ph-46 fs-16"
                @click="qrCodeLayer('google', 'Google Play store')"
              >
                {{ $t("Google Play store") }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile">
        <div class="tit-box">
          <h1>
            {{ $t("Next level of golf,") }}<br class="lg-br" />
            {{ $t("explore right now") }}
          </h1>
        </div>
        <div class="dp-f mt-40">
          <button class="button-common white hp-40 size-50 fs-14" @click="goCodeLink('Appstore')">
            {{ $t("Appstore") }}
          </button>
          <button
            class="button-common black hp-40 size-50 fs-14"
            @click="goCodeLink('Google Play store')"
          >
            {{ $t("Google Play store") }}
          </button>
        </div>
      </div>
    </div>

    <div class="app-section-02">
      <div class="contents-line-box">
        <div class="tit-box">
          <strong>{{ $t("Our Mobile App") }}</strong>
          <h1>
            {{ $t("We offer an innovative") }}<br class="lg-br" />
            {{ $t("experience of golf,") }}<br />
            {{ $t("at the center of this lies") }}<br class="lg-br" />
            {{ $t("these core functions :") }}
          </h1>
        </div>

        <div class="tab-group-2">
          <ul>
            <li
              v-for="(tabs, index) in APP_TAB_LIST"
              :key="index"
              :class="culTab === index ? 'active' : ''"
              @click="tabClick(index)"
            >
              {{ $t(tabs.name) }}
            </li>
          </ul>

          <div class="tab-group-2-depth2" v-if="culTab === 0">
            <span
              v-for="(tabs, index) in APP_TAB_DEPTH_LIST"
              :key="index"
              :class="culDepthTab === index ? 'active' : ''"
              @click="depthTabClick(index)"
              >{{ $t(tabs.name) }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="app-section-03">
      <!-- 피씨 -->
      <div class="contents-line-box pc">
        <div class="score" v-if="culTab === 0 && culDepthTab === 0">
          <strong>{{ $t("Score") }}</strong>
          <h1>
            {{ $t("Manage your scores") }} <br class="lg-br" />
            {{ $t("efficiently") }}
          </h1>
          <p class="mt-40">{{ $t("· Automatic transmission of round information globally") }}</p>
          <p>{{ $t("· A useful tool for entering and managing scorecards") }}</p>
          <p>{{ $t("· Score management by golf courses/time/players") }}</p>
          <div class="img-box">
            <img
              src="https://image.smartscore.kr/smartscore_gloabl/images/app_tab_img_score_phone.png"
            />
          </div>
        </div>
        <div class="golf-courses" v-if="culTab === 0 && culDepthTab === 1">
          <strong>{{ $t("Golf Courses") }}</strong>
          <h1>Book a round of golf</h1>
          <p class="mt-40">· A reservation service for over 300 golf courses nationwide</p>
          <p>· Real-time booking based on your location</p>
          <p>· Events and hot deals available for members</p>
          <div class="img-box">
            <img
              src="https://image.smartscore.kr/smartscore_gloabl/images/app_tab_img_golfcourses_phone.png"
            />
          </div>
        </div>
        <div class="golf-friends" v-if="culTab === 0 && culDepthTab === 2">
          <strong>{{ $t("Golf Friends") }}</strong>
          <h1>Make golf friends</h1>
          <p>· A network of fellow golfers</p>
          <p>· Share your average score/best score</p>
          <p>
            · Compare rankings based on the best score within<br />
            the past 90 days
          </p>
          <div class="img-box">
            <img
              src="https://image.smartscore.kr/smartscore_gloabl/images/app_tab_img_golffriends_phone.png"
            />
          </div>
        </div>
        <div class="travel" v-if="culTab === 1">
          <strong>{{ $t("Travel (TBD)") }}</strong>
          <h1>Tour the world</h1>
          <p>· Special overseas golf experience from Smartscore</p>
          <p>
            · Tours available worldwide from China, Japan,<br />
            Southeast Asia, North America, Europe, and many more
          </p>
          <div class="img-box">
            <img
              src="https://image.smartscore.kr/smartscore_gloabl/images/app_tab_img_travel_phone.png"
            />
          </div>
        </div>
        <div class="commerce" v-if="culTab === 2">
          <strong>{{ $t("Commerce (TBD)") }}</strong>
          <h1>
            Shop on the golf <br />
            marketplace
          </h1>
          <p>
            · An online mall specialized for golf including golf<br />
            clubs and equipment
          </p>
          <p>· Exclusive daily offers for Smartscore members</p>
          <p>· Earn reward points of 1% of your purchase</p>
          <div class="img-box">
            <img
              src="https://image.smartscore.kr/smartscore_gloabl/images/app_tab_img_commerce_phone.png"
            />
          </div>
        </div>
      </div>

      <!-- 모바일 -->
      <div class="contents-line-box mobile">
        <div v-if="culTab === 0 && culDepthTab === 0">
          <strong>{{ $t("Score") }}</strong>
          <h1>
            {{ $t("Manage your scores") }} <br class="lg-br" />
            {{ $t("efficiently") }}
          </h1>
          <p>
            {{ $t("Automatic transmission") }} <br class="lg-br" />
            {{ $t("of round information globally") }}
          </p>
          <div class="img-box">
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_app_tab_img_01.png" />
          </div>
        </div>
        <div v-if="culTab === 0 && culDepthTab === 1">
          <strong>{{ $t("Golf Courses") }}</strong>
          <h1>{{ $t("Golf Courses") }}</h1>
          <p>
            {{ $t("Real-time booking based on") }}<br class="lg-br" />
            {{ $t("your location") }}
          </p>
          <div class="img-box">
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_app_tab_img_02.png" />
          </div>
        </div>
        <div v-if="culTab === 0 && culDepthTab === 2">
          <strong>{{ $t("Golf Friends") }}</strong>
          <h1>{{ $t("Make golf friends") }}</h1>
          <p>{{ $t("A network of fellow golfers") }}</p>
          <div class="img-box">
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_app_tab_img_03.png" />
          </div>
        </div>

        <div v-if="culTab === 1">
          <strong>{{ $t("Travel (TBD)") }}</strong>
          <h1>{{ $t("Tour the world") }}</h1>
          <p>
            {{ $t("Special overseas golf experience") }}<br class="lg-br" />
            {{ $t("from Smartscore") }}
          </p>
          <div class="img-box">
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_app_tab_img_04.png" />
          </div>
        </div>
        <div v-if="culTab === 2">
          <strong>{{ $t("Commerce (TBD)") }}</strong>
          <h1>
            {{ $t("Shop on the golf") }} <br class="lg-br" />
            {{ $t("marketplace") }}
          </h1>
          <p>
            {{ $t("An online mall specialized for golf") }}<br class="lg-br" />
            {{ $t("including golf clubs and equipment") }}
          </p>
          <div class="img-box">
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_app_tab_img_05.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="app-section-04">
      <div class="tit-box">
        <h1>
          {{ $t("We have many more") }}<br class="lg-br" />
          {{ $t("services to come.") }}<br />
          {{ $t("Join our digitalization and innovation") }}
        </h1>
      </div>
    </div>

    <div class="app-section-05">
      <div class="tit-box">
        <h1>
          {{ $t("Do you have experience") }} <br />
          {{ $t("with our mobile app?") }}
        </h1>
        <p>
          {{ $t("Please share with us") }} <br />
          {{ $t("your experience and feedback") }}
        </p>
      </div>

      <div class="mt-40 ta-c">
        <button
          class="button-common white ph-46 hp-60 fs-16"
          @click="inquiryFormType('app', 'Share personal experience')"
        >
          {{ $t("Share personal experience") }}
        </button>
      </div>
    </div>
  </div>
  <QRtagModal v-model:is-open="isClicked" :mode="qrName" />
</template>

<style scoped lang="scss"></style>
