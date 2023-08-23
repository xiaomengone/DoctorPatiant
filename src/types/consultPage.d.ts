import { enumConsultationConsultation, EnumStateValue } from "@/enums";

export type TyepReqOrderList = {
  current: number;
  pageSize: number;
  type: enumConsultationConsultation;
};
export type TypePatientInfo = {
  id: string;
  name: string;
  idCard: string;
  gender: number;
  age: string;
};
export type TypeDocInfo = {
  id?: string;
  name?: string;
  avatar?: string;
  depName?: string;
  positionalTitles?: string;
  major?: string;
  hospitalName?: string;
  gradeName?: string;
  score?: number;
  consultationNum?: number;
  serviceFee?: number;
  status?: number;
};
export type TypeOrderItem = {
  id: string;
  orderNo?: string;
  type?: enumConsultationConsultation;
  createTime: string;
  patientInfo?: TypePatientInfo;
  illnessDesc: string;
  illnessTime?: number;
  consultFlag?: number;
  liverFunction?: number;
  renalFunction?: number;
  allergicHistory?: number;
  fertilityStatus?: number;
  docInfo?: TypeDocInfo;
  prescriptionId?: string;
  recordId: string;
  status: EnumStateValue;
  statusValue?: string;
  cancelReason?: string;
  cancelReasonValue?: string;
  cancelProcess?: string;
  countdown?: number;
  payment: number;
  evaluateFlag?: number;
};
export type TypeOrderList = {
  total: number;
  pageTotal: number;
  rows: TypeOrderItem[];
};
