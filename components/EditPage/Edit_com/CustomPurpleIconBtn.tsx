import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { SvgIconProps } from "@mui/material";

// ButtonProps 타입을 정의하여 필요한 props를 명시합니다.
interface ButtonProps {
  getWidth: string;
  text: string; // 버튼에 표시될 텍스트
  getonClick: () => void; // 버튼 클릭 시 실행될 함수
  Icon?: React.ComponentType<SvgIconProps>; // Icon prop 타입 정의 추가
}

export const CustomPurpleIconButton: React.FC<ButtonProps> = ({
  getWidth,
  Icon,
  text,
  getonClick,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);

  // 버튼의 기본 색상, 호버 시 색상, 클릭 시 색상을 정의합니다.
  const defaultColor = "#F8F8F8";
  const hoverColor = "#E0E0E0";
  const clickColor = "#7E73FE";

  // 현재 버튼의 상태에 따라 배경색과 글자색을 결정합니다.
  const backgroundColor = isClick
    ? clickColor
    : isHover
      ? hoverColor
      : defaultColor;
  const fontColor = isClick ? "#FFFFFF" : "#2F2F2F";
  return (
    <Button
      sx={{
        width: getWidth,
        height: "2.5rem",
        padding: 0,
        backgroundColor: backgroundColor,
        color: fontColor,
        fontSize: "0.9375rem",
        "&:hover": {
          backgroundColor: backgroundColor, // 호버 시 배경색
          color: fontColor, // 호버 시 글자색
        },
      }}
      onClick={() => {
        setIsClick(true); // 클릭 상태를 true로 설정

        getonClick(); // 부모 컴포넌트에서 전달받은 onClick 함수를 실행
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
        setIsClick(false); // 마우스가 버튼 밖으로 나가면 클릭 상태를 초기화
      }}
      disableRipple
    >
      {Icon && <Icon fillColor={fontColor} />}
      {text}
    </Button>
  );
};
