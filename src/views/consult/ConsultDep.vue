<script setup lang="ts">
import { ref } from "vue";
import { apiGetDepAll } from "@/services/rapidConsultation";
import { onMounted } from "vue";
import type { typeDepAll, typeChild } from "@/types/rapidConsultation";
import { computed } from "vue";
import { useRapidConsult } from "@/stores/index";

const active = ref(0);
const list = ref<typeDepAll[]>([]);
const store = useRapidConsult();

const getDepAll = async () => {
  const res = await apiGetDepAll();
  list.value = res.data;
};

onMounted(() => {
  getDepAll();
});
</script>

<template>
  <div class="consult-dep-page">
    <ReNavBar title="选择科室" />
    <div class="wrapper">
      <van-sidebar v-model="active">
        <van-sidebar-item :title="item.name" v-for="(item, index) in list" />
      </van-sidebar>
      <div class="sub-dep">
        <router-link
          to="/consult/illness"
          v-for="item in list[active]?.child"
          :key="item.id"
          @click="store.setDep(item.id)"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.van-sidebar {
  width: 114px;
  &-item {
    padding: 14px;
    color: var(--cp-tag);
    &--select {
      color: var(--cp-main);
      font-weight: normal;
      &::before {
        display: none;
      }
    }
  }
}
.consult-dep-page {
  padding-top: 46px;
  .wrapper {
    height: calc(100vh - 46px);
    overflow: hidden;
    display: flex;
    .sub-dep {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      > a {
        display: block;
        padding: 14px 30px;
        color: var(--cp-dark);
      }
    }
  }
}
</style>
