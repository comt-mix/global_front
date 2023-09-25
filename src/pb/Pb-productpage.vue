<script setup>
import PbHeader from "@/pb/Pb-header.vue";
import PbFooter from "@/pb/Pb-footer.vue";
import PbCommonVisualArea from "@/pb/pb-common-visual-area.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";



const adminImages = [
  {
    id: 0,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_produt_slide_admin_01.png',
    strong: 'Admin',
    h1: 'Course status <br> at a glance through <br>live course monitor',
    p: 'Live analysis using GPS, <br /> LTE network',
  },
  {
    id: 1,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_produt_slide_admin_02.png',
    strong: 'Admin',
    h1: 'F&B order function through <br>which you can order<br>with one touch on the tablet',
    p: 'Simple access to all F&B',
  },
  {
    id: 2,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_produt_slide_admin_03.png',
    strong: 'Admin',
    h1: 'View live scores, <br>manage large groups <br>and tournaments <br>and get results<br>within minutes',
    p: 'Easily manage group rounds',
  },
  {
    id: 3,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_produt_slide_admin_04.png',
    strong: 'Admin',
    h1: 'Automatically collect data <br>on all the rounds <br>played on your course',
    p: 'View analysis on all the rounds on course',
  }

];

const caddieImages = [
  {
    id: 0,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_produt_slide_caddie_01.png',
    strong: 'Caddie',
    h1: 'The messenger makes it <br>possible for carts and <br>the back office to <br>communicate easily',
    p: 'Real-time messenger for issues on course',
  },
  {
    id: 1,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_produt_slide_caddie_02.png',
    strong: 'Caddie',
    h1: 'No need to tick for <br>every 14 clubs per golfer,<br>manage easily with <br>photos as evidence',
    p: 'Caddie Note (album) to keep track of golfers\' clubs',
  },
  {
    id: 2,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_produt_slide_caddie_03.png',
    strong: 'Caddie',
    h1: 'Conveniently receive <br> feedback on all aspects <br>on course and collect data',
    p: 'Automatic collection and analysis of data',
  }

];

const golferImages = [
  {
    id: 0,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_produt_slide_golfer_01.png',
    strong: 'Golfer',
    h1: 'Input scores and <br>send the scores <br>to the mobile app <br>with one touch',
    p: 'Automatic score input and analysis<br>through the mobile app',
  },
  {
    id: 1,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_produt_slide_golfer_02.png',
    strong: 'Golfer',
    h1: 'View the remaining <br>distance, <br>play time through <br>the hole map',
    p: 'Real time view of each hole <br>during the rounds',
  },
  {
    id: 2,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/pc_produt_slide_golfer_03.png',
    strong: 'Golfer',
    h1: 'Golfers can effectively <br>strategize their play<br>with a vivid aerial overview<br>video of each hole, <br>automatically played when <br>entering the hole',
    p: 'Aerial video provided <br> from a drone view for the golfers',
  }

];



</script>

