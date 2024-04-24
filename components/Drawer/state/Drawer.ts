import type { BoxProps } from "@mui/material";
import { atom } from "recoil";
import type { UploadFile } from "antd";

export enum DrawerMode {
  "mini" = "mini",
  "full" = "full",
}

interface DrawerStates {
  headerToolbox?: React.ReactNode;
  headerToolboxProps?: BoxProps;
}

export const DrawerAtom = atom<DrawerStates>({
  key: "Drawer",
  default: {
    headerToolbox: null,
    headerToolboxProps: {},
  },
});

export const ClickSidebar = atom({
  key: "1",
  default: "1",
});

export const ImgData = atom<UploadFile[]>({
  //이미지 리스트 저장
  key: "imgDataState",
  default: [],
});
export const VideoData = atom<UploadFile[]>({
  //비디오 리스트 저장
  key: "videoDataState",
  default: [],
});
export const GlbData = atom<UploadFile[]>({
  //비디오 리스트 저장
  key: "glbDataState",
  default: [],
});
export const WorldBackgroundData = atom({
  //파일 정보 저장
  key: "worldBackground",
  default: {
    backgroundSetting: "color",
    backgroundImg: "",
    backgroundCutImg: "",
    backgroundColor: "#EBEBEB",
    backgroundSaveColor: "black",
    backgrounOpacity: "1",
    backgroundImgPosition: "center",
    backgroundImgSize: "contain",
    backgroundImgTransform: "scaleX(1) scaleY(1)",
    filter:
      "blur(0px) brightness(100%) contrast(100%) grayscale(0%) invert(0%) saturate(100%) sepia(0%)",
    lastEdited: new Date(),
    name: "삼성스토어 1층",
    updatedBy: "그렉터",
    backgroundRepeat: "no-repeat", // 이미지가 반복되지 않도록 설정
    dateUpDated: "2024 - 02 - 21",
    saveQRIcon: {},
  },
});
export const WorldImgData = atom({
  key: "worldBackground2",
  default: {
    backgroundImg: "",
    backgroundOpacity: "1",
    backgroundImgPosition: "center",
    backgroundImgSize: "contain",
    backgroundImgTransform: "scaleX(1) scaleY(1)",
    backgroundRepeat: "no-repeat",
    filter:
      "blur(0px) brightness(100%) contrast(100%) grayscale(0%) invert(0%) saturate(100%) sepia(0%)",
  },
});
export const EditCurrentPage = atom({
  key: "FileRoot",
  default: "File",
});
export const EditRecentPage = atom({
  key: "FileRootRecent",
  default: "File",
});
export const EditRightbar = atom({
  //오른쪽 슬라이드바 활성/비활성화
  key: "rightbar",
  default: true,
});
export const recentColorState = atom<string[]>({
  key: "recentColorState", // 고유한 키 값
  default: [
    "#EBEBEB",
    "#EBEBEB",
    "#EBEBEB",
    "#EBEBEB",
    "#EBEBEB",
    "#EBEBEB",
    "#EBEBEB",
    "#EBEBEB",
  ], // 기본값
});
