<script setup>
import { ref, watch, onUnmounted } from "vue";
import {useRouter} from "vue-router";
import { useI18n } from "vue-i18n";
import PrivacyPolicyModal from "@/components/modal/PrivacyPolicyModal.vue";
import TermConditionModal from "@/components/modal/TermConditionModal.vue";

const { locale } = useI18n();

const route = useRouter();



const containerRef = ref(null);
const isOpen = ref(false);
const selectedLang = ref("EN");
const languageList = ["EN", "TH", "VN", "ID"];

const isTermOpen = ref(false);
const isPrivacyOpen = ref(false);

const device = ref(document.body.id);

const onClickItem = (idx) => {
  selectedLang.value = languageList[idx];
  locale.value = selectedLang.value.toLowerCase();

  isOpen.value = false;
};

const onClickOutside = (e) => {
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

onUnmounted(() => {
  document.body.removeEventListener("click", onClickOutside);


  footerChkroute.value = route.currentRoute.value.fullPath;

});

watch(device, (newDevice) => {
  device.value = newDevice;
});

// 화면 크기가 변경될 때마다 device 값을 업데이트
window.addEventListener("resize", () => {
  device.value = document.body.id;
});



</script>

<template>
  <div class="footer" :class="route.currentRoute.value.name">
    {{ footerChkroute }}
    <div class="footer-wrap">
      <div class="footer-logo">
        <RouterLink to="/">
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/logo/smartscore_global_logo_black.svg"
            alt=""
            class="i-color-ffffff"
          />
        </RouterLink>
      </div>

      <div class="footer-ad">
        <ul class="footer-company">
          <li>
            <a href="http://www.smartscore.kr/golf/" target="_blank"> {{ $t("Company") }}</a>
          </li>

          <li>
            <a href="https://www.smartscore.kr/" target="_blank">{{ $t("Smartscore") }}</a>
          </li>

          <li class="pc">
            <span @click="isTermOpen = true">{{ $t("Terms") }}</span> ·
            <span @click="isPrivacyOpen = true">{{ $t("Privacy Policy") }}</span>
          </li>
        </ul>

        <ul class="footer-company mobile" style="margin-top: -30px">
          <li>
            <span @click="isTermOpen = true">{{ $t("Terms") }}</span> ·
            <span @click="isPrivacyOpen = true">{{ $t("Privacy Policy") }}</span>
          </li>
        </ul>

        <div class="footer-info">
          <p>{{ $t("CEO : Jung Sung Hoon") }}</p>
          <p>{{ $t("Business registration no. 106-87-09839") }}</p>
          <p>{{ $t("Email : info@smartscore.global") }}</p>
          <p>
            {{
              $t(
                "8th, 9th Floor, Kosmo Daechi, 8, Teheran-ro 98-gil,Gangnam-gu, Seoul, Republic of Korea (06181)"
              )
            }}
          </p>
          <p>{{ $t("Copyright 2023. SMARTSCORE Inc. all rights reserved.") }}</p>
        </div>

        <div class="footer-subsidiary">
          <h1 class="mobile fc-ffffff">Subsidiary</h1>
          <ul>
            <li>
              <a href="https://www.majesty-golf.com/global/#feature-2" target="_blank">{{
                $t("Majesty")
              }}</a>
            </li>
            <li>
              <a href="http://www.zestaim.co.kr/en/index.html" target="_blank">{{
                $t("Zestaim")
              }}</a>
            </li>
            <li>
              <a href="https://www.mckayson.com/" target="_blank">{{ $t("Mckayson") }}</a>
            </li>
            <li>
              <a href="https://www.golfmagazinekorea.com/" target="_blank">{{ $t("GMK") }}</a>
            </li>
            <li>
              <a href="https://kingsrockcc.com/pagesite/club/intro.asp" target="_blank">{{
                $t("King’s Rock")
              }}</a>
            </li>
          </ul>
        </div>
      </div>
      >
      <template v-if="device === 'pc'">
        <div class="pc">
          <div class="footer-lang-select-group">
            <div
              class="form-group select-type-default"
              ref="containerRef"
              @click="isOpen = !isOpen"
            >
              <div class="select-group wd-100 hp-43">
                <input type="search" readonly class="form-control" :value="selectedLang" />
                <div class="select-group__add"></div>
                <div class="select-group__append"></div>

                <ul class="select-group-dropwon" v-show="isOpen">
                  <li v-for="(item, i) in languageList" :key="i" @click.stop="onClickItem(i)">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-if="device === 'mobile'">
        <div class="mobile mt-30 dp-n">
          <div class="footer-lang-select-group">
            <div
              class="form-group select-type-default"
              ref="containerRef"
              @click="isOpen = !isOpen"
            >
              <div class="select-group wd-100 hp-43">
                <input type="search" readonly class="form-control" :value="selectedLang" />
                <div class="select-group__add"></div>
                <div class="select-group__append"></div>

                <ul class="select-group-dropwon" v-show="isOpen">
                  <li v-for="(item, i) in languageList" :key="i" @click="onClickItem(i)">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <TermConditionModal v-model:is-open="isTermOpen" />
    <PrivacyPolicyModal v-model:is-open="isPrivacyOpen" />
  </div>
</template>

<style scoped lang="scss"></style>
