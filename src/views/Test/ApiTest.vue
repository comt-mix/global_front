<script setup>
import {Axios} from "@/api/index";

const apiTest = () => {
  return Axios.get("/api");
};

const getApi = async () => {
  try {
    const res = await apiTest();
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <h1>Api Test</h1>
  <button @click="getApi">불러오기</button>
</template>

<style scoped>
button {
  width: 100px;
  height: 100px;
  background-color: bisque;
}
</style>
