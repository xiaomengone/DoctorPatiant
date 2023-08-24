export enum enumConsultationConsultation {
  // 就诊类型
  consultDoctor = 1,
  rapidConsultation = 2,
  MedicationConsultation = 3,
}
export enum enumIlnessTime {
  // 患病时间
  week = 1,
  months,
  halfYear,
  year,
}
export enum enumLiverFunction {
  normal = 0,
  abnormal,
  unclear,
}
export enum enumFertilityStatus {
  notHave = 0,
  preparationPregnancy,
  Pregnant,
  lactation,
}

export enum EnumStateValue {
  // 订单的不同状态
  toBePaid = 1, //等支付
  waitingForConsultation = 2, //待接诊
  inConsultation = 3, //咨询中
  completed = 4, //已完成
  canceled = 5, //已取消
  toBeShipped = 11, //待发货
  toBeReceived = 12, //待收货
}

// 聊天室
// 消息类型
export enum MsgType {
  /** 文字聊天 */
  MsgText = 1,
  /** 消息聊天 */
  MsgImage = 4,
  /** 患者信息 */
  CardPat = 21,
  /** 处方信息 */
  CardPre = 22,
  /** 未评价信息 */
  CardEvaForm = 23,
  /** 已评价信息 */
  CardEva = 24,
  /** 通用通知 */
  Notify = 31,
  /** 温馨提示 */
  NotifyTip = 32,
  /** 取消提示 */
  NotifyCancel = 33,
}

// 处方状态
export enum PrescriptionStatus {
  /** 未付款 */
  NotPayment = 1,
  /** 已付款 */
  Payment = 2,
  /** 已失效 */
  Invalid = 3,
}
export enum OrderType {
  // 问诊订单
  /** 待支付 */
  ConsultPay = 1,
  /** 待接诊 */
  ConsultWait = 2,
  /** 问诊中 */
  ConsultChat = 3,
  /** 问诊完成 */
  ConsultComplete = 4,
  /** 取消问诊 */
  ConsultCancel = 5,
  // 药品订单
  /** 待支付 */
  MedicinePay = 10,
  /** 待发货 */
  MedicineSend = 11,
  /** 待收货 */
  MedicineTake = 12,
  /** 已完成 */
  MedicineComplete = 13,
  /** 取消订单 */
  MedicineCancel = 14,
}
