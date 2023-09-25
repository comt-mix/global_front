<script setup>
import PbHeader from "@/pb/Pb-header.vue";
import PbFooter from "@/pb/Pb-footer.vue";
import PbCommonVisualArea from "@/pb/pb-common-visual-area.vue";
import PbSsSlide from "@/pb/Pb-ss-slide.vue";
import BaseSlide from "@/components/common/BaseSlide.vue";
import BaseInfiniteSlide from "@/components/common/BaseInfiniteSlide.vue";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});


const images = [
  {
    id: 0,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/home_slide_img_01.png',
    text: 'The multilingual aspect is huge<br /> as an international golf course with <br />international clientele',
    GCName: 'King’s Rock C.C | Korea',
  },
  {
    id: 1,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/home_slide_img_02.png',
    text: 'Much less complaints due to precise tee-off time<br /> tracking thanks to Smartscore\'s live course<br /> management solution',
    GCName: 'The Bluffs Ho Tram Strip | Vietnam',
  },
  {
    id: 3,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/home_slide_img_03.png',
    text: 'We can provide quality service to our customers with<br /> the reduced burden of manually writing down the scores',
    GCName: 'Skylake G.C | vietnam',
  },
  {
    id: 4,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/home_slide_img_04.png',
    text: 'Smartscore tablets are fabulous - <br />bright and stand out in the sunshine,<br />portable and easy to use',
    GCName: 'Van tri G.C | Vietnam',
  },
  {
    id: 5,
    alt: '',
    src: 'https://image.smartscore.kr/smartscore_gloabl/images/home_slide_img_05.png',
    text: 'Even not being on-site, GM is still able to make <br />informed decisions in real-time',
    GCName: 'Montgomery C.C | Vietnam',
  }
];

</script>



