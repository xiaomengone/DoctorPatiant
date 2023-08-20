<script setup lang="ts">
import { apiGetPatientMylist, apiPostAddPatiant } from "@/services/user";
import { ref } from "vue";
import { onMounted } from "vue";
import type { PatientList } from "@/types/user";
import { useRouter } from "vue-router";
import type { AddPatient } from "@/types/user";
import { computed } from "vue";
import { rulerAddPatiant, rulerIdcard } from "@/utils/rules";
import { showToast, type FormInstance } from "vant";

const patientList = ref<PatientList>();
const showRight = ref(false);
const optionList = [
  { label: "男", value: 1 },
  { label: "女", value: 0 },
];
const gender = ref(0);
const initPatientMsg: AddPatient = {
  name: "",
  idCard: "",
  defaultFlag: 0,
  gender: 1,
};
const patientMsg = ref<AddPatient>({
  ...initPatientMsg,
});
const form = ref<FormInstance>();

//查询所有患者
const getPatientList = async () => {
  const res = await apiGetPatientMylist();
  patientList.value = res.data;
};
const addPatient = () => {
  showRight.value = true;
  patientMsg.value = { ...initPatientMsg };
};
const back = () => {
  showRight.value = false;
};
const onSubmit = async () => {
  await form.value?.validate();
  if (+patientMsg.value.idCard.slice(-2, -1) % 2 !== patientMsg.value.gender) {
    return showToast("请选择正确的性别");
  }
  await apiPostAddPatiant(patientMsg.value);
  showRight.value = false;
  getPatientList();
};
const defaultFlag = computed({
  get: () => {
    return patientMsg.value.defaultFlag == 1 ? true : false;
  },
  set: (value) => {
    return (patientMsg.value.defaultFlag = value ? 1 : 0);
  },
});
onMounted(() => {
  getPatientList();
});
</script>

<template>
  <div class="patient-page">
    <ReNavBar title="家庭档案"></ReNavBar>
    <div class="patient-list">
      <div class="patient-item" v-for="item in patientList" :key="item.id">
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <span class="id">{{
            item.idCard.replace(/^(.{6}).+(.{4})$/, "$1********$2")
          }}</span>
          <span>{{ item.gender }}</span>
          <span>{{ item.age }}岁</span>
        </div>
        <div class="icon"><cp-icon name="user-edit" /></div>
        <div class="tag" v-if="item.defaultFlag">默认</div>
      </div>
      <div class="patient-add" v-if="patientList!?.length < 6">
        <cp-icon name="user-add" @click="addPatient" />
        <p>添加患者</p>
      </div>
      <div class="patient-tip">最多可添加 6 人</div>
    </div>
    <!-- 点击添加患者后的弹窗 -->
    <van-popup
      v-model:show="showRight"
      position="right"
      :style="{ width: '90%', height: '100%' }"
    >
      <ReNavBar
        title="添加患者"
        rightText="保存"
        :back="back"
        @navClickRight="onSubmit"
      ></ReNavBar>
      <van-form autocomplete="off" ref="form">
        <van-field
          label="真实姓名"
          placeholder="请输入真实姓名"
          v-model="patientMsg.name"
          :rules="rulerAddPatiant"
        />
        <van-field
          label="身份证号"
          placeholder="请输入身份证号"
          v-model="patientMsg.idCard"
          :rules="rulerIdcard"
        />
        <van-field label="性别" class="pb4">
          <!-- 单选按钮组件 -->
          <template #input>
            <CpRadioBtn
              :optionList="optionList"
              v-model="patientMsg.gender"
            ></CpRadioBtn>
          </template>
        </van-field>
        <van-field label="默认就诊人">
          <template #input>
            <van-checkbox :icon-size="18" round v-model="defaultFlag" />
          </template>
        </van-field>
      </van-form>
    </van-popup>
  </div>
</template>

<style lang="scss" scoped>
.patient-page {
  padding: 46px 0 80px;
}
.patient-list {
  padding: 15px;
}
.patient-item {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: var(--cp-bg);
  border-radius: 8px;
  margin-bottom: 15px;
  position: relative;
  border: 1px solid var(--cp-bg);
  transition: all 0.3s;
  overflow: hidden;
  .info {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    span {
      color: var(--cp-tip);
      margin-right: 20px;
      line-height: 30px;
      &.name {
        font-size: 16px;
        color: var(--cp-text1);
        width: 80px;
        margin-right: 0;
      }
      &.id {
        color: var(--cp-text2);
        width: 180px;
      }
    }
  }
  .icon {
    color: var(--cp-tag);
    width: 20px;
    text-align: center;
  }
  .tag {
    position: absolute;
    right: 60px;
    top: 21px;
    width: 30px;
    height: 16px;
    font-size: 10px;
    color: #fff;
    background-color: var(--cp-primary);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.selected {
    border-color: var(--cp-primary);
    background-color: var(--cp-plain);
    .icon {
      color: var(--cp-primary);
    }
  }
}
.patient-add {
  background-color: var(--cp-bg);
  color: var(--cp-primary);
  text-align: center;
  padding: 15px 0;
  border-radius: 8px;
  .cp-icon {
    font-size: 24px;
  }
}
.patient-tip {
  color: var(--cp-tag);
  padding: 12px 0;
}
.pb4 {
  padding-bottom: 4px;
}
</style>
