<script setup lang="ts">
import type { TypeOrderItem } from "@/types/consultPage";
import { EnumStateValue } from "@/enums";
import router from "@/router";
import { computed } from "vue";

defineProps<{
  item: TypeOrderItem;
}>();
</script>

<template>
  <div class="consult-item">
    <div class="head van-hairline--bottom">
      <img class="img" src="@/assets/avatar-doctor.svg" />
      <p>{{ item.docInfo?.name || "暂无医生接诊" }}</p>
      <span>{{ item.statusValue }}</span>
    </div>
    <div class="body" @click="router.push(`/user/consultDtail/${item.id}`)">
      <div class="body-row">
        <div class="body-label">病情描述</div>
        <div class="body-value">{{ item.illnessDesc }}</div>
      </div>
      <div class="body-row">
        <div class="body-label">价格</div>
        <div class="body-value">¥ {{ item.payment.toFixed(2) }}</div>
      </div>
      <div class="body-row">
        <div class="body-label">创建时间</div>
        <div class="body-value tip">{{ item.createTime }}</div>
      </div>
    </div>
    <!-- 不同状态，下面的操作不同 -->
    <!-- 待支付状态 -->
    <div class="foot" v-if="item.status === EnumStateValue.toBePaid">
      <van-button class="gray" plain size="small" round>取消问诊</van-button>
      <van-button
        type="primary"
        plain
        size="small"
        round
        @click="router.push(`/user/consultDtail/${item.id}`)"
        >去支付</van-button
      >
    </div>
    <!-- 待接诊状态 -->
    <div
      class="foot"
      v-if="item.status === EnumStateValue.waitingForConsultation"
    >
      <van-button class="gray" plain size="small" round>取消问诊</van-button>
      <van-button
        type="primary"
        plain
        size="small"
        round
        @click="router.push(`/consult/room?orderId=${item.id}`)"
        >继续沟通</van-button
      >
    </div>
    <!-- 咨询中状态 -->
    <div class="foot" v-if="item.status === EnumStateValue.inConsultation">
      <van-button
        class="gray"
        plain
        size="small"
        round
        v-if="item.prescriptionId"
        >查看处方</van-button
      >
      <van-button
        type="primary"
        plain
        size="small"
        round
        @click="router.push(`/consult/room?orderId=${item.id}`)"
        >继续沟通</van-button
      >
    </div>
    <!-- 已完成状态 -->
    <div class="foot" v-if="item.status === EnumStateValue.completed">
      <div class="more">更多</div>
      <van-button
        class="gray"
        plain
        size="small"
        round
        v-if="item.prescriptionId"
        @click="router.push(`/consult/room?orderId=${item.id}`)"
        >问诊记录</van-button
      >
      <van-button type="primary" plain size="small" round v-else
        >写评价</van-button
      >
      <van-button
        type="primary"
        plain
        size="small"
        round
        v-if="item.evaluateFlag == 1"
        >查看评价</van-button
      >
    </div>
    <!-- 已取消状态 -->
    <div class="foot" v-if="item.status === EnumStateValue.canceled">
      <van-button class="gray" plain size="small" round>删除订单</van-button>
      <van-button type="primary" plain size="small" round
        >咨询其他医生</van-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.consult-item {
  border-radius: 4px;
  box-shadow: 0px 0px 22px 0px rgba(245, 245, 245, 0.1);
  background-color: #fff;
  margin-bottom: 10px;
  .head {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 15px;
    .img {
      width: 20px;
      height: 20px;
    }
    > p {
      flex: 1;
      font-size: 15px;
      padding-left: 10px;
    }
    > span {
      color: var(--cp-tag);
      &.orange {
        color: #f2994a;
      }
      &.green {
        background-color: var(--cp-primary);
      }
    }
  }
  .body {
    padding: 15px 15px 8px 15px;
    .body-row {
      display: flex;
      margin-bottom: 7px;
    }
    .body-label {
      width: 62px;
      font-size: 13px;
      color: var(--cp-tip);
    }
    .body-value {
      width: 250px;
      &.tip {
        color: var(--cp-tip);
      }
    }
  }
  .foot {
    padding: 0 15px 15px 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .van-button {
      margin-left: 10px;
      padding: 0 16px;
      &.gray {
        color: var(--cp-text3);
        background-color: var(--cp-bg);
      }
    }
    .more {
      color: var(--cp-tag);
      flex: 1;
      font-size: 13px;
    }
  }
}
</style>