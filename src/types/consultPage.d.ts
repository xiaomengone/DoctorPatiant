import {
  enumConsultationConsultation,
  EnumStateValue,
  OrderType,
} from "@/enums";
import type { Patient } from "./user";
import { OrderType } from "@/enums";
import type { resFollowDoctorsItem } from "@/types/home";

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
// 问诊订单单项信息
export type ConsultOrderItem = Consult & {
  /** 创建时间 */
  createTime: string;
  /** 医生信息 */
  docInfo?: resFollowDoctorsItem;
  /** 患者信息 */
  patientInfo: Patient;
  /** 订单编号 */
  orderNo: string;
  /** 订单状态 */
  status: OrderType;
  /** 状态文字 */
  statusValue: string;
  /** 类型问诊文字 */
  typeValue: string;
  /** 倒计时时间 */
  countdown: number;
  /** 处方ID */
  prescriptionId?: string;
  /** 评价ID */
  evaluateId: number;
  /** 应付款 */
  payment: number;
  /** 优惠券抵扣 */
  couponDeduction: number;
  /** 积分抵扣 */
  pointDeduction: number;
  /** 实付款 */
  actualPayment: number;
};