<template>
  <pb-header/>
  <div class="contents">
    <pb-common-visual-area :visual-banner-type="'product'" />

    <div class="product-section-01 pt-0">
      <div class="contents-line-box">
        <div class="tab-group" style="padding-bottom: 15px">
          <ul>
            <li class="active">Admin</li>
            <li>Caddie</li>
            <li>Golfer</li>
            <li>ERP<span class="soon">Commin Soon</span></li>
          </ul>
        </div>

        <div class="tab-show-list-box pc">
          <div>
            <div class="wanna-go-home">
              <carousel :autoplay="3000" :items-to-show="1" :wrap-around="true">
                <slide
                    v-for="(img,index) in adminImages"
                    :key="img"
                    class="slide-item"
                >
                  <div class="txt-box">
                    <strong v-html="img.strong"></strong>
                    <h1 v-html="img.h1"></h1>
                    <p v-html="img.p"></p>
                  </div>
                  <div class="img-box">
                    <img :src="img.src" />
                  </div>
                </slide>
                <template #addons>
                  <navigation v-if="navigation" />
                  <pagination v-if="pagination" />
                </template>
              </carousel>

            </div>
          </div>
          <div>
            <div class="wanna-go-home">
              <carousel :autoplay="3000" :items-to-show="1" :wrap-around="true">
                <slide
                    v-for="(img,index) in caddieImages"
                    :key="img"
                    class="slide-item"
                >
                  <div class="img-box">
                    <img :src="img.src" />
                  </div>
                  <div class="txt-box">
                    <strong v-html="img.strong"></strong>
                    <h1 v-html="img.h1"></h1>
                    <p v-html="img.p"></p>
                  </div>
                </slide>
                <template #addons>
                  <navigation v-if="navigation" />
                  <pagination v-if="pagination" />
                </template>
              </carousel>

            </div>
          </div>
          <div>
            <div class="wanna-go-home">
              <carousel :autoplay="3000" :items-to-show="1" :wrap-around="true">
                <slide
                    v-for="(img,index) in golferImages"
                    :key="img"
                    class="slide-item"
                >
                  <div class="txt-box">
                    <strong v-html="img.strong"></strong>
                    <h1 v-html="img.h1"></h1>
                    <p v-html="img.p"></p>
                  </div>
                  <div class="img-box">
                    <img :src="img.src" />
                  </div>
                </slide>
                <template #addons>
                  <navigation v-if="navigation" />
                  <pagination v-if="pagination" />
                </template>
              </carousel>

            </div>
          </div>
        </div>




        <div class="mobile">
          <div class="txt-box">
            <strong>Admin</strong>
            <h1>
              Course status <br class="lg-br">
              at a glance through <br class="lg-br">
              live course monitor
            </h1>
            <p>Live analysis using GPS, LTE network</p>
          </div>
          <div class="ph-24 mt-40">
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/produt_slide_admin_01.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="product-section-02 mobile">
      <div class="txt-box">
        <strong>Caddie</strong>
        <h1>
          No need to tick for every 14 clubs <br class="lg-br">
          per golfer, manage easily with<br class="lg-br">
          photos as evidence
        </h1>
        <p>Caddie Note (album) to keep track of golfers' clubs</p>
      </div>
      <div class="ph-24 mt-40">
        <img src="https://image.smartscore.kr/smartscore_gloabl/images/produt_slide_caddie_01.png" />
      </div>
    </div>

    <div class="product-section-03 mobile">
      <div class="txt-box">
        <strong>Golfer</strong>
        <h1>
          Golfers can effectively strategize <br class="lg-br">
          their play with a vivid aerial overview <br class="lg-br">
          video of each hole, automatically <br class="lg-br">
          played when entering the hole
        </h1>
        <p>Aerial video provided from a drone view for the golfers</p>
      </div>
      <div class="ph-24 mt-40">
        <img src="https://image.smartscore.kr/smartscore_gloabl/images/produt_slide_golfer_01.png" />
      </div>
    </div>

    <div class="product-seciton-04">
      <div class="contents-line-box">
        <div class="txt-box">
          <strong>ERP</strong>
          <h1>
            ERP solution, <br>
            an integrated total management <br class="lg-br">
            system is coming soon
          </h1>
          <p>
            From HR management to data marketing,<br />
            all at a glance with a dashboard
          </p>
        </div>
        <div class="ph-24 mt-40 ta-c">
          <button class="button-common primary size-100 hp-60">
            <i class="ic-zz" />
            Request Alert
          </button>
        </div>

        <!-- pc -->
        <div class="cont-box-group pc">
          <div class="cont-box">
            <div>
              <strong>Tee Time & Booking Management</strong>
              <p>
                Manage all the booking information all in one,<br>
                from tee time and room reservations <br>
                to cancellations
              </p>
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_product_seciton_04_img_01.png" alt="" />
              </div>
            </div>
          </div>

          <div class="cont-box">
            <div>
              <strong>Employee Management</strong>
              <p>
                Manage the work schedule,<br>
                change in position, and profile of <br>
                all the personnel on course
              </p>
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_product_seciton_04_img_02.png" alt="" />
              </div>
            </div>
          </div>

          <div class="cont-box">
            <div>
              <strong>Payment & Adjustment</strong>
              <p>
                Payment and adjustment will be <br>
                available for all venues, green fee, <br>
                caddie fee, accommodation
              </p>
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_product_seciton_04_img_03.png" alt="" />
              </div>
            </div>
          </div>

          <div class="cont-box">
            <div>
              <strong>
                Overall management of inventory<br>
                and proceedings on course
              </strong>
              <p>
                Effective total management<br>
                in sales, inventory, customer,etc.
              </p>
              <div class="img-box">
                <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_product_seciton_04_img_04.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <!-- 모바일 -->
        <div class="cont-box-group mobile">
          <div class="cont-box">
            <div>
              <strong>Tee Time & Booking Management</strong>
              <p>Manage all the booking information all in one, from tee time and room reservations
                to cancellations</p>
            </div>
          </div>

          <div class="cont-box">
            <div>
              <strong>Tee Time & Booking Management</strong>
              <p>Manage all the booking information all in one, from tee time and room reservations
                to cancellations</p>
            </div>
          </div>

          <div class="cont-box">
            <div>
              <strong>Tee Time & Booking Management</strong>
              <p>Manage all the booking information all in one, from tee time and room reservations
                to cancellations</p>
            </div>
          </div>
        </div>




      </div>
    </div>

    <div class="product-section-05">

    </div>

    <div class="home-section-05">
      <div class="contents-line-box">
        <div class="tit-box">
          <p>Contact Us</p>
          <h1>
            Adopt Smartscore <br />
            to your golf course!
          </h1>
        </div>
        <div class="mt-40">
          <div class="contactus-box">
            <div class="form-group input-type-text">
              <label>Golf Course Name <span>*</span></label>
              <div class="input-group hp-60">
                <input type="text" class="form-control" />
                <div class="input-group__append"></div>
              </div>
            </div>

            <div class="form-group input-type-text row">
              <div class="pr-6 flex-1">
                <label>First Name <span>*</span></label>
                <div class="input-group hp-60">
                  <input type="text" class="form-control" />
                  <div class="input-group__append"></div>
                </div>
              </div>
              <div class="pl-6 flex-1">
                <label>Last Name <span>*</span></label>
                <div class="input-group hp-60">
                  <input type="text" class="form-control" />
                  <div class="input-group__append"></div>
                </div>
              </div>
            </div>

            <div class="dp-f flex-wrap mt-30 gap-16">
              <div style="flex-grow:1;" class="mb-12">
                <div class="form-group select-type-default">
                  <label>Country <span>*</span></label>
                  <div class="select-group hp-60">
                    <input type="search" class="form-control" readonly style="background-color: #fff" />
                    <div class="select-group__append"></div>
                  </div>
                </div>
              </div>

              <div style="flex-grow: 9">
                <div class="form-group input-type-number">
                  <label>Contact Number <span>*</span></label>
                  <div class="input-group hp-60">
                    <div class="input-group__add vietnam"></div>
                    <input type="text" class="form-control" placeholder="+ ) 000000" />
                    <div class="input-group__append"></div>
                  </div>
                </div>
              </div>
            </div>


            <div class="form-group input-type-text mt-30">
              <label>E-mail <span>*</span></label>
              <div class="input-group hp-60">
                <input type="text" class="form-control" />
                <div class="input-group__append"></div>
              </div>
            </div>



            <div class="mt-30 contactus-Agreement">
              <div class="dp-f align-items-start">
                <div class="pr-10">
                  <div class="checkbox-group">
                    <div class="check-box">
                      <label>
                        <input type="checkbox" class="check-item" id="rb1" value="">
                        <span class="check-icon">
                          <i class="ic-check"></i>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <p class="l-p">[Required]  Personal Information Agreement</p>
                  <p class="s-p">View Privacy Policy</p>
                </div>
              </div>

              <button class="button-common primary size-100 hp-69 mt-40">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>




  </div>
  <pb-footer/>
</template>
