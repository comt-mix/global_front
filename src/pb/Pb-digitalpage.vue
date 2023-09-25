<script setup>
import PbHeader from "@/pb/Pb-header.vue";
import PbFooter from "@/pb/Pb-footer.vue";
import PbCommonVisualArea from "@/pb/pb-common-visual-area.vue";
import PbSsSlide from "@/pb/Pb-ss-slide.vue";
import PbContactUs from "@/pb/Pb-contactUs.vue";
import {ref} from "vue";
import BaseSlide from "@/components/common/BaseSlide.vue";

const images = [
  {
    id: 0,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_01.png',
    text: 'Much less complaints due to precise <br class="lg-br"> tee-off time tracking thanks to Smartscore\'s live course management solution',
    GCName: 'The Bluffs Ho Tram Strip | Vietnam',
  },
  {
    id: 1,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_02.png',
    text: 'We can provide quality service to our <br class="lg-br"> customers with the reduced burden of <br class="lg-br"> manually writing down the scores',
    GCName: 'Skylake G.C | vietnam',
  },
  {
    id: 3,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_03.png',
    text: 'Smartscore tablets are fabulous - <br class="lg-br"> bright and stand out in the sunshine,<br className="lg-br"> portable and easy to use',
    GCName: 'Van tri G.C | Vietnam',
  },
  {
    id: 4,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_04.png',
    text: 'Even not being on-site, GM is still able<br class="lg-br"> to make informed decisions<br class="lg-br"> in real-time',
    GCName: 'Montgomery C.C | Vietnam',
  },
  {
    id: 5,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_05.png',
    text: 'The multilingual aspect is huge <br class="lg-br"> as an international golf course with <br class="lg-br">international clientele',
    GCName: 'King’s Rock C.C | Korea',
  }

]



const tabList = [
  {
    id: 0,
    name: 'Operational Efficiency'
  },
  {
    id: 1,
    name: 'Work Efficiency'
  },
  {
    id: 2,
    name: 'Sales Increase'
  },
  {
    id: 3,
    name: 'Customer Convenience'
  }
]
const culTab = ref(0);
const tabClick = (index) => {
  culTab.value = index;
}


</script>

