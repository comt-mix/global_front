<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { serviceInquiry } from "@/api/inquiry";
import BaseInfiniteSlide from "@/components/common/BaseInfiniteSlide.vue";
import { images } from "@/constants/homeImages";
import BaseTextField from "@/components/common/BaseTextField.vue";
import BaseDropDown from "@/components/common/BaseDropDown.vue";
import { countryList } from "@/constants/inquireFormList";
import { ccNameCheck, nameCheck, emailCheck } from "@/utils/regExp";
import PrivacyPolicyModal from "@/components/modal/PrivacyPolicyModal.vue";
import AOS from "aos";
import { useGtm } from "@gtm-support/vue-gtm";

const router = useRouter();
const gtm = useGtm();
const isFloatBtn = ref(false);

const ccValue = ref("");
const firstNameValue = ref("");
const lastNameValue = ref("");

// 국가 코드 관련 변수들
const countryValue = ref("");
const countryNumber = ref(0);
const contactNumberValue = ref("");
const selectedCountry = ref("");

// 이메일 관련 변수들
const emailValue = ref("");
const isEmailError = ref(false);
const isSubmit = ref(false);

// 팝업 관련 변수들
const isPrivacyOpen = ref(false);
const isPrivacyChecked = ref(false);

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

const apiPostInquiry = async () => {
  localStorage.setItem("BUTTON", "main_page");
  // GA4 GTM 이벤트 적용관련 코드
  gtm.trackEvent({
    event: "gtm_submit_completed",
    action: "click",
    gtm_name_of_golf_course: ccValue.value,
    gtm_first_name: firstNameValue.value,
    gtm_last_name: lastNameValue.value,
    gtm_country: countryValue.value,
    gtm_contact_number: contactNumberValue.value,
    gtm_email_address: emailValue.value,
    gtm_submit_type: "main_page",
    noninteraction: false,
  });

  const postData = {
    golfCourse: ccValue.value,
    firstName: firstNameValue.value,
    lastName: lastNameValue.value,
    email: emailValue.value,
    country: countryValue.value,
    contactNumber:
      countryValue.value === "Other"
        ? contactNumberValue.value
        : countryNumber.value + " " + contactNumberValue.value,
    isAgreePersonalInfo: isPrivacyChecked.value,
  };

  isSubmit.value = true;

  if (isEmailError.value) {
    return;
  }

  try {
    await serviceInquiry(postData);
    router.push("/contact-us/complete");
  } catch (error) {
    console.log(error);
  }
};

const isPrivacyOpenClick = () => {
  isPrivacyOpen.value = true;
};

const isDisabledSubmit = computed(() => {
  return (
    !ccValue.value ||
    !firstNameValue.value ||
    !lastNameValue.value ||
    !emailValue.value ||
    !countryValue.value ||
    !contactNumberValue.value ||
    !isPrivacyChecked.value ||
    !countryNumber.value
  );
});

watch(countryValue, (newValue) => {
  selectedCountry.value = newValue;

  if (newValue !== "Others") {
    countryNumber.value = countryList[selectedCountry.value];
  }
});

watch(contactNumberValue, () => {
  if (countryValue.value === "Other") {
    countryNumber.value = contactNumberValue.value.split(" ")[0];
  }
});

// 이메일 유효성 검사 체크하는 로직
watch(emailValue, (newValue) => {
  if (!emailCheck(newValue)) {
    isEmailError.value = true;
  } else {
    isEmailError.value = false;
  }
});

// 모바일 플로팅 버튼 관련 로직
onMounted(() => {
  AOS.init();
  if (window.innerWidth < 768) {
    const mobile_ctbtn = document.querySelector(".contact-us-box");
    window.addEventListener("scroll", () => {
      if (mobile_ctbtn.offsetTop + 100 < window.scrollY) {
        document.querySelector(".mfloat-banner")?.classList.add("ft-ad");
        isFloatBtn.value = true;
      } else {
        document.querySelector(".mfloat-banner")?.classList.remove("ft-ad");
        isFloatBtn.value = false;
      }
    });
  }
});
</script>

