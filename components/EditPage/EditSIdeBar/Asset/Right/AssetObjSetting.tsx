import { Box } from "@mui/material";
import * as React from "react";
import DropDownBtnPos from "./DropDownBtnPos";

import arowBtnIcon from "../../../../../asset/DXarrowline 24.png";
import { atom, useRecoilValue } from "recoil";
import InputPurple from "../../../Edit_com/InputPurple";

const myState = atom({
  key: "settingPosName", // 고유한 식별자
  default: "위치", // 초기값
});

const options = ["위치", "주소", "위경도"];

const AssetObjSetting = () => {
  const settingPosName = useRecoilValue(myState);
  return (
    // <EnvSetBackgroundRight/>
    <Box
      sx={{
        color: "#2F2F2F",
        fontFamily: "Noto Sans KR",
        fontSize: "0.875",
        fontWeight: "500",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        marginTop: "1.38rem",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.94rem" }}>
          {settingPosName}

          <DropDownBtnPos
            posx="translateX(-2.56rem)"
            margintop="0.44rem"
            list={options}
            iconsrc={arowBtnIcon.src}
            boxwidth="11.1875rem"
            clickedColor="#EAEAEA"
            myState={myState}
          />
        </Box>

        <Box
          sx={{
            display: settingPosName == "위경도" ? "flex" : "none",
            marginTop: "0.44rem",
            gap: "0.87rem",
          }}
        >
          <InputPurple
            types="text"
            defaultValue={""}
            inputWidth="8rem"
            inputHeight="1.875rem"
            marginRight="0"
            placeholder="위도"
          />
          <InputPurple
            types="text"
            defaultValue={""}
            inputWidth="8rem"
            inputHeight="1.875rem"
            marginRight="0"
            placeholder="경도"
          />
        </Box>
        <Box
          sx={{
            display: settingPosName == "주소" ? "flex" : "none",
            marginTop: "0.44rem",
          }}
        >
          <InputPurple
            types="text"
            defaultValue={""}
            inputWidth="16.875rem"
            inputHeight="1.875rem"
            marginRight="0"
            placeholder="주소"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.56rem",
            fontWeight: "400",
            marginTop: "0.56rem",
          }}
        >
          x
          <InputPurple
            types="number"
            defaultValue={0.0}
            inputWidth="4.0625rem"
            inputHeight="1.875rem"
            marginRight="0.34rem"
            placeholder=""
          />
          y
          <InputPurple
            types="number"
            defaultValue={0.0}
            inputWidth="4.0625rem"
            inputHeight="1.875rem"
            marginRight="0.34rem"
            placeholder=""
          />
          z
          <InputPurple
            types="number"
            defaultValue={0.0}
            inputWidth="4.0625rem"
            inputHeight="1.875rem"
            marginRight="0.34rem"
            placeholder=""
          />
        </Box>
      </Box>
      <Box>
        크기
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.56rem",
            fontWeight: "400",
            marginTop: "0.56rem",
          }}
        >
          x
          <InputPurple
            types="number"
            defaultValue={0.0}
            inputWidth="4.0625rem"
            inputHeight="1.875rem"
            marginRight="0.34rem"
            placeholder=""
          />
          y
          <InputPurple
            types="number"
            defaultValue={0.0}
            inputWidth="4.0625rem"
            inputHeight="1.875rem"
            marginRight="0.34rem"
            placeholder=""
          />
          z
          <InputPurple
            types="number"
            defaultValue={0.0}
            inputWidth="4.0625rem"
            inputHeight="1.875rem"
            marginRight="0.34rem"
            placeholder=""
          />
        </Box>
      </Box>
      <Box>
        회전
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.56rem",
            fontWeight: "400",
            marginTop: "0.56rem",
          }}
        >
          x
          <InputPurple
            types="number"
            defaultValue={0.0}
            inputWidth="4.0625rem"
            inputHeight="1.875rem"
            marginRight="0.34rem"
            placeholder=""
          />
          y
          <InputPurple
            types="number"
            defaultValue={0.0}
            inputWidth="4.0625rem"
            inputHeight="1.875rem"
            marginRight="0.34rem"
            placeholder=""
          />
          z
          <InputPurple
            types="number"
            defaultValue={0.0}
            inputWidth="4.0625rem"
            inputHeight="1.875rem"
            marginRight="0.34rem"
            placeholder=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AssetObjSetting;
