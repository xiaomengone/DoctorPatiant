<script setup lang="ts">
import RoomStatus from "@/views/Room/components/RoomStatus.vue";
import RoomAction from "@/views/Room/components/RoomAction.vue";
import RoomMessage from "@/views/Room/components/RoomMessage.vue";
import { onMounted } from "vue";
import io, { Socket } from "socket.io-client";
import { useUserStore } from "@/stores";
import { baseURL } from "@/utils/request";
import { useRoute } from "vue-router";
import { onUnmounted } from "vue";
import { useRouter } from "vue-router";
import type { TimeMessages, Message } from "@/types/room";
import { MsgType, OrderType } from "@/enums";
import { ref } from "vue";
import type { ConsultOrderItem } from "@/types/consultPage";
import { getConsultOrderDetail } from "@/services/rapidConsultation";
import { nextTick } from "vue";

const store = useUserStore();
let socket: Socket;
const route = useRoute();
const router = useRouter();
const list = ref<Message[]>([]);
const initialMsg = ref(true);

const back = () => {
  router.push("/user");
};
const consult = ref<ConsultOrderItem>();
const loadConsult = async () => {
  const res = await getConsultOrderDetail(route.query.orderId as string);
  consult.value = res.data;
};

onMounted(() => {
  loadConsult();
  socket = io(baseURL, {
    auth: {
      token: `Bearer ${store.user?.token}`,
    },
    query: {
      orderId: route.query.orderId,
    },
  });
  socket.on("connect", () => {
    // 连接成功时，触发connect事件
    console.log("连接成功");
  });
  socket.on("disconnect", () => {
    console.log("连接关闭");
  });
  socket.on("error", () => {
    console.log("发生错误");
  });
  socket.on("chatMsgList", ({ data }: { data: TimeMessages[] }) => {
    const arr: Message[] = [];
    data.forEach((item) => {
      arr.push({
        msgType: MsgType.Notify,
        msg: {
          content: item.createTime,
        },
        createTime: item.createTime,
        id: item.createTime,
      });
      arr.push(...item.items);
      list.value.unshift(...arr);
    });
    // list.value = arr;
    console.log(2, arr);
    if (initialMsg.value) {
      nextTick(() => {
        window.scrollTo(0, document.body.scrollHeight);
        initialMsg.value = false;
      });
    }
  });
  // 监听状态变化
  socket.on("statusChange", async () => {
    const res = await getConsultOrderDetail(route.query.orderId as string);
    consult.value = res.data;
  });
});

const ongetMsg = (text: string) => {
  // 子组件向父组件传递消息
  // 发送信息需要  发送人  收消息人  消息类型  消息内容
  socket.emit("sendChatMsg", {
    from: store.user?.id,
    to: consult.value?.docInfo?.id,
    msgType: MsgType.MsgText,
    msg: { content: text },
  });
};
const sendImage = (img: { id: string; url: string }) => {
  socket.emit("sendChatMsg", {
    from: store.user?.id,
    to: consult.value?.docInfo?.id,
    msgType: MsgType.MsgImage,
    msg: { picture: img },
  });
};

onMounted(() => {
  socket.on("receiveChatMsg", async (event) => {
    list.value.push(event);
    await nextTick();
    window.scrollTo(0, document.body.scrollHeight);
  });
});
onUnmounted(() => {
  // 关闭连接
  socket.close();
});
</script>

<template>
  <div class="room-page">
    <ReNavBar title="问诊室" :back="back"></ReNavBar>
    <RoomStatus
      :status="consult?.status"
      :countdown="consult?.countdown"
    ></RoomStatus>

    <RoomMessage v-for="item in list" :key="item.id" :item="item"></RoomMessage>
    <RoomAction
      :disabled="consult?.status !== OrderType.ConsultChat"
      @getMsg="ongetMsg"
      @send-image="sendImage"
    ></RoomAction>
  </div>
</template>

<style lang="scss" scoped>
.room-page {
  padding-top: 90px;
  padding-bottom: 60px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: var(--cp-bg);
  .van-pull-refresh {
    width: 100%;
    min-height: calc(100vh - 150px);
  }
}
</style>
