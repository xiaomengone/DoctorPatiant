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
  illnessTime: number;
  consultFlag: 0 | 1;
  liverFunction: enumLiverFunction;
  renalFunction: enumLiverFunction;
  allergicHistory: number;
  fertilityStatus: enumFertilityStatus;
  docId: string;
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
