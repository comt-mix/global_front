<script setup>
import {ref} from "vue";
import BaseDropDown from "@/components/common/BaseDropDown.vue";



const selectedLang = ref(null)
const list = ["EN", "TH", "VN", "ID"];




</script>
<template>
  <div class="footer">

    <div class="footer-wrap">
      <div class="footer-logo">
        <img src="https://image.smartscore.kr/smartscore_gloabl/logo/smartscore_global_logo_black.svg" alt="" class="i-color-ffffff" />
      </div>

      <div class="footer-ad">
        <ul class="footer-company">
          <li>Company</li>
          <li>Smartscore</li>
          <li>Terms · Privacy Policy</li>
        </ul>

        <div class="footer-info">
          <p>CEO : Jung Sung Hoon</p>
          <p>Business registration no. 106-87-09839</p>
          <p>Email : info@smartscore.global</p>
          <p>
            8th, 9th Floor, Kosmo Daechi, 8, Teheran-ro <br class="lg-br" />
            98-gil,Gangnam-gu, Seoul, Republic of Korea (06181)
          </p>
          <p>Copyright 2023. SMARTSCORE Inc. all rights reserved.</p>
        </div>

        <div class="footer-subsidiary">
          <p>Subsidiary</p>
          <ul>
            <li>Majesty</li>
            <li>Zestaim</li>
            <li>Mckayson</li>
            <li>GMK</li>
            <li>King’s Rock</li>
          </ul>
        </div>
      </div>

      <div class="footer-lang-select-group">
        <base-drop-down class="wd-100 hp-43" :list="list" v-model:value="selectedLang" />
      </div>
    </div>
  </div>
</template>

