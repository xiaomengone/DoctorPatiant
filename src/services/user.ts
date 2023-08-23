import { request } from "@/utils/request";
import type {
  User,
  DistinguishingVerificationCode,
  userInfo,
  PatientList,
  AddPatient,
} from "@/types/user";
import type { TyepReqOrderList, TypeOrderList } from "@/types/consultPage";

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
// 家庭档案
const apiGetPatientMylist = () => {
  return request<PatientList>("/patient/mylist", "GET");
};
// 添加患者
const apiPostAddPatiant = (patiant: AddPatient) => {
  return request<{ id: string }>("/patient/add", "POST", {
    name: patiant.name,
    idCard: patiant.idCard,
    defaultFlag: patiant.defaultFlag,
    gender: patiant.gender,
  });
};
// 编辑患者信息
const apiEditPatiant = (patiant: AddPatient) => {
  request<{ id: string }>("/patient/update", "PUT", {
    name: patiant.name,
    idCard: patiant.idCard,
    defaultFlag: patiant.defaultFlag,
    id: patiant.id,
    gender: patiant.gender,
  });
};
const apiDeletePatiant = (id: string | undefined) => {
  return request<{
    id: string;
  }>(`/patient/del/${id}`, "DELETE");
};
const apiGetOrderList = (e: TyepReqOrderList) => {
  return request<TypeOrderList>("/patient/consult/order/list", "GET", e);
};
export {
  apiLogin,
  apiGetCode,
  apiCodeLogin,
  apiGetMyTop,
  apiGetPatientMylist,
  apiPostAddPatiant,
  apiEditPatiant,
  apiDeletePatiant,
  apiGetOrderList,
};