<template>
  <pb-header/>
  <div class="contents">
    <pb-common-visual-area :visual-banner-type="'digital'" />

    <div class="digital-section-01">
      <div class="contents-line-box">
        <h1>
          We offer everthing <br />
          with one reasonable price
        </h1>
        <div class="tab-group-2">
          <ul>
            <li
                v-for="(list, index) in tabList"
                :key="index"
                @click="tabClick(index)"
                :class="culTab === index ? 'active' : ''"
            >{{ list.name}}</li>
          </ul>
        </div>
        <!-- pc -->
        <div class="tab-show-list-box pc">
          <ul>
            <li v-if="culTab === 0" >
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_Operational_Efficiency.png" alt="" />
            </li>
            <li v-if="culTab === 1" >
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_Work_Efficiency.png" alt="" />
            </li>
            <li v-if="culTab === 2" >
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_Sales_Increase.png" alt="" />
            </li>
            <li v-if="culTab === 3" >
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_Customer_Convenience.png" alt="" />
            </li>
          </ul>
        </div>

        <!-- mobile -->
        <div class="tab-show-list-box mobile mt-20">
          <ul>
            <li v-if="culTab === 0" >
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/Operational_Efficiency.png" alt="" />
            </li>
            <li v-if="culTab === 1" >
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/Work_Efficiency.png" alt="" />
            </li>
            <li v-if="culTab === 2" >
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/Sales_Increase.png" alt="" />
            </li>
            <li v-if="culTab === 3" >
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/Customer_Convenience_new.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="digital-section-02">
      <div class="contents-line-box">
        <div class="tit-box">
          <p>Client Reviews</p>
          <h1>
            Stories from real operations <br />
            in 400<span class="fc-0079ff">+</span> Smart Clubs
          </h1>
        </div>

        <!-- 피씨 -->
        <div class="pc mt-80">
          <div class="dp-f align-items-center">
            <div class="img-box flex-1">
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_01.png" alt=""/>
            </div>
            <div class="txt-box flex-1 ">
              <div class="pl-50">
                <strong class="fs-21 fw-500 fc-484848 mb-20 dp-ib">The Bluffs Ho Tram Strip | Vietnam</strong>
                <p class="fs-29 fw-700 mb-40">
                  Digitalization of marshall with the <br />
                  messenger function provides<br />
                  convenience as caddies can track<br />
                  each others' locations
                </p>
                <span class="fs-15 fc-727272">
                  Implementation period | 2022.01 ~ <br />
                  No. of holes | 18 holes
                </span>
              </div>
            </div>
          </div>
          <div class="dp-f align-items-center mt-80">
            <div class="img-box flex-1">
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_02.png" alt=""/>
            </div>
            <div class="txt-box flex-1 ">
              <div class="pl-50">
                <strong class="fs-21 fw-500 fc-484848 mb-20 dp-ib">Skylake G.C | vietnam</strong>
                <p class="fs-29 fw-700 mb-40">
                  Training time for caddies have <br />
                  significantly shortened as the <br />
                  tablet provides distinctively <br />
                  accurate yardage
                </p>
                <span class="fs-15 fc-727272">
                  Implementation period | 2022.01 ~ <br />
                  No. of holes | 18 holes
                </span>
              </div>
            </div>
          </div>
          <div class="dp-f align-items-center mt-80">
            <div class="img-box flex-1">
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/digital_slide_03.png" alt=""/>
            </div>
            <div class="txt-box flex-1 ">
              <div class="pl-50">
                <strong class="fs-21 fw-500 fc-484848 mb-20 dp-ib">Van tri G.C | Vietnam</strong>
                <p class="fs-29 fw-700 mb-40">
                  F&B function on the tablet <br />
                  allows us to know exactly <br />
                  which cart has ordered which <br />
                  menu and bring it out <br />
                  immediately
                </p>
                <span class="fs-15 fc-727272">
                  Implementation period | 2022.01 <br />
                  No. of holes | 18 holes
                </span>
              </div>
            </div>
          </div>
        </div>


        <!-- 모바일 -->
        <div class="mt-40 mobile">
          <base-slide :images="images" />
        </div>


      </div>
    </div>
    <div class="digital-section-03">
      <div class="contents-line-box">
        <div class="tit-box">
          <p>Smartscore offers more</p>
          <h1>
            Smartscore offers you <br class="lg-br">
            the total solution <br >
            for golf course operation
          </h1>
        </div>

        <!-- pc -->
        <div class="mt-40 pc">
          <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_digital_table_img.png" alt="" />
        </div>

        <!-- mobile -->
        <div class="ph-24 mt-40 mobile">
          <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_digital_table_img.png" alt="" />
        </div>
      </div>


    </div>
    <div class="digital-section-04">
      <div class="tit-box">
        <h1>
          We offer <span>all services,</span><br class="lg-br">
          from course management,<br >
          operations, and marketing<br class="lg-br">
          <span> with one price</span>
        </h1>
      </div>
    </div>
    <div class="digital-section-05">
      <div class="contents-line-box">
        <div class="tit-box">
          <p>Marketing Partnership</p>
          <h1>
            We reduce your<br class="lg-br">
            marketing burdens
          </h1>
        </div>

        <!-- pc -->
        <div class="pc mt-80 pb-80">
          <div class="dp-f" style="margin-left: -16px; margin-right:-16px;">
            <div class="ph-16">
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_img_Marketing_01.png" alt="">
              </div>
              <div class="mt-40">
                <span class="fc-0079ff fw-600 fs-16">In-App Marketing</span>
                <p class="mt-14 fs-22 fw-600">
                  Address an audience of 3.1M Korean users on our Smartscore mobile app
                </p>
              </div>
            </div>
            <div class="ph-16">
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_img_Marketing_02.png" alt="">
              </div>
              <div class="mt-40">
                <span class="fc-0079ff fw-600 fs-16">Golf Magazine Korea</span>
                <p class="mt-14 fs-22 fw-600">
                  You can let your course be known through the world-reknown golf magazine with 5M members
                </p>
              </div>
            </div>
          </div>

          <div class="dp-f mt-40" style="margin-left: -16px; margin-right:-16px;">
            <div class="ph-16">
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_img_Marketing_03.png" alt="">
              </div>
              <div class="mt-40">
                <span class="fc-0079ff fw-600 fs-16">In-App Marketing</span>
                <p class="mt-14 fs-22 fw-600">
                  Address an audience of 3.1M Korean users on our Smartscore mobile app
                </p>
              </div>
            </div>
            <div class="ph-16">
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_img_Marketing_04.png" alt="">
              </div>
              <div class="mt-40">
                <span class="fc-0079ff fw-600 fs-16">Golf Magazine Korea</span>
                <p class="mt-14 fs-22 fw-600">
                  You can let your course be known through the world-reknown golf magazine with 5M members
                </p>
              </div>
            </div>
          </div>
        </div>


        <!-- 모바일 -->
        <div class="section-05-list-group mobile">
          <div>
            <strong>In-App Marketing</strong>
            <p>
              Address an audience of 3.1M Korean<br class="lg-br">
              users on our Smartscore mobile app
            </p>

            <div class="img-box">
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_img_Marketing_01.png" alt="" />
            </div>
          </div>

          <div>
            <strong>Golf Magazine Korea</strong>
            <p>
              You can let your course be known<br class="lg-br">
              through the world-reknown golf<br class="lg-br">
              magazine with 5M members
            </p>
            <div class="img-box">
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_img_Marketing_02.png" alt="" />
            </div>
          </div>

          <div>
            <strong>SNS Marketing</strong>
            <p>
              introduce yourself through the Korean<br class="lg-br">
              social channels where millions of<br class="lg-br">
              Korean golfers are active
            </p>
            <div class="img-box wd-130">
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_img_Marketing_03.png" alt="" />
            </div>
          </div>

          <div>
            <strong>Offline Marketing</strong>
            <p>
              Advertise events, tournaments through<br class="lg-br">
              the Smartscore hardware (tablets,<br class="lg-br">
              kiosk, scorecards)
            </p>
            <div class="img-box wd-160">
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_img_Marketing_04.png" alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="digital-section-06">
      <div class="contents-line-box">

        <!-- pc -->
        <div class="pc">
          <div class="dp-f align-items-center">
            <div class="tit-box ph-0 flex-1">
              <h1 class="fs-40">
                We offer the official handicap,<br>
                in work with the KGA
              </h1>
              <p class="fs-16">
                Expand your field experience by taking advantage of our official handicaps.<br />
                Please enjoy to your heart’s content the world’s most prestigious golf courses.
              </p>
            </div>
            <div class="img-box wd-460 mt-0">
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_digital_handi_img.png" alt="" />
            </div>
          </div>
        </div>


        <!-- 모바일 -->
        <div class="mobile">
          <div class="tit-box">
            <h1>
              We offer the official handicap,<br class="lg-br">
              in work with the KGA
            </h1>
            <p>
              There are a lot of casual golfers,
              but we do have a lot of users that are serious
              about their handicap.
              Bring more golfers to your course through the
              No.1 golf platform in Korea!
            </p>
          </div>
          <div class="img-box ph-24">
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_digital_handi_img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="digital-section-07">
      <div class="contents-line-box">
        <div class="tit-box">
          <p>
            Implementation Process
          </p>
          <h1>
            We have simplified the entire<br class="lg-br">
            process for you
          </h1>
          <p>
            It only takes 2 weeks after contract
            for total digitalization.
            We do not interfere with operations so no worries.
          </p>
        </div>
        <div class="section-07-list-group">
          <div>
            <strong>STEP 1</strong>
            <p>
              Leave us an inquiry on details of
              your golf course and installation
              request
            </p>
          </div>
          <div>
            <strong>STEP 2</strong>
            <p>
              Personnel is designated and
              will reach you in 2~3 days
            </p>
          </div>
          <div>
            <strong>STEP 3</strong>
            <p>
              On/Offline meetings can be arranged
              to discuss the details further.
            </p>
          </div>
          <div>
            <strong>STEP 4</strong>
            <p>
              After reaching consensus on the
              conditions, we send you the proposal
              and the contract
            </p>
          </div>
          <div>
            <strong>STEP 5</strong>
            <p>
              After the contract, before installation,
              inspection is done and after the installation, education is provided
              for personnel on-site
            </p>
          </div>

          <div>
            <strong>Complete!</strong>
            <p>
              Maintenance is provided for the entire contract period. On top of this, receive detailed monthly reports on operations.
            </p>
            <div class="img-box">
              <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_hole.png" alt="" />
            </div>
          </div>
        </div>


        <div class="pc mt-80">
          <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_timeline.png" alt=""/>
        </div>
      </div>
    </div>




    <div class="digital-section-08">
      <div class="contents-line-box">
        <div class="pc">
          <div class="dp-f align-items-center ps-r">
            <div class="tit-box flex-1">
              <p class="fs-16 fc-f8f8f8">Newsletter</p>
              <h1 class="fs-30 fc-ffffff fw-700 mt-20">
                Receive more updates
                by subscribing
                to the newsletter
              </h1>
            </div>
            <div class="img-box ps-a right-0 wd-340">
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/img_newsletter_02.png" alt=""/>


              <div class="btn-box ps-a right-0 top-150">
                <button class="button-common hp-60 ph-40 bg-ffffff">
                  Subscribe
                </button>
              </div>

            </div>

          </div>
        </div>

        <div class="news-letter mobile">
          <div class="tit-box">
            <p>Newsletter</p>
            <h1>
              Receive more updates<br class="lg-br" />
              by subscribing<br class="lg-br" />
              to the newsletter
            </h1>
          </div>
          <div class="img-box">
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/img_newsletter_02.png" alt=""/>
          </div>
          <div class="btn-box">
            <button class="button-common size-100 hp-60 bg-ffffff">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
  <pb-footer/>
</template>
