<script setup lang="ts">
import DoctorCard from "@/views/Home/components/DoctorCard.vue";
import { useWindowSize } from "@vueuse/core";
import { apiGetPageDoc } from "@/services/home";
import { computed } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";
import type { reqFollowDoctors, resFollowDoctorsItem } from "@/types/home";

const { width, height } = useWindowSize();
const req = ref<reqFollowDoctors>({
  current: 1,
  pageSize: 5,
});
const lists = ref<resFollowDoctorsItem[]>([]);

const getList = async () => {
  const res = await apiGetPageDoc(req.value);
  lists.value = res.data.rows;
};

onMounted(() => {
  getList();
});
</script>

<template>
  <div class="follow-doctor">
    <div className="head">
      <p>推荐关注</p>
      <a href="javascript:;"> 查看更多<i class="van-icon van-icon-arrow" /></a>
    </div>
    <div class="body">
      <!-- swipe 组件 -->
      <van-swipe
        :loop="false"
        :width="(150 / 390) * width"
        :height="(205 / 844) * height"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in lists" :key="item.id"
          ><DoctorCard :item="item"
        /></van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.follow-doctor {
  background-color: var(--cp-bg);
  height: 250px;
  .head {
    display: flex;
    justify-content: space-between;
    height: 45px;
    align-items: center;
    padding: 0 15px;
    font-size: 13px;
    > a {
      color: var(--cp-tip);
    }
  }
  .body {
    width: 100%;
    overflow: hidden;
  }
}
</style>
