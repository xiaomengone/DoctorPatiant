import { request } from "@/utils/request";
import type { Patient } from "@/types/user";
import type {
  typeDepAll,
  QeqOrderpreType,
  resOrderpreTypeItem,
  partialPatientInformation,
  reqPaymentMethod,
} from "@/types/rapidConsultation";

const apiGetDepAll = () => {
  return request<typeDepAll[]>("/dep/all", "GET");
};
const apiPostUpload = (file: File) => {
  const fd = new FormData();
  fd.append("file", file);
  return request<{
    id: string;
    url: string;
  }>("/upload", "POST", fd);
};
const apiGetPreOrder = (req: QeqOrderpreType) => {
  // 获取预支付信息
  return request<resOrderpreTypeItem>("/patient/consult/order/pre", "GET", req);
};
const apiGetPatientInfo = (id: string) => {
  // 查询患者详情
  return request<Patient>(`/patient/info/${id}`);
};
const apiPostConsultorder = (e: partialPatientInformation) => {
  // 生成订单id
  return request<{ id: string }>("/patient/consult/order", "POST", e);
};
const apiPostConsultPay = (e: reqPaymentMethod) => {
  return request<{ payUrl: string }>("/patient/consult/pay", "POST", e);
};

export {
  apiGetDepAll,
  apiPostUpload,
  apiGetPreOrder,
  apiGetPatientInfo,
  apiPostConsultorder,
  apiPostConsultPay,
};
