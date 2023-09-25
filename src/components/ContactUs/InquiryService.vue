<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { serviceInquiry } from "@/api/inquiry";
import BaseTextField from "@/components/common/BaseTextField.vue";
import BaseDropDown from "@/components/common/BaseDropDown.vue";
import { countryList } from "@/constants/inquireFormList";
import { ccNameCheck, nameCheck, emailCheck } from "@/utils/regExp";
import PrivacyPolicyModal from "@/components/modal/PrivacyPolicyModal.vue";
import { useGtm } from "@gtm-support/vue-gtm";

const router = useRouter();
const gtm = useGtm();

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

const apiPostInquiry = async () => {
  // GA4 GTM 이벤트 적용관련 코드
  const btnName = localStorage.getItem("BUTTON");

  gtm.trackEvent({
    event: "gtm_submit_completed",
    action: "click",
    gtm_name_of_golf_course: ccValue.value,
    gtm_first_name: firstNameValue.value,
    gtm_last_name: lastNameValue.value,
    gtm_country: countryValue.value,
    gtm_contact_number: contactNumberValue.value,
    gtm_email_address: emailValue.value,
    gtm_submit_type: btnName,
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
</script>

<template>
  <div class="contactus-form-section-01 contact-us-group">
    <div class="contents-line-box">
      <div class="contactus-box">
        <BaseTextField
          title="Name of Golf Course"
          class="hp-60"
          required
          :value="ccValue"
          @update:value="ccValue = $event"
          :validFn="ccNameCheck"
          limit="50"
        />

        <div class="form-group input-type-text row">
          <div class="pr-6 flex-1">
            <BaseTextField
              title="First Name "
              class="hp-60"
              required
              :value="firstNameValue"
              @update:value="firstNameValue = $event"
              :validFn="nameCheck"
              limit="20"
            />
          </div>
          <div class="pr-6 flex-1">
            <BaseTextField
              title="Last Name "
              class="hp-60"
              required
              :value="lastNameValue"
              @update:value="lastNameValue = $event"
              :validFn="nameCheck"
              limit="20"
            />
          </div>
        </div>

        <div class="dp-f flex-wrap mt-30 gap-16">
          <div style="flex-grow: 1" class="mb-12">
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

          <div style="flex-grow: 9">
            <BaseTextField
              title="Contact Number"
              class="hp-60"
              required
              :country="selectedCountry.toLowerCase()"
              inputNumber
              v-model:countryNumber="contactNumberValue"
              :disabled="countryValue ? false : true"
              limit="20"
              v-model:country-number="countryNumber"
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
              <p class="s-p text-underline" @click="isPrivacyOpenClick">
                {{ $t("View Privacy Policy") }}
              </p>
            </div>
          </div>

          <button
            class="button-common primary size-100 hp-69 mt-40"
            :disabled="isDisabledSubmit"
            @click="apiPostInquiry"
          >
            {{ $t("Submit") }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <PrivacyPolicyModal v-model:is-open="isPrivacyOpen" />
</template>

<style scoped lang="scss"></style>
