import type { BoxProps } from "@mui/material";
import { atom } from "recoil";
import type { UploadFile } from "antd";

export const BuildingPage = atom({
  key: "BuildingPage",
  default: "env",
});


/**
 *  한tab당  left와 right 폴더가 있음
 * 각각 left와 right에 들어갈 tsx파일이 있음. 컴포넌트 만들어서 그 파일에 넣으면됨. 그 파일이 화면에 보여지는것
 * left에 따라 right가 어떻게 변경될 것인가는 이 페이지 처럼 recoil써서 관리하게 만들었음.
 * 나중에 더 좋은 방법 생각나면 변경
 */
