<script setup>
import PbHeader from "@/pb/Pb-header.vue";
import PbFooter from "@/pb/Pb-footer.vue";
import PbCommonVisualArea from "@/pb/pb-common-visual-area.vue";
import PbSsSlide from "@/pb/Pb-ss-slide.vue";
import PbContactUs from "@/pb/Pb-contactUs.vue";
import {ref} from "vue";
import BaseSlide from "@/components/common/BaseSlide.vue";



const tabList = [
  {
    id: 0,
    name: 'Field'
  },
  {
    id: 1,
    name: 'Travel (TBD)'
  },
  {
    id: 2,
    name: 'Commerce (TBD)'
  },
]

const tabListDepth = [
  {
    id: 0,
    name: 'Score'
  },
  {
    id: 1,
    name: 'Golf Courses'
  },
  {
    id: 2,
    name: 'Golf Friends'
  },
]


const culTab = ref(0);
const depthTab2 = ref(0);
const tabClick = (index) => {
  culTab.value = index;
}

const depthTabClick = (index) => {
  depthTab2.value = index
}

</script>

<template>
  <pb-header/>
  <div class="contents">
    <pb-common-visual-area :visual-banner-type="'app'" />

    <div class="app-section-01">
      <div class="pc">
        <div class="contents-line-box">
          <div class="dp-f justify-between align-items-center">
            <div class="tit-box ph-0">
              <h1 class="fs-22">
                Next level of golf,
                explore right now
              </h1>
            </div>
            <div class="dp-f">
              <button class="button-common white hp-53 ph-46 fs-16">Appstore</button>
              <button class="button-common black hp-53 ph-46 fs-16">Google Play store</button>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile">
        <div class="tit-box">
          <h1>
            Next level of golf,<br class="lg-br" />
            explore right now
          </h1>
        </div>
        <div class="dp-f mt-40">
          <button class="button-common white hp-40 size-50 fs-14">Appstore</button>
          <button class="button-common black hp-40 size-50 fs-14">Google Play store</button>
        </div>
      </div>

    </div>


    <div class="app-section-02">
      <div class="contents-line-box">
        <div class="tit-box">
          <strong>Our Mobile App</strong>
          <h1>
            We offer an innovative<br class="lg-br" />
            experience of golf,<br  />
            at the center of this lies<br class="lg-br" />
            these core functions :
          </h1>
        </div>

        <div class="tab-group-2">
          <ul>
            <li v-for="(tabs, index) in tabList" :key="index" :class="culTab === index ? 'active':''" @click="tabClick(index)">
              {{tabs.name}}
            </li>
          </ul>

          <div class="tab-group-2-depth2">
            <span v-for="(tabs, index) in tabListDepth" v-if="culTab === 0" :key="index" :class="depthTab2 === index ? 'active':''"  @click="depthTabClick(index)">{{tabs.name}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="app-section-03">

      <!-- 피씨 -->
      <div class="contents-line-box pc">
        <div class="score" v-if="culTab === 0 && depthTab2 === 0">
          <strong>Score</strong>
          <h1>
            Manage your scores <br class="lg-br" />
            efficiently
          </h1>
          <p class="mt-40">
            · Automatic transmission of round information globally
          </p>
          <p>
            · A useful tool for entering and managing scorecards
          </p>
          <p>
            · Score management by golf courses/time/players
          </p>
          <div class="img-box"><img src="https://image.smartscore.kr/smartscore_gloabl/images/app_tab_img_score_phone.png" /></div>
        </div>
        <div class="golf-courses" v-if="culTab === 0 && depthTab2 === 1">
          <strong>Golf Courses</strong>
          <h1>
            Book a round of golf
          </h1>
          <p class="mt-40">
            · A reservation service for over 300 golf courses nationwide
          </p>
          <p>
            · Real-time booking based on your location
          </p>
          <p>
            · Events and hot deals available for members
          </p>
          <div class="img-box"><img src="https://image.smartscore.kr/smartscore_gloabl/images/app_tab_img_golfcourses_phone.png" /></div>
        </div>
        <div class="golf-friends" v-if="culTab === 0 && depthTab2 === 2">
          <strong>Golf Friends</strong>
          <h1>
            Make golf friends
          </h1>
          <p>
            · A network of fellow golfers
          </p>
          <p>
            · Share your average score/best score
          </p>
          <p>
            · Compare rankings based on the best score within<br /> the past 90 days
          </p>
          <div class="img-box"><img src="https://image.smartscore.kr/smartscore_gloabl/images/app_tab_img_golffriends_phone.png" /></div>
        </div>
        <div class="travel" v-if="culTab === 1">
          <strong>Travel (TBD)</strong>
          <h1>
            Tour the world
          </h1>
          <p>
            · Special overseas golf experience from Smartscore
          </p>
          <p>
            · Tours available worldwide from China, Japan,<br /> Southeast Asia, North America, Europe, and many more
          </p>
          <div class="img-box"><img src="https://image.smartscore.kr/smartscore_gloabl/images/app_tab_img_travel_phone.png" /></div>
        </div>
        <div class="commerce" v-if="culTab === 2">
          <strong>Commerce (TBD)</strong>
          <h1>
            Shop on the golf <br />
            marketplace
          </h1>
          <p>
            · An online mall specialized for golf including golf<br /> clubs and equipment
          </p>
          <p>
            · Exclusive daily offers for Smartscore members
          </p>
          <p>
            · Earn reward points of 1% of your purchase
          </p>
          <div class="img-box"><img src="https://image.smartscore.kr/smartscore_gloabl/images/app_tab_img_commerce_phone.png" /></div>
        </div>
      </div>


      <!-- 모바일 -->
      <div class="contents-line-box mobile">
        <div v-if="culTab === 0 && depthTab2 === 0">
          <strong>Score</strong>
          <h1>
            Manage your scores <br class="lg-br" />
            efficiently
          </h1>
          <p>
            Automatic transmission <br class="lg-br" />
            of round information globally
          </p>
          <div class="img-box"><img src="https://image.smartscore.kr/smartscore_gloabl/images/m_app_tab_img_01.png" /></div>
        </div>
        <div v-if="culTab === 0 && depthTab2 === 1">
          <strong>Golf Courses</strong>
          <h1>
            Golf Courses
          </h1>
          <p>
            Real-time booking based on<br class="lg-br" />
            your location
          </p>
          <div class="img-box"><img src="https://image.smartscore.kr/smartscore_gloabl/images/m_app_tab_img_02.png" /></div>
        </div>
        <div v-if="culTab === 0 && depthTab2 === 2">
          <strong>Golf Friends</strong>
          <h1>
            Make golf friends
          </h1>
          <p>
            A network of fellow golfers
          </p>
          <div class="img-box"><img src="https://image.smartscore.kr/smartscore_gloabl/images/m_app_tab_img_03.png" /></div>
        </div>
        <div v-if="culTab === 1">
          <strong>Travel (TBD)</strong>
          <h1>
            Tour the world
          </h1>
          <p>
            Special overseas golf experience<br class="lg-br" />
            from Smartscore
          </p>
          <div class="img-box"><img src="https://image.smartscore.kr/smartscore_gloabl/images/m_app_tab_img_04.png" /></div>
        </div>
        <div v-if="culTab === 2">
          <strong>Commerce (TBD)</strong>
          <h1>
            Shop on the golf <br class="lg-br" />
            marketplace
          </h1>
          <p>
            An online mall specialized for golf<br class="lg-br" />
            including golf clubs and equipment
          </p>
          <div class="img-box"><img src="https://image.smartscore.kr/smartscore_gloabl/images/m_app_tab_img_05.png" /></div>
        </div>
      </div>
    </div>




    <div class="app-section-04">
      <div class="tit-box">
        <h1>
          We have many more<br class="lg-br">
          services to come.<br >
          Join our digitalization and innovation
        </h1>
      </div>
    </div>

    <div class="app-section-05">
      <div class="tit-box">
        <h1>
          Do you have experience <br>
          with our mobile app?
        </h1>
        <p>
          Please share with us <br>
          your experience and feedback
        </p>
      </div>

      <div class="mt-40 ta-c">
        <button class="button-common white ph-46 hp-60 fs-16">Share personal experience</button>
      </div>
    </div>




  </div>
  <pb-footer/>
</template>
