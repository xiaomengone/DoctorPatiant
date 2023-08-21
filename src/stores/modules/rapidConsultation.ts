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
      return (patientInformation.value.depId = depId);
    };
    return { patientInformation, setType, setIllnessType, setDep };
  },
  {
    persist: true,
  }
);
