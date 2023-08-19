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

export type userInfo = Omit<User, "token"> & {
  likeNumber: number;
  collectionNumber: number;
  score: number;
  couponNumber: number;
  consultationInfo: [
    {
      id: string;
      name: string;
      avatar: string;
      depName: string;
      positionalTitles: string;
      hospitalName: string;
      gradeName: string;
      orderId: string;
    }
  ];
  orderInfo: {
    paidNumber: number;
    receivedNumber: number;
    shippedNumber: number;
    finishedNumber: number;
  };
};
// 家庭档案
// 家庭档案-患者信息
export type Patient = {
  /** 患者ID */
  id: string;
  /** 患者名称 */
  name: string;
  /** 身份证号 */
  idCard: string;
  /** 0不默认  1默认 */
  defaultFlag: 0 | 1;
  /** 0 女  1 男 */
  gender: 0 | 1;
  /** 性别文字 */
  genderValue: string;
  /** 年龄 */
  age: number;
};

// 家庭档案-患者信息列表
export type PatientList = Patient[];
