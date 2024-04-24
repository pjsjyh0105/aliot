"use client";

import { useTheme } from "@mui/material/styles";

import { useMemo, useState } from "react";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import { DrawerAtom, DrawerMode } from "./state";
import { useRecoilValue } from "recoil";

import { useMediaQuery } from "@mui/material";

import { Component as AppBar } from "./lib/AppBar";

interface DrawerProps extends React.PropsWithChildren {
  profile?: React.ReactNode;
}

export const Drawer = ({ profile, children }: DrawerProps) => {
  const theme = useTheme();

  const md = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [isDrawerOpenState, setIsDrawerOpenState] = useState<boolean>(true);
  const [drawerModeState, setDrawerModeState] = useState<DrawerMode>(
    DrawerMode.full
  );
  const [isDrawerMouseEnterState, setIsDrawerMouseEnterState] =
    useState<boolean>(false);
  const isDrawerMini = useMemo(
    () => md && DrawerMode.mini === drawerModeState && !isDrawerMouseEnterState,
    [drawerModeState, isDrawerMouseEnterState, md]
  );

  const drawerState = useRecoilValue(DrawerAtom);

  const handleClickToggleDrawerSize = () =>
    setDrawerModeState((prev) =>
      DrawerMode.mini === prev ? DrawerMode.full : DrawerMode.mini
    );

  const handleDrawerToggle = () => setIsDrawerOpenState((prev) => !prev);

  const handleOnClose = (
    e: unknown,
    reason: "escapeKeyDown" | "backdropClick"
  ) => "backdropClick" === reason && handleDrawerToggle();

  const handleMouseEnterDrawer = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawerMini) return;
    setIsDrawerMouseEnterState(true);
  };

  const handleMouseLeaveDrawer = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDrawerMouseEnterState(false);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <CssBaseline />

      {/* ---------------- AppBar */}
      <AppBar
        isDrawerMini={isDrawerMini}
        isDrawerOpen={isDrawerOpenState}
        toolbox={drawerState.headerToolbox}
        toolboxProps={drawerState.headerToolboxProps}
        onClickToggleDrawer={handleDrawerToggle}
        onClickToggleDrawerSize={handleClickToggleDrawerSize}
      />

      {/* ---------------- Drawer */}

      {/* ---------------- Content */}
      <Box
        component="main"
        sx={(theme) => {
          return {
            position: "fixed",
            width: "100%",
            height: "100%",
            overflowY: "scroll", // 스크롤 기능 활성화
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* Internet Explorer 10+ */,
            "&::-webkit-scrollbar": {
              display: "none" /* Chrome, Safari, Opera*/,
            },
            overflowX: "hidden",
            marginTop: `3.75rem`,
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            [theme.breakpoints.up("md")]: {
              marginLeft: `-${isDrawerMini ? 50 : 96}rem`,
              ...(isDrawerOpenState && { marginLeft: 0 }),
            },
          };
        }}
      >
        {/* 몸통 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {children}
        </Box>

        {/* <Footer
          sx={{
            backgroundColor: "control.background",
            borderBottom: (theme) =>
              `1px solid ${theme.palette.control.border}`,
            borderTop: (theme) => `1px solid ${theme.palette.control.border}`,
            mt: "auto",
          }}
        /> */}
      </Box>
    </Box>
  );
};
