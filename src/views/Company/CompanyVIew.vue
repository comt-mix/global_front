<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { images } from "@/constants/companyImages";
import { COMPANY_TAB_LIST } from "@/constants/tabList";
import TapGroupList from "@/components/Company/TabGroupList.vue";
import { getNewsList } from "@/api/board";
import BaseInfiniteSlide from "@/components/common/BaseInfiniteSlide.vue";
import { useGtm } from "@gtm-support/vue-gtm";

const router = useRouter();
const gtm = useGtm();

const culTab = ref(0);
const tabClick = (index) => {
  culTab.value = index;
};

const datas = ref([]);

onMounted(async () => {
  try {
    const response = await getNewsList();
    const filteredData = response.data?.content.filter((value) => value.isExposure === true);
    datas.value = filteredData?.slice(0, 5);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

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

const goJobLink = (btnName) => {
  window.open("https://www.linkedin.com/hiring/jobs/3690144145/detail/", "_blank");
  gtm.trackEvent({
    event: "gtm_button_clicked",
    action: "click",
    gtm_button_name: btnName,
    noninteraction: false,
  });
};

const getGtmEvent = (title) => {
  gtm.trackEvent({
    event: "gtm_article_viewed",
    action: "click",
    gtm_article_name: title,
    noninteraction: false,
  });
};
</script>

<template>
  <div class="contents">
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
        <span class="fs-22">{{ $t("Company") }}</span>
        <h1 class="fs-62">
          {{ $t("Expanding globally,") }}<br />
          {{ $t("SMARTSCORE") }}
        </h1>
        <p class="fs-21">
          {{ $t("Smartscore aims to digitalize all aspects of the golf industry,")
          }}<br class="sm-br" />
          {{ $t("connecting glofers and courses for innovative golf experience.") }}
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
        <span>{{ $t("company") }}</span>
        <h1>
          {{ $t("Expanding globally,") }}<br />
          {{ $t("SMARTSCORE") }}
        </h1>
        <p>
          {{ $t("Smartscore aims to digitalize") }}<br class="lg-br" />
          {{ $t("all aspects of the golf industry,") }}<br class="sm-br" />
          {{ $t("connecting golfers and courses") }}<br class="lg-br" />
          {{ $t("for innovative golf experience.") }}
        </p>
      </div>
      <div class="button-box">
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_arrow_down_bold.png"
          alt=""
        />
      </div>
    </div>

    <div class="company-section-01">
      <div class="contents-line-box">
        <ul>
          <li>
            <div>
              <span>{{ $t("8↑") }}</span>
              <p>
                {{ $t("Consecutive years of") }}
                {{ $t("Success in the industry") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <span>{{ $t("2015~") }}</span>
              <p>
                {{ $t("Smartscore has been enhancing the") }}
                {{ $t("experience for golf courses and golfers") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <span>{{ $t("200 Mil.+") }}</span>
              <p>
                {{ $t("Over 200 Mil. Rounds were played") }}
                {{ $t("using Smartscore") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <span>{{ $t("3.1M+") }}</span>
              <p>{{ $t("Mobile app users (domestic)") }}</p>
            </div>
          </li>
          <li>
            <div>
              <span>
                {{ $t("7+") }}<br />
                {{ $t("Global") }}<br />
                {{ $t("Subsidaries") }}
              </span>
              <p>
                {{ $t("Singapore, Vietnam, Thailand, Indonesia, Taiwan, Philippines, Malaysia") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <span>
                {{ $t("2023") }}<br />
                {{ $t("Prospective") }}<br />
                {{ $t("Unicorn") }}
              </span>
              <p>
                {{ $t("First in the golf industry to be designated") }}
                {{ $t("as a potential unicorn") }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="company-section-02">
      <h1>
        {{ $t("All about Golf,") }} <br />
        {{ $t("Smartscore possesses") }} <br class="lg-br" />
        {{ $t("various affiliates") }}
      </h1>
    </div>
    <div class="company-section-03">
      <div class="tab-group-3">
        <ul>
          <li>
            <div>
              <div class="img-box">
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/company_log_01.png"
                  alt=""
                />
              </div>
              <span>{{ $t("MAJESTY") }}</span>
              <p>
                {{ $t("Premium") }} <br />
                {{ $t("golf club brand") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-box">
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/company_log_02.png"
                  alt=""
                />
              </div>
              <span>{{ $t("ZESTAIM") }}</span>
              <p>
                {{ $t("Fitting golf club") }} <br />
                {{ $t("specialized brand") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-box">
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/company_log_03.png"
                  alt=""
                />
              </div>
              <span>{{ $t("GOLF MAGAZINE KOREA") }}</span>
              <p>
                {{ $t("World renown") }} <br />
                {{ $t("golf media") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-box">
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/company_log_04.png"
                  alt=""
                />
              </div>
              <span>{{ $t("MCKAYSON") }}</span>
              <p>
                {{ $t("Contemporary") }} <br />
                {{ $t("golf fashion brand") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-box">
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/company_log_05.png"
                  alt=""
                />
              </div>
              <span>{{ $t("KING'S ROCK C.C") }}</span>
              <p>
                {{ $t("Asia Top 100") }} <br />
                {{ $t("golf course") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-box">
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/company_log_06.png"
                  alt=""
                />
              </div>
              <span>{{ $t("WITHRICH") }}</span>
              <p>
                {{ $t("Golf insurance") }} <br />
                {{ $t("company") }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="company-section-04">
      <div class="contents-line-box">
        <h1>
          {{ $t("We cover all aspects") }} <br />
          {{ $t("of the golf industry") }}
        </h1>

        <div class="tab-group-2">
          <ul>
            <li
              v-for="(list, index) in COMPANY_TAB_LIST"
              :key="index"
              @click="tabClick(index)"
              :class="culTab === index ? 'active' : ''"
            >
              {{ $t(list.name) }}
            </li>
          </ul>
        </div>

        <div class="tab-show-list-box">
          <ul>
            <TapGroupList :cul-tab="culTab" />
          </ul>
          <p>
            {{ $t("THE TOMORROW OF GOLF,") }}<br class="lg-br" />
            {{ $t("SMARTSCORE") }}
          </p>
        </div>
      </div>
    </div>

    <div class="company-section-05">
      <div class="contents-line-box">
        <div class="tit-box">
          <h1>
            {{ $t("Brilliant peers") }}<br class="sm-br" />
            {{ $t("working with SMARTSCORE") }}
          </h1>
          <p>
            {{ $t("Excellent co-workers in the Korea HQ") }}<br />
            {{ $t("and 7 branches globally are eagerly") }}<br class="lg-br" />
            {{ $t("awaiting you") }}
          </p>
        </div>
      </div>
      <div class="mt-40 mds-slide">
        <div class="pc">
          <BaseInfiniteSlide :images="images" :navigation="false" :size="3.5" />
        </div>

        <div class="mobile">
          <BaseInfiniteSlide :images="images" :navigation="false" :size="1.2" />
        </div>
      </div>
    </div>

    <div class="company-section-06">
      <div class="contents-line-box">
        <div class="tit-box">
          <h1>
            {{ $t("Everyone has an equal voice") }} <br />
            {{ $t("as a step towards a") }}<br class="lg-br" />
            {{ $t("better company culture") }}
          </h1>
          <p>
            {{ $t("Smartscore Global,") }}<br />
            {{ $t("where flexibility and structure co-exit") }}
          </p>
        </div>

        <div class="mt-40">
          <!-- 피씨 -->
          <div class="pc">
            <div class="list_box">
              <div>
                <div>
                  <div class="img-box">
                    <img
                      src="https://image.smartscore.kr/smartscore_gloabl/images/pc_section_06_img01.png"
                      alt=""
                    />
                  </div>
                  <div class="txt-box">
                    <h1>
                      {{ $t("Only fruitful and") }} <br />
                      {{ $t("efficient meetings!") }}
                      <img
                        src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_plus_circle.svg"
                        alt=""
                      />
                    </h1>
                    <p>
                      {{ $t("We have quick and efficient meetings to") }} <br class="lg-br" />
                      {{ $t("find a solution. After each meeting, each") }} <br class="lg-br" />
                      {{ $t("member contemplates the result") }} <br class="lg-br" />
                      {{ $t("and proceeds to the next step") }}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="img-box">
                    <img
                      src="https://image.smartscore.kr/smartscore_gloabl/images/pc_section_06_img02.png"
                      alt=""
                    />
                  </div>
                  <div class="txt-box">
                    <h1>
                      {{ $t("Exchange ideas") }}<br />
                      {{ $t("and support each other") }}
                      <img
                        src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_plus_circle.svg"
                        alt=""
                      />
                    </h1>
                    <p>
                      {{ $t("We have quick and efficient meetings to") }} <br class="lg-br" />
                      {{ $t("find a solution. After each meeting, each") }} <br class="lg-br" />
                      {{ $t("member contemplates the result") }} <br class="lg-br" />
                      {{ $t("and proceeds to the next step") }}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="img-box">
                    <img
                      src="https://image.smartscore.kr/smartscore_gloabl/images/pc_section_06_img03.png"
                      alt=""
                    />
                  </div>
                  <div class="txt-box">
                    <h1>
                      {{ $t("Together with young talents") }} <br />
                      {{ $t("from all over the world") }}
                      <img
                        src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_plus_circle.svg"
                        alt=""
                      />
                    </h1>
                    <p>
                      {{ $t("We have quick and efficient meetings to") }} <br class="lg-br" />
                      {{ $t("find a solution. After each meeting, each") }} <br class="lg-br" />
                      {{ $t("member contemplates the result") }} <br class="lg-br" />
                      {{ $t("and proceeds to the next step") }}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="img-box">
                    <img
                      src="https://image.smartscore.kr/smartscore_gloabl/images/pc_section_06_img04.png"
                      alt=""
                    />
                  </div>
                  <div class="txt-box">
                    <h1>
                      {{ $t("Agile culture leading to") }} <br />
                      {{ $t("maximum work efficiency") }}
                      <img
                        src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_plus_circle.svg"
                        alt=""
                      />
                    </h1>
                    <p>
                      {{ $t("We have quick and efficient meetings to") }} <br class="lg-br" />
                      {{ $t("find a solution. After each meeting, each") }} <br class="lg-br" />
                      {{ $t("member contemplates the result") }} <br class="lg-br" />
                      {{ $t("and proceeds to the next step") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 모바일 -->
          <div class="list-box-group mobile">
            <div>
              <div>
                <h1>
                  {{ $t("Only fruitful and") }} <br class="lg-br" />
                  {{ $t("efficient meetings!") }}
                </h1>
                <p>
                  {{ $t("We have quick and efficient meetings to") }} <br class="lg-br" />
                  {{ $t("find a solution. After each meeting, each") }} <br class="lg-br" />
                  {{ $t("member contemplates the result") }} <br class="lg-br" />
                  {{ $t("and proceeds to the next step") }}
                </p>
              </div>
            </div>
            <div>
              <div>
                <h1>
                  {{ $t("Exchange ideas") }}<br class="lg-br" />
                  {{ $t("and support each other") }}
                </h1>
                <p>
                  {{
                    $t(
                      "Each and everyone of us aims for faster and more efficient operations, which is"
                    )
                  }}
                  {{
                    $t(
                      "achieved by taking responsibility as a owner of each business and derive ideas"
                    )
                  }}
                  {{ $t("without hesitation") }}
                </p>
              </div>
            </div>
            <div>
              <div>
                <h1>
                  {{ $t("Together with young talents") }}<br class="lg-br" />
                  {{ $t("from all over the world") }}
                </h1>
                <p>
                  {{
                    $t("The personnel in the 6 international entities share business insight and")
                  }}
                  {{
                    $t("communicate with each other to find a better way of running the business")
                  }}
                </p>
              </div>
            </div>
            <div>
              <div>
                <h1>
                  {{ $t("Agile culture leading to") }}<br class="lg-br" />
                  {{ $t("maximum work efficiency") }}
                </h1>
                <p>
                  {{
                    $t(
                      "We work in an agile way and take ownership in our work to make quick decisions in"
                    )
                  }}
                  {{ $t("order to achieve business success") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="company-section-07">
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

    <div class="company-section-08">
      <div class="contents-line-box">
        <div class="tit-box">
          <strong>{{ $t("Update News") }}</strong>
          <h1>
            {{ $t("SMARTSCORE") }} <br />
            {{ $t("Update News") }}
          </h1>
          <div class="wd-258 detail-go mt-40">
            <div
              class="button-common justify-start ta-l fs-18 fw-500 dp-f align-items-center ph-0 dp-ib"
            >
              <p
                class="fw-500 mt-0"
                @click="inquiryFormType('service', 'Subscribe and recieve updates')"
              >
                {{ $t("Subscribe and recieve updates >") }}
              </p>
              <i class="ic-arrow-line-right mt-2 ml-6"></i>
            </div>
          </div>
        </div>

        <div class="list-board-group" style="overflow: hidden">
          <div v-for="(data, i) in datas" :key="i">
            <a :href="data.url" target="_blank" @click="getGtmEvent(data.title)">
              <p>
                {{ $t(data?.title) }}
              </p>

              <i class="ic-arrow-line-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
