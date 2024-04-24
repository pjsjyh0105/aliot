//클릭시 보라색적용되는 버튼

import { styled } from "@mui/material/styles";
import { Box, Button, ThemeProvider, createTheme } from "@mui/material";
export const CustomColorBtn = styled(Button)<{
  widthed?: number;
  backColor?: string;
  backhvColor?: string;
  backAcColor?: string;
  fontColor?: string;
}>(({ widthed, backAcColor, backColor, fontColor, backhvColor }) => ({
  backgroundColor: backColor ? backColor : "#E9E9E9",
  width: widthed ? `${widthed}rem` : "4.4375rem",
  height: "2.25rem",
  borderRadius: "0.1875rem",
  color: fontColor ? fontColor : "#2F2F2F",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Noto Sans KR",
  fontSize: "0.8125rem",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: backhvColor? backhvColor:"#CDCDCD",
  },
  "&:active": {
    backgroundColor: backAcColor ? backAcColor : "#ACACAC",
  },
}));
