<script setup lang="ts">
import type { EvaluateDoc } from "@/types/room";
import { showToast } from "vant";
import { computed } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { apiOrderEvaluate } from "@/services/rapidConsultation";
import { inject } from "vue";
import type { Ref } from "vue";
import type { ConsultOrderItem, TypeOrderEvaluate } from "@/types/consultPage";
import { onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";

defineProps<{
  evaluateDoc?: EvaluateDoc;
}>();
const consult = inject<Ref<ConsultOrderItem>>("consult");
const completeEva = inject<(score: number) => void>("completeEva");
let timer: number;
const router = useRouter();
const score = ref<number>();
const content = ref<string>();
const anonymousFlag = ref(false); //是否是匿名评价
const disabled = computed(() => {
  return !score.value && !content.value;
});

const onSubmit = async () => {
  if (!score.value) {
    showToast("请选择评分");
    return;
  }
  if (!content.value) {
    showToast("请填写评价内容");
    return;
  }
  if (consult?.value) {
    if (consult?.value.docInfo) {
      const reqValue = ref<TypeOrderEvaluate>({
        orderId: consult?.value.id,
        score: score.value,
        content: content.value,
        anonymousFlag: anonymousFlag.value ? 1 : 0,
        docId: consult?.value.docInfo.id,
      });
      const res = await apiOrderEvaluate(reqValue.value);
      console.log("res", res);
      completeEva && completeEva(score.value);
      showToast("评价成功，2秒后跳转到问诊记录页面");
      timer = setTimeout(() => {
        console.log("执行了");
        router.push("/user/consult");
      }, 2000);
    }
  }
};
onUnmounted(() => {
  clearTimeout(timer);
});
</script>

<template>
  <div class="evaluate-card" v-if="evaluateDoc">
    <!-- 已评价的div -->
    <p class="title">医生服务评价</p>
    <p class="desc">我们会更加努力提升服务质量</p>
    <van-rate
      :modelValue="evaluateDoc.score"
      size="7vw"
      gutter="3vw"
      color="#FADB14"
      void-icon="star"
      void-color="rgba(0,0,0,0.04)"
    />
  </div>
  <div class="evaluate-card" v-else>
    <p class="title">感谢您的评价</p>
    <p class="desc">本次在线问诊服务您还满意吗？</p>
    <van-rate
      size="7vw"
      gutter="3vw"
      color="#FADB14"
      void-icon="star"
      void-color="rgba(0,0,0,0.04)"
      v-model="score"
    />
    <van-field
      type="textarea"
      maxlength="150"
      show-word-limit
      rows="3"
      v-model="content"
      placeholder="请描述您对医生的评价或是在医生看诊过程中遇到的问题"
    ></van-field>
    <div class="footer">
      <van-checkbox v-model="anonymousFlag">匿名评价</van-checkbox>
      <van-button
        type="primary"
        size="small"
        round
        :class="{ disabled }"
        @click="onSubmit"
      >
        提交评价
      </van-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.evaluate-card {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  padding: 15px;
  .title {
    font-size: 15px;
    margin-bottom: 5px;
  }
  .desc {
    font-size: 12px;
    margin-bottom: 15px;
    color: var(--cp-tip);
  }
  .van-field {
    background-color: var(--cp-bg);
    margin: 15px 0;
    border-radius: 8px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    :deep() {
      .van-checkbox {
        .van-icon {
          font-size: 12px;
        }
        &__label {
          font-size: 12px;
          color: var(--cp-tip);
        }
        height: 16px;
      }
      .van-button {
        padding: 0 16px;
        &.disabled {
          opacity: 1;
          background: #fafafa;
          color: #d9dbde;
          border: #fafafa;
        }
      }
    }
  }
}
</style>
