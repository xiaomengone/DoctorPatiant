<script setup lang="ts">
const props = defineProps<{
  optionList: {
    label: string;
    value: number | string;
  }[];
  modelValue: number | string | undefined;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", gender: string | number): void;
}>();
</script>

<template>
  <div class="cp-radio-btn">
    <a
      class="item"
      href="javascript:;"
      v-for="item in props.optionList"
      :key="item.value"
      @click="$emit('update:modelValue', item.value)"
      :class="{ active: item.value == props.modelValue }"
      >{{ item.label }}</a
    >
  </div>
</template>

<style lang="scss" scoped>
.cp-radio-btn {
  display: flex;
  flex-wrap: wrap;
  .item {
    height: 32px;
    min-width: 60px;
    line-height: 30px;
    padding: 0 14px;
    text-align: center;
    border: 1px solid var(--cp-bg);
    background-color: var(--cp-bg);
    margin-right: 10px;
    box-sizing: border-box;
    color: var(--cp-text2);
    margin-bottom: 10px;
    border-radius: 4px;
    transition: all 0.3s;
    &.active {
      border-color: var(--cp-primary);
      background-color: var(--cp-plain);
    }
  }
}
</style>
