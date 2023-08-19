<script setup lang="ts">
import { ref } from "vue";

const optionList = [
  { label: "男", value: 1 },
  { label: "女", value: 0 },
  { label: "中性", value: 2 },
];
const gender = ref(0);
</script>

<template>
  <div>
    <CpRadioBtn :optionList="optionList" v-model="gender"></CpRadioBtn>
  </div>
</template>

<style lang="scss" scoped></style>
