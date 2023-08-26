<script setup lang="ts">
import { ref } from "vue";
import KnowledgeCard from "./KnowledgeCard.vue";
import { apiGetKnowledge } from "@/services/home";
import type { TabList, ReqQuery, TabItemList } from "@/types/home";
import { onMounted } from "vue";

const props = defineProps<{
  type: "recommend" | "fatReduction" | "food" | "like";
}>();

const loading = ref(false);
const finished = ref(false);
// card数组
const lists = ref<TabItemList[]>([]);
const reRust = ref<ReqQuery>({
  type: props.type || "recommend",
  current: 1,
  pageSize: 5,
});

const list = async () => {
  const res = await apiGetKnowledge(reRust.value);
  lists.value.push(...res.data.rows);
};
// 滑动到底部时
const onLoad = async () => {
  const res = await apiGetKnowledge(reRust.value);
  lists.value.push(...res.data.rows);
  if (lists.value.length >= res.data.pageTotal) {
    finished.value = true;
  } else {
    reRust.value.current = reRust.value.current + 1;
  }
  loading.value = false;
};
</script>

<template>
  <div class="knowledge-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <knowledge-card :items="lists"></knowledge-card>
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.knowledge-list {
  padding: 0 15px;
}
</style>
