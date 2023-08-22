<script setup lang="ts">
import {
  apiGetPatientMylist,
  apiPostAddPatiant,
  apiEditPatiant,
  apiDeletePatiant,
} from "@/services/user";
import { ref } from "vue";
import { onMounted } from "vue";
import type { PatientList } from "@/types/user";
import { useRouter } from "vue-router";
import type { AddPatient } from "@/types/user";
import { computed } from "vue";
import { rulerAddPatiant, rulerIdcard } from "@/utils/rules";
import {
  showToast,
  type FormInstance,
  showConfirmDialog,
  showDialog,
} from "vant";
import { useRoute } from "vue-router";
import { useRapidConsult } from "@/stores";

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
const route = useRoute();
const selectedClass = ref(false);
const selectId = ref<string>();
const store = useRapidConsult();
const router = useRouter();

//查询所有患者
const getPatientList = async () => {
  const res = await apiGetPatientMylist();
  patientList.value = res.data;
  if (!selectId.value) {
    // 默认选中的样式
    selectId.value = patientList.value[0].id;
  }
};
const addPatient = (item: AddPatient) => {
  if (item) {
    showRight.value = true;
    const { name, idCard, defaultFlag, gender, id } = item;
    patientMsg.value = {
      name,
      idCard,
      defaultFlag,
      gender,
      id,
    };
  } else {
    patientMsg.value = { ...initPatientMsg };
    form.value?.resetValidation();
  }
};
const back = () => {
  showRight.value = false;
};
// 顶部保存按钮
const onSubmit = async () => {
  await form.value?.validate();
  if (+patientMsg.value.idCard.slice(-2, -1) % 2 !== patientMsg.value.gender) {
    return showToast("请选择正确的性别");
  }
  if (patientMsg.value.id) {
    const res = await apiEditPatiant(patientMsg.value);
    showRight.value = false;
    showDialog({
      title: "温馨提示",
      message: "成功修改信息",
    }).then(() => {
      getPatientList();
    });
  } else {
    await apiPostAddPatiant(patientMsg.value);
    showRight.value = false;
    showDialog({
      title: "温馨提示",
      message: "添加成功",
    }).then(() => {
      getPatientList();
    });
  }
};
const deletePatiant = async () => {
  await apiDeletePatiant(patientMsg.value.id);
  showRight.value = false;
  showToast("删除成功");
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
const selectItem = (item: AddPatient) => {
  selectId.value = item.id;
};
const next = () => {
  store.setPatiantId(selectId.value || "");
  router.push("/consult/consultPay");
};
onMounted(() => {
  getPatientList();
});
const isConsultation = computed(() => {
  return !!route.query.isChange;
});
</script>

<template>
  <div class="patient-page">
    <ReNavBar :title="isConsultation ? '选择患者' : '家庭档案'"></ReNavBar>
    <div class="patient-change" v-if="isConsultation">
      <h3>请选择患者信息</h3>
      <p>以便医生给出更准确的治疗，信息仅医生可见</p>
    </div>
    <div class="patient-list">
      <div
        class="patient-item"
        v-for="item in patientList"
        :key="item.id"
        @click="selectItem(item)"
        :class="{ selected: item.id == selectId ? true : false }"
      >
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <span class="id">{{
            item.idCard.replace(/^(.{6}).+(.{4})$/, "$1********$2")
          }}</span>
          <span>{{ item.gender }}</span>
          <span>{{ item.age }}岁</span>
        </div>
        <div class="icon">
          <cp-icon name="user-edit" @click.stop="addPatient(item)" />
        </div>
        <div class="tag" v-if="item.defaultFlag">默认</div>
      </div>
      <div class="patient-add" v-if="patientList!?.length < 6">
        <cp-icon name="user-add" @click="addPatient" />
        <p>添加患者</p>
      </div>
      <div class="patient-tip">最多可添加 6 人</div>
    </div>
    <div class="patient-next" v-if="isConsultation">
      <van-button type="primary" round block @click="next">下一步</van-button>
    </div>
    <!-- 点击添加患者后的弹窗 -->
    <van-popup
      v-model:show="showRight"
      position="right"
      :style="{ width: '90%', height: '100%' }"
    >
      <ReNavBar
        :title="patientMsg.id ? '修改信息' : '添加患者'"
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
      <van-action-bar v-if="patientMsg.id">
        <van-action-bar-button @click="deletePatiant"
          >删除</van-action-bar-button
        >
      </van-action-bar>
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
.van-action-bar {
  padding: 0 10px;
  margin-bottom: 10px;
  .van-button {
    color: var(--cp-price);
    background-color: var(--cp-bg);
  }
}
.patient-change {
  padding: 15px;
  > h3 {
    font-weight: normal;
    margin-bottom: 5px;
  }
  > p {
    color: var(--cp-text3);
  }
}
.patient-next {
  padding: 15px;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
}
</style>
