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
    name: 'Course'
  },
  {
    id: 1,
    name: 'Community'
  },
  {
    id: 2,
    name: 'Reservation'
  },
  {
    id: 3,
    name: 'Commerce'
  },
  {
    id: 4,
    name: 'Media'
  }
]
const culTab = ref(1);
const tabClick = (index) => {
  culTab.value = index;
}
const images = [
  {
    id: 0,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/m_company_person_slide_img_01.png',
    text: '',
    GCName: '',
  },
  {
    id: 1,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/m_company_person_slide_img_02.png',
    text: '',
    GCName: '',
  },
  {
    id: 3,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/m_company_person_slide_img_03.png',
    text: '',
    GCName: '',
  },
  {
    id: 4,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/m_company_person_slide_img_04.png',
    text: '',
    GCName: '',
  },
  {
    id: 5,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/m_company_person_slide_img_05.png',
    text: '',
    GCName: '',
  }
];


</script>

<template>
  <pb-header/>
  <div class="contents">
    <pb-common-visual-area :visual-banner-type="'company'" />

    <div class="company-section-01">
      <div class="contents-line-box">
        <ul>
        <li>
          <div>
            <span>8↑</span>
            <p>
              consecutive years of <br>
              Success in the industry
            </p>
          </div>
        </li>
        <li>
          <div>
            <span>2015~</span>
            <p>
              Smartscore has been <br class="lg-br" >
              enhancing the <br class="sm-br" />
              experience
              for golf courses and golfers
            </p>
          </div>
        </li>
        <li>
          <div>
            <span>200 Mil.+</span>
            <p>
              Over 200 Mil. Rounds <br class="lg-br" />
              were played <br />
              using Smartscore
            </p>
          </div>
        </li>
        <li>
          <div>
            <span>3.1M+</span>
            <p>
              Mobile app users
              (domestic)
            </p>
          </div>
        </li>
        <li>
          <div>
            <span>
              7+ <br class="lg-br">
              Global<br class="lg-br">
              Subsidaries
            </span>
            <p>
              Singapore, Vietnam,
              Thailand, Indonesia,<br class="sm-br" />
              Taiwan, Philippines,
              Malaysia
            </p>
          </div>
        </li>
        <li>
          <div>
            <span>
              2023 <br class="lg-br">
              Prospective <br class="lg-br">
              Unicorn
            </span>
            <p>
              First in the golf industry to
              be designated <br class="sm-br" />
              as a potential unicorn
            </p>
            </div>
        </li>
      </ul>
      </div>
    </div>
    <div class="company-section-02">
      <h1>
        All about Golf, <br />
        Smartscore possesses <br class="lg-br" />
        various affiliates
      </h1>
    </div>
    <div class="company-section-03">
      <div class="tab-group-3">
        <ul>
          <li>
            <div>
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/company_log_01.png" alt="" />
              </div>
              <span>GMk</span>
              <p>
                Fitting golf club <br />
                specialized brand
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/company_log_02.png" alt="" />
              </div>
              <span>ZESTAIM</span>
              <p>
                Fitting golf club <br />
                specialized brand
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/company_log_03.png" alt="" />
              </div>
              <span>GOLF MAGAZINE KOREA</span>
              <p>
                World renown <br />
                golf media
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/company_log_04.png" alt="" />
              </div>
              <span>MCKAYSON</span>
              <p>
                Contemporary <br />
                golf fashion brand
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/company_log_05.png" alt="" />
              </div>
              <span>KING'S ROCK C.C</span>
              <p>
                Asia Top 100 <br />
                golf course
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/company_log_06.png" alt="" />
              </div>
              <span>WITHRICH</span>
              <p>
                Golf insurance <br />
                company
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="company-section-04">
      <div class="contents-line-box">
        <h1>
          We cover all aspects <br />
          of the golf industry
        </h1>

        <div class="tab-group-2">
          <ul>
            <li v-for="(list, index) in tabList"
                :key="index"
                @click="tabClick(index)"
                :class="culTab === index ? 'active' : ''"
            >
              {{list.name}}
            </li>
          </ul>
        </div>

        <div class="tab-show-list-box">
          <ul>
            <li v-if="culTab === 0" >
              <div>
                <div>
                  <strong>Course</strong>
                  <p>
                    We provide all the services needed to <br class="sm-br">
                    play on the field such as scoring function, <br class="sm-br">
                    golf course information,  golf league, <br class="sm-br">
                    caddie bag delivery etc.
                  </p>
                </div>
                <div class="icon-box course">
                    <div>
                      <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_score.png" alt="" />
                    </div>
                    <div>
                      <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_golf_clubs2.png" alt="" />
                    </div>
                    <div>
                      <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_golf_league.png" alt="" />
                    </div>
                    <div>
                      <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_caddie_bag.png" alt="" />
                    </div>
                  </div>
              </div>
            </li>
            <li v-if="culTab === 1">
              <div>
                <div>
                  <strong>Community</strong>
                  <p>
                    Smartscore makes communication possible <br class="sm-br">
                    between the golfers and with the golfers <br class="sm-br">
                    through golf friends, golf team, join services, <br class="sm-br">
                    and memberships
                  </p>
                </div>
                <div class="icon-box course">
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_golf_friends.png" alt="" />
                  </div>
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_golf_team.png" alt="" />
                  </div>
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_join.png" alt="" />
                  </div>
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_membership.png" alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li v-if="culTab === 2">
              <div>
                <div>
                  <strong>Reservations</strong>
                  <p>
                    We offer you packages domestically <br class="sm-br">
                    and internationally through booking <br class="sm-br">
                    and golf tours (domestic/overseas)
                  </p>
                </div>
                <div class="icon-box reservations">
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_booking.png" alt="" />
                  </div>
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_golf_tour.png" alt="" />
                  </div>
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_overseas_tour.png" alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li v-if="culTab === 3">
              <div>
                <div>
                <strong>Commerce</strong>
                  <p>
                    We have all the services to get yourself equipped <br class="sm-br">
                    with golf gear, from the market service, <br class="sm-br">
                    resell market, club rentals, insurance, <br class="sm-br">
                    wellfare mall etc.
                  </p>
                </div>
                <div class="icon-box reservations">
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_market.png" alt="" />
                  </div>
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_gift.png" alt="" />
                  </div>
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_resell_market.png" alt="" />
                  </div>
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_rental.png" alt="" />
                  </div>
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_insurance.png" alt="" />
                  </div>
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_welfare_mall.png" alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li v-if="culTab === 4">
              <div>
                <div>
                  <strong>Media</strong>
                  <p>
                    From the magazine to online lessons, <br class="sm-br " />
                    we offer media and content <br class="sm-br " />
                    offline and online (mobile)
                  </p>
                </div>
                <div class="icon-box reservations">
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_magazine.png" alt="" />
                  </div>
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_online_lesson.png" alt="" />
                  </div>
                  <div>
                    <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_mobile_yardage.png" alt="" />
                  </div>

                </div>
              </div>
            </li>
          </ul>
          <p>
            The Tomorrow of Golf,<br class="lg-br"/>
            Smartscore
          </p>
        </div>
      </div>
    </div>





    <div class="company-section-05">
      <div class="contents-line-box">
        <div class="tit-box">
          <h1>
            Brilliant peers <br class="sm-br" /> working <br class="lg-br"/>
            with SMARTSCORE
          </h1>
          <p>
            Excellent co-workers in the HQ Korea<br />
            and 7 branches globally are eagerly<br class="lg-br" />
            awaiting you
          </p>
        </div>
      </div>
      <div class="mt-40">
        <base-slide :images="images" />
      </div>
    </div>

    <div class="company-section-06">
      <div class="contents-line-box">
        <div class="tit-box">
          <h1>
            Everyone has an equal voice <br />
            as a step towards a<br class="lg-br"/>
            better company culture
          </h1>
          <p>
            Smartscore Global,<br />
            where flexibility and structure co-exit
          </p>
        </div>

        <div class="mt-40">

          <!-- 피씨 -->
          <div class="pc">
            <div class="list_box">
              <div>
                <div>
                  <div class="img-box">
                    <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_section_06_img01.png" alt="" />
                  </div>
                  <div class="txt-box">
                    <h1>
                      Only fruitful and <br />
                      efficient meetings!

                      <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_plus_circle.svg" alt="" />
                    </h1>
                    <p>
                      We have quick and efficient meetings to <br class="lg-br" />
                      find a solution. After each meeting, each <br class="lg-br" />
                      member contemplates the result <br class="lg-br" />
                      and proceeds to the next step
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="img-box">
                    <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_section_06_img02.png" alt="" />
                  </div>
                  <div class="txt-box">
                    <h1>
                      Exchange ideas<br />
                      and support each other

                      <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_plus_circle.svg" alt="" />
                    </h1>
                    <p>
                      We have quick and efficient meetings to <br class="lg-br" />
                      find a solution. After each meeting, each <br class="lg-br" />
                      member contemplates the result <br class="lg-br" />
                      and proceeds to the next step
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="img-box">
                    <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_section_06_img03.png" alt="" />
                  </div>
                  <div class="txt-box">
                    <h1>
                      Together with young talents <br />
                      from all over the world
                      <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_plus_circle.svg" alt="" />
                    </h1>
                    <p>
                      We have quick and efficient meetings to <br class="lg-br" />
                      find a solution. After each meeting, each <br class="lg-br" />
                      member contemplates the result <br class="lg-br" />
                      and proceeds to the next step
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="img-box">
                    <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_section_06_img04.png" alt="" />
                  </div>
                  <div class="txt-box">
                    <h1>
                      Agile culture leading to <br />
                      maximum work efficiency
                      <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_plus_circle.svg" alt="" />
                    </h1>
                    <p>
                      We have quick and efficient meetings to <br class="lg-br" />
                      find a solution. After each meeting, each <br class="lg-br" />
                      member contemplates the result <br class="lg-br" />
                      and proceeds to the next step
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <!-- 모바일 -->
          <div class="list-box-group mobile">
            <div>
              <div>
                <h1>
                  Only fruitful and <br class="lg-br" />
                  efficient meetings!
                </h1>
                <p>
                  We have quick and efficient meetings to <br class="lg-br" />
                  find a solution. After each meeting, each <br class="lg-br" />
                  member contemplates the result <br class="lg-br" />
                  and proceeds to the next step
                </p>
              </div>
            </div>
            <div>
              <div>
                <h1>
                  Exchange ideas<br class="lg-br" />
                  and support each other
                </h1>
                <p>
                  Each and everyone of us aims for faster
                  and more efficient operations, which is achieved by
                  taking responsibility as a owner of each business
                  and derive ideas without hesitation
                </p>
              </div>
            </div>
            <div>
              <div>
                <h1>
                  Together with young talents<br class="lg-br" />
                  from all over the world
                </h1>
                <p>
                  The personnel in the 6 international
                  entities share business insight
                  and communicate with each other to find
                  a better way of running the business
                </p>
              </div>
            </div>
            <div>
              <div>
                <h1>
                  Agile culture leading to<br class="lg-br" />
                  maximum work efficiency
                </h1>
                <p>
                  We work in an agile way and take ownership
                  in our work to make quick decisions in order to
                  achieve business success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="company-section-07">
      <div class="contents-line-box">
        <div class="tit-box">
          <h1>
            Join us at <br class="lg-br"/>
            Smartscore Global, <br class="lg-br sm-br"/>
            we are waiting for you
          </h1>
        </div>
        <div class="img-box">
          <div>
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/m_recruit_img.png" alt=""/>
          </div>
        </div>
        <button class="button-common size-100 hp-60 bg-ffffff" style="margin-top:-7px;">
          View Job Listings
        </button>
      </div>
    </div>

    <div class="company-section-08">
      <div class="contents-line-box">
        <div class="tit-box">
          <strong>Update News</strong>
          <h1>
            SMARTSCORE <br />
            Update News
          </h1>
        </div>

        <div class="list-board-group" style=" overflow: hidden">
          <div v-for="i in 5">
            <a href="" >
              <div>
                <p>[News]@@@@@ Smartscore22221q2321521brawfawefwevweb3b323n5at3b3fwrcefwea bnwj4t designatedf;wekueflhaepuv bawvfopwayfv-932ypvf39wpa8vy3wab39wp8v3wyabpfv38wa9b</p>
              </div>
              <i class="ic-arrow-line-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
  <pb-footer/>
</template>
