//단일 색상시 뜨는 컴포넌트
"use client";
import { useEffect, useState } from "react";
import Opacity from "../../editImg/opacity/Opacity";
import { ColorPicker } from "antd";
import DefaultColorData from "../../../../../data/DefaultColorData";
import { Box, IconButton } from "@mui/material";
import { WorldBackgroundData } from "../../../../../Drawer/state";
import { useRecoilState, useRecoilValue } from "recoil";
import { recentColorState } from "../../../../../Drawer/state";
import { EyeDropper, OnChangeEyedrop, useEyeDrop } from "react-eyedrop";
type StateType = {
  pickedColor: {
    rgb: string;
    hex: string;
  };
  eyedropOnce: boolean;
};
const SingleColor = ({ setRecentColor }: { setRecentColor: any }) => {
  const [color, setColor] = useState("#1677ff"); //현재 컬러
  const [select, setSelect] = useState(-1);
  const [colorPickerOn, setColorPickerOn] = useState(false);
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const [isSpoidClick, setIsSpoidClick] = useState(false);
  const [isSpoidHover, setIsSpoidHover] = useState(false);
  const recentColor = useRecoilValue(recentColorState);

  const [state, setState] = useState<StateType>({
    pickedColor: {
      rgb: "",
      hex: "",
    },
    eyedropOnce: true,
  });
  const { eyedropOnce } = state;

  const [colors, pickColor, cancelPickColor] = useEyeDrop({
    once: eyedropOnce,
  });
  const handlePickColor = () => {
    pickColor(); // 스포이드 기능 활성화
  };
  const handleChangeColor = ({ rgb, hex }: OnChangeEyedrop) => {
    console.log(rgb);
    setState({ ...state, pickedColor: { rgb, hex } });
  };
  const fillColor = isSpoidClick
    ? "#DADADA"
    : isSpoidHover
    ? "#EAEAEA"
    : "none";

  const onClickHandle = (value, index) => {
    //새로운 색 클릭시 최신에 추가, 현재 컬러로 변경
    setRecentColor((prevColors) => [value, ...prevColors.slice(0, -1)]);
    setColor(value);
    setSelect(index);
  };
  const handleChange = (selectedColor) => {
    // 색상 값을 상태로 설정합니다. selectedColor 구조는 해당 ColorPicker의 문서를 확인하세요.
    setColor(selectedColor.toHexString());
  };
  const handleComplete = () => {
    //컬러픽커에서 마지막으로 지정한 색 저장
    setColorPickerOn(!colorPickerOn);

    if (colorPickerOn) {
      setRecentColor((prevColors) => [color, ...prevColors.slice(0, -1)]);
    }
  };
  //현재 컬러피커로 지정한 색 전역에 넣고 현재값으로 넣어버리면 무한루프되는 오류가 있음. 추후 수정
  useEffect(() => {
    setWorldData((prevWorldData) => ({
      ...prevWorldData,
      backgroundColor: color,
    }));
  }, [color]);
  useEffect(() => {
    setColor(recentColor[0]);
  }, []);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "1.88rem",
          marginBottom: "1.16rem",
        }}
      >
        <Box style={{ color: "#2F2F2F" }}>단색</Box>
        <Box
          sx={{
            height: "0.9375rem",
            width: "0.1rem",
            backgroundColor: "#585858",
            marginLeft: "0.8rem",
            marginRight: "0.8rem",
          }}
        ></Box>
        <Box style={{ color: "#585858" }}>기본 팔레트</Box>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {DefaultColorData.map((value, index) => (
          <Box
            sx={{
              width: "2.25rem",
              height: "2.25rem",
              borderRadius: "0.1875rem",
              backgroundColor: value,
              marginRight: index % 5 != 4 ? "0.33rem" : "0rem",
              marginLeft: index % 5 != 0 ? "0.33rem" : "0rem",
              marginBottom: "0.69rem",
              cursor: "pointer",
              border:
                select === index
                  ? "0.15rem solid #7E73FE"
                  : index == 0
                  ? "0.05rem solid #E9E9E9"
                  : "0rem",
            }}
            key={index}
            onClick={() => {
              onClickHandle(value, index);
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          height: "0.1rem",
          width: "100%",
          marginTop: "0.81rem",
          marginBottom: "1.87rem",
          backgroundColor: "#F0F0F0",
        }}
      ></Box>
      <Box
        sx={{ display: "flex", alignItems: "center", marginBottom: "1.56rem" }}
      >
        {/* <ColorPicker
          value={color} // 상태 값을 사용하여 색상을 동기화합니다.
          style={{ marginRight: "0.38rem" }}
          onChange={handleChange} // onChange 이벤트 핸들러에는 이벤트 객체가 전달됩니다.
        /> */}
        <Box
          sx={{
            width: "2.25rem",
            height: "2.25rem",
            background: color,
            border: select === 0 ? "0.05rem solid #E9E9E9" : "none",
            borderRadius: "0.1875rem",
            marginRight: "0.38rem",
          }}
        ></Box>
        <ColorPicker
          value={color}
          showText
          onChange={handleChange}
          onOpenChange={handleComplete}
        />
        {/* <EyeDropper once={eyedropOnce} onChange={handleChangeColor}>
          <StyledIconButton
            onMouseEnter={() => setIsSpoidHover(true)}
            onMouseLeave={() => setIsSpoidHover(false)}
            onClick={() => {
              setIsSpoidClick(!isSpoidClick), handlePickColor;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <rect width="36" height="36" rx="3" fill={fillColor} />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.4885 10.8298C23.1915 10.1268 24.3312 10.1268 25.0341 10.8298C25.737 11.5327 25.737 12.6724 25.0341 13.3753L23.4785 14.931L24.8914 16.3439C24.9695 16.422 24.9695 16.5486 24.8914 16.6267L23.76 17.7581C23.6819 17.8362 23.5552 17.8362 23.4771 17.7581L22.5239 16.8048L15.0236 24.3051C14.3355 24.9932 13.4011 25.378 12.428 25.3741L11.6383 25.371C11.0067 25.3684 10.4954 24.8571 10.4929 24.2256L10.4897 23.4359C10.4858 22.4628 10.8706 21.5284 11.5587 20.8403L19.059 13.34L18.1031 12.3841C18.025 12.306 18.025 12.1793 18.1031 12.1012L19.2345 10.9698C19.3126 10.8917 19.4392 10.8917 19.5173 10.9698L20.9329 12.3854L22.4885 10.8298ZM12.478 21.7595L19.973 14.2645L21.5994 15.8908L14.1043 23.3859C13.6613 23.8289 13.0597 24.0767 12.4332 24.0741L11.7923 24.0716L11.7897 23.4307C11.7872 22.8041 12.035 22.2025 12.478 21.7595Z"
                fill="#5D5D5D"
              />
            </svg>
          </StyledIconButton>
        </EyeDropper> */}
      </Box>
    </Box>
  );
};
export default SingleColor;
