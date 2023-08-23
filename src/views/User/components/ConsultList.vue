<script setup lang="ts">
import ConsultItem from "./ConsultItem.vue";
import { apiGetOrderList } from "@/services/user";
import type { enumConsultationConsultation } from "@/enums";
import type {
  TyepReqOrderList,
  TypeOrderList,
  TypeOrderItem,
} from "@/types/consultPage";

import { ref } from "vue";
import { onMounted } from "vue";

const props = defineProps<{
  type: enumConsultationConsultation;
}>();
const req = ref<TyepReqOrderList>({
  current: 1,
  pageSize: 5,
  type: props.type,
});
const OrderList = ref<TypeOrderList>({
  total: 0,
  pageTotal: 0,
  rows: [],
});
const OrderListArr = ref<TypeOrderItem[]>([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  // 滑动到底部时触发
  apiGetOrderList(req.value)
    .then((res) => {
      OrderListArr.value.push(...res.data.rows);
      OrderList.value = res.data;
      if (OrderList.value.total <= OrderListArr.value.length) {
        finished.value = true;
      } else {
        req.value.current = req.value.current + 1;
      }
      loading.value = false;
    })
    .catch(() => {
      console.log("获取失败");
    });
};
</script>

<template>
  <div class="consult-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <consultItem v-for="item in OrderListArr" :key="item.id" :item="item" />
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.consult-list {
  padding: 10px 15px;
}
</style>
