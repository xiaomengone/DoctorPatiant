<script setup lang="ts">
import { useRapidConsult } from "@/stores";
import type {
  QeqOrderpreType,
  resOrderpreTypeItem,
} from "@/types/rapidConsultation";
import type { Patient } from "@/types/user";
import {
  apiGetPreOrder,
  apiGetPatientInfo,
  apiPostConsultorder,
} from "@/services/rapidConsultation";
import { onMounted } from "vue";
import { ref } from "vue";
import { showToast } from "vant";

const store = useRapidConsult();
const { type, illnessType } = store.patientInformation;
const paramsPreOrder = {
  type,
  illnessType,
};
const preOrderIMG = ref<resOrderpreTypeItem>();
const patientMsg = ref<Patient>();
const agree = ref<boolean>(false);
const show = ref<boolean>(false);
const orderGoodsId = ref<string>(); //订单ID
const paymentMethod = ref<number>(); //支付方式

// 获取预支付信息
const getPreOrderIMG = async (paramsPreOrd: QeqOrderpreType) => {
  const res = await apiGetPreOrder(paramsPreOrd);
  preOrderIMG.value = res.data;
  store.patientInformation.couponId = res.data.couponId;
};
// 获取患者详情
const getPatianMsg = async (id: string) => {
  const res = await apiGetPatientInfo(id);
  patientMsg.value = res.data;
};
const next = async () => {
  if (agree.value) {
    show.value = true;
    const res = await apiPostConsultorder(store.patientInformation);
    orderGoodsId.value = res.data.id;
    store.deletePatientInformation();
  } else {
    showToast("请勾选用户协议");
  }
};

onMounted(() => {
  getPreOrderIMG(paramsPreOrder);
  getPatianMsg(store.patientInformation?.patientId || "");
});
</script>

<template>
  <div class="consult-pay-page" v-if="preOrderIMG && patientMsg">
    <ReNavBar title="支付"></ReNavBar>
    <div class="pay-info">
      <p class="tit">图文问诊 {{ preOrderIMG?.payment }} 元</p>
      <img class="img" src="@/assets/avatar-doctor.svg" />
      <p class="desc">
        <span>极速问诊</span>
        <span>自动分配医生</span>
      </p>
    </div>
    <van-cell-group>
      <van-cell title="优惠券" :value="`-¥${preOrderIMG.couponDeduction}`" />
      <van-cell title="积分抵扣" :value="`-¥${preOrderIMG.pointDeduction}`" />
      <van-cell
        title="实付款"
        :value="`¥${preOrderIMG.actualPayment}`"
        class="pay-price"
      />
    </van-cell-group>
    <div class="pay-space"></div>
    <van-cell-group>
      <van-cell
        title="患者信息"
        :value="`${patientMsg.name} | ${
          patientMsg.gender == 0 ? '男' : '女'
        } | ${patientMsg.age}岁`"
      ></van-cell>
      <van-cell
        title="病情描述"
        :label="store.patientInformation.illnessDesc"
      ></van-cell>
    </van-cell-group>
    <div class="pay-schema">
      <van-checkbox v-model="agree"
        >我已同意 <span class="text">支付协议</span></van-checkbox
      >
    </div>
    <van-submit-bar
      button-type="primary"
      :price="preOrderIMG.actualPayment * 100"
      button-text="立即支付"
      text-align="left"
      @click="next"
    />
    <!-- 支付面板 -->
    <van-action-sheet v-model:show="show" title="选择支付方式">
      <div class="pay-type">
        <p class="amount">￥{{ preOrderIMG.actualPayment.toFixed(2) }}</p>
        <van-cell-group>
          <van-cell title="微信支付" @click="paymentMethod = 0">
            <template #icon><cp-icon name="consult-wechat" /></template>
            <template #extra
              ><van-checkbox :checked="paymentMethod === 0"
            /></template>
          </van-cell>
          <van-cell title="支付宝支付" @click="paymentMethod = 1">
            <template #icon><cp-icon name="consult-alipay" /></template>
            <template #extra
              ><van-checkbox :checked="paymentMethod === 1"
            /></template>
          </van-cell>
        </van-cell-group>
        <div class="btn">
          <van-button type="primary" round block>立即支付</van-button>
        </div>
      </div>
    </van-action-sheet>
  </div>
  <div v-else>
    <ReNavBar title="支付"></ReNavBar>
    <van-skeleton title :row="8" />
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 16px 16px 160px;
}
.consult-pay-page {
  padding: 46px 0 50px 0;
}
.pay-info {
  display: flex;
  padding: 15px;
  flex-wrap: wrap;
  align-items: center;
  .tit {
    width: 100%;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .img {
    margin-right: 10px;
    width: 38px;
    height: 38px;
    border-radius: 4px;
    overflow: hidden;
  }
  .desc {
    flex: 1;
    > span {
      display: block;
      color: var(--cp-tag);
      &:first-child {
        font-size: 16px;
        color: var(--cp-text2);
      }
    }
  }
}
.pay-price {
  ::v-deep() {
    .vam-cell__title {
      font-size: 16px;
    }
    .van-cell__value {
      font-size: 16px;
      color: var(--cp-price);
    }
  }
}
.pay-space {
  height: 12px;
  background-color: var(--cp-bg);
}
.pay-schema {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    color: var(--cp-primary);
  }
}
::v-deep() {
  .van-submit-bar__button {
    font-weight: normal;
    width: 160px;
  }
}
.pay-type {
  .amount {
    padding: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  .btn {
    padding: 15px;
  }
  .van-cell {
    align-items: center;
    .cp-icon {
      margin-right: 10px;
      font-size: 18px;
    }
    .van-checkbox :deep(.van-checkbox__icon) {
      font-size: 16px;
    }
  }
}
</style>
