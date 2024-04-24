import { Box } from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import { useRecoilState, useRecoilValue } from "recoil";
import { ImgData, WorldBackgroundData, GlbData } from "../../Drawer/state";
import ImageListItem from "@mui/material/ImageListItem";
import { VideoData } from "../../Drawer/state";
import MyModelViewer from "./ObjmodelViewer";
import SortSelectorPurple from "./SortSelectorPurple";
const FileList = ({ state, glbType }: { state: string; glbType?: string }) => {
  const [layerChange, setLayerChange] = useState(2); ///true: 2열 false:1열
  const imgData = useRecoilValue(ImgData);
  const videoData = useRecoilValue(VideoData);
  const glbData = useRecoilValue(GlbData);
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const onHandleChange = (value: number) => {
    setLayerChange(value);
  };
  const onComClick = (value: any) => {
    console.log("!!!");
    //setWorldData(value.url);
    console.log(value);
    setWorldData((prevWorldData) => ({
      ...prevWorldData,
      backgroundImg: value,
      backgroundCutImg: value,
    }));
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <SortSelectorPurple></SortSelectorPurple>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={() => onHandleChange(2)}
            sx={{ padding: "0 0.5rem" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="19"
              viewBox="0 0 28 19"
              fill="none"
            >
              <rect
                width="28"
                height="19"
                rx="3"
                fill={layerChange == 2 ? "#8C8C8C" : "#C8C8C8"}
              />

              <rect x="7" y="6" width="6" height="7" rx="0.5" fill="white" />
              <rect x="15" y="6" width="6" height="7" rx="0.5" fill="white" />
            </svg>
          </IconButton>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={() => onHandleChange(1)}
            sx={{ padding: 0 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="19"
              viewBox="0 0 28 19"
              fill="none"
            >
              <rect
                width="28"
                height="19"
                rx="2"
                fill={layerChange == 1 ? "#8C8C8C" : "#C8C8C8"}
              />
              <rect x="7" y="6" width="14" height="7" rx="0.5" fill="white" />
            </svg>
          </IconButton>
        </Box>
      </Box>
      <Box>
        <ImageList
          cols={layerChange === 1 ? 1 : 2}
          sx={{
            maxHeight: "37.4375rem",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {/* 예시로 cols 값을 조정 */}
          {state === "Image" ? (
            imgData.map((item) => (
              <ImageListItem
                key={item.name}
                style={{ height: "6.75rem", borderRadius: "0.1875rem" }}
              >
                <img
                  src={item.url}
                  alt={item.name}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  onClick={() => onComClick(item)}
                />
              </ImageListItem>
            ))
          ) : state === "Video" ? (
            videoData.map((item) => (
              <ImageListItem
                key={item.name}
                style={{ height: "6.75rem", borderRadius: "0.1875rem" }}
              >
                {/* 비디오를 표시하는 방법은 프로젝트에 따라 다를 수 있습니다. 여기에 비디오 플레이어 또는 썸네일 구현 */}
                <video
                  controls
                  src={item.url}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    cursor: "pointer",
                    pointerEvents: "auto", //클릭 이벤트 시 필요
                  }}
                  onClick={() => onComClick(item)}
                />
              </ImageListItem>
            ))
          ) : state === "Glb" ? (
            glbData.map(
              (item) =>
                (glbType === "all" || item.objType === glbType) && ( // glbType이 "all"이거나 item의 타입이 glbType과 일치할 때만 렌더링
                  <ImageListItem
                    key={item.name}
                    style={{
                      height: "9.75rem",
                      borderRadius: "0.1875rem",
                      padding: 0,
                    }}
                  >
                    <MyModelViewer
                      src={item.url?.toString() ?? ""}
                      name={item.name?.replace(/\.glb$/, "") ?? ""}
                    />
                  </ImageListItem>
                )
            )
          ) : (
            <></>
          )}
        </ImageList>
      </Box>
    </Box>
  );
};

export default FileList;
