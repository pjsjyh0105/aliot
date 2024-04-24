import { useEffect, useState } from "react";
import styles from "../../../../../styles/editMain/env/ColorPick.module.css";
import Image from "next/image";
import SingleColor from "./color/SingleColor";
import { Flex, Radio } from "antd"; //여기서 버튼 만들면 커스터마이징이 안됨
import RecentColor from "./RecentColor";
import { Box, Typography } from "@mui/material";
import { recentColorState } from "../../../../Drawer/state/Drawer";
import { useRecoilState } from "recoil";
import { WorldBackgroundData } from "../../../../Drawer/state/Drawer";

const SetColor = () => {
  const [recentColor, setRecentColor] = useRecoilState(recentColorState);
  const [selectColor, setSelectColor] = useState("Transparency");
  const [isHovered, setIsHovered] = useState(false);
  const [hoverColor, setSHoverColor] = useState("");
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);

  const handleOptionChange = (event) => {
    setSelectColor(event.target.value);
    if (event.target.value == "Transparency") {
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundColor: "transparent",
      }));
    }
  };
  const handleMouseEnter = (value) => {
    setIsHovered(true);
    setSHoverColor(value);
    // 호버 상태일 때 할 작업을 여기에 추가하세요
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSHoverColor("");

    // 호버가 끝날 때 할 작업을 여기에 추가하세요
  };
  useEffect(() => {
    setWorldData((prevWorldData) => ({
      ...prevWorldData,
      backgroundColor: "transparent",
    }));
  }, [setWorldData]);
  return (
    <Box style={{ paddingLeft: "1.28rem", paddingRight: "1.44rem" }}>
      <Box>
        <Typography>종류</Typography>
        <Box sx={{ display: "flex", marginTop: "1rem" }}>
          <Flex>
            <Radio.Group onChange={handleOptionChange}></Radio.Group>
          </Flex>

          <input
            type="radio"
            name="투명"
            id="Transparency"
            value="Transparency"
            className={styles.button}
            checked={selectColor === "Transparency"}
            onChange={handleOptionChange}
          />
          <label htmlFor="Transparency" className={styles.label}>
            <Box
              sx={{
                width: "3rem",
                height: "3rem",
              }}
              className={styles.imageContainer}
              onMouseEnter={() => handleMouseEnter("Transparency")}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clip-path="url(#clip0_2170_46059)">
                  <rect width="8" height="8" fill="#9A9A9A" />
                  <rect y="16" width="8" height="8" fill="#9A9A9A" />
                  <rect y="32" width="8" height="8" fill="#9A9A9A" />
                  <rect x="8" y="8" width="8" height="8" fill="#9A9A9A" />
                  <rect x="8" y="24" width="8" height="8" fill="#9A9A9A" />
                  <rect x="8" y="40" width="8" height="8" fill="#9A9A9A" />
                  <rect x="16" width="8" height="8" fill="#9A9A9A" />
                  <rect x="16" y="16" width="8" height="8" fill="#9A9A9A" />
                  <rect x="16" y="32" width="8" height="8" fill="#9A9A9A" />
                  <rect x="24" y="8" width="8" height="8" fill="#9A9A9A" />
                  <rect x="24" y="24" width="8" height="8" fill="#9A9A9A" />
                  <rect x="24" y="40" width="8" height="8" fill="#9A9A9A" />
                  <rect x="40" y="8" width="8" height="8" fill="#9A9A9A" />
                  <rect x="40" y="24" width="8" height="8" fill="#9A9A9A" />
                  <rect x="40" y="40" width="8" height="8" fill="#9A9A9A" />
                  <rect x="32" width="8" height="8" fill="#9A9A9A" />
                  <rect x="32" y="16" width="8" height="8" fill="#9A9A9A" />
                  <rect x="32" y="32" width="8" height="8" fill="#9A9A9A" />
                </g>
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="2.5"
                  stroke="#9A9A9A"
                />
                <defs>
                  <clipPath id="clip0_2170_46059">
                    <rect width="48" height="48" rx="3" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Box>
            <Box
              className={styles.word}
              sx={{
                visibility:
                  selectColor === "Transparency" ||
                  (isHovered && hoverColor === "Transparency")
                    ? "visible"
                    : "hidden",
                width: "3rem",
                height: "3rem",
              }}
            >
              투명
            </Box>
          </label>

          <Box sx={{ width: "1.44rem" }}></Box>
          <input
            type="radio"
            name="단색"
            id="singleColor"
            value="singleColor"
            className={styles.button}
            checked={selectColor === "singleColor"}
            onChange={handleOptionChange}
          />
          <label htmlFor="singleColor" className={styles.label}>
            <Box
              sx={{
                width: "5rem",
                height: "3rem",
              }}
              className={styles.imageContainer}
              onMouseEnter={() => handleMouseEnter("singleColor")}
              onMouseLeave={handleMouseLeave}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="48"
                viewBox="0 0 80 48"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="2.5"
                  fill="#FF5050"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="2.5"
                  stroke="#FF5050"
                />
                <rect
                  x="8.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="2.5"
                  fill="#FFD702"
                />
                <rect
                  x="8.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="2.5"
                  stroke="#FFD702"
                />
                <rect
                  x="16.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="2.5"
                  fill="#79E4A4"
                />
                <rect
                  x="16.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="2.5"
                  stroke="#79E4A4"
                />
                <rect
                  x="24.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="2.5"
                  fill="#7AB7FF"
                />
                <rect
                  x="24.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="2.5"
                  stroke="#7AB7FF"
                />
                <rect
                  x="32.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="2.5"
                  fill="#FFA0EA"
                />
                <rect
                  x="32.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="2.5"
                  stroke="#FFA0EA"
                />
              </svg>
            </Box>
            <Box
              className={styles.word}
              style={{
                visibility:
                  selectColor === "singleColor" ||
                  (isHovered && hoverColor === "singleColor")
                    ? "visible"
                    : "hidden",
              }}
            >
              단색
            </Box>
          </label>
          <Box style={{ width: "1.44rem" }}></Box>
          <input
            type="radio"
            name="그라데이션"
            id="gradation"
            value="gradation"
            className={styles.button}
            checked={selectColor === "gradation"}
            onChange={handleOptionChange}
          />
          <label htmlFor="gradation" className={styles.label}>
            <Box
              sx={{
                width: "3rem",
                height: "3rem",
              }}
              className={styles.imageContainer}
              onMouseEnter={() => handleMouseEnter("gradation")}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <rect
                  width="48"
                  height="48"
                  rx="3"
                  fill="url(#paint0_linear_2170_46084)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2170_46084"
                    x1="24"
                    y1="0"
                    x2="24"
                    y2="48"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stop-color="#959595" stop-opacity="0.19" />
                  </linearGradient>
                </defs>
              </svg>
            </Box>
            <Box
              className={styles.word}
              style={{
                visibility:
                  selectColor === "gradation" ||
                  (isHovered && hoverColor === "gradation")
                    ? "visible"
                    : "hidden",
              }}
            >
              그라데이션
            </Box>
          </label>
        </Box>
      </Box>
      {selectColor === "singleColor" && (
        <SingleColor setRecentColor={setRecentColor}></SingleColor>
      )}

      <Box
        sx={{
          height: "0.1rem",
          width: "100%",
          marginTop: "1.81rem",
          marginBottom: "1.87rem",
          backgroundColor: "#F0F0F0",
        }}
      ></Box>
      <Box style={{ marginTop: "1.5rem" }}>
        <Box style={{ marginBottom: "1.06rem" }}>최근 사용 색상</Box>
        <RecentColor recentColor={recentColor} />
      </Box>
    </Box>
  );
};
export default SetColor;
