import { useMemo, Ref, forwardRef } from "react";

import { useRecoilValue } from "recoil";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import CloseSharp from "@mui/icons-material/CloseSharp";
import CloseFullscreenSharp from "@mui/icons-material/CloseFullscreenSharp";

import Image from "next/image";

import ThemeToggler from "../../ThemeToggler";
import { Component as Navigation } from "./Navigation";

import { TypedNavigationAtom } from "@dt/dxstudio/react/widget/component/Navigation/state";

import BrandLogoDark from "../../../../asset/logo/brand-logo-dark.png";
import BrandLogoLight from "../../../../asset/logo/brand-logo-light.png";

import BrandLogoMiniDark from "../../../../asset/logo/brand-logo-mini-dark.png";
import BrandLogoMiniLight from "../../../../asset/logo/brand-logo-mini-light.png";
import { useTheme, useMediaQuery } from "@mui/material";

import EditSideBar from "../../EditPage/EditSIdeBar/EditSideBar";
const Logos = {
  dark: BrandLogoDark.src,
  light: BrandLogoLight.src,
};

const MiniLogos = {
  dark: BrandLogoMiniDark.src,
  light: BrandLogoMiniLight.src,
};

interface DrawerContentProps {
  isDrawerMini: boolean;
  onClickToggleDrawer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickToggleDrawerSize: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DrawerContent = (
  {
    isDrawerMini,
    onClickToggleDrawer: handleClickToggleDrawer,
    onClickToggleDrawerSize: handleClickToggleDrawerSize,
  }: DrawerContentProps,
  ref: Ref<HTMLDivElement>
) => {
  const theme = useTheme();

  const md = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const typedNavigationValue = useRecoilValue(TypedNavigationAtom);

  const typedNavigation = useMemo(
    () => typedNavigationValue,
    [typedNavigationValue]
  );

  return (
    <>
      <Box
        ref={ref}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: `1px solid ${theme.palette.control.border}`,
          padding: theme.spacing(0, 1),
          // necessary for content to be below app bar
          ...theme.mixins.toolbar,
        }}
      >
        <Box
          className="drawer-header-logo"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pl: 2,
            pr: isDrawerMini ? 2 : 0,
          }}
        >
          {md && !isDrawerMini && (
            <Box>
              <IconButton size="small" onClick={handleClickToggleDrawerSize}>
                <CloseFullscreenSharp />
              </IconButton>

              <ThemeToggler size="small" />
            </Box>
          )}
        </Box>

        {!md && (
          <IconButton sx={{ flexShrink: 0 }} onClick={handleClickToggleDrawer}>
            <CloseSharp />
          </IconButton>
        )}
      </Box>
      {/* EditSideBar 넣기 */}

      {/* <Navigation
        isDrawerMini={isDrawerMini}
        navigation={typedNavigation.primary}
      /> */}
      {/* <Navigation
        isDrawerMini={isDrawerMini}
        navigation={typedNavigation.secondary}
        sx={{
          marginTop: "auto",
          borderTop: (theme) => `1px solid ${theme.palette.control.border}`,
        }}
      /> */}
    </>
  );
};

export const Component = forwardRef(DrawerContent);
