"use client";

import { useTheme } from "@mui/material/styles";

import { useMemo, useState } from "react";

import Box from "@mui/material/Box";

import { DrawerAtom, DrawerMode } from "./state";
import { useRecoilValue } from "recoil";

import { useMediaQuery } from "@mui/material";

import { Component as AppBar } from "./lib/AppBar";

interface DrawerProps extends React.PropsWithChildren {
  profile?: React.ReactNode;
}

export const DrawerTopNav = ({ profile, children }: DrawerProps) => {
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

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw", margin: "0" }}>
      {/* <CssBaseline /> */}

      {/* ---------------- AppBar */}
      <AppBar
        isDrawerMini={isDrawerMini}
        isDrawerOpen={isDrawerOpenState}
        toolbox={drawerState.headerToolbox}
        toolboxProps={drawerState.headerToolboxProps}
        onClickToggleDrawer={handleDrawerToggle}
        onClickToggleDrawerSize={handleClickToggleDrawerSize}
      />

      {/* ---------------- Content */}
      <Box
        component="main"
        sx={(theme) => {
          return {
            overflowY: "auto",
            overflowX: "hidden",
            marginTop: "3.75rem",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            marginLeft: 0,
          };
        }}
      >
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
      </Box>
    </Box>
  );
};
