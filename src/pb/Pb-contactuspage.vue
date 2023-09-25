<script setup>
import PbHeader from "@/pb/Pb-header.vue";
import PbFooter from "@/pb/Pb-footer.vue";
import PbCommonVisualArea from "@/pb/pb-common-visual-area.vue";
</script>

<template>
  <pb-header/>
  <div class="contents">
    <pb-common-visual-area :visual-banner-type="'contactus'" />

    <div class="contactus-section-01">
      <div class="contents-line-box">
        <div class="list-box-group">
          <div>
            <div>
              <strong>For Golf Courses</strong>
              <h1>
                Want to implement our <br class="lg-br" />
                solution immediately?
              </h1>
            </div>
            <button class="button-common primary hp-51 size-100">Request</button>
          </div>
          <div>
            <div>
              <strong>For Golfers</strong>
              <h1>
                Any opinion<br class="lg-br" />
                on the mobile app?
              </h1>
            </div>
            <button class="button-common primary hp-51 size-100">Leave Voice of Customer</button>
          </div>
          <div>
            <div>
              <strong>For Companies</strong>
              <h1>
                Want to collaborate<br class="lg-br" />
                with us?
              </h1>
            </div>
            <button class="button-common black hp-51 size-100">Suggest partnership</button>
          </div>
        </div>
      </div>
    </div>


  </div>
  <pb-footer/>
</template>
