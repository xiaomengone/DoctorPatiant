export type User = {
  token: "string";
  refreshToken: "string";
  avatar: "string";
  mobile: "string";
  account: "string";
  id: "string";
};

export type DistinguishingVerificationCode =
  | "login"
  | "register"
  | "changeMobile"
  | "forgetPassword"
  | "bindMobile";
