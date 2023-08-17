import ReNavBar from "@/components/ReNavBar.vue";
declare module "vue" {
  interface GlobalComponents {
    ReNavBar: typeof ReNavBar;
  }
}
