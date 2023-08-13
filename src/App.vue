<script setup lang="ts">
import { showLoadingToast } from "vant";

const showText = () => {
  showLoadingToast({
    message: "加载中...",
    forbidClick: true,
  });
};
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <div @click="showText">提示文字</div>
  </div>
</template>

<style lang="scss" scoped>
.a {
  background-color: var(--cp-orange);
}
</style>
