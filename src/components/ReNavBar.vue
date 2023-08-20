<script setup lang="ts">
import { useRouter } from "vue-router";

const props = defineProps<{
  leftText?: string;
  rightText?: string;
  title?: string;
  back?: () => void;
}>();
const emit = defineEmits<{
  (e: "navClickRight"): void;
}>();
const onClickRight = () => {
  emit("navClickRight");
};
const router = useRouter();
const onClickLeft = () => {
  if (props.back) return props.back();
  if (history.state?.back) {
    router.go(-1);
  } else router.push("/");
};
</script>

<template>
  <div class="reNavBar"></div>
  <van-nav-bar
    :title="props.title"
    :left-text="props.leftText"
    :right-text="props.rightText"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<style lang="scss" scoped>
:deep() {
  .van-nav-bar__content {
    .van-icon-arrow-left {
      color: var(--cp-text1);
      font-size: 18px;
    }
  }
  .van-nav-bar__title {
    font-size: 15px;
  }
}
</style>
