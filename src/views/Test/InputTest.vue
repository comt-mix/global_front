<script setup>
import { ref, computed } from "vue";
import BaseTopVisual from "@/components/common/BaseTopVisual.vue";
import BaseSlide from "@/components/common/BaseSlide.vue";
import { images } from "@/constants/homeImages";
import { useRoute, useRouter } from "vue-router";
import { TYPES } from "@/constants/topVisualInfo";
import { useByte } from "@/composables/useByte";
import { ccNameCheck, nameCheck, emailCheck } from "@/utils/regExp";

const route = useRoute();
const router = useRouter();

const bannerType = route.name;

const goInquiryForm = () => {
  router.push("/contact-us/service");
};

const { getByte, getLimitedByteText } = useByte();

const ccValue = ref("");
const firstNameValue = ref("");
const lastNameValue = ref("");
const emailValue = ref("");

const ccError = ref(true);
const firstError = ref(true);
const lastError = ref(true);
const emailError = ref(true);

let errMsg = "";

let ccLimit = ref(0);
let firstLimit = ref(0);
let lastLimit = ref(0);
let emailLimit = ref(0);

const validateInput = (e, type) => {
  const { value } = e.target;

  if (type === "cc") {
    ccValue.value = value;

    if (value.trim() === "") {
      ccError.value = true;
      errMsg = "This field is required";
    } else {
      ccError.value = false;
    }

    if (getByte(value) > 50) {
      ccLimit.value = getLimitedByteText(value, 50);
    }
  }

  if (type === "first") {
    firstNameValue.value = value;

    if (value.trim() === "") {
      firstError.value = true;
      errMsg = "This field is required";
    } else {
      firstError.value = false;
    }

    if (getByte(value) > 20) {
      firstLimit.value = getLimitedByteText(value, 20);
    }
  }

  if (type === "last") {
    lastNameValue.value = value;

    if (value.trim() === "") {
      lastError.value = true;
      errMsg = "This field is required";
    } else {
      lastError.value = false;
    }

    if (getByte(value) > 20) {
      lastLimit.value = getLimitedByteText(value, 20);
    }
  }

  if (type === "email") {
    emailValue.value = value;

    if (value.trim() === "") {
      emailError.value = true;
      errMsg = "This field is required";
    } else {
      emailError.value = false;
    }

    if (getByte(value) > 254) {
      emailLimit.value = getLimitedByteText(value, 254);
    }
  }
};

const isDisabledSubmit = computed(() => {
  return ccError.value || firstError.value || lastError.value || emailError.value;
});

const validateKeyDown = (event, type) => {
  if (type === "cc" && !ccNameCheck(event.key)) {
    event.preventDefault();
  }

  if (type === "first" && !nameCheck(event.key)) {
    event.preventDefault();
  }

  if (type === "last" && !nameCheck(event.key)) {
    event.preventDefault();
  }

  if (type === "email" && !emailCheck(event.key)) {
    event.preventDefault();
  }
};
</script>

