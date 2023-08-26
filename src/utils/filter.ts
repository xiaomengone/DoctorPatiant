import { consultFlagList, optionList } from "@/services/constants";

const getIllnessTime = (time: number) => {
  return optionList.find((item) => {
    return item.value == time;
  })?.label;
};
const getConsultFlag = (time: number) => {
  return consultFlagList.find((item) => {
    return item.value == time;
  })?.label;
};
export { getIllnessTime, getConsultFlag };
