import type { BoxProps } from "@mui/material";
import { atom } from "recoil";

export enum DrawerTopNavMode {
  "mini" = "mini",
  "full" = "full",
}

interface DrawerTopNavStates {
  headerToolbox?: React.ReactNode;
  headerToolboxProps?: BoxProps;
}

export const DrawerTopNavAtom = atom<DrawerTopNavStates>({
  key: "DrawerTopNav",
  default: {
    headerToolbox: null,
    headerToolboxProps: {},
  },
});
