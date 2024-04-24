//클릭시 보라색적용되는 버튼

import { styled } from "@mui/material/styles";
import { Box, Button, ThemeProvider, createTheme } from "@mui/material";
export const PurpleBtn = styled(Button)<{
  selected?: boolean;
  widthed?: number;
}>(({ selected, widthed, theme }) => ({
  backgroundColor: selected ? "#F0EEFF" : "#F5F5F5",
  width: widthed ? `${widthed}rem` : "4.4375rem",
  height: "2.25rem",
  borderRadius: "0.1875rem",
  color: selected ? "#554AD3" : "#2F2F2F",
  justifyContent: "center",
  alignItems: "center",
  border: selected ? "1.8px solid #7E73FE" : "1.8px solid transparent",
  fontFamily: "Noto Sans",
  fontSize: "0.9375rem",
  "&:hover": {
    backgroundColor: selected ? "#F0EEFF" : "#F5F5F5",
    color: selected ? "#554AD3" : "#2F2F2F",
  },
  "&:active": {
    border: "1.8px solid #7E73FE",
    backgroundColor: "#F0EEFF",
    color: "#554AD3",
  },
}));
