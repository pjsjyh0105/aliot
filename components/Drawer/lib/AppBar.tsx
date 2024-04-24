import { Ref, forwardRef } from "react";

import MuiAppBar from "@mui/material/AppBar";
import Box, { BoxProps } from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import Link from "next/link";

import MenuSharp from "@mui/icons-material/MenuSharp";
import KeyboardDoubleArrowLeftSharp from "@mui/icons-material/KeyboardDoubleArrowLeftSharp";
import OpenInFullSharp from "@mui/icons-material/OpenInFullSharp";

import Image from "next/image";

import InputSearch from "./InputSearch";
import LanguageSelect from "./LanguageSelet";

import BrandLogoDark from "../../../asset/logo/symbole.png";
import BrandLogoLight from "../../../asset/logo/symbole.png";
import BrandLogoTypoDark from "../../../asset/logo/symboleTypo.png";
import BrandLogoTypoLight from "../../../asset/logo/symboleTypo.png";
import AlarmIconDark from "../../../asset/Topbar/DXalarm 40.png";
import AlarmIconLight from "../../../asset/Topbar/DXalarm 40.png";

import DefaultProfile from "../../../asset/Topbar/DXprofile 40.png";

const BrandLogo = {
  dark: BrandLogoDark.src,
  light: BrandLogoLight.src,
};
const BrandLogoTypo = {
  dark: BrandLogoTypoDark.src,
  light: BrandLogoTypoLight.src,
};
const AlarmIcon = {
  dark: AlarmIconDark.src,
  light: AlarmIconLight.src,
};

const renderToolbox = (
  Tools: React.ReactNode,
  headerToolboxProps?: BoxProps
) => {
  const { sx, ...props } = headerToolboxProps ?? {};

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        px: 2,
        mx: 2,
        bgcolor: "background.default",
        borderRadius: "4px",
        ...sx,
      }}
      {...props}
    >
      {Tools}
    </Box>
  );
};

interface AppBarProps {
  isDrawerOpen: boolean;
  isDrawerMini: boolean;
  toolbox: React.ReactNode;
  toolboxProps?: BoxProps;
  onClickToggleDrawer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickToggleDrawerSize: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AppBar = (
  {
    isDrawerOpen,
    isDrawerMini,
    toolbox,
    toolboxProps,
    onClickToggleDrawer: handleClickToggleDrawer,
    onClickToggleDrawerSize: handleClickToggleDrawerSize,
  }: AppBarProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <MuiAppBar
      ref={ref}
      position="fixed"
      sx={(theme) => {
        return {
          [theme.breakpoints.up("md")]: isDrawerOpen && {
            width: `calc(100% - ${isDrawerMini ? 50 : 0}px)`,
            marginLeft: `${isDrawerMini ? 50 : 0}px`,
          },
          ["> .MuiToolbar-root"]: {
            bgcolor: "#FFF",
            minHeight: "3.75rem",
          },
          boxShadow: "none",
        };
      }}
    >
      <Toolbar disableGutters sx={{ px: 1 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleClickToggleDrawer}
          size="small"
          sx={{ mr: 1 }}
        >
          {isDrawerOpen ? <KeyboardDoubleArrowLeftSharp /> : <MenuSharp />}
        </IconButton>

        {isDrawerOpen && isDrawerMini && (
          <IconButton
            color="inherit"
            aria-label="expand drawer"
            size="small"
            onClick={handleClickToggleDrawerSize}
            sx={{ mr: 1 }}
          >
            <OpenInFullSharp />
          </IconButton>
        )}

        <Link
          href="/DXStudio/Home/home/81211"
          color="rgba(255,255,255,1)"
          underline="none"
        >
          {/**ALIOT DT로고 */}
          <Image
            src={BrandLogoLight.src}
            width={36}
            height={36}
            alt="Brand Logo"
            style={{
              position: "absolute",
              top: "0.75rem",
              left: "1.875rem",
            }}
          />
          {/**ALIOT DT로고 타이포*/}
          <Image
            src={BrandLogoTypoLight.src}
            width={111}
            height={25.392}
            alt="Brand Logo Typo"
            style={{
              position: "absolute",
              top: "1.06rem",
              left: "5.5rem",
            }}
          />
        </Link>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={(theme) => {
            return {
              display: "none",
              [theme.breakpoints.up("sm")]: {
                display: "block",
              },
            };
          }}
        >
          {/**여기 input과 다국어 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              position: "absolute",
              top: "0.75rem",
              right: "10rem",
              gap: "1.25rem",
            }}
          >
            <InputSearch size="M" icon="search" disable={false} />
            <LanguageSelect />
          </Box>
        </Typography>
        {/*알람과 프로필 (화면 축소 되어도 안사라지도록.) 
          알람은 변수명 받아서 0 이상이면 " " 되도록
          */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "absolute",
            top: "0.75rem",
            right: "1.875rem",
            gap: "1.25rem",
          }}
        >
          <IconButton
            sx={{
              padding: 0,
              "&:hover": {
                background: "#ECECEC",
              },
              "&:active": {
                background: "#f00",
              },
            }}
          >
            <Badge badgeContent={0} variant="dot" color="secondary">
              <Image
                src={AlarmIconLight.src}
                width={40}
                height={40}
                alt="AlarmIcon"
              />
            </Badge>
          </IconButton>
          <Image
            src={DefaultProfile.src}
            width={36}
            height={36}
            alt="AlarmIcon"
          />
        </Box>
        <Box flexGrow={1} />

        {toolbox && renderToolbox(toolbox, toolboxProps)}

        {/* {profile && profile} */}
      </Toolbar>
    </MuiAppBar>
  );
};

export const Component = forwardRef(AppBar);

//Topbar
