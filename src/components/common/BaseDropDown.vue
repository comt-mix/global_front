<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { ref, watch, onUnmounted, onMounted, computed } from "vue";

const emit = defineEmits(["update:value"]);
const props = defineProps({
  label: { type: String, default: null },
  row: { type: Boolean, default: false },
  placeholder: { type: String, default: null },
  value: { type: String, default: null },
  required: { type: Boolean, default: false },
  add: { type: String },
  list: { type: Array },
});

const containerRef = ref(null);
const isOpen = ref(false);
const isError = ref(false);

const errMsg = "This field is required";

const onClickItem = (idx) => {
  emit("update:value", props.list[idx]);

  isOpen.value = false;
  isError.value = false;
};

const onClickOutside = (e) => {
  if (e.target.value === "") {
    isError.value = true;
  }
  if (e.target === containerRef.value || containerRef.value.contains(e.target)) {
    return;
  }

  isOpen.value = false;
};

watch(isOpen, () => {
  if (isOpen.value) {
    document.body.addEventListener("click", onClickOutside);
  } else {
    document.body.removeEventListener("click", onClickOutside);
  }
});

onMounted(() => {
  if (props.value === null && props.placeholder === null) {
    emit("update:value", props.list[0]);
  }
});

onUnmounted(() => {
  document.body.removeEventListener("click", onClickOutside);
});

const isValidError = computed(() => {
  return isError.value;
});
</script>

<template>
  <div
    ref="containerRef"
    class="form-group select-type-default"
    :class="[isValidError && required ? 'error' : '', row ? 'row' : '', add ? add : '']"
    @click="isOpen = !isOpen"
  >
    <label v-if="label !== null"
      >{{ $t(label) }}<span v-if="required" class="fc-347eff ml-2">*</span></label
    >
    <div class="select-group" :class="$attrs.class">
      <input
        type="search"
        readonly
        class="form-control"
        :value="value"
        :placeholder="placeholder"
      />
      <div class="select-group__add"></div>
      <div class="select-group__append"></div>

      <ul class="select-group-dropwon" v-show="isOpen">
        <li v-for="(item, i) in list" :key="i" @click.stop="onClickItem(i)">{{ item }}</li>
      </ul>
    </div>
    <p class="message" v-if="isValidError && required">{{ errMsg }}</p>
  </div>
</template>

<style scoped>
.form-control:read-only {
  background-color: white;
}
</style>
