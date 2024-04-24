//최근 사용했던 색상 보여주는 컴포넌트, 추후 전역으로 변경 예정
import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";

import { Button, ThemeProvider, createTheme } from "@mui/material";
import { WorldBackgroundData } from "../../../../Drawer/state";
import { useRecoilState, useRecoilValue } from "recoil";
const RecentColor = ({ recentColor }: { recentColor: any }) => {
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const [userecentColors, setUseRecentColors] = useState<string[]>(
    new Array(8).fill("#EBEBEB")
  );
  //최신컬러에서 클릭시 전역으로 색 지정되도록.
  const clickColor = (value) => {
    setWorldData((prevWorldData) => ({
      ...prevWorldData,
      backgroundColor: value,
    }));
  };
  useEffect(() => {}, []);

  return (
    <Box>
      {recentColor != null ? (
        recentColor.map((color, index) => (
          <Box
            sx={{
              backgroundColor: color,
              width: "1.4375rem",
              height: "1.4375rem",
              display: "inline-block",
              marginRight: index != 7 ? "0.35rem" : "0rem",
              borderRadius: "0.1875rem",
              cursor: "pointer",
            }}
            key={index}
            onClick={() => {
              clickColor(color);
            }}
          ></Box>
        ))
      ) : (
        <Box></Box>
      )}
    </Box>
  );
};

export default RecentColor;
