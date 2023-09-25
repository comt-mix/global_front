<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { computed, ref, watch } from "vue";
import { useByte } from "@/composables/useByte";

const { getLimitedByteText } = useByte();

const emit = defineEmits(["update:value", "update:countryNumber"]);

const props = defineProps({
  title: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  required: { type: Boolean, default: false },
  row: { type: Boolean, default: false },
  country: { type: String },
  inputNumber: { type: Boolean },
  limit: { type: String },
  validFn: { type: Function },
  add: { type: String },
  disabled: { type: Boolean },
  countryNumber: { type: Number },
  isSubmit: { type: Boolean },
  errorStatus: { type: Boolean },
});

const inputValue = ref("");
const isError = ref(false);
const otherValue = ref("");
const emailError = ref(false);

const errMsg = "This field is required";
const emailErrMsg = "Please enter a valid email address format.";

const isValidError = computed(() => {
  return isError.value;
});

const maxLength = computed(() => {
  return otherValue.value ? "20" : null;
});

const onInput = (e) => {
  let inputText = e.target.value;

  if (inputText.trim() === "") {
    isError.value = true;
  } else {
    isError.value = false;
  }

  const text = getLimitedByteText(inputText, Number(props.limit));

  if (text.length <= Number(props.limit)) {
    e.target.value = inputText.substr(0, text.length);

    inputValue.value = e.target.value;
  }
};

const onRegExp = (e) => {
  if (typeof props.validFn !== "function" || props.title === "E-mail Address") {
    return;
  } else {
    if (!props.validFn(e.key)) {
      e.preventDefault();
    }
  }
};

const onClickDeleteIcon = () => {
  inputValue.value = "";
  if (props.required) {
    isError.value = true;
  }
};

// 국가 번호 입력 수 제한 관련 로직
const handleOtherValue = (e) => {
  let newValue = e.target.value;

  if (newValue.length > 4) {
    newValue = newValue.slice(0, 4);
  }
  otherValue.value = newValue;
};

watch(inputValue, (newValue) => {
  emit("update:value", newValue);

  if (props.country === "other") {
    emit("update:countryNumber", otherValue.value + " " + newValue);
  } else {
    emit("update:countryNumber", newValue);
  }
});

watch(otherValue, (newValue) => {
  if (props.country === "other") {
    if (newValue.length >= 4) {
      newValue = newValue.slice(0, 4);
    }
    emit("update:countryNumber", newValue + " " + inputValue.value);
  } else {
    emit("update:countryNumber", newValue);
  }
});

watch(
  () => props.country,
  () => {
    inputValue.value = "";
    otherValue.value = "";
  }
);

watch(emailError, (newValue) => {
  emailError.value = newValue;
});
</script>

<template>
  <div
    :class="[
      inputNumber ? 'form-group input-type-number' : 'form-group input-type-text',
      add ? add : '',
      { row: row, error: isValidError || errorStatus },
    ]"
  >
    <label>{{ $t(title) }}<span v-if="required" class="fc-347eff ml-2">*</span></label>
    <div class="input-group" :class="$attrs.class">
      <div class="input-group__add" :class="{ [country]: country }">
        <div v-if="country === 'other'" class="other-input">
          <input
            id="myInput"
            type="number"
            v-model="otherValue"
            @input="handleOtherValue($event)"
            maxlength="4"
          />
        </div>
      </div>
      <input
        :type="country ? 'number' : 'text'"
        class="form-control"
        :placeholder="country ? '' : placeholder"
        :value="inputValue"
        @input="onInput($event)"
        @keydown="onRegExp($event)"
        :disabled="disabled"
        :maxlength="maxLength"
      />
      <div class="input-group__append" @click="onClickDeleteIcon"></div>
    </div>
    <p class="message" v-if="isValidError">{{ errMsg }}</p>
    <p
      class="message"
      v-if="isSubmit && errorStatus && title === 'E-mail Address' && !isValidError"
    >
      {{ emailErrMsg }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
