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
