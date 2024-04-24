import { atom } from "recoil";

export const clickCCTVlist = atom({
  key: "clickCCTVlist",
  default: [],
});

export const poiClick = atom({
  key: "poiClick",
  default: "",
});

export const cctvclickfloor = atom({
  key: "cctvclickfloor",
  default: "first",
});

export const clickcctvname = atom({
  key: "clickcctvname",
  default: "",
});

export const firstfloor = atom({
  key: "firstfloor",
  default: [],
});
export const secondfloor = atom({
  key: "secondfloor",
  default: [],
});
