//색상 사진 영상에 따른 아래 컴포넌트 변경
import styles from "@/styles/editMain/env/Btn.module.css";
import { useEffect, useState } from "react";
import SetColor from "../setColor/SetColor";
import SetPhoto from "../setColor/SetPhoto";
import { styled } from "@mui/material/styles";

import { useRecoilState, useRecoilValue } from "recoil";
import { EditRightbar } from "../../../../Drawer/state";
import { Box, Button, ThemeProvider, createTheme } from "@mui/material";
import SetVideo from "../setColor/SetVideo";
import { EnvColorPage } from "../EnvSetPage";
import { PurpleBtn } from "../../../Edit_com/PurpleBtn";
import { WorldBackgroundData } from "../../../../Drawer/state";
import { EnvPage } from "../EnvSetPage";
const EnvSetColor = () => {
  const [selectedOption, setSelectedOption] = useState("색상");
  const [editRightBar, setEditRightBar] = useRecoilState(EditRightbar);
  const [envColorPage, setEnvColorPage] = useRecoilState(EnvColorPage);
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const envpage = useRecoilValue(EnvPage);

  const handleOptionChange = (value: string) => () => {
    setSelectedOption(value);
    setEnvColorPage(value);
  };
  useEffect(() => {
    //상황에 따른 오른쪽 슬라이드바 활성화 변경
    if (selectedOption === "색상") {
      setEditRightBar(false);
      if (worldData.backgroundSetting == "color") {
      }
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundSetting: "color",
      }));
    } else {
      setEditRightBar(true);
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundSetting: "photo",
      }));
    }
  }, [selectedOption]);
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        zIndex: 2,
      }}
    >
      <Box sx={{ display: "flex", marginBottom: "1.87rem" }}>
        {["색상", "사진", "영상"].map((value) => (
          <PurpleBtn
            key={value}
            selected={selectedOption === value}
            onClick={handleOptionChange(value)}
            sx={{ margin: "0.31rem" }}
          >
            {value}
          </PurpleBtn>
        ))}
      </Box>
      <Box>
        {selectedOption === "색상" && <SetColor></SetColor>}
        {selectedOption === "사진" && <SetPhoto></SetPhoto>}
        {selectedOption === "영상" && <SetVideo></SetVideo>}
      </Box>
    </Box>
  );
};

export default EnvSetColor;