<template>
  <pb-header/>
  <div class="contents">
    <pb-common-visual-area :visual-banner-type="'home'"  />

    <div class="home-section-01">
      <div class="contents-line-box">
        <h1>
          SMARTSCORE is a B2B solution for efficient <br class="sm-br" />
          golf course management and operation <br class="sm-br" />
          including sales growth
          and marketing based on database.
        </h1>
      </div>
    </div>

    <div class="home-section-02"
         data-aos="fade-up"
         data-aos-duration="700"
         data-aos-delay="500"
    >
      <div class="contents-line-box">
        <div class="tit-box">
          <p>Digitalization</p>
          <h1>Experience the smart course
            operation<br /> through Digitalization</h1>
        </div>


        <!-- mobile -->
        <div class="mobile">
          <div class="article-box-01">
            <div class="txt-box">
              <p>
                Operate seamlessly with <br />
                Smartscore's integrated solution <br />
                such as live course monitor, <br />
                group round management, <br />
                F&B sales, Customer DB, etc.
              </p>
            </div>
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/home_ssection_01_img.png" alt="">
          </div>
          <div class="article-box-02">
            <div class="txt-box">
              <p>
                An innovative experience for golfers <br />
                through automated score analysis <br />
                and an upgraded operational efficiency <br />
                for golf courses.
              </p>
            </div>
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/home_ssection_02_artilce2_img.png" alt="">
          </div>
          <div class="article-box-03">
            <div class="txt-box">
              <p>
                Employee administration including <br />
                round management and CS education <br />
                for smooth and flawless operation.
              </p>
            </div>
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/home_ssection_02_artilce3_img.png" alt="">
          </div>
          <div class="article-box-04">
            <div class="txt-box">
              <p>
                On/offline marketing and operations <br />
                consulting based on experience<br />
                in collaboration with<br />
                over 400 golf courses<br />
              </p>
            </div>
            <div class="txt-box-2">
              <div>
                <span>50M+</span>
                <p>
                  Annual visiting golfers <br />
                  in Korea
                </p>
              </div>
              <div>
                <span>514</span>
                <p>
                  Domestic golf courses <br />
                  visited
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- pc -->
        <div class="pc">
          <div class="bdr-20 bg-0079ff pa-20 pr-0 dp-f justify-between mt-80">
            <p class="fc-ffffff fs-20 pt-20">
              Operate seamlessly with <br />
              Smartscore's integrated solution <br />
              such as live course monitor,<br />
              group round management,<br />
              F&B sales, Customer DB, etc.
            </p>
            <div class="wd-720">
              <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_home_section_01_img.png" />
            </div>
          </div>
          <div style="margin-left: -12px; margin-right: -12px; margin-top:24px; ">
            <div class="dp-f">
              <div class="ph-12 flex-1">
                <div class="bg-ffffff bdr-20 pa-40 ">
                  <p class="fs-20 fw-600">
                    An innovative experience for golfers <br />
                    through automated score analysis <br />
                    and an upgraded operational efficiency <br />
                    for golf courses.
                  </p>
                  <div class="wd-240 mt-30 ml-at ps-r minus-mb-20">
                    <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_home-section-02_img_02.png" />
                  </div>
                </div>
              </div>
              <div class="ph-12 flex-1">
                <div class="bg-ffffff bdr-20 pa-40 pb-0 overflow-h">
                  <p class="fs-20 fw-600">
                    Employee administration including <br />
                    round management and CS education <br />
                    for smooth and flawless operation.
                  </p>
                  <div class="wd-320 mt-30 ml-at ps-r minus-mb-40">
                    <img src="https://image.smartscore.kr/smartscore_gloabl/images/pc_home-section-02_img_01.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bdr-20 mt-20 bs-cover bp-center pa-40" style="background-image: url(https://image.smartscore.kr/smartscore_gloabl/images/pc_home_ssection_02_artilce4_img.png)">
            <div class="txt-box">
              <p class="fc-ffffff fs-22">
                On/offline marketing and operations consulting <br />
                based on experience in collaboration <br />
                with over 400 golf courses
              </p>
            </div>
            <div class="txt-box-2 fc-ffffff dp-f mt-180">
              <div>
                <span class="fs-37 fw-700">50M+</span>
                <p class="fs-15 mt-12">
                  Annual visiting golfers <br />
                  in Korea
                </p>
              </div>
              <div class="ml-40">
                <span class="fs-37 fw-700">514</span>
                <p class="fs-15 mt-12">
                  Domestic golf courses <br />
                  visited
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="home-section-03"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay="500"
    >
      <div class="tit-box">
        <p>Reviews</p>
        <h1>
          Smartscore solution <br/>
          confirmed by the customers
        </h1>
      </div>

      <div class="mds-slide" >
        <div class="pc">
          <base-infinite-slide :images="images" :size="3.5" :navigation="true" />
        </div>
        <div class="mobile">
          <base-infinite-slide :images="images" :size="1.2" :navigation="false" />
        </div>
      </div>
    </div>

    <div class="home-section-04"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay="500"
    >
      <div class="contents-line-box">
        <div class="tit-box">
          <p>Partners</p>
          <h1>
            400<span class="fc-0079ff">+</span> domestic and international<br  />
            golf courses are with Smartscore
          </h1>
        </div>

        <!-- pc -->
        <div class="mt-40 pc">
          <div class="">
            <ul class="partners">
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Amber_Hills.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Sky_Lake.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Montgomerie_Links.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/partners_Sono_Belle.png" alt="" /></div></li>

              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Taekwang_Jeongsan.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_The_Bluffs_Ho_Tram.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Van_Tri.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Vinpearl_Nha.png" alt="" /></div></li>

              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_VPG_Hai_Phong.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_VPG_Nam_Hoi_An.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_VPG_Phu_Quoc.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_lavie.png" alt="" /></div></li>

              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_blackstone.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_southcafe.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_sage.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_wo.png" alt="" /></div></li>

              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_jack.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_king.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_he.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_yourgc.png" alt="" /></div></li>
            </ul>
          </div>
        </div>

        <!-- pc -->
        <div class="mt-40 mobile">
          <div class="">
            <ul class="partners">
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Amber_Hills.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Montgomerie_Links.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Sky_Lake.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/partners_Sono_Belle.png" alt="" /></div></li>

              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Taekwang_Jeongsan.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_The_Bluffs_Ho_Tram.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Van_Tri.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_Vinpearl_Nha.png" alt="" /></div></li>

              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_VPG_Hai_Phong.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_VPG_Nam_Hoi_An.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_VPG_Phu_Quoc.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_lavie.png" alt="" /></div></li>

              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_blackstone.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_southcafe.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_sage.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_wo.png" alt="" /></div></li>

              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_jack.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_king.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_he.png" alt="" /></div></li>
              <li><div><img src="https://image.smartscore.kr/smartscore_gloabl/images/Partners_yourgc.png" alt="" /></div></li>
            </ul>
          </div>
        </div>
      </div>
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

            <div class="form-group input-type-text mt-30">
              <label>E-mail <span>*</span></label>
              <div class="input-group hp-60">
                <input type="text" class="form-control" />
                <div class="input-group__append"></div>
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

    <div class="home-section-06">
      <div class="contents-line-box">
        <div class="news-letter">
          <div class="tit-box">
            <p>Newsletter</p>
            <h1>
              Subscribe newsletter for <br />
              Smartscore updates!
            </h1>
          </div>
          <div class="img-box">
            <img src="https://image.smartscore.kr/smartscore_gloabl/images/img_newsletter.png" alt=""/>
          </div>
          <div class="btn-box">
            <button class="button-common  white size-100 hp-60 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pb-footer/>
</template>