<template>
  <div class="contents">
    <!-- pc -->
    <div class="common-page-visual-area home pc">
      <div class="visual-banner-img"></div>
      <div class="txt-box">
        <p>{{ $t("Smartscore Global") }}</p>
        <h1>
          {{ $t("BRINGING THE SMART") }} <br />
          {{ $t("TO YOUR GAME") }}
        </h1>
        <button
          class="button-common primary hp-74 ph-46 fs-20 mt-40"
          @click="inquiryFormType('collaboration', 'Request a Demo')"
        >
          {{ $t("Request a Demo") }}
        </button>

        <div class="button-box">
          <p>
            {{ $t("Want to know about Smartscore Global?") }} <br />
            {{ $t("Download our brochure today!") }}
          </p>
          <button
            class="button-common black wd-192 hp-51"
            @click="inquiryFormType('service', 'Download')"
          >
            {{ $t("Download") }} <i class="ic-download"></i>
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
        <p>{{ $t("Smartscore Global") }}</p>
        <h1>
          {{ $t("BRINGING THE SMART") }} <br class="lg-br" />
          {{ $t("TO YOUR GAME") }}
        </h1>
      </div>
      <div class="button-box">
        <button
          class="button-common black size-100 hp-51"
          @click="inquiryFormType('service', 'Download our brochure')"
        >
          {{ $t("Download our brochure") }}
        </button>
      </div>

      <div class="contact-us-box" @click="inquiryFormType('collaboration', 'Contact US')">
        Contact US
      </div>
    </div>

    <!-- 모바일 플로팅 -->
    <div class="mfloat-banner" @click="inquiryFormType('collaboration', 'Contact US')">
      Contact US
    </div>

    <div class="home-section-01">
      <div class="contents-line-box">
        <h1>
          {{ $t("SMARTSCORE is a B2B solution for efficient") }} <br class="sm-br" />
          {{ $t("golf course management and operation") }} <br class="sm-br" />
          {{ $t("including sales growth and marketing based on database.") }}
        </h1>
      </div>
    </div>

    <div class="home-section-02">
      <div class="contents-line-box">
        <div class="tit-box">
          <p>{{ $t("Digitalization") }}</p>
          <h1>
            {{ $t("Experience the smart course operation") }}<br />
            {{ $t("through Digitalization") }}
          </h1>
        </div>

        <!-- mobile -->
        <div class="mobile">
          <div class="article-box-01">
            <div class="txt-box">
              <p>
                {{ $t("Operate seamlessly with") }} <br />
                {{ $t("Smartscore's integrated solution") }} <br />
                {{ $t("such as live course monitor,") }} <br />
                {{ $t("group round management,") }} <br />
                {{ $t("F&B sales, Customer DB, etc.") }}
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
                {{ $t("An innovative experience for golfers") }} <br />
                {{ $t("through automated score analysis") }} <br />
                {{ $t("and an upgraded operational efficiency") }} <br />
                {{ $t("for golf courses.") }}
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
                {{ $t("Employee administration including") }} <br />
                {{ $t("round management and CS education") }} <br />
                {{ $t("for smooth and flawless operation.") }}
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
                {{ $t("On/offline marketing and operations") }}<br />
                {{ $t("consultingbased on experience") }}<br />
                {{ $t("in collaboration with") }}<br />
                {{ $t("over 400 golf courses") }}<br />
              </p>
            </div>
            <div class="txt-box-2">
              <div>
                <span>50M+</span>
                <p>
                  {{ $t("Annual visiting golfers") }} <br />
                  {{ $t("in Korea") }}
                </p>
              </div>
              <div>
                <span>514</span>
                <p>
                  {{ $t("Domestic golf courses") }} <br />
                  {{ $t("visited") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- pc -->
        <div class="pc">
          <div class="bdr-20 bg-0079ff pa-20 pr-0 pl-40 dp-f justify-between mt-80">
            <p class="fc-ffffff fs-20 pt-20">
              {{ $t("Operate seamlessly with") }}<br />
              {{ $t("Smartscore's integrated solution") }}<br />
              {{ $t("such as live course monitor,") }}<br />
              {{ $t("group round management,") }}<br />
              {{ $t("F&B sales, Customer DB, etc.") }}
            </p>
            <div class="wd-720">
              <img
                src="https://image.smartscore.kr/smartscore_gloabl/images/pc_home_section_01_img.png"
              />
            </div>
          </div>
          <div style="margin-left: -12px; margin-right: -12px; margin-top: 24px">
            <div class="dp-f">
              <div class="ph-12 flex-1">
                <div class="bg-ffffff bdr-20 pa-40">
                  <p class="fs-20 fw-600">
                    {{ $t("An innovative experience for golfers") }} <br />
                    {{ $t("through automated score analysis") }} <br />
                    {{ $t("and an upgraded operational efficiency") }} <br />
                    {{ $t("for golf courses.") }}
                  </p>
                  <div class="wd-240 mt-30 ml-at ps-r minus-mb-20">
                    <img
                      src="https://image.smartscore.kr/smartscore_gloabl/images/pc_home-section-02_img_02.png"
                    />
                  </div>
                </div>
              </div>
              <div class="ph-12 flex-1">
                <div class="bg-ffffff bdr-20 pa-40 pb-0 overflow-h">
                  <p class="fs-20 fw-600">
                    {{ $t("Employee administration including") }} <br />
                    {{ $t("round management and CS education") }} <br />
                    {{ $t("for smooth and flawless operation.") }}
                  </p>
                  <div class="wd-320 mt-30 ml-at ps-r minus-mb-40">
                    <img
                      src="https://image.smartscore.kr/smartscore_gloabl/images/pc_home-section-02_img_01.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bdr-20 mt-20 bs-cover bp-center pa-40 pc"
          style="
            background-image: url(https://image.smartscore.kr/smartscore_gloabl/images/pc_home_ssection_02_artilce4_img.png);
          "
        >
          <div class="txt-box">
            <p class="fc-ffffff fs-22">
              {{ $t("On/offline marketing and operations consulting") }} <br />
              {{ $t("based on experience in collabaration") }} <br />
              {{ $t("with over 400 golf courses.") }}
            </p>
          </div>
          <div class="txt-box-2 fc-ffffff dp-f mt-180">
            <div>
              <span class="fs-37 fw-700">{{ $t("50M+") }}</span>
              <p class="fs-15 mt-12">
                {{ $t("Annual visiting golfers") }} <br />
                {{ $t("in Korea") }}
              </p>
            </div>
            <div class="ml-40">
              <span class="fs-37 fw-700">514</span>
              <p class="fs-15 mt-12">
                {{ $t("Domestic golf courses") }} <br />
                {{ $t("visited") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-section-03">
      <div class="tit-box">
        <p>{{ $t("Reviews") }}</p>
        <h1>
          {{ $t("Smartscore solution") }}<br class="lg-br" />
          {{ $t("confirmed by the customers") }}
        </h1>
      </div>

      <div class="mds-slide">
        <div class="pc">
          <BaseInfiniteSlide :images="images" :navigation="true" :size="3.5" />
        </div>
        <div class="mobile">
          <BaseInfiniteSlide :images="images" :size="1.2" />
        </div>
      </div>
    </div>

    <div class="home-section-04">
      <div class="contents-line-box">
        <div class="tit-box">
          <p>{{ $t("Partners") }}</p>
          <h1>
            <!-- 400<span class="fc-0079ff">+</span> domestic and international<br class="lg-br" /> -->
            {{ $t("400") }}<span class="fc-0079ff">+</span>{{ $t("domestic and international")
            }}<br class="" />
            {{ $t("golf courses are with Smartscore") }}
          </h1>
        </div>
        <!-- pc -->
        <div class="mt-40 pc">
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
                    src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Sky_Lake.png"
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
                    src="https://image.smartscore.kr/smartscore_gloabl/images/home_new_logo_01.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="https://image.smartscore.kr/smartscore_gloabl/images/home_new_logo_02.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="https://image.smartscore.kr/smartscore_gloabl/images/home_new_logo_03.png"
                    alt=""
                  />
                </div>
              </li>

              <li class="mobile">
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

        <!-- mobile -->
        <div class="mt-40 mobile">
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
                    src="https://image.smartscore.kr/smartscore_gloabl/images/home_new_logo_01.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="https://image.smartscore.kr/smartscore_gloabl/images/home_new_logo_02.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="https://image.smartscore.kr/smartscore_gloabl/images/home_new_logo_03.png"
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
    </div>

    <div class="home-section-05">
      <div class="contents-line-box">
        <div class="tit-box">
          <p>{{ $t("Contact Us") }}</p>
          <h1>
            {{ $t("Adopt Smartscore") }}<br />
            {{ $t("to your golf course!") }}
          </h1>
        </div>
        <div class="mt-40">
          <div class="contactus-box">
            <BaseTextField
              title="Golf Course Name"
              required
              limit="50"
              :value="ccValue"
              @update:value="ccValue = $event"
              :validFn="ccNameCheck"
              class="hp-60"
            />
            <div class="form-group input-type-text row">
              <div class="pr-6 flex-1">
                <BaseTextField
                  title="First Name"
                  required
                  limit="20"
                  :value="firstNameValue"
                  @update:value="firstNameValue = $event"
                  :validFn="nameCheck"
                  class="hp-60"
                />
              </div>

              <div class="pl-6 flex-1">
                <BaseTextField
                  title="Last Name"
                  required
                  limit="20"
                  :value="lastNameValue"
                  @update:value="lastNameValue = $event"
                  :validFn="nameCheck"
                  class="hp-60"
                />
              </div>
            </div>

            <div class="dp-f flex-wrap mt-30 gap-16 country-contactnumber">
              <div class="mb-12">
                <BaseDropDown
                  label="Country"
                  placeholder="Please select"
                  :list="Object.keys(countryList)"
                  :value="countryValue"
                  @update:value="countryValue = $event"
                  class="hp-60"
                  required
                />
              </div>

              <div>
                <BaseTextField
                  title="Contact Number"
                  class="hp-60"
                  required
                  :country="selectedCountry?.toLowerCase()"
                  inputNumber
                  v-model:countryNumber="contactNumberValue"
                  limit="20"
                  :disabled="countryValue ? false : true"
                />
              </div>
            </div>

            <BaseTextField
              title="E-mail Address"
              required
              :value="emailValue"
              @update:value="emailValue = $event"
              limit="254"
              :validFn="emailCheck"
              add="mt-30"
              class="hp-60"
              :isSubmit="isSubmit"
              :errorStatus="isEmailError"
            />

            <div class="mt-30 contactus-Agreement">
              <div class="dp-f align-items-start">
                <div class="pr-10">
                  <div class="checkbox-group">
                    <div class="check-box">
                      <label>
                        <input
                          type="checkbox"
                          class="check-item"
                          id="rb1"
                          value=""
                          v-model="isPrivacyChecked"
                        />
                        <span class="check-icon">
                          <i class="ic-check"></i>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <p class="l-p">{{ $t("[Required] Personal Information Agreement") }}</p>
                  <p class="s-p" @click="isPrivacyOpenClick">{{ $t("View Privacy Policy") }}</p>
                </div>
              </div>

              <button
                class="button-common primary size-100 hp-69 mt-40"
                :disabled="isDisabledSubmit"
                @click="apiPostInquiry"
              >
                {{ $t("Inquire Now") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-section-06">
      <div class="contents-line-box">
        <div class="news-letter">
          <div class="tit-box">
            <p>{{ $t("Newsletter") }}</p>
            <h1>
              {{ $t("Subscribe newsletter for") }} <br />
              {{ $t("Smartscore updates!") }}
            </h1>
          </div>
          <div class="img-box">
            <img
              src="https://image.smartscore.kr/smartscore_gloabl/images/img_newsletter.png"
              alt=""
            />
          </div>
          <div class="btn-box">
            <button
              class="button-common white size-100 hp-60"
              @click="inquiryFormType('service', 'Subscribe')"
            >
              {{ $t("Subscribe") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PrivacyPolicyModal v-model:is-open="isPrivacyOpen" />
</template>

<style scoped lang="scss"></style>
