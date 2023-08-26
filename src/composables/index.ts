import { showImagePreview, showToast } from "vant";
import { ref } from "vue";
import { apiPostLike } from "@/services/home";
import type { resFollowDoctorsItem } from "@/types/home";
import {
  apiDeleteOrder,
  apiGetPrescription,
} from "@/services/rapidConsultation";

// 封装关注逻辑
const useFollowInterestLogic = () => {
  const loading = ref<boolean>(false);
  const followInterest = async (
    type: "topic" | "knowledge" | "doc" | "disease",
    item: { id: string; likeFlag: number }
  ) => {
    loading.value = true;
    try {
      await apiPostLike(type, item.id);
      item.likeFlag = item.likeFlag == 0 ? 1 : 0;
    } catch {
      showToast("操作失败");
    } finally {
      loading.value = false;
    }
  };
  return { loading, followInterest };
};

// 封装查看处方逻辑
const useLookPrescription = () => {
  const originalPrescription = async (id: string) => {
    const res = await apiGetPrescription(id);
    showImagePreview([res.data.url]);
  };
  return { originalPrescription };
};
// 封装删除问诊记录

export { useFollowInterestLogic, useLookPrescription };
