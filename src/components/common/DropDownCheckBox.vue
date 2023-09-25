<script>
export default {
  inheritAttrs: false,
};
</script>

<!--
 컴포넌트 class 속성으로 넓이와 높이를 넘겨줄 수 있음
 넓이 값 : wd-1 ~ 300
 높이 값 : hp-1 ~ 300
-->

<script setup>
import { ref, watch, computed } from "vue";

const emit = defineEmits(["update:value"]);
const props = defineProps({
  label: { type: String, default: null },
  placeholder: { type: String, default: null },
  list: {
    type: String,
    default: () => {
      return [];
    },
  },
});

const containerRef = ref(null);

const isOpen = ref(false);
const checkedValues = ref([]);
const prevCheckedValues = ref([...props.list]);

const isChanged = computed(() => {
  const deduplicatedSet = new Set([...prevCheckedValues.value, ...checkedValues.value]);

  const prevLength = prevCheckedValues.value.length;
  const currLength = checkedValues.value.length;
  const deduplicatedLength = deduplicatedSet.size;

  return prevLength !== currLength || prevLength !== deduplicatedLength;
});

const onClickItem = (e) => {
  emit("update:value", checkedValues.value);

  if (e.target === containerRef.value || containerRef.value.contains(e.target)) {
    return;
  }
  isOpen.value = false;
};

watch(isOpen, () => {
  if (isOpen.value) {
    prevCheckedValues.value = checkedValues.value;
  } else if (isChanged.value) {
    emit("change", checkedValues.value);
  }
});
</script>

<template>
  <div ref="containerRef" class="form-group select-type-checkbox" @click="isOpen = !isOpen">
    <label class="title">{{ label }}</label>
    <div class="select-group" :class="$attrs.class">
      <input
        type="search"
        readonly
        class="form-control"
        :value="
          checkedValues.length > 1
            ? `${checkedValues[0]} + ${checkedValues.length - 1}`
            : checkedValues[0]
        "
        :placeholder="placeholder"
      />
      <div class="select-group__add"></div>
      <div class="select-group__append"></div>

      <ul class="select-group-dropwon checkbox-group" v-show="isOpen">
        <li v-for="item in list" :key="item" @click.stop>
          <div class="check-box">
            <label>
              <input type="checkbox" class="check-item" :value="item" v-model="checkedValues" />
              <span class="check-icon">
                <i class="ic-check"></i>
              </span>
              <span class="check-txt fs-14">{{ item }}</span>
            </label>
          </div>
        </li>
        <button
          @click="onClickItem($event)"
          class="button-common primary bdr-0 hp-45 pv-15"
          :disabled="checkedValues.length === 0"
        >
          Confirm
        </button>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.form-control:read-only {
  background-color: white;
}
.dropdown-btn {
  padding: 15px;
  background-color: rgb(90, 87, 87);
  color: white;
}
</style>
