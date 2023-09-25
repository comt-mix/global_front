<script setup>
defineProps({
  culTab: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <li v-if="culTab === 0">
    <div>
      <div>
        <strong>{{ $t("Course") }}</strong>
        <p>
          {{ $t("We provide all the services needed to") }}
          {{ $t("play on the field such as scoring function,")
          }}{{ $t("golf course information, golf league,") }} {{ $t("caddie bag delivery etc.") }}
        </p>
      </div>
      <div class="icon-box course">
        <div>
          <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_score.png" alt="" />
        </div>
        <div>
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_golf_clubs2.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_golf_league.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_caddie_bag.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </li>
  <li v-if="culTab === 1">
    <div>
      <div>
        <strong>{{ $t("Community") }}</strong>
        <p>
          Smartscore makes communication possible between the golfers and with the golfers through
          golf friends, golf team, join services, and memberships
        </p>
      </div>
      <div class="icon-box course">
        <div>
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_golf_friends.png"
            alt=""
          />
        </div>
        <div>
          <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_golf_team.png" alt="" />
        </div>
        <div>
          <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_join.png" alt="" />
        </div>
        <div>
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_membership.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </li>
  <li v-if="culTab === 2">
    <div>
      <div>
        <strong>{{ $t("Reservations") }}</strong>
        <p>
          We offer you packages domestically and internationally through booking and golf tours
          (domestic/overseas)
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
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_overseas_tour.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </li>
  <li v-if="culTab === 3">
    <div>
      <div>
        <strong>{{ $t("Commerce") }}</strong>
        <p>
          We have all the services to get yourself equipped with golf gear, from the market service,
          resell market, club rentals, insurance, wellfare mall etc.
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
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_resell_market.png"
            alt=""
          />
        </div>
        <div>
          <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_rental.png" alt="" />
        </div>
        <div>
          <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_insurance.png" alt="" />
        </div>
        <div>
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_welfare_mall.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </li>
  <li v-if="culTab === 4">
    <div>
      <div>
        <strong>{{ $t("Media") }}</strong>
        <p>
          From the magazine to online lessons, we offer media and content offline and online (mobile)
        </p>
      </div>
      <div class="icon-box reservations">
        <div>
          <img src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_magazine.png" alt="" />
        </div>
        <div>
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_online_lesson.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://image.smartscore.kr/smartscore_gloabl/icon/icon_mobile_yardage.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss"></style>
