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
