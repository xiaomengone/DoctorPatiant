import type { FieldRule } from "vant";
const mobileRule: FieldRule[] | undefined = [
  { required: true, message: "请填写手机号" },
  { pattern: /^1[3-9]\d{9}$/, message: "手机号格式不正确" },
];

const passwordRules: FieldRule[] | undefined = [
  { required: true, message: "请输入密码" },
  { pattern: /^\w{8,24}$/, message: "密码需8-24个字符" },
];
const codeRules: FieldRule[] | undefined = [
  { required: true, message: "请输入验证码" },
  { pattern: /^\d{6}$/, message: "密码需6个数字" },
];
// 添加患者
const rulerAddPatiant: FieldRule[] | undefined = [
  { required: true, message: "请输入姓名" },
  {
    pattern: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
    message: "请输入正确的姓名，长度在2-16位字符",
  },
];
const rulerIdcard: FieldRule[] | undefined = [
  { required: true, message: "请输入身份证号" },
  {
    pattern:
      /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,
    message: "请正确输入身份证号",
  },
];
export { mobileRule, passwordRules, codeRules, rulerAddPatiant, rulerIdcard };
