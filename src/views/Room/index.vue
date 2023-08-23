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

const store = useUserStore();
let socket: Socket;
const route = useRoute();

onMounted(() => {
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
});
onUnmounted(() => {
  // 关闭连接
  socket.close();
});
</script>

<template>
  <div class="room-page">
    <ReNavBar title="问诊室"></ReNavBar>
    <RoomStatus></RoomStatus>
    <RoomAction></RoomAction>
    <RoomMessage></RoomMessage>
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
