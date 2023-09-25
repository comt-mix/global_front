<script setup>
import { watch } from "vue";

const emits = defineEmits(["close"]);
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

watch(
  () => props.isOpen,
  (isOpen) => {
    let userAgent = navigator.userAgentData.platform;
    if (isOpen) {
      if(userAgent === "Windows"){
        document.body.classList.add("body-modal-open");
      }else{
        document.body.classList.add("body-modal-open-mac");
      }
    } else {
      if(userAgent === "Windows"){
        document.body.classList.remove("body-modal-open");
      }else{
        document.body.classList.remove("body-modal-open-mac");
      }


    }
  }
);

const close = () => {
  emits("close");
};
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-group">
      <div class="dim" @click="close"></div>
      <div class="modal-group__contentbox" :class="$attrs.class ?? 'wd-600 hf-fixed'">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal-group {
  z-index: 9999;
}
</style>
