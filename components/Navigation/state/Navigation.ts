import { atom, selector } from "recoil";
import type { SvgIcon, SvgIconProps } from "@mui/material";

export type NavigationItem = {
  name: string;
  href: string;
  subheader?: boolean;
  icon?: typeof SvgIcon;
  iconProps?: SvgIconProps;
  dev?: boolean;
  abstract?: boolean;
  desc?: string;
  hidden?: boolean;
  children?: Array<NavigationItem>;
};

export type EditNavigationItem = {
  name: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  value: number;
};

export type NavigationList = Array<NavigationItem>;
export type EditNavigationList = Array<EditNavigationItem>;

import BuildingIcon from "../../../asset/component/EditPage/Sidebar/DXbuilding.svg";
import React from "react";
export const editSidelist = [
  {
    name: "파일",
    value: 1,
    icon: "File",
  },
  {
    name: "업로드",
    value: 2,
    icon: "Upload",
  },
  {
    name: "환경",
    value: 3,
    icon: "Env",
  },
  {
    name: "건물",
    icon: "Building",
    value: 4,
  },
  {
    name: "에셋",
    value: 5,
    icon: "Asset",
  },
  {
    name: "에셋 모델 설정",
    value: 6,
    icon: "AssetSetting",
  },
  {
    name: "카메라 시나리오",
    icon: "CameraScenario",
    value: 7,
  },
  {
    name: "QR",
    icon: "QR",
    value: 8,
  },
];

interface TypedNavigation {
  primary: NavigationList;
  secondary: NavigationList;
}

// export const TypedNavigationAtom = atom<TypedNavigation>({
//   key: "typedNavigation",
//   default: { primary, secondary },
// });

// export const NavigationAtom = selector<NavigationList>({
//   key: "navigation",
//   get: ({ get }) => {
//     const typedNavigationState = get(TypedNavigationAtom);
//     return [...typedNavigationState.primary, ...typedNavigationState.secondary];
//   },
// });
