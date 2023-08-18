import { request } from "@/utils/request";
import type {
  User,
  DistinguishingVerificationCode,
  userInfo,
} from "@/types/user";

const apiLogin = (mobile: string, password: string) => {
  return request<User>("/login/password", "POST", {
    mobile,
    password,
  });
};
const apiGetCode = (mobile: string, type: DistinguishingVerificationCode) => {
  return request<{ code: string }>("/code", "GET", {
    mobile,
    type,
  });
};
const apiCodeLogin = (mobile: string, code: string) => {
  return request<User>("/login", "POST", {
    mobile,
    code,
  });
};
//我的---页面上半部分展示
const apiGetMyTop = () => {
  return request<userInfo>("/patient/myUser", "GET");
};
export { apiLogin, apiGetCode, apiCodeLogin, apiGetMyTop };
