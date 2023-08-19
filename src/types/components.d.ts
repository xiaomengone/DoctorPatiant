import ReNavBar from "@/components/ReNavBar.vue";
import CpIcon from "@/components/CpIcon.vue";
import CpRadioBtn from "@/components/CpRadioBtn.vue";

declare module "vue" {
  interface GlobalComponents {
    ReNavBar: typeof ReNavBar;
    CpIcon: typeof CpIcon;
    CpRadioBtn: typeof CpRadioBtn;
  }
}
