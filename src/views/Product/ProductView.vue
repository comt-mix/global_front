<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { serviceInquiry } from "@/api/inquiry";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import ProductSlide from "@/components/Product/ProductSlide.vue";
import {
  topImages,
  adminImages,
  caddieImages,
  golferImages,
  adminMobileImages,
  caddieMobileImages,
  golferMobileImages,
} from "@/constants/productImages";
import BaseTextField from "@/components/common/BaseTextField.vue";
import BaseDropDown from "@/components/common/BaseDropDown.vue";
import { ccNameCheck, nameCheck, emailCheck } from "@/utils/regExp";
import { countryList } from "@/constants/inquireFormList";
import PrivacyPolicyModal from "@/components/modal/PrivacyPolicyModal.vue";
import { useGtm } from "@gtm-support/vue-gtm";

const router = useRouter();
const gtm = useGtm();

const activeTab = ref("pc-admin");
const device = document.body.id;

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

// 탭 클릭시 해당 위치로 이동하는 로직
const goToLocation = (tap) => {
  activeTab.value = tap;
  console.log(tap);

  if (device === "pc") {
    let position = 0;

    if (tap === "pc-erp") {
      position = document.getElementById("pc-golfer")?.offsetTop + 600;
    } else {
      position = document.getElementById(tap)?.offsetTop - 100;
    }

    window.scrollTo({ top: position, behavior: "smooth" });
  }

  if (device === "mobile") {
    let position = 0;

    position = document.getElementById(tap)?.offsetTop - 80;
    window.scrollTo({ top: position, behavior: "smooth" });
  }
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

const apiPostInquiry = async () => {
  localStorage.setItem("BUTTON", "product_page");

  gtm.trackEvent({
    event: "gtm_submit_completed",
    action: "click",
    gtm_name_of_golf_course: ccValue.value,
    gtm_first_name: firstNameValue.value,
    gtm_last_name: lastNameValue.value,
    gtm_country: countryValue.value,
    gtm_contact_number: contactNumberValue.value,
    gtm_email_address: emailValue.value,
    gtm_submit_type: "product_page",
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

  if (typeof countryNumber.value === "string") {
    contactNumberValue.value = countryNumber.value.replace(/[^0-9]/g, "");
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
  if (window.innerWidth < 768) {
    const mobile_ctbtn = document.querySelector(".contact-us-box");
    window.addEventListener("scroll", () => {
      if (mobile_ctbtn.offsetTop + 100 < window.scrollY) {
        document.querySelector(".mfloat-banner")?.classList.add("ft-ad");
      } else {
        document.querySelector(".mfloat-banner")?.classList.remove("ft-ad");
      }
    });
  }
});
</script>

<template>
  <div class="contents">
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
          {{ $t("Non-stop, all-in-one mobile") }} <br class="lg-br" />
          {{ $t("efficient course") }} <br class="lg-br" />
          {{ $t("management,") }} <br class="lg-br" />
          {{ $t("it's the beginning") }} <br class="lg-br" />
          {{ $t("of the Digitalization") }}
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
        {{ $t("Contact US") }}
      </div>
    </div>

    <!-- 피씨 -->
    <div class="common-page-visual-area product pc">
      <div class="wanna-go-home ps-r">
        <div class="ps-a zx-5" style="width: 1200px; left: 50%; top: 180px; margin-left: -600px">
          <h1 class="fs-50 fw-700 lh-80px">
            {{ $t("Non-stop, all-in-one") }} <br />
            {{ $t("efficient course management,") }}<br />{{
              $t("it's the beginning of the Digitalization")
            }}
          </h1>
        </div>
        <carousel :autoplay="3000" :items-to-show="1" :wrap-around="true">
          <slide
            v-for="(img, index) in topImages"
            :key="img"
            class="slide-item"
            :style="{ 'background-image': 'url(' + img.src + ')' }"
            style="background-size: cover"
          >
            <div class="txt-box">
              <h1 v-html="img.text"></h1>
            </div>
            <div class="slide-details-box mt-50">
              <div>
                <span class="slide-be-number">{{ index + 1 }}/{{ topImages.length }}</span>
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

    <!-- 모바일 플로팅 -->
    <div class="mfloat-banner" @click="inquiryFormType('collaboration', 'Contact US')">
      Contact US
    </div>

    <div class="product-section-01 pt-0">
      <div class="ps-ss">
        <div class="contents-line-box">
          <div class="tab-group" style="padding-bottom: 15px">
            <ul>
              <li
                @click="goToLocation(device === 'pc' ? 'pc-admin' : 'admin')"
                :class="activeTab === 'pc-admin' ? 'active' : '' "
              >
                {{ $t("Admin") }}
              </li>
              <li
                @click="goToLocation(device === 'pc' ? 'pc-caddie' : 'caddie')"
                :class="activeTab === 'pc-caddie' ? 'active' : '' "
              >
                {{ $t("Caddie") }}
              </li>
              <li
                @click="goToLocation(device === 'pc' ? 'pc-golfer' : 'golfer')"
                :class="activeTab === 'pc-golfer' ? 'active' : '' "
              >
                {{ $t("Golfer") }}
              </li>
              <li
                @click="goToLocation(device === 'pc' ? 'pc-erp' : 'erp')"
                :class="activeTab === 'pc-erp' ? 'active' : '' "
              >
                {{ $t("ERP") }}<span class="soon">{{ $t("Coming soon") }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 피씨 -->
      <div class="tab-show-list-box pc">
        <div id="pc-admin" class="contents-line-box">
          <ProductSlide
            size="1"
            :images="adminImages"
            type="pc-admin"
            time="3000"
            :pagination="true"
          />
        </div>
        <div id="pc-caddie" class="bg-f8f8f8">
          <div class="contents-line-box">
            <ProductSlide
              size="1"
              :images="caddieImages"
              type="pc-caddie"
              caddie
              time="3000"
              :pagination="true"
            />
          </div>
        </div>
        <div id="pc-golfer" class="contents-line-box">
          <ProductSlide
            size="1"
            :images="golferImages"
            type="pc-golfer"
            time="3000"
            :pagination="true"
          />
        </div>
      </div>

      <!-- 모바일 -->
      <div class="mobile pt-45" id="admin">
        <ProductSlide
          size="1"
          :images="adminMobileImages"
          type="pc-admin"
          time="3000"
          :pagination="true"
        />
      </div>
      <div class="product-section-02 mobile" id="caddie">
        <ProductSlide
          size="1"
          :images="caddieMobileImages"
          type="pc-caddie"
          time="3000"
          :pagination="true"
        />
      </div>
      <div class="product-section-03 mobile" id="golfer">
        <ProductSlide
          size="1"
          :images="golferMobileImages"
          type="pc-golfer"
          time="3000"
          :pagination="true"
        />
      </div>

      <div class="product-seciton-04">
        <div class="contents-line-box">
          <div class="txt-box" id="erp">
            <strong>{{ $t("ERP") }}</strong>
            <h1>
              {{ $t("ERP solution,") }} <br />
              {{ $t("an integrated total management") }} <br class="lg-br" />
              {{ $t("system is coming soon") }}
            </h1>
            <p>
              {{ $t("From HR Management to data marketing,") }}<br />
              {{ $t("all at a glance with a dashboard") }}
            </p>
          </div>

          <div class="ph-24 mt-40 ta-c">
            <button
              class="button-common primary size-100 hp-60"
              @click="inquiryFormType('collaboration', 'Request Alert')"
            >
              <i class="ic-zz wh-22" />
              {{ $t("Request Alert") }}
            </button>
          </div>

          <!-- pc -->
          <div class="cont-box-group pc">
            <div class="cont-box">
              <div>
                <strong>{{ $t("Tee Time & Booking Management") }}</strong>
                <p>
                  {{ $t("Manage all the booking information all in one,") }}
                  {{ $t("from tee time and room reservations") }}
                  {{ $t("to cancellations") }}
                </p>
                <div class="img-box">
                  <img
                    src="https://image.smartscore.kr/smartscore_gloabl/images/pc_product_seciton_04_img_01.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="cont-box">
              <div>
                <strong> {{ $t("Employee Management") }}</strong>
                <p>
                  {{ $t("Manage the work schedule,") }}<br />
                  {{ $t("change in position, and profile of") }} <br />
                  {{ $t("all the personnel on course") }}
                </p>
                <div class="img-box">
                  <img
                    src="https://image.smartscore.kr/smartscore_gloabl/images/pc_product_seciton_04_img_02.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="cont-box">
              <div>
                <strong> {{ $t("Payment & Adjustment") }}</strong>
                <p>
                  {{ $t("Payment and adjustment will be") }} <br />
                  {{ $t("available for all venues, green fee,") }} <br />
                  {{ $t("caddie fee, accommodation") }}
                </p>
                <div class="img-box">
                  <img
                    src="https://image.smartscore.kr/smartscore_gloabl/images/pc_product_seciton_04_img_03.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="cont-box" id="pc-erp">
              <div>
                <strong>
                  {{ $t("Overall management of inventory") }}<br />
                  {{ $t("and proceedings on course") }}
                </strong>
                <p>
                  {{ $t("Effective total management") }}<br />
                  {{ $t("in sales, inventory, customer, etc.") }}
                </p>
                <div class="img-box">
                  <img
                    src="https://image.smartscore.kr/smartscore_gloabl/images/pc_product_seciton_04_img_04.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- 모바일 -->
          <div class="cont-box-group mobile">
            <div class="cont-box">
              <div>
                <strong>{{ $t("Tee Time & Booking Management") }}</strong>
                <p>
                  {{
                    $t(
                      "Manage all the booking information all in one, from tee time and room reservations to"
                    )
                  }}
                  {{ $t("cancellations") }}
                </p>
              </div>
            </div>

            <div class="cont-box">
              <div>
                <strong>{{ $t("Employee Management") }}</strong>
                <p>
                  {{
                    $t(
                      "Manage the work schedule, change in position, and profile of all the personnel on course"
                    )
                  }}
                  {{ $t("cancellations") }}
                </p>
              </div>
            </div>

            <div class="cont-box">
              <div>
                <strong>{{ $t("Payment & Adjustment") }}</strong>
                <p>
                  {{
                    $t(
                      "Payment and adjustment will be available for all venues, green fee, caddie fee, accommodation"
                    )
                  }}
                </p>
              </div>
            </div>

            <div class="cont-box">
              <div>
                <strong>{{
                  $t("Overall management of inventory and proceedings on course")
                }}</strong>
                <p>
                  {{ $t("Effective total management in sales, inventory, customer, etc.") }}
                </p>
              </div>
            </div>
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
              <div style="" class="mb-12">
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
                  :disabled="countryValue ? false : true"
                  limit="20"
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
  </div>
  <PrivacyPolicyModal v-model:is-open="isPrivacyOpen" />
</template>

<style scoped lang="scss"></style>
