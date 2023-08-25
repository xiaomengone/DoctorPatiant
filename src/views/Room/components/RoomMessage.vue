<script setup lang="ts">
import { MsgType } from "@/enums";
import type { Message } from "@/types/room";
import { consultFlagList, optionList } from "@/services/constants";
import { showImagePreview } from "vant";
import { useUserStore } from "@/stores";
import dayjs from "dayjs";
import { apiGetPrescription } from "@/services/rapidConsultation";
import EvaluateCard from "@/views/Room/components/EvaluateCard.vue";

defineProps<{
  item: Message;
}>();
const store = useUserStore();

const formatTime = (time: string) => {
  return dayjs(time).format("MM-DD");
};
const getIllnessTime = (time: number) => {
  return optionList.find((item) => {
    return item.value == time;
  })?.label;
};
const getConsultFlag = (time: number) => {
  return consultFlagList.find((item) => {
    return item.value == time;
  })?.label;
};

const clickLook = (
  // 病情描述卡片的查看图片
  pickTrue: {
    id: string;
    url: string;
  }[]
) => {
  const newArr = pickTrue.map((item) => {
    return item.url;
  });
  showImagePreview(newArr);
};
const originalPrescription = async (id: string) => {
  //查看医生原始处方
  const res = await apiGetPrescription(id);
  console.log("res", res.data.url);
  showImagePreview([res.data.url]);
};
</script>

<template>
  <!-- 患者卡片 -->
  <div class="msg msg-illness" v-if="item.msgType == MsgType.CardPat">
    <div class="patient van-hairline--bottom">
      <p>
        {{ item.msg.consultRecord.patientInfo.name }}
        {{ item.msg.consultRecord.patientInfo.genderValue }}
        {{ item.msg.consultRecord.patientInfo.age }}岁
      </p>
      <p>
        {{ getIllnessTime(item.msg.consultRecord.patientInfo.illnessTime) }} |
        {{ getConsultFlag(item.msg.consultRecord.patientInfo.consultFlag) }}
      </p>
    </div>
    <van-row>
      <van-col span="6">病情描述</van-col>
      <van-col span="18">{{ item.msg.consultRecord.illnessDesc }}</van-col>
      <van-col span="6">图片</van-col>
      <van-col span="18" @click="clickLook(item.msg.consultRecord.pictures)"
        >点击查看</van-col
      >
    </van-row>
  </div>
  <!-- 通知-通用 -->
  <div class="msg msg-tip" v-if="item.msgType === MsgType.Notify">
    <div class="content">
      <span>{{ item.msg.content }}</span>
    </div>
  </div>
  <!-- 通知-温馨提示 -->
  <div class="msg msg-tip" v-if="item.msgType == MsgType.NotifyTip">
    <div class="content">
      <span class="green">温馨提示：</span>
      <span>{{ item.msg.content }}</span>
    </div>
  </div>
  <!-- 通知-结束 -->
  <div
    class="msg msg-tip msg-tip-cancel"
    v-if="item.msgType === MsgType.NotifyCancel"
  >
    <div class="content">
      <span>{{ item.msg.content }}</span>
    </div>
  </div>
  <!-- 发送文字 -->
  <div
    class="msg msg-to"
    v-if="item.msgType === MsgType.MsgText && item.from == store.user?.id"
  >
    <div class="content">
      <div class="time">
        {{ formatTime(item.createTime) }}
      </div>
      <div class="pao">
        {{ item.msg.content }}
      </div>
    </div>
    <van-image :src="item.fromAvatar" />
  </div>
  <!-- 发送图片 -->
  <div
    class="msg msg-to"
    v-if="item.msgType === MsgType.MsgImage && store.user?.id === item.from"
  >
    <div class="content">
      <div class="time">
        {{ formatTime(item.createTime) }}
      </div>
      <van-image fit="contain" :src="item.msg.picture?.url" />
    </div>
    <van-image :src="store.user?.avatar" />
  </div>
  <!-- 接收文字 -->
  <div
    class="msg msg-from"
    v-if="item.msgType === MsgType.MsgText && item.from !== store.user?.id"
  >
    <van-image
      src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_3.jpg"
    />
    <div class="content">
      <div class="time">{{ formatTime(item.createTime) }}</div>
      <div class="pao">{{ item.msg.content }}</div>
    </div>
  </div>
  <!-- 接收图片 -->
  <div
    class="msg msg-from"
    v-if="item.msgType === MsgType.MsgImage && store.user?.id !== item.from"
  >
    <van-image :src="item.fromAvatar" />
    <div class="content">
      <div class="time">{{ formatTime(item.createTime) }}</div>
      <van-image fit="contain" :src="item.msg.picture?.url" />
    </div>
  </div>
  <!-- 处方卡片 -->
  <div class="msg msg-recipe" v-if="item.msgType === MsgType.CardPre">
    <div class="content" v-if="item.msg.prescription">
      <div class="head van-hairline--bottom">
        <div class="head-tit">
          <h3>电子处方</h3>
          <p @click="originalPrescription(item.msg.prescription.id)">
            原始处方
            <van-icon name="arrow"></van-icon>
          </p>
        </div>
        <p>
          {{ item.msg.prescription.name }}
          {{ item.msg.prescription.genderValue }}
          {{ item.msg.prescription.age }}岁
          {{ item.msg.prescription.diagnosis }}
        </p>
        <p>开方时间：{{ item.msg.prescription.createTime }}</p>
      </div>
      <div class="body">
        <div
          class="body-item"
          v-for="i in item.msg.prescription.medicines"
          :key="i.id"
        >
          <div class="durg">
            <p>{{ i.name }} {{ i.specs }}</p>
            <p>{{ i.usageDosag }}</p>
          </div>
          <div class="num">x{{ i.quantity }}</div>
        </div>
      </div>
      <div class="foot"><span>购买药品</span></div>
    </div>
  </div>
  <!-- 评价卡片 -->
  <div
    class="msg msg-comment"
    v-if="
      item.msgType === MsgType.CardEva || item.msgType === MsgType.CardEvaForm
    "
  >
    <EvaluateCard :evaluateDoc="item.msg.evaluateDoc"></EvaluateCard>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/room.scss";
</style>
