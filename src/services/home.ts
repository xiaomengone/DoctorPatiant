import { request } from "@/utils/request";
import type {
  ReqQuery,
  TabList,
  reqFollowDoctors,
  resFollowDoctors,
} from "@/types/home";

const apiGetKnowledge = (e: ReqQuery) => {
  return request<TabList>("/patient/home/knowledge", "GET", {
    type: e.type,
    current: e.current,
    pageSize: e.pageSize,
  });
};
// 获取关注医生
const apiGetPageDoc = (e: reqFollowDoctors) => {
  return request<resFollowDoctors>("/home/page/doc", "GET", {
    current: e.current,
    pageSize: e.pageSize,
  });
};
const apiPostLike = (
  type: "topic" | "knowledge" | "doc" | "disease",
  id: string
) => {
  return request<{ id: string }>("/like", "POST", {
    type,
    id,
  });
};
export { apiGetKnowledge, apiGetPageDoc, apiPostLike };
