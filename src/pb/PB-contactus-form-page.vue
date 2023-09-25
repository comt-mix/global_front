<script setup>
import PbHeader from "@/pb/Pb-header.vue";
import PbFooter from "@/pb/Pb-footer.vue";
import PbCommonVisualArea from "@/pb/pb-common-visual-area.vue";
</script>

<template>
  <pb-header/>
  <div class="contents">
    <pb-common-visual-area :visual-banner-type="'contactus-form'" />

    <div class="contactus-form-section-01 contact-us-group">
      <div class="contents-line-box">
        <div class="contactus-box">
          <div class="form-group input-type-text">
            <label>Name of Golf Course <span>*</span></label>
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
              <div class="form-group input-type-text">
                <label>Contact Number <span>*</span></label>
                <div class="input-group hp-60">
                  <input type="text" class="form-control" />
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
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>


  </div>
  <pb-footer/>
</template>
