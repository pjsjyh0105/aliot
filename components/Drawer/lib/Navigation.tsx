import { Ref, createElement, forwardRef, useState } from "react";

import type {
  NavigationItem,
  NavigationList,
  EditNavigationItem,
  EditNavigationList,
} from "../../Navigation/state";
import { editSidelist } from "../../Navigation/state";
import Box, { BoxProps } from "@mui/material/Box";

import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";

import { useParams, usePathname, useRouter } from "next/navigation";
import { Locale } from "../../types/intl/config";

interface NavigationProps extends BoxProps {
  isDrawerMini: boolean;
  navigation: NavigationList;
}
interface EditNavigationProps extends BoxProps {
  isDrawerMini: boolean;
  editnavigation: EditNavigationList;
}

const isDev = process.env.NODE_ENV === "development";

const EditNavigation = (
  { isDrawerMini, editnavigation, ...props }: EditNavigationProps,
  ref: Ref<HTMLDivElement>
) => {
  const params = useParams<{ locale: Locale }>();
  const pathname = usePathname().replace(`/${params.locale}`, "") || "/";
  const router = useRouter();

  const handleClickNavigationItem = (
    e: React.MouseEvent<HTMLElement>,
    item?: EditNavigationItem
  ) => {
    // if (!md) setDrawerState((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box ref={ref} component="nav" {...props}>
      {editSidelist.map((item, i) => (
        <List
          key={`sysmenu_${i}`}
          sx={{
            p: 0,
            bgcolor: "rgba(255, 255, 255, 0.04)",
            borderBottom: (theme) =>
              `1px solid ${theme.palette.control.border}`,
          }}
        >
          <ListItemButton
            alignItems="flex-start"
            onClick={(e) => handleClickNavigationItem(e, item)}
            title={item.name}
            sx={{
              px: isDrawerMini ? 2 : 3,
              py: 1.5,
              height: "auto", // 수정된 부분
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
          >
            <ListItemIcon
              sx={{ minWidth: 38, color: "primary.main", my: "auto" }}
            >
              {/* {item.icon}  */}
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                color: "text.primary",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: "20px",
                mb: "auto",
              }}
              sx={{ my: 0 }}
            />
          </ListItemButton>
        </List>
      ))}
    </Box>
  );
};

export const Component = forwardRef(EditNavigation);
// EditNavigation.displayName = "EditNavigation";

// export default EditNavigation;
