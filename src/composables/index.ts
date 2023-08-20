import { showToast } from "vant";
import { ref } from "vue";
import { apiPostLike } from "@/services/home";
import type { resFollowDoctorsItem } from "@/types/home";

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

export { useFollowInterestLogic };
