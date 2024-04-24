import { atom } from "recoil";

import * as BABYLON from "babylonjs";

export const BabylonScene = atom<BABYLON.Scene | null>({
  key: "babylonScene", // Recoil 상태의 고유한 식별자로 사용될 키
  default: null, // 초기값, 여기서는 Scene 또는 null로 설정
});

export const BabylonCam = atom<BABYLON.ArcRotateCamera | null>({
  //바빌론 씬 저장
  key: "BabylonCam",
  default: null,
});
export const BabylonEngine = atom<BABYLON.Engine | null>({
  //바빌론 씬 저장
  key: "BabylonEngine",
  default: null,
});

export const SelectObj = atom<BABYLON.Mesh | null>({
  //바빌론 씬 저장
  key: "SelectObj",
  default: null,
});
