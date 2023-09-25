<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const inquiryFormType = (type) => {
  router.push(`/contact-us/${type}`);
};
</script>

<template>
  <div class="contents">
    <div class="common-page-visual-area contactus">
      <div class="txt-box">
        <span>{{ $t("CONTACT US") }}</span>
        <h1>
          {{ $t("Questions?") }} <br />
          {{ $t("We are here to help!") }}
        </h1>
        <p>
          {{ $t("We will be in touch within 2-3") }} <br class="lg-br" />
          {{ $t("working days after the submission.") }} <br />
          {{ $t("The more information you provide,") }} <br class="lg-br" />
          {{ $t("the more precise the consultation")}} <br class="lg-br" />
          {{ $t("provided will be.") }}
        </p>
      </div>
    </div>

    <div class="contactus-section-01">
      <div class="contents-line-box">
        <div class="list-box-group">
          <div>
            <div>
              <strong>{{ $t("For Golf Courses") }}</strong>
              <h1>
                {{ $t("Want to implement our solution immediately?") }}
              </h1>
            </div>
            <button
              class="button-common primary hp-51 size-100"
              @click="inquiryFormType('service')"
            >
              {{ $t("Request") }}
            </button>
          </div>
          <div>
            <div>
              <strong>{{ $t("For Golfers") }}</strong>
              <h1>
                {{ $t("Any opinion on the mobile app?") }}
              </h1>
            </div>
            <button class="button-common primary hp-51 size-100" @click="inquiryFormType('app')">
              {{ $t("Leave Voice of Customer") }}
            </button>
          </div>
          <div>
            <div>
              <strong>{{ $t("For Companies") }}</strong>
              <h1>
                {{ $t("Want to collaborate with us?") }}
              </h1>
            </div>
            <button
              class="button-common fc-ffffff bg-484848 hp-51 size-100"
              @click="inquiryFormType('collaboration')"
            >
              {{ $t("Suggest partnership") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
