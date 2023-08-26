<script setup lang="ts">
import { apiPostUpload } from "@/services/rapidConsultation";
import { Toast } from "vant";
import type { UploaderAfterRead } from "vant/lib/uploader/types";
import { ref } from "vue";

const text = ref<string>();
defineProps<{
  disabled: boolean;
}>();
const emit = defineEmits<{
  (e: "getMsg", text: string): void;
  (e: "send-image", image: { id: string; url: string }): void;
}>();
const sendMsg = () => {
  emit("getMsg", text.value || "");
  text.value = "";
};

const sendImage: UploaderAfterRead = async (data) => {
  if (Array.isArray(data)) return;
  if (!data.file) return;
  const t = Toast.loading("正在上传");
  const res = await apiPostUpload(data.file);
  t.close();
  emit("send-image", res.data);
};
</script>

<template>
  <div class="room-action">
    <van-field
      type="text"
      class="input"
      :border="false"
      placeholder="问医生"
      autocomplete="off"
      :disabled="disabled"
      v-model="text"
      @keyup.enter="sendMsg"
    ></van-field>
    <van-uploader
      :preview-image="false"
      :disabled="true"
      :after-read="sendImage"
    >
      <cp-icon name="consult-img" />
    </van-uploader>
  </div>
</template>

<style lang="scss" scoped>
.room-action {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 16px;
  z-index: 1;
  box-sizing: border-box;
  .input {
    background-color: var(--cp-bg);
    border: none;
    border-radius: 25px;
    margin-right: 10px;
    padding: 8px 15px;
  }
  .cp-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
