// 极速问诊模块
import type {
  enumConsultationConsultation,
  enumLiverFunction,
  enumFertilityStatus,
} from "@/types/rapidConsultation";

export type patientInformation = {
  type: enumConsultationConsultation;
  patientId: string;
  illnessType: 0 | 1;
  patientId: string;
  depId: string;
  illnessDesc: string;
  illnessTime: number | undefined;
  consultFlag: 0 | 1 | undefined;
  liverFunction: enumLiverFunction;
  renalFunction: enumLiverFunction;
  allergicHistory: number;
  fertilityStatus: enumFertilityStatus;
  docId: string;
  couponId: string;
  medicines: { id: string; quantity: number }[];
  pictures: { id: string; url: string }[];
};
export type partialPatientInformation = Partial<patientInformation>;
// 选择科室
export type typeChild = {
  id: string;
  name: string;
  avatar: string;
};
export type typeDepAll = {
  id: string;
  name: string;
  child: typeChild[];
};
// 预支付
export type QeqOrderpreType = {
  type: enumConsultationConsultation;
  illnessType?: 0 | 1;
};
export type resOrderpreTypeItem = {
  type?: enumConsultationConsultation;
  illnessType?: 0 | 1;
  payment: number;
  pointDeduction: number;
  couponDeduction: number;
  couponId: string;
  actualPayment: number;
};
