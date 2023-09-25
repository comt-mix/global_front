<script setup>
import BaseModal from "@/components/modal/BaseModal.vue";

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  mode:{
    type: String,
    default: null
  }
});

const emit = defineEmits(["update:isOpen"]);

const closeModal = () => {
  emit("update:isOpen", false);
};
</script>

<template>
  <BaseModal :is-open="isOpen" @close="closeModal" class="wd-300 pv-40 ph-25">
    <button class="ps-a top-10 right-10" @click="closeModal">
      <img
          src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_close_circle_disable.svg"
      />
    </button>

    <div v-if="mode === 'app' ">
      <strong class="fs-24 fw-600"> {{ $t("Appstore") }} </strong>
      <p class="mt-14">Scan QR downloading app</p>
      <div class="mt-20">
        <img src="https://image.smartscore.kr/smartscore_gloabl/images/QR_Appstore.png" alt="" />
      </div>
    </div>


    <div v-else>
      <strong class="fs-24 fw-600"> {{ $t("Google Play Store") }} </strong>
      <p class="mt-14">Scan QR downloading app</p>
      <div class="mt-20">
        <img src="https://image.smartscore.kr/smartscore_gloabl/images/QR_Googleplaystore.png" alt="" />
      </div>
    </div>





  </BaseModal>
</template>

<style scoped lang="scss"></style>
