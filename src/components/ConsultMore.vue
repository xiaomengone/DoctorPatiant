<script setup lang="ts">
import { ref, computed } from "vue";
import { useLookPrescription } from "@/composables";
import type { TypeOrderItem } from "@/types/consultPage";

const props = defineProps<{
  item: TypeOrderItem;
}>();
const emit = defineEmits<{
  (e: "originalPrescription", id: string): void; //查看处方
  (e: "onDeleteOrder", id: TypeOrderItem): void; //删除处方
}>();
const { originalPrescription } = useLookPrescription();
const showPopover = ref(false);
const actions = computed(() => {
  return [
    { text: "查看处方", disabled: !props.item.prescriptionId },
    { text: "删除订单" },
  ];
});
const onSelect = (action: { text: string }, i: number) => {
  if (i === 1) {
    // 删除处方
    // onDeleteOrder(props.item);
    emit("onDeleteOrder", props.item);
  }
  if (i === 0) {
    // 查看处方
    // originalPrescription(props.item.prescriptionId || "");
    emit("originalPrescription", props.item.prescriptionId || "");
  }
};
</script>

<template>
  <div class="more">
    <van-popover
      v-model:show="showPopover"
      :actions="actions"
      @select="onSelect"
      placement="top-start"
    >
      <template #reference>
        <div>更多</div>
      </template>
    </van-popover>
  </div>
</template>

<style lang="scss" scoped>
.more {
  color: var(--cp-tag);
  flex: 1;
  font-size: 13px;
}
</style>
