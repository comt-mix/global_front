<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();
const curRoute = ref(router);
const menuFlag = ref(false);

const isChangeMenu = () => {
  menuFlag.value = false;
};

watch(curRoute.value, () => {
  isChangeMenu();
});
</script>

<template>
  <div class="header" :class="$route.name === 'company' ? 'company-header' : ''">
    <input type="checkbox" id="m-menu" v-model="menuFlag" />
    <label class="gnb-menu-box" for="m-menu"></label>

    <div class="header-wrap">
      <div class="logo" @click="$route.name === 'home' ? router.go(0) : ''">
        <RouterLink to="/">
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/logo/smartscore_global_logo_black.svg"
            alt=""
          />
        </RouterLink>
      </div>

      <div class="gnb-wrap">
        <ul class="gnb">
          <!-- 해당 페이지일 경우 acitve 클래스를 추가해주세요. -->
          <li
            :class="$route.name === 'product' ? 'active' : ''"
            @click="$route.name === 'product' ? router.go(0) : ''"
          >
            <RouterLink to="/product">
              {{ $t("PRODUCT") }}
              <div class="ic-arrow-line-right"></div>
            </RouterLink>
          </li>
          <li
            :class="$route.name === 'digital' ? 'active' : ''"
            @click="$route.name === 'digital' ? router.go(0) : ''"
          >
            <RouterLink to="/digitalization">
              {{ $t("DIGITALIZATION") }}
              <div class="ic-arrow-line-right"></div>
            </RouterLink>
          </li>
          <li
            :class="$route.name === 'company' ? 'active' : ''"
            @click="$route.name === 'company' ? router.go(0) : ''"
          >
            <RouterLink to="/company">
              {{ $t("COMPANY") }}
              <div class="ic-arrow-line-right"></div>
            </RouterLink>
          </li>
          <li
            :class="$route.name === 'app' ? 'active' : ''"
            @click="$route.name === 'app' ? router.go(0) : ''"
          >
            <RouterLink to="/mobile-app">
              {{ $t("MOBILE APP") }}
              <div class="ic-arrow-line-right"></div>
            </RouterLink>
          </li>
          <li :class="$route.name === 'contactus' ? 'active' : ''">
            <RouterLink to="/contact-us">
              {{ $t("CONTACT US") }}
              <div class="ic-arrow-line-right"></div>
            </RouterLink>
          </li>
        </ul>

        <ul class="language">
          <li>
            <img
              src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_global.png"
              alt=""
              class="wh-14 ps-r top-1"
            />
          </li>
          <li @click="$i18n.locale = 'en'" :class="{ active: $i18n.locale === 'en' }">EN</li>
          <li @click="$i18n.locale = 'vn'" :class="{ active: $i18n.locale === 'vn' }">VN</li>
          <li @click="$i18n.locale = 'th'" :class="{ active: $i18n.locale === 'th' }">TH</li>
          <li @click="$i18n.locale = 'id'" :class="{ active: $i18n.locale === 'id' }">ID</li>
        </ul>
      </div>
      <div class="dim"></div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
