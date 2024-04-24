"use client";
import Typography from "@mui/material/Typography";
import React, { useState, useRef, useEffect } from "react";
import Leftbar from "../../../../components/EditPage/EditSIdeBar/LeftBar";
import Rightbar from "../../../../components/EditPage/EditSIdeBar/RightBar";
import * as BABYLON from "babylonjs";
import { Box, Fab } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { EditRightbar } from "../../../../components/Drawer/state";
import { WorldBackgroundData } from "../../../../components/Drawer/state";
import EditSideBar from "../../../../components/EditPage/EditSIdeBar/EditSideBar";
import BabylonCanvas from "../../../../components/EditPage/BabylonScene/BabylonCanvas";
const MainPage = () => {
  const [page, setPage] = useState("file");
  const [leftTab, setLeftTab] = useState(true);
  const [rightTab, setRightTab] = useState(true);
  const [isBabylon, setIsBaylon] = useState(true);
  // const canvasRef = useRef(null);
  const editRightBar = useRecoilValue(EditRightbar);
  const worldData = useRecoilValue(WorldBackgroundData);
  const [worldSet, setWorldSet] = useState(true);
  const LeftTabClick = () => {
    //왼쪽 >버튼 클릭시 닫고 열리는 상호작용 버튼
    setLeftTab(!leftTab);
  };
  const RightTabClick = () => {
    //오른쪽 >버튼 클릭시 닫고 열리는 상호작용 버튼. 해당 버튼은 상황에 따라 활성화/비활성화
    if (editRightBar) setRightTab(!rightTab);
  };
  useEffect(() => {
    if (!editRightBar) setRightTab(false);
    else setRightTab(true);
  }, [editRightBar]);
  useEffect(() => {
    if (worldData.backgroundSetting == "color") {
      setWorldSet(true);
    } else {
      setWorldSet(false);
    }
  }, [worldData.backgroundSetting]);

  return (
    <Box sx={{ height: "100%", display: "flex" }}>
      <EditSideBar></EditSideBar>

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            overflowY: "hidden",
          }}
        >
          {/* 왼쪽 사이드바 */}
          <Box
            sx={{
              position: "absolute",
              zIndex: 5,
              display: "flex",
              alignItems: "center",
              transition: "all 0.5s ease-in-out",
              height: "100%",
            }}
            style={{ left: leftTab ? "6rem" : "-10.6875rem" }}
          >
            <Box
              sx={{ height: "100%", width: "16.6875rem", background: "white" }}
            >
              <Box>
                <Leftbar page={page}></Leftbar>
              </Box>
            </Box>
            <Box
              sx={{
                width: "2.25rem",
                background: "white",
                height: "4.875rem",
                display: "flex",
                alignItems: "center",
                borderRadius: "0rem 0.125rem 0.125rem 0rem",
              }}
              onClick={LeftTabClick}
            >
              {leftTab ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M10.6309 18.5342C10.3007 18.2546 10.3007 17.7454 10.6309 17.4658L20.0976 9.44951C20.5525 9.06432 21.25 9.38764 21.25 9.98372L21.25 26.0163C21.25 26.6124 20.5525 26.9357 20.0976 26.5505L10.6309 18.5342Z"
                    fill="#686868"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M25.3691 17.4658C25.6993 17.7454 25.6993 18.2546 25.3691 18.5342L15.9024 26.5505C15.4475 26.9357 14.75 26.6124 14.75 26.0163L14.75 9.98372C14.75 9.38764 15.4475 9.06432 15.9024 9.44951L25.3691 17.4658Z"
                    fill="#686868"
                  />
                </svg>
              )}
            </Box>
          </Box>
          {/* 오른쪽 사이드바 */}
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              zIndex: 5,
              transition: "all 0.5s ease-in-out",
              right: 0,
              height: "100%",
            }}
            style={{ right: rightTab ? "0" : "-20.0625rem" }}
          >
            {/* <Fab
              color="primary"
              aria-label="add"
              sx={{ right: "100%", position: "absolute" }}
            ></Fab> */}
            <Box
              sx={{
                width: "2.25rem",
                background: "white",
                height: "4.875rem",
                display: "flex",
                alignItems: "center",
                borderRadius: " 0.125rem 0rem 0rem 0.125rem",
              }}
              onClick={RightTabClick}
            >
              {rightTab ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M25.3691 17.4658C25.6993 17.7454 25.6993 18.2546 25.3691 18.5342L15.9024 26.5505C15.4475 26.9357 14.75 26.6124 14.75 26.0163L14.75 9.98372C14.75 9.38764 15.4475 9.06432 15.9024 9.44951L25.3691 17.4658Z"
                    fill="#686868"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M10.6309 18.5342C10.3007 18.2546 10.3007 17.7454 10.6309 17.4658L20.0976 9.44951C20.5525 9.06432 21.25 9.38764 21.25 9.98372L21.25 26.0163C21.25 26.6124 20.5525 26.9357 20.0976 26.5505L10.6309 18.5342Z"
                    fill="#686868"
                  />
                </svg>
              )}
            </Box>
            <Box
              sx={{
                height: "100%",
                width: "20.0625rem",
                background: "white",
                paddingTop: "0.75rem",
              }}
              className=" p-4"
            >
              <Rightbar page={page}></Rightbar>
            </Box>
          </Box>
          <Box //뒷배경
            sx={{
              position: "absolute",
              height: "100%",
              width: "100%",
              right: 0,
            }}
            className="h-full"
            id="Scene_background"
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: worldSet ? worldData.backgroundColor : "black",
                backgroundImage: worldSet
                  ? ""
                  : `url(${worldData.backgroundImg.url})`,
                backgroundSize: worldData.backgroundImgSize,
                backgroundPosition: worldData.backgroundImgPosition,
                backgroundRepeat: worldData.backgroundRepeat,
                transform: worldData.backgroundImgTransform,
                opacity: worldData.backgroundImg.opacity,
                filter: worldData.filter,
                right: 0,
              }}
            >
              <video width="100%" controls style={{ display: "none" }}>
                <source src={worldData.backgroundImg.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
            {/* <canvas


            <canvas
              ref={canvasRef}
              style={{ width: "100%", height: "100%", position: "absolute" }}
            /> */}
            <BabylonCanvas />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
