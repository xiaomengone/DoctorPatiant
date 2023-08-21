import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { partialPatientInformation } from "@/types/rapidConsultation";
import type { enumConsultationConsultation } from "@/enums/index";

export const useRapidConsult = defineStore(
  "rapidConsult",
  () => {
    const patientInformation = ref<partialPatientInformation>({});

    const setType = (type: enumConsultationConsultation) => {
      // 就诊类型
      return (patientInformation.value.type = type);
    };
    const setIllnessType = (illnessType: 0 | 1) => {
      // 是不是三甲
      return (patientInformation.value.illnessType = illnessType);
    };
    const setDep = (depId: string) => {
      // 选择科室
      return (patientInformation.value.depId = depId);
    };
    const setInquiriesImagesText = (e: partialPatientInformation) => {
      // 图文问诊
      patientInformation.value.illnessDesc = e.illnessDesc;
      patientInformation.value.illnessTime = e.illnessTime;
      patientInformation.value.consultFlag = e.consultFlag;
      patientInformation.value.pictures = e.pictures;
    };

    return {
      setInquiriesImagesText,
      patientInformation,
      setType,
      setIllnessType,
      setDep,
    };
  },
  {
    persist: true,
  }
);
