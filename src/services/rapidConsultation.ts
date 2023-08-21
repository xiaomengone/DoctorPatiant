import { request } from "@/utils/request";
import type { typeDepAll } from "@/types/rapidConsultation";

const apiGetDepAll = () => {
  return request<typeDepAll[]>("/dep/all", "GET");
};
export { apiGetDepAll };
