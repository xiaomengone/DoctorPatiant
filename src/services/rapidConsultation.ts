import { request } from "@/utils/request";
import type { typeDepAll } from "@/types/rapidConsultation";

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
export { apiGetDepAll, apiPostUpload };
