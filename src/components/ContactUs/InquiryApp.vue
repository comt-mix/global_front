<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useByte } from "@/composables/useByte";
import { appInquiry } from "@/api/inquiry";
import BaseTextField from "@/components/common/BaseTextField.vue";
import BaseDropDown from "@/components/common/BaseDropDown.vue";
import { countryList, appInterestList } from "@/constants/inquireFormList";
import { nameCheck, emailCheck } from "@/utils/regExp";
import PrivacyPolicyModal from "@/components/modal/PrivacyPolicyModal.vue";
import { useGtm } from "@gtm-support/vue-gtm";

const router = useRouter();
const gtm = useGtm();
const byte = ref(0);

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

const interestValue = ref("");
const messageValue = ref("");

// 팝업 관련 변수들
const isPrivacyOpen = ref(false);
const isPrivacyChecked = ref(false);
const isSubscribe = ref(false);
const isAllChecked = ref(false);

const apiPostInquiry = async () => {
  // GA4 GTM 이벤트 적용관련 코드
  const btnName = localStorage.getItem("BUTTON");

  gtm.trackEvent({
    event: "gtm_submit_completed",
    action: "click",
    gtm_first_name: firstNameValue.value,
    gtm_last_name: lastNameValue.value,
    gtm_country: countryValue.value,
    gtm_contact_number: contactNumberValue.value,
    gtm_email_address: emailValue.value,
    gtm_interested_in: interestValue.value,
    gtm_message: messageValue.value,
    gtm_in_in_optional_subscribe: isSubscribe.value,
    gtm_submit_type: btnName,
    noninteraction: false,
  });

  const postData = {
    firstName: firstNameValue.value,
    lastName: lastNameValue.value,
    email: emailValue.value,
    country: countryValue.value,
    contactNumber:
      countryValue.value === "Other"
        ? contactNumberValue.value
        : countryNumber.value + " " + contactNumberValue.value,
    interest: interestValue.value,
    message: messageValue.value,
    isAgreePersonalInfo: isPrivacyChecked.value,
    isAgreeSubscribe: isSubscribe.value,
  };

  isSubmit.value = true;

  if (isEmailError.value) {
    return;
  }

  if (typeof countryNumber.value === "string") {
    contactNumberValue.value = countryNumber.value.replace(/[^0-9]/g, "");
  }

  try {
    await appInquiry(postData);
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
    !firstNameValue.value ||
    !lastNameValue.value ||
    !emailValue.value ||
    !countryValue.value ||
    !interestValue.value ||
    !contactNumberValue.value ||
    !isPrivacyChecked.value ||
    !countryNumber.value
  );
});

// 메시지 유효성 검사에 대한 로직(공통 input에 해당되지 않아서 별도로 빼둠)
const { getByteLength } = useByte();

const onInput = (e) => {
  let inputText = e.target.value;
  const currentByteLength = getByteLength(inputText);

  byte.value = currentByteLength;

  if (currentByteLength > 1000) {
    while (getByteLength(inputText) > 1000) {
      inputText = inputText.slice(0, -1); // 1글자씩 제거
    }
    e.target.value = inputText;
    byte.value = 1000;
  }
};

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

// 체크박스 체크 관련 로직
watch(isAllChecked, (newValue) => {
  if (newValue === true) {
    isPrivacyChecked.value = true;
    isSubscribe.value = true;
  }
  if (
    isPrivacyChecked.value === true &&
    isSubscribe.value === true &&
    isAllChecked.value === false
  ) {
    isPrivacyChecked.value = false;
    isSubscribe.value = false;
  }
});

watch([isPrivacyChecked, isSubscribe], ([newPrivacyChecked, newSubscribe]) => {
  if (!newPrivacyChecked || !newSubscribe) {
    isAllChecked.value = false;
  }
  if (newPrivacyChecked && newSubscribe) {
    isAllChecked.value = true;
  }
});
</script>

<template>
  <div class="contactus-form-section-01 contact-us-group">
    <div class="contents-line-box">
      <div class="contactus-box">
        <div class="form-group input-type-text row">
          <div class="pr-6 flex-1">
            <BaseTextField
              title="First Name"
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
              title="Last Name"
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
          class="hp-60"
          add="mt-30"
          :isSubmit="isSubmit"
          :errorStatus="isEmailError"
        />

        <BaseDropDown
          label="Interested in"
          placeholder="Please select"
          :list="appInterestList"
          class="hp-60"
          required
          :value="interestValue"
          @update:value="interestValue = $event"
          add="mt-30"
        />

        <div class="form-group input-type-textArea mt-30">
          <label>Message</label>
          <div class="textarea-group">
            <textarea
              class="hp-175"
              v-model="messageValue"
              @input="onInput($event)"
              maxlength="1000"
              placeholder="The more detailed your question, the more accurate the answer we can provide."
            ></textarea>
          </div>
          <div class="dp-f mt-8">
            <span class="ml-at fs-14">{{ byte }}/1000</span>
          </div>
        </div>

        <div class="mt-30 contactus-Agreement">
          <div class="dp-f align-items-start bg-f8f8f8 pa-14 bdr-10">
            <div class="pr-10">
              <div class="checkbox-group">
                <div class="check-box">
                  <label>
                    <input
                      type="checkbox"
                      class="check-item"
                      id="rb1"
                      value=""
                      v-model="isAllChecked"
                    />
                    <span class="check-icon">
                      <i class="ic-check"></i>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p class="l-p">{{ $t("I agree to all the terms and conditions") }}</p>
            </div>
          </div>

          <div class="dp-f align-items-start mt-20">
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

          <div class="dp-f align-items-start mt-20">
            <div class="pr-10">
              <div class="checkbox-group">
                <div class="check-box">
                  <label>
                    <input
                      type="checkbox"
                      class="check-item"
                      id="rb1"
                      value=""
                      v-model="isSubscribe"
                    />
                    <span class="check-icon">
                      <i class="ic-check"></i>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p class="l-p">{{ $t("[Optional] Subscribe to the Smartscore") }}</p>
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
