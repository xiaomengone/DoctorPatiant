import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "@/types/user";

export const useUserStore = defineStore(
  "user",
  () => {
    const user = ref<User>();
    const setUser = (e: User) => {
      user.value = e;
    };
    const deleteUser = () => {
      user.value = undefined;
    };

    return { user, setUser, deleteUser };
  },
  {
    persist: true, //使用
  }
);
