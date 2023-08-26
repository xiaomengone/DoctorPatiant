import { showImagePreview, showToast } from "vant";
import { ref } from "vue";
import { apiPostLike } from "@/services/home";
import type { resFollowDoctorsItem } from "@/types/home";
import {
  apiCancelOrder,
  apiDeleteOrder,
  apiGetPrescription,
} from "@/services/rapidConsultation";
import { EnumStateValue } from "@/enums";
import type { TypeOrderItem } from "@/types/consultPage";

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
// 取消问诊
const useCancelConsultation = () => {
  const loading = ref<boolean>(false);
  const cancelConsultation = async (item: TypeOrderItem) => {
    try {
      loading.value = true;
      await apiCancelOrder(item.id);
      item.status = EnumStateValue.canceled;
      item.statusValue = "已取消";
      showToast("取消成功");
    } catch {
      showToast("取消失败");
    } finally {
      loading.value = false;
    }
  };
  return { cancelConsultation, loading };
};
// 删除订单按钮
const useOnDeleteOrder = (cb: () => void) => {
  const loading = ref<boolean>(false);
  const onDeleteOrder = async (item: TypeOrderItem) => {
    try {
      loading.value = true;
      await apiDeleteOrder(item.id);
      cb && cb();
      showToast("删除成功");
    } catch {
      showToast("删除失败");
    } finally {
      loading.value = false;
    }
  };
  return { onDeleteOrder, loading };
};

export {
  useFollowInterestLogic,
  useLookPrescription,
  useCancelConsultation,
  useOnDeleteOrder,
};
