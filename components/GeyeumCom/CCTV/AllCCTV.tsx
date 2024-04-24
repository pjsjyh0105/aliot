import { Box, BoxProps, Icon, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import VideoCCTV from "./VideoCCTV";
import {
  cctvclickfloor,
  clickcctvname,
  firstfloor,
  clickCCTVlist,
  secondfloor,
} from "../CCTVclick";
import { useRecoilValue } from "recoil";
const AllCCTV = ({ num, secondnum }: { num: number; secondnum: number }) => {
  const [girdOn, setGridOn] = useState(false);
  const [cctvNum, setCCTVNum] = useState(0);
  const [nowNum, setNowNum] = useState(1);
  const getfloor = useRecoilValue(cctvclickfloor);
  const getclickCCTVlist = useRecoilValue(clickCCTVlist);
  const getclickcctvname = useRecoilValue(clickcctvname);
  const gefirstfloor = useRecoilValue(firstfloor);
  const getsecondfloor = useRecoilValue(secondfloor);
  const [nowName, setNowName] = useState("");

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const fillColor = isClicked ? "#44E8E8" : isHovered ? "#44E8E880" : "white";
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked); // 클릭 상태 토글
  };
  const numUpload = () => {
    let getnum = nowNum + 1;
    if (!girdOn) {
      if (getnum <= cctvNum) setNowNum(getnum);
    } else {
      let cal = Math.round(cctvNum / 4);
      if (getnum <= cal) setNowNum(getnum);
    }
  };
  const numDown = () => {
    let getnum = nowNum - 1;
    if (getnum > 0) {
      setNowNum(getnum);
    }
  };
  const setZero = () => {
    setNowNum(1);
  };
  useEffect(() => {
    setCCTVNum(num);
  }, [num]);
  useEffect(() => {
    if (getfloor == "first") {
      setCCTVNum(num);
    } else {
      setCCTVNum(secondnum);
    }
    setNowNum(1);
  }, [getfloor]);
  useEffect(() => {
    console.log(getclickcctvname);
  }, [getclickcctvname]);
  const Item = ({ sendnum }: { sendnum: number }) => {
    const currentItem =
      getfloor === "first"
        ? gefirstfloor[nowNum * sendnum - 1]
        : getsecondfloor[nowNum * sendnum - 1];

    // 현재 아이템이 getsecondfloor 리스트에 있는지 확인
    const isInClickList = getclickCCTVlist.some(
      (name) => name.split("_")[0] === currentItem
    );

    // 스타일 객체 동적 생성
    const itemStyle = {
      border: isInClickList ? "2px solid #06FFFF" : "none",
      width: "39.5625rem",
      height: "21.7375rem",
      position: "relative",
      zIndex: 1,
    };
    return (
      <Box sx={itemStyle}>
        <Box
          sx={{
            width: "9.3125rem",
            height: "2.5rem",
            backgroundColor: "black",
            position: "absolute",
            marginTop: "1.31rem",
            marginLeft: "2.56rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "1rem", fontWeight: "600" }}
          >
            {getfloor == "first"
              ? gefirstfloor[(nowNum - 1) * 4 + sendnum - 1]
              : getsecondfloor[(nowNum - 1) * 4 + sendnum - 1]}
          </Typography>
        </Box>
        <VideoCCTV
          geturl={"https://dt.gractor.com/video/live.m3u8"}
          getwidth="38.5625rem"
          getheight="21.4375rem"
        ></VideoCCTV>
      </Box>
    );
  };
  const getBorderColor = () => {
    const currentName =
      getfloor === "first"
        ? gefirstfloor[nowNum - 1]
        : getsecondfloor[nowNum - 1];
    const isInClickList = getclickCCTVlist.some(
      (name) => name.split("_")[0] === currentName
    );
    return isInClickList ? "2px solid #06FFFF" : "none";
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "79.12rem",
        marginLeft: "32rem",
        marginTop: "12.12rem",
        overflow: "hidden",
        scrollbarWidth: "none" /* Firefox */,
        msOverflowStyle: "none" /* Internet Explorer 10+ */,
        "&::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, Opera*/,
        },
      }}
    >
      <Box
        sx={{
          marginBottom: "0.69rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <IconButton
            onClick={() => {
              setZero();
              setGridOn(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <rect
                x="2"
                y="2"
                width="19"
                height="19"
                rx="0.5"
                fill={girdOn ? "white" : "#44E8E8"}
                fill-opacity={girdOn ? "0.5" : "0.8"}
              />
            </svg>
          </IconButton>
          <IconButton
            onClick={() => {
              setGridOn(true);
              setZero();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <g id="Group 9717">
                <rect
                  id="Rectangle 2359"
                  width="8.14286"
                  height="8.14286"
                  rx="0.5"
                  fill={girdOn ? "#44E8E8" : "white"}
                  fill-opacity={girdOn ? "0.8" : "0.5"}
                />
                <rect
                  id="Rectangle 2361"
                  x="10.8572"
                  width="8.14286"
                  height="8.14286"
                  rx="0.5"
                  fill={girdOn ? "#44E8E8" : "white"}
                  fill-opacity={girdOn ? "0.8" : "0.5"}
                />
                <rect
                  id="Rectangle 2360"
                  y="10.8571"
                  width="8.14286"
                  height="8.14286"
                  rx="0.5"
                  fill={girdOn ? "#44E8E8" : "white"}
                  fill-opacity={girdOn ? "0.8" : "0.5"}
                />
                <rect
                  id="Rectangle 2362"
                  x="10.8572"
                  y="10.8571"
                  width="8.14286"
                  height="8.14286"
                  rx="0.5"
                  fill={girdOn ? "#44E8E8" : "white"}
                  fill-opacity={girdOn ? "0.8" : "0.5"}
                />
              </g>
            </svg>
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={numDown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="click-arrow">
                <path
                  id="Polygon 14"
                  d="M8.43644 12.378C8.20621 12.1786 8.20621 11.8214 8.43644 11.622L13.1727 7.52033C13.4965 7.2399 14 7.46992 14 7.8983L14 16.1017C14 16.5301 13.4965 16.7601 13.1727 16.4797L8.43644 12.378Z"
                  fill="white"
                />
              </g>
            </svg>
          </IconButton>
          <Typography sx={{ color: "white" }}>{nowNum}</Typography>
          <Typography sx={{ color: "white", paddingX: "0.2rem" }}>
            {" "}
            /{" "}
          </Typography>
          <Typography sx={{ color: "white" }}>
            {girdOn ? Math.round(cctvNum / 4) : cctvNum}
          </Typography>
          <IconButton onClick={numUpload}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="click-arrow">
                <path
                  id="Polygon 14"
                  d="M15.5636 11.622C15.7938 11.8214 15.7938 12.1786 15.5636 12.378L10.8273 16.4797C10.5035 16.7601 10 16.5301 10 16.1017L10 7.8983C10 7.46992 10.5035 7.2399 10.8273 7.52033L15.5636 11.622Z"
                  fill="white"
                />
              </g>
            </svg>
          </IconButton>
        </Box>
      </Box>

      {!girdOn ? (
        <Box sx={{}}>
          {" "}
          <Box
            sx={{
              width: "9.3125rem",
              height: "2.5rem",
              backgroundColor: "black",
              position: "absolute",
              marginTop: "1.31rem",
              marginLeft: "2.56rem",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Typography
              sx={{ color: "white", fontSize: "1rem", fontWeight: "600" }}
            >
              {getfloor == "first"
                ? gefirstfloor[nowNum - 1]
                : getsecondfloor[nowNum - 1]}
            </Typography>
          </Box>
          <Box
            sx={{
              border: getBorderColor(),
            }}
          >
            <VideoCCTV
              geturl={"https://dt.gractor.com/video/live.m3u8"}
            ></VideoCCTV>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            width: "79.12rem",
          }}
        >
          <Item sendnum={1}></Item>
          <Item sendnum={2}></Item>
          <Item sendnum={3}></Item>
          <Item sendnum={4}></Item>
        </Box>
      )}
    </Box>
  );
};

export default AllCCTV;