<template>
  <div class="contents">
    <BaseTopVisual
      :banner-type="bannerType"
      :inquiry-type="['service', 'collaboration']"
      title="Smartscore Global"
      :dataList="TYPES.HOME"
    />

    <div class="home-section-01">
      <h1>
        SMARTSCORE is a B2B solution for efficient golf course management and operation including
        sales growth and marketing based on database.
      </h1>
    </div>

    <div class="home-section-02">
      <div class="tit-box">
        <p>Digitalization</p>
        <h1>
          Experience the smart course operation<br class="lg-br" />
          through Digitalization
        </h1>
      </div>
      <div class="article-box-01">
        <div class="txt-box">
          <p>
            Operate seamlessly with <br />
            Smartscore's integrated solution <br />
            such as live course monitor, <br />
            group round management, <br />
            F&B sales, Customer DB, etc.
          </p>
        </div>
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/images/home_ssection_01_img.png"
          alt=""
        />
      </div>
      <div class="article-box-02">
        <div class="txt-box">
          <p>
            An innovative experience for golfers <br />
            through automated score analysis <br />
            and an upgraded operational efficiency <br />
            for golf courses.
          </p>
        </div>
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/images/home_ssection_02_artilce2_img.png"
          alt=""
        />
      </div>
      <div class="article-box-03">
        <div class="txt-box">
          <p>
            Employee administration including <br />
            round management and CS education <br />
            for smooth and flawless operation.
          </p>
        </div>
        <img
          src="https://image.smartscore.kr/smartscore_gloabl/images/home_ssection_02_artilce3_img.png"
          alt=""
        />
      </div>
      <div class="article-box-04">
        <div class="txt-box">
          <p>
            On/offline marketing and operations <br />
            consultingbased on experience<br />
            in collaboration with<br />
            over 400 golf courses<br />
          </p>
        </div>
        <div class="txt-box-2">
          <div>
            <span>50M+</span>
            <p>
              Annual visiting golfers <br />
              in Korea
            </p>
          </div>
          <div>
            <span>514</span>
            <p>
              Domestic golf courses <br />
              visited
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="home-section-03">
      <div class="tit-box">
        <p>Reviews</p>
        <h1>
          Smartscore solution<br class="lg-br" />
          confirmed by the customers
        </h1>
      </div>

      <div class="mt-40">
        <BaseSlide :images="images" />
      </div>
    </div>

    <div class="home-section-04">
      <div class="tit-box">
        <p>Partners</p>
        <h1>
          400<span class="fc-0079ff">+</span> domestic and international<br class="lg-br" />
          golf courses are with Smartscore
        </h1>
      </div>

      <div class="mt-40">
        <div class="">
          <ul class="partners">
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Amber_Hills.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Montgomerie_Links.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Sky_Lake.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/partners_Sono_Belle.png"
                  alt=""
                />
              </div>
            </li>

            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Taekwang_Jeongsan.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_The_Bluffs_Ho_Tram.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Van_Tri.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Vinpearl_Nha.png"
                  alt=""
                />
              </div>
            </li>

            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_VPG_Hai_Phong.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_VPG_Nam_Hoi_An.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_VPG_Phu_Quoc.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_lavie.png"
                  alt=""
                />
              </div>
            </li>

            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_blackstone.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_southcafe.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_sage.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_wo.png"
                  alt=""
                />
              </div>
            </li>

            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_jack.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_king.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_he.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_yourgc.png"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="home-section-05">
      <div class="tit-box">
        <p>Contact Us</p>
        <h1>
          Adopt Smartscore <br class="lg-br" />
          to your golf course!
        </h1>
      </div>

      <div class="mt-40">
        <div class="contactus-box">
          <div class="form-group input-type-text">
            <label>Golf Course Name <span>*</span></label>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                @input="validateInput($event, 'cc')"
                :value="ccValue"
                @keydown="validateKeyDown($event, 'cc')"
                :maxlength="ccLimit.length"
              />
              <div class="input-group__append"></div>
            </div>
            <h1 class="error" v-show="ccError">{{ errMsg }}</h1>
          </div>

          <div class="form-group input-type-text row">
            <div class="pr-6">
              <label>First Name <span>*</span></label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  @input="validateInput($event, 'first')"
                  :value="firstNameValue"
                  @keydown="validateKeyDown($event, 'first')"
                  :maxlength="firstLimit.length"
                />
                <div class="input-group__append"></div>
              </div>
              <h1 class="error" v-show="firstError">{{ errMsg }}</h1>
            </div>
            <div class="pl-6">
              <label>Last Name <span>*</span></label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  @input="validateInput($event, 'last')"
                  :value="lastNameValue"
                  @keydown="validateKeyDown($event, 'last')"
                  :maxlength="lastLimit.length"
                />
                <div class="input-group__append"></div>
              </div>
              <h1 class="error" v-show="lastError">{{ errMsg }}</h1>
            </div>
          </div>

          <div class="form-group input-type-text mt-30">
            <label>E-mail Address <span>*</span></label>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                @input="validateInput($event, 'email')"
                :value="emailValue"
                @keydown="validateKeyDown($event, 'email')"
                :maxlength="emailLimit.length"
              />
              <div class="input-group__append"></div>
            </div>
            <h1 class="error" v-show="emailError">{{ errMsg }}</h1>
          </div>

          <div class="form-group select-type-default mt-30">
            <label>Country <span>*</span></label>
            <div class="select-group">
              <input type="search" class="form-control" readonly style="background-color: #fff" />
              <div class="select-group__append"></div>
            </div>
          </div>

          <div class="mt-30 contactus-Agreement">
            <div class="dp-f align-items-start">
              <div class="pr-10">
                <div class="checkbox-group">
                  <div class="check-box">
                    <label>
                      <input type="checkbox" class="check-item" id="rb1" value="" />
                      <span class="check-icon">
                        <i class="ic-check"></i>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p class="l-p">[Required] Personal Information Agreement</p>
                <p class="s-p">View Privacy Policy</p>
              </div>
            </div>

            <button class="button-common primary size-100 hp-69 mt-40" :disabled="isDisabledSubmit">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="news-letter">
      <div class="tit-box">
        <p>Newsletter</p>
        <h1>
          Subscribe newsletter for<br class="lg-br" />
          Smartscore updates!
        </h1>
      </div>
      <div class="img-box">
        <img src="https://image.smartscore.kr/smartscore_gloabl/images/img_newsletter.png" alt="" />
      </div>
      <div class="btn-box">
        <button class="button-common size-100 hp-60 bg-ffffff" @click="goInquiryForm">
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error {
  color: tomato;
}
</style>
