<script setup lang="ts">
import { ref } from "vue";
import CpIcon from "@/components/CpIcon.vue";

const active = ref("");
</script>

<template>
  <router-view></router-view>
  <div class="layout-page">
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/home">
        首页
        <template #icon="props">
          <CpIcon
            :name="props.active ? 'home-index-active' : 'home-index-default'"
          ></CpIcon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/article"
        >健康百科
        <template #icon="props">
          <CpIcon
            :name="
              props.active ? 'home-article-active' : 'home-article-default'
            "
          ></CpIcon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/notify"
        >消息中心

        <template #icon="props">
          <CpIcon
            :name="props.active ? 'home-notice-active' : 'home-notice-default'"
          ></CpIcon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/user"
        >我的
        <template #icon="props">
          <CpIcon
            :name="props.active ? 'home-mine-active' : 'home-mine-default'"
          ></CpIcon>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.layout-page {
  :deep() {
    .van-tabbar-item {
      &__icon {
        font-size: 21px;
      }
      &__text {
        font-size: 11px;
      }
      &:not(.van-tabbar-item--active) {
        color: var(--cp-text3);
      }
    }
  }
}
</style>
