<script setup>
import HeaderLayout from "./HeaderLayout.vue";
import FooterLayout from "./FooterLayout.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <HeaderLayout />
  <RouterView />
  <FooterLayout />
</template>

<style scoped lang="scss"></style>
