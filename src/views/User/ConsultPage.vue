<script setup lang="ts">
import { ref } from "vue";
import ConsultList from "./components/ConsultList.vue";
import { enumConsultationConsultation } from "@/enums";

const active = ref<enumConsultationConsultation>(1);
</script>

<template>
  <div class="consult-page">
    <ReNavBar title="问诊记录" />
    <van-tabs sticky v-model:active="active">
      <van-tab
        title="极速问诊"
        :name="enumConsultationConsultation.consultDoctor"
        ><consult-list :type="enumConsultationConsultation.consultDoctor"
      /></van-tab>
      <van-tab
        title="找医生"
        :name="enumConsultationConsultation.rapidConsultation"
        ><consult-list :type="enumConsultationConsultation.rapidConsultation"
      /></van-tab>
      <van-tab
        title="开药问诊"
        :name="enumConsultationConsultation.MedicationConsultation"
        ><consult-list
          :type="enumConsultationConsultation.MedicationConsultation"
      /></van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" scoped>
.consult-page {
  padding-top: 46px;
  background-color: var(--cp-bg);
  min-height: calc(100vh - 46px);
}
</style>
