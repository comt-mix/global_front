<script setup>
import { onMounted, ref } from "vue";
import { images } from "@/constants/digitalImages";
import { DIGITAL_TAB_LIST } from "@/constants/tabList";
import { useRouter } from "vue-router";
import BaseInfiniteSlide from "@/components/common/BaseInfiniteSlide.vue";
import { useGtm } from "@gtm-support/vue-gtm";

const router = useRouter();
const gtm = useGtm();

const culTab = ref(0);
const isMore = ref(false);

const tabClick = (index) => {
  culTab.value = index;
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

const isMoreClicked = () => {
  isMore.value = !isMore.value;
};

// 모바일 플로팅 버튼 관련 로직
onMounted(() => {
  if (window.innerWidth < 768) {
    const mobile_ctbtn = document.querySelector(".contact-us-box");
    window.addEventListener("scroll", () => {
      if (mobile_ctbtn.offsetTop + 100 < window.scrollY) {
        document.querySelector(".mfloat-banner").classList.add("ft-ad");
      } else {
        document.querySelector(".mfloat-banner").classList.remove("ft-ad");
      }
    });
  }
});
</script>

<template>
  <div class="contents">
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
          {{ $t("SMARTSCORE Global") }}<br class="lg-br" />
          {{ $t("is setting the new trend") }}<br class="lg-br" />
          {{ $t("in Course Operations") }}
        </h1>
      </div>
      <div class="button-box">
        <button
          class="button-common bg-ffffff size-100 hp-51"
          @click="inquiryFormType('service', 'Download our brochure')"
        >
          {{ $t("Download our brochure") }}
        </button>
      </div>
      <div class="contact-us-box" @click="inquiryFormType('service', 'Contact US')">
        {{ $t("Contact US") }}
      </div>
    </div>

    <!-- 피씨 -->
    <div class="common-page-visual-area digital pc">
      <div class="visual-banner-img"></div>
      <div class="txt-box">
        <h1>
          {{ $t("Smartscore Global is setting") }} <br />
          {{ $t("the new trend") }} <br />
          {{ $t("in Course Operations") }}
        </h1>
      </div>
      <div class="button-box">
        <p>{{ $t("Download the brochure for a better understanding of our services") }}</p>
        <button
          class="button-common black wd-192 hp-51"
          @click="inquiryFormType('service', 'Download')"
        >
          {{ $t("Download") }}
          <i class="ic-download"></i>
        </button>
      </div>
    </div>

    <!-- 모바일 플로팅 -->
    <div class="mfloat-banner" @click="inquiryFormType('service', 'Contact US')">Contact US</div>

    <div class="digital-section-01">
      <div class="contents-line-box">
        <h1>
          {{ $t("We offer everything") }} <br />
          {{ $t("with one reasonable price") }}
        </h1>
        <div class="tab-group-2">
          <ul>
            <li
              v-for="(list, index) in DIGITAL_TAB_LIST"
              :key="index"
              @click="tabClick(index)"
              :class="culTab === index ? 'active' : ''"
            >
              {{ $t(list.name) }}
            </li>
          </ul>
        </div>
        <!-- pc -->
        <div class="tab-show-list-box pc">
          <ul>
            <li v-if="culTab === 0">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/pc_Operational_Efficiency.png"
                alt=""
              />
            </li>
            <li v-if="culTab === 1">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/pc_Work_Efficiency.png"
                alt=""
              />
            </li>
            <li v-if="culTab === 2">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/pc_Sales_Increase.png"
                alt=""
              />
            </li>
            <li v-if="culTab === 3">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/pc_Customer_Convenience.png"
                alt=""
              />
            </li>
          </ul>
        </div>

        <!-- mobile -->
        <div class="tab-show-list-box mobile mt-20">
          <ul>
            <li v-if="culTab === 0">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/Operational_Efficiency.png"
                alt=""
              />
            </li>
            <li v-if="culTab === 1">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/Work_Efficiency.png"
                alt=""
              />
            </li>
            <li v-if="culTab === 2">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/Sales_Increase.png"
                alt=""
              />
            </li>
            <li v-if="culTab === 3">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/Customer_Convenience_new.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="digital-section-02">
      <div class="contents-line-box">
        <div class="tit-box">
          <p>{{ $t("Client Reviews") }}</p>
          <h1>
            {{ $t("Stories from real operations") }} <br />
            {{ $t("in") }} 400<span class="fc-0079ff">+</span> Smart Clubs
          </h1>
        </div>

        <div class="pc mt-80">
          <div class="dp-f align-items-center">
            <div class="img-box flex-1">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_01_new.png"
                alt=""
              />
            </div>
            <div class="txt-box flex-1">
              <div class="pl-50">
                <strong class="fs-21 fw-500 fc-484848 mb-20 dp-ib"
                  >{{ $t("The Bluffs Ho Tram Strip") }} | vietnam</strong
                >
                <p class="fs-29 fw-700 mb-40">
                  {{ $t("Digitalization of marshal with the") }} <br />
                  {{ $t("messenger function provides") }}<br />
                  {{ $t("convenience as caddies can track") }}<br />
                  {{ $t("each others' locations") }}
                </p>
                <span class="fs-15 fc-727272">
                  {{ $t("Implementation period") }} | 2022.01 ~<br />
                  {{ $t("No. of holes") }} | 18 {{ $t("holes") }}
                </span>
              </div>
            </div>
          </div>
          <div class="dp-f align-items-center mt-80">
            <div class="img-box flex-1">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_02_new.png"
                alt=""
              />
            </div>
            <div class="txt-box flex-1">
              <div class="pl-50">
                <strong class="fs-21 fw-500 fc-484848 mb-20 dp-ib">{{
                  $t("Skylake G.C | vietnam")
                }}</strong>
                <p class="fs-29 fw-700 mb-40">
                  {{ $t("Training time for caddies have") }} <br />
                  {{ $t("significantly shortened as the") }} <br />
                  {{ $t("tablet provides distinctively") }} <br />
                  {{ $t("accurate yardage") }}
                </p>
                <span class="fs-15 fc-727272">
                  {{ $t("Implementation period") }} | 2022.01 ~<br />
                  {{ $t("No. of holes") }} | 18 {{ $t("holes") }}
                </span>
              </div>
            </div>
          </div>
          <div class="dp-f align-items-center mt-80">
            <div class="img-box flex-1">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_03_new.png"
                alt=""
              />
            </div>
            <div class="txt-box flex-1">
              <div class="pl-50">
                <strong class="fs-21 fw-500 fc-484848 mb-20 dp-ib">{{
                  $t("Van tri G.C | Vietnam")
                }}</strong>
                <p class="fs-29 fw-700 mb-40">
                  {{ $t("F&B function on the tablet") }} <br />
                  {{ $t("allows us to know exactly") }} <br />
                  {{ $t("which cart has ordered which") }} <br />
                  {{ $t("menu and bring it out") }} <br />
                  {{ $t("immediately") }}
                </p>
                <span class="fs-15 fc-727272">
                  {{ $t("Implementation period") }} | 2022.01 ~<br />
                  {{ $t("No. of holes") }} | 18 {{ $t("holes") }}
                </span>
              </div>
            </div>
          </div>
          <div class="dp-f align-items-center mt-80" v-if="isMore">
            <div class="img-box flex-1">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_04_new.png"
                alt=""
              />
            </div>
            <div class="txt-box flex-1">
              <div class="pl-50">
                <strong class="fs-21 fw-500 fc-484848 mb-20 dp-ib">{{
                  $t("Montgomery C.C | Vietnam")
                }}</strong>
                <p class="fs-29 fw-700 mb-40">
                  {{ $t("I found it really helpful to know") }} <br />
                  {{ $t("who are slow groups and") }} <br />
                  {{ $t("review the actual data to check") }} <br />
                  {{ $t("the round time") }}
                </p>
                <span class="fs-15 fc-727272">
                  {{ $t("Implementation period | 2022.01~") }} <br />
                  {{ $t("No. of holes | 18 holes") }}
                </span>
              </div>
            </div>
          </div>
          <div class="dp-f align-items-center mt-80" v-if="isMore">
            <div class="img-box flex-1">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_05_new.png"
                alt=""
              />
            </div>
            <div class="txt-box flex-1">
              <div class="pl-50">
                <strong class="fs-21 fw-500 fc-484848 mb-20 dp-ib">{{
                  $t("King’s Rock C.C | Korea")
                }}</strong>
                <p class="fs-29 fw-700 mb-40">
                  {{ $t("Monthly tournaments became") }} <br />
                  {{ $t("much more convenient as the") }} <br />
                  {{ $t("solution provides the scoring") }} <br />
                  {{ $t("and ranking immediately.") }}
                </p>
                <span class="fs-15 fc-727272">
                  {{ $t("Implementation period | 2022.01") }} <br />
                  {{ $t("No. of holes | 18 holes") }}
                </span>
              </div>
            </div>
          </div>

          <div class="dp-f justify-center mt-60">
            <!-- more 누르면 알아서 부탁합니다. -->
            <button
              class="button-common ph-42 bdr-30 bg-cccccc fc-484848 hp-60 fs-18"
              @click="isMoreClicked"
            >
              {{ isMore ? "view less" : "view more" }}
            </button>
          </div>
        </div>
        <div class="mt-40 mobile">
          <div class="slide-con">
            <base-infinite-slide :images="images" />
          </div>
        </div>
      </div>
    </div>
    <div class="digital-section-03">
      <div class="contents-line-box">
        <div class="tit-box">
          <p>{{ $t("Smartscore offers more") }}</p>
          <h1>
            {{ $t("Smartscore offers you") }} <br class="lg-br" />
            {{ $t("the total solution") }} <br />
            {{ $t("for golf course operation") }}
          </h1>
        </div>

        <!-- pc -->
        <div class="mt-40 pc">
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/images/pc_digital_table_img.png"
            alt=""
          />
        </div>

        <!-- mobile -->
        <div class="ph-24 mt-40 mobile">
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/images/m_digital_table_img.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="digital-section-04">
      <div class="tit-box">
        <h1>
          {{ $t("We offer") }} <span>{{ $t("all services,") }}</span
          ><br class="lg-br" />
          {{ $t("from course management,") }}<br />
          {{ $t("operation, and marketing") }} <br class="lg-br" />
          <span> {{ $t("with one price") }}</span>
        </h1>
      </div>
    </div>
    <div class="digital-section-05">
      <div class="contents-line-box">
        <div class="tit-box">
          <p>{{ $t("Marketing Partnership") }}</p>
          <h1>
            {{ $t("We reduce your") }}<br class="lg-br" />
            {{ $t("marketing burdens") }}
          </h1>
        </div>

        <!-- pc -->
        <div class="pc mt-80 pb-80">
          <div class="dp-f" style="margin-left: -16px; margin-right: -16px">
            <div class="ph-16">
              <div class="img-box">
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/pc_img_Marketing_01.png"
                  alt=""
                />
              </div>
              <div class="mt-40">
                <span class="fc-0079ff fw-600 fs-16">{{ $t("In-App Marketing") }}</span>
                <p class="mt-14 fs-22 fw-600">
                  {{ $t("Address an audience of 3.1M Korean users on our") }}
                  {{ $t("Smartscore mobile app") }}
                </p>
              </div>
            </div>
            <div class="ph-16">
              <div class="img-box">
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/pc_img_Marketing_02.png"
                  alt=""
                />
              </div>
              <div class="mt-40">
                <span class="fc-0079ff fw-600 fs-16">{{ $t("Golf Magazine Korea") }}</span>
                <p class="mt-14 fs-22 fw-600">
                  {{ $t("You can let your course be known through the") }}
                  {{ $t("world-reknown golf magazine with 5M members") }}
                </p>
              </div>
            </div>
          </div>

          <div class="dp-f mt-40" style="margin-left: -16px; margin-right: -16px">
            <div class="ph-16">
              <div class="img-box">
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/pc_img_Marketing_03.png"
                  alt=""
                />
              </div>
              <div class="mt-40">
                <span class="fc-0079ff fw-600 fs-16">{{ $t("In-App Marketing") }}</span>
                <p class="mt-14 fs-22 fw-600">
                  {{ $t("Address an audience of 3.1M Korean users on our") }}
                  {{ $t("Smartscore mobile app") }}
                </p>
              </div>
            </div>
            <div class="ph-16">
              <div class="img-box">
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/pc_img_Marketing_04.png"
                  alt=""
                />
              </div>
              <div class="mt-40">
                <span class="fc-0079ff fw-600 fs-16">{{ $t("Golf Magazine Korea") }}</span>
                <p class="mt-14 fs-22 fw-600">
                  {{ $t("You can let your course be known through the") }}
                  {{ $t("world-reknown golf magazine with 5M members") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 모바일 -->
        <div class="section-05-list-group mobile">
          <div>
            <strong>{{ $t("In-App Marketing") }}</strong>
            <p>
              {{ $t("Address an audience of 3.1M Korean") }}<br class="lg-br" />
              {{ $t("users on our Smartscore mobile app") }}
            </p>

            <div class="img-box">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/m_img_Marketing_01.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <strong>{{ $t("Golf Magazine Korea") }}</strong>
            <p>
              {{ $t("You can let your course be known") }}<br class="lg-br" />
              {{ $t("through the world-reknown golf") }}<br class="lg-br" />
              {{ $t("magazine with 5M members") }}
            </p>
            <div class="img-box">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/m_img_Marketing_02.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <strong>{{ $t("SNS Marketing") }}</strong>
            <p>
              {{ $t("introduce yourself through the Korean") }}<br class="lg-br" />
              {{ $t("social channels where millions of") }}<br class="lg-br" />
              {{ $t("Korean golfers are active") }}
            </p>
            <div class="img-box wd-130">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/m_img_Marketing_03.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <strong>{{ $t("Offline Marketing") }}</strong>
            <p>
              {{ $t("Advertise events, tournaments through") }}<br class="lg-br" />
              {{ $t("the Smartscore hardware (tablets,") }}<br class="lg-br" />
              {{ $t("kiosk, scorecards)") }}
            </p>
            <div class="img-box wd-160">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/m_img_Marketing_04.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="digital-section-06">
      <div class="contents-line-box">
        <!-- pc -->
        <div class="pc">
          <div class="dp-f align-items-center">
            <div class="tit-box ph-0 flex-1">
              <h1 class="fs-40">
                {{ $t("We offer the official handicap,") }}<br />
                {{ $t("in work with the KGA") }}
              </h1>
              <p class="fs-16">
                {{
                  $t("Expand your field experience by taking advantage of our official handicaps.")
                }}<br />
                {{
                  $t(
                    "Please enjoy to your heart’s content the world’s most prestigious golf courses."
                  )
                }}
              </p>
            </div>
            <div class="img-box wd-460 mt-0">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/pc_digital_handi_img.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <!-- 모바일 -->
        <div class="mobile">
          <div class="tit-box">
            <h1>
              {{ $t("We offer the official handicap,") }}<br class="lg-br" />
              {{ $t("in work with the KGA") }}
            </h1>
            <p>
              {{ $t("There are a lot of casual golfers,") }}
              {{ $t("but we do have a lof of users that are serious about their handicap.") }}
              {{ $t("Bring more golfers to your course through the No.1 golf platform in Korea!") }}
            </p>
          </div>
          <div class="img-box ph-24 ta-r">
            <img
              src="https://image.smartscore.kr/smartscore_gloabl/images/m_digital_handi_img.png"
              alt=""
              class="wd-278"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="digital-section-07">
      <div class="contents-line-box">
        <div class="tit-box">
          <p>{{ $t("Implementation Process") }}</p>
          <h1>
            {{ $t("We have simplified the entire") }}<br class="lg-br" />
            {{ $t("process for you") }}
          </h1>
          <p>
            {{ $t("It only takes 2 weeks after contract for total digitalization.") }}
            <br class="sm-br" />
            {{ $t("We do not interfere with operations so no worries.") }}
          </p>
        </div>
        <div class="section-07-list-group">
          <div>
            <strong>{{ $t("Step 1") }}</strong>
            <p>
              {{ $t("Leave us an inquiry on details of") }}
              {{ $t("your golf course and installation") }}
              {{ $t("request") }}
            </p>
          </div>
          <div>
            <strong>{{ $t("Step 2") }}</strong>
            <p>
              {{ $t("Personnel is designated and") }}
              {{ $t("will reach you in 2~3 days") }}
            </p>
          </div>
          <div>
            <strong>{{ $t("Step 3") }}</strong>
            <p>
              {{ $t("On/Offline meetings can be arranged") }}
              {{ $t("to discuss the details further.") }}
            </p>
          </div>
          <div>
            <strong>{{ $t("Step 4") }}</strong>
            <p>
              {{ $t("After reaching consensus on the") }}
              {{ $t("conditions, we send you the proposal") }}
              {{ $t("and the contract") }}
            </p>
          </div>
          <div>
            <strong>{{ $t("Step 5") }}</strong>
            <p>
              {{ $t("After the contract, before installation, inspection is done and after the") }}
              {{ $t("installation, education is provided for personnel on-site") }}
            </p>
          </div>

          <div>
            <strong>{{ $t("Complete!") }}</strong>
            <p>
              {{
                $t(
                  "Maintenance is provided for the entire contract period. On top of this, receive"
                )
              }}
              {{ $t("detailed monthly reports on operations.") }}
            </p>
            <div class="img-box">
              <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_hole.png" alt="" />
            </div>
          </div>
        </div>
        <div class="pc mt-80">
          <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_timeline.png" alt="" />
        </div>
      </div>
    </div>

    <div class="digital-section-08">
      <div class="contents-line-box">
        <div class="pc">
          <div class="dp-f align-items-center ps-r">
            <div class="tit-box flex-1">
              <p class="fs-16 fc-f8f8f8">{{ $t("Newsletter") }}</p>
              <h1 class="fs-30 fc-ffffff fw-700 mt-20">
                {{ $t("Receive more updates") }}
                {{ $t("by subscribing") }}
                {{ $t("to the newsletter") }}
              </h1>
            </div>
            <div class="img-box ps-a right-0 wd-340">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/img_newsletter_02.png"
                alt=""
              />

              <div class="btn-box ps-a right-0 top-150">
                <button
                  class="button-common hp-60 ph-40 bg-ffffff"
                  @click="inquiryFormType('service', 'Subscribe')"
                >
                  {{ $t("Subscribe") }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="news-letter mobile">
          <div class="tit-box">
            <p>{{ $t("Newsletter") }}</p>
            <h1>
              {{ $t("Receive more updates") }}<br class="lg-br" />
              {{ $t("by subscribing") }}<br class="lg-br" />
              {{ $t("to the newsletter") }}
            </h1>
          </div>
          <div class="img-box">
            <img
              src="https://image.smartscore.kr/smartscore_gloabl/images/img_newsletter_02.png"
              alt=""
            />
          </div>
          <div class="btn-box">
            <button
              class="button-common size-100 hp-60 bg-ffffff"
              @click="inquiryFormType('service', 'Subscribe')"
            >
              {{ $t("Subscribe") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
