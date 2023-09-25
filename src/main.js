import "./assets/scss/import.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createGtm } from "@gtm-support/vue-gtm";

import { createI18n } from "vue-i18n";
import en from "@/i18n/en.json";
import vn from "@/i18n/vn.json";
import th from "@/i18n/th.json";
import id from "@/i18n/id.json";
import "aos/dist/aos.css";

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: { en, vn, th, id },
});

app.use(router);
app.use(i18n);

app.use(
  createGtm({
    id: "GTM-T8FJBTF",
    defer: false,
    enabled: true,
    debug: false,
    loadScript: true, // dataLayer를 사용하는 경우 옵션사항.
    vueRouter: router,
    trackOnNextTick: false,
  })
);
app.mount("#app");
