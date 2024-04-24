//env에서 배경/맵 선택 컴포넌트
import { useState } from "react";
import EnvSetColor from "./EnvSetColor";
import { Box, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { WorldBackgroundData } from "../../../../Drawer/state";
import { EditCurrentPage } from "../../../../Drawer/state";
const EnvSetBackground = ({ setEnvPage }: { setEnvPage: any }) => {
  const createVirtual = () => {};
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const [chooseBackground, setChooseBackground] = useState("");
  const clickHandle = (value: string) => {
    setChooseBackground(value);
    setEnvPage(value);
    if (value === "virtual") {
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundSetting: "color",
      }));
      console.log("!!");
    }
  };

  return (
    <Box>
      {" "}
      {chooseBackground === "" && (
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "13.9375rem",
              height: "9.5rem",
              backgroundColor: "#F3F3F3",
              marginBottom: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => {
              clickHandle("virtual");
            }}
          >
            <Box
              style={{
                width: "11.9375rem",
                height: "6.25rem",
                borderRadius: "0.1875rem",
                backgroundColor: "#D8D8D8",
              }}
            ></Box>
            <Typography style={{ marginTop: "0.62rem" }}>배경</Typography>
          </Box>
          <Box
            onClick={() => {
              clickHandle("map");
            }}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              zIndex: 1,
              cursor: "pointer",
            }}
            style={{
              width: "13.9375rem",
              height: "9.5rem",
              backgroundColor: "#F3F3F3",
              marginBottom: "1.5rem",
            }}
          >
            <Box
              style={{
                width: "11.9375rem",
                height: "6.25rem",
                borderRadius: "0.1875rem",
                backgroundColor: "#D8D8D8",
              }}
            ></Box>
            <Typography style={{ marginTop: "0.62rem" }}>맵</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default EnvSetBackground;
