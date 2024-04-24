import {
  Box,
  Button,
  Collapse,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useStepContext,
} from "@mui/material";
import { ColorPicker, Input, QRCode } from "antd";
import { useEffect, useRef, useState } from "react";
import DownupToggle from "../Env/editImg/DownupToggle";
import UploadFile from "../../Edit_com/UploadFile";

import { WorldBackgroundData } from "../../../Drawer/state";
import { useRecoilState, useRecoilValue } from "recoil";
import html2canvas from "html2canvas";
export const MakeQR = () => {
  const [expand, setExpand] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [text, setText] = useState("https://ant.design/");
  const [icon, setIcon] = useState("");
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const [skinColor, setSkinColor] = useState("black");
  const [outlineColor, setOutlineColor] = useState("black");
  const [imgUpload, setImgUpload] = useState(false);
  const [isInputText, setIsInputText] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // 사용자 입력이 변경될 때 호출되는 함수
  const handleInputChange = (event) => {
    // 입력된 값으로 상태 업데이트
    setInputValue(event.target.value);
  };
  const captureRef = useRef(null);
  const handleChange = (selectedColor) => {
    setSkinColor(selectedColor.toHexString());
  };
  const handleoutlineChange = (selectedColor) => {
    setOutlineColor(selectedColor.toHexString());
  };
  useEffect(() => {
    if (worldData.saveQRIcon != null) setIcon(worldData.saveQRIcon.url);
  }, [worldData.saveQRIcon]);

  const aliotIcon = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <rect width="36" height="36" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        ></pattern>
        <image id="image0_2549_28856" width="297" height="297" />
      </defs>
    </svg>`;
  const svgBase64 = window.btoa(unescape(encodeURIComponent(aliotIcon)));
  const imageUrl = `data:image/svg+xml;base64,${svgBase64}`;
  const downloadQRCode = async () => {
    const canvas = await html2canvas(captureRef.current);
    const image = canvas.toDataURL("image/png");

    // 이미지 다운로드
    const link = document.createElement("a");
    link.href = image;
    link.download = "qr-code-with-box.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          ref={captureRef}
          sx={{
            width: "13.9375rem",
            height: "9.1875rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid rgba(190, 190, 190, 0.30)",
            borderRadius: "0.1875rem",
          }}
        >
          <Box
            sx={{
              width: "5.5rem",
              height: "5.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              id="QR_Canvas"
              sx={{
                width: "4.9375rem",
                height: "4.9375rem",
                border: `1px solid ${outlineColor}`,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <QRCode
                size={80}
                value={text || "-"}
                icon={icon}
                iconSize={20}
                color={skinColor}
                bordered={false}
              />
            </Box>
            <Typography sx={{ display: isInputText ? "block" : "none" }}>
              {" "}
              {inputValue}
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            color: "rgba(47, 47, 47, 0.50)",
            fontSize: "0.8125rem",
            marginTop: "0.56rem",
            fontWeight: "400",
          }}
        >
          위의 QR코드는 샘플입니다
        </Typography>
      </Box>
      <Box
        sx={{
          paddingLeft: "1.37rem",
          marginTop: "1.81rem",
          paddingRight: "1.69rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <DownupToggle setExpand={setExpand} width="1.5rem"></DownupToggle>
          <Typography>테두리 색상</Typography>
        </Box>
        <Collapse
          in={expand}
          sx={{
            marginTop: "0.81rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <Box>
              {" "}
              <ColorPicker
                defaultValue="#1677ff"
                size="small"
                showText
                onChange={handleoutlineChange}
              />
            </Box>
            <Box
              sx={{
                border: "1px solid #DBDBDB",
                borderRadius: "0.08013rem",
                width: "1.25rem",
                height: "1.25rem",
                cursor: "pointer",
              }}
              onClick={() => {
                setOutlineColor("white");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M1 17L17 1"
                  stroke="#FF8D8D"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
            </Box>
          </Box>
        </Collapse>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "2rem" }}>
          <DownupToggle setExpand={setExpand2} width="1.5rem"></DownupToggle>
          <Typography>스킨 색상</Typography>
        </Box>
        <Collapse in={expand2} sx={{ marginTop: "0.81rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <Box>
              {" "}
              <ColorPicker
                defaultValue="#1677ff"
                size="small"
                showText
                value={skinColor}
                onChange={handleChange}
              />
            </Box>
            <Box
              sx={{
                border: "1px solid #DBDBDB",
                borderRadius: "0.08013rem",
                width: "1.25rem",
                height: "1.25rem",
                cursor: "pointer",
              }}
              onClick={() => {
                setSkinColor("black");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M1 17L17 1"
                  stroke="#FF8D8D"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
            </Box>
          </Box>
        </Collapse>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "2rem" }}>
          <DownupToggle setExpand={setExpand3} width="1.5rem"></DownupToggle>
          <Typography>추가 옵션</Typography>
        </Box>
        <Collapse in={expand3} sx={{ marginTop: "0.81rem" }}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="no"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="사용 안함"
                onClick={() => {
                  setWorldData((prevWorldData) => ({
                    ...prevWorldData,
                    saveQRIcon: "",
                  }));
                  setImgUpload(false);
                  setInputValue("");
                }}
              />
              <FormControlLabel
                value="image"
                control={<Radio />}
                label="이미지 삽입"
                sx={{ marginBottom: "0.81rem" }}
                onClick={() => {
                  setImgUpload(true);
                  setInputValue("");
                }}
              />

              <Box
                sx={{
                  height: "4.9375rem",
                  marginBottom: "0.94rem",
                  pointerEvents: imgUpload ? "auto" : "none",
                }}
              >
                {" "}
                <UploadFile line={false} isQR={true}></UploadFile>
              </Box>
              <FormControlLabel
                value="aliot"
                control={<Radio />}
                label="Aliot DT로고 삽입"
                onClick={() => {
                  setWorldData((prevWorldData) => ({
                    ...prevWorldData,
                    saveQRIcon: imageUrl,
                  }));
                  setImgUpload(false);
                  console.log(imageUrl);
                  setInputValue("");
                }}
              />
              <FormControlLabel
                value="text"
                control={<Radio />}
                label="문구 삽입"
                onClick={() => {
                  setWorldData((prevWorldData) => ({
                    ...prevWorldData,
                    saveQRIcon: "",
                  }));
                  setImgUpload(false);
                  setIsInputText(true);
                }}
              />
              <TextField
                sx={{ height: "2.25rem", width: "13.9375rem" }}
                placeholder="입력하세요"
                value={inputValue} // TextField의 value 속성에 상태를 바인딩
                onChange={handleInputChange}
              ></TextField>
            </RadioGroup>
          </FormControl>
        </Collapse>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: "1.38rem",
          marginTop: "3rem",
        }}
      >
        <Button
          sx={{
            width: "6.375rem",
            height: "2.25rem",
            borderRadius: "0.1875rem",
            backgroundColor: "#E9E9E9",
            color: "black",
            "&:hover": {
              backgroundColor: "#CDCDCD", // 호버 시 배경색
            },
            "&:active": {
              backgroundColor: "#ACACAC", // 호버 시 배경색
            },
          }}
        >
          공유
        </Button>
        <Button
          sx={{
            width: "6.375rem",
            height: "2.25rem",
            borderRadius: "0.1875rem",
            backgroundColor: "#7E73FE",
            color: "white",
            "&:hover": {
              backgroundColor: "#6C62E4", // 호버 시 배경색
            },
            "&:active": {
              backgroundColor: "#554AD3", // 호버 시 배경색
            },
          }}
          onClick={downloadQRCode}
        >
          QR 저장
        </Button>
      </Box>
    </Box>
  );
};
