import { enumIlnessTime } from "@/enums";

export const optionList = [
  {
    label: "一周内",
    value: enumIlnessTime.week,
  },
  {
    label: "一月内",
    value: enumIlnessTime.months,
  },
  {
    label: "半年内",
    value: enumIlnessTime.halfYear,
  },
  {
    label: "半年以上",
    value: enumIlnessTime.year,
  },
];
export const consultFlagList = [
  {
    label: "未就诊",
    value: 0,
  },
  {
    label: "就诊过",
    value: 1,
  },
];
