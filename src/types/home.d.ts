export type ReqQuery = {
  type: "recommend" | "fatReduction" | "food" | "like";
  current: number;
  pageSize: number;
};
export type TabItemList = {
  title: string;
  id: string;
  coverUrl: string[];
  topics: string[];
  collectionNumber: number;
  commentNumber: number;
  creatorName: string;
  creatorAvatar: string;
  creatorHospatalName: string;
  creatorDep: string;
  creatorTitles: string;
  likeFlag: 0 | 1;
  content: string;
  creatorId: string;
};
export type TabList = {
  pageTotal: number;
  total: number;
  rows: TabItemList[];
};
// 关注医生的列表
export type reqFollowDoctors = {
  current: number;
  pageSize: number;
};
export type resFollowDoctorsItem = {
  id: string;
  name: string;
  avatar: string;
  hospitalName: string;
  gradeName: string;
  depName: string;
  positionalTitles: string;
  likeFlag: 0 | 1;
  serviceFee: number;
  consultationNum: number;
  score: number;
  major: string;
};
export type resFollowDoctors = {
  pageTotal: number;
  total: number;
  rows: resFollowDoctorsItem[];
};
