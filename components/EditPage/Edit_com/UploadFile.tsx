import { Box, Typography } from "@mui/material";
import { Modal, Upload, Button } from "antd";
import type { UploadFile, UploadProps } from "antd";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { GlbData, ImgData, VideoData } from "../../Drawer/state";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { WorldBackgroundData } from "../../Drawer/state";
import Add3DAssetPopup from "../Edit_popup/Add3DAssetPopup";
import { v4 as uuidv4 } from "uuid";
const { Dragger } = Upload;

import { AssetUploading } from "../Edit_popup/Add3DAssetPopup";

const UploadFile = ({
  line = true,
  isQR = false,
  type = "",
}: {
  line?: boolean;
  isQR?: Boolean;
  type?: string;
}) => {
  const [assetUploading, setAssetUploading] = useRecoilState(AssetUploading);
  const [imgData, setImgData] = useRecoilState(ImgData);
  const [videoData, setVideoData] = useRecoilState(VideoData);
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const [getfiles, setGetFiles] = useState<File | null>(null);

  useEffect(() => {}, [imgData]);
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/0e43f70f-f179-47e8-8dde-072ff9cf4f8d",
    showUploadList: false, // 리스트를 보여주지 않습니다.
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        console.log(info);
      } else if (status === "error") {
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files[0]);

      if (type == "glb") {
        if (e.dataTransfer.files[0].name.endsWith(".glb")) {
          // glb 파일 업로드 동작 추가
          setAssetUploading(true);
          console.log(e.dataTransfer.files[0]);

          const GlbFile = e.dataTransfer.files[0];
          setGetFiles(GlbFile);
          // const getGlbFile = {
          //   name: GlbFile.name,
          //   url: URL.createObjectURL(GlbFile),
          //   uid: GlbFile.uid,
          //   type: GlbFile.type,
          //   opacity: 1,
          // };
          // setGlbData((currentGlbData) => [...currentGlbData, getGlbFile]);
        }
      } else {
        if (e.dataTransfer.files[0].type.startsWith("image/")) {
          const imgFile = e.dataTransfer.files[0];
          const getFile = {
            name: imgFile.name,
            url: URL.createObjectURL(imgFile),
            uid: imgFile.uid,
            type: imgFile.type,
            opacity: 1,
            left: "0",
            top: "0",
            height: "0",
            width: "0",
          };
          if (isQR) {
            setWorldData((prevWorldData) => ({
              ...prevWorldData,
              saveQRIcon: getFile,
            }));
          } else {
            setImgData((currentImgData) => [...currentImgData, getFile]);
          }
        } else if (e.dataTransfer.files[0].type.startsWith("video/")) {
          console.log(e.dataTransfer.files[0].type.startsWith("video/"));
          const videoFile = e.dataTransfer.files[0];
          const getVideoFile = {
            name: videoFile.name,
            url: URL.createObjectURL(videoFile),
            uid: uuidv4(),
            type: videoFile.type,
            opacity: 1,
          };
          setVideoData((currentVideoData) => [
            ...currentVideoData,
            getVideoFile,
          ]);
        }
      }

      // console.log(imgData);
      // console.log(videoData);
      // console.log(glbData);
    },
  };
  return (
    <Box>
      {assetUploading ? (
        <Add3DAssetPopup getfiles={getfiles || undefined} />
      ) : (
        <></>
      )}
      <Dragger
        {...props}
        style={{
          height: "4.9375rem ",
          width: "13.9375rem",
          background: "white",
          marginBottom: "1.37rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ marginRight: "1.31rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="21"
              viewBox="0 0 28 21"
              fill="none"
            >
              <g id="icon/upload">
                <path
                  id="Union"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6262 0.433105C8.18921 0.433105 5.30761 2.88195 4.76834 6.12705C2.29457 6.74424 0.442139 8.93629 0.442139 11.5777C0.442139 11.6492 0.443507 11.7205 0.446224 11.7914C0.443508 11.8606 0.442139 11.93 0.442139 11.9998C0.442139 14.8901 2.78518 17.2331 5.67547 17.2331H11.6053V15.4331H5.67547C3.77929 15.4331 2.24214 13.8959 2.24214 11.9998C2.24214 11.9443 2.24345 11.8891 2.24603 11.8344L2.24801 11.7926L2.24609 11.7508C2.24347 11.6935 2.24214 11.6358 2.24214 11.5777C2.24214 9.64643 3.73056 8.02057 5.69565 7.78289L6.44262 7.69254L6.48608 6.94138C6.63676 4.33681 8.86118 2.23311 11.6262 2.23311C13.2525 2.23311 14.6967 2.96292 15.6387 4.09762L16.1098 4.66514L16.7588 4.31464C17.2749 4.03593 17.8672 3.87697 18.4999 3.87697C20.4064 3.87697 21.9618 5.32441 22.1263 7.15561L22.1847 7.80624L22.8214 7.95232C24.5206 8.34214 25.7577 9.82039 25.7577 11.553C25.7577 11.6131 25.7562 11.6728 25.7533 11.732L25.7511 11.7769L25.7534 11.8218C25.7564 11.8806 25.7579 11.94 25.7579 11.9998C25.7579 13.8959 24.2208 15.4331 22.3246 15.4331H16.3948V17.2331H22.3246C25.2149 17.2331 27.5579 14.8901 27.5579 11.9998C27.5579 11.9246 27.5563 11.8498 27.5532 11.7753C27.5562 11.7015 27.5577 11.6274 27.5577 11.553C27.5577 9.15051 25.9897 7.12778 23.8261 6.37162C23.3103 3.91424 21.1172 2.07697 18.4999 2.07697C17.8143 2.07697 17.1569 2.20327 16.5511 2.43414C15.2911 1.19662 13.5474 0.433105 11.6262 0.433105ZM14.75 12.4444L15.1872 12.8703C15.4838 13.1593 15.9587 13.1532 16.2477 12.8565C16.5368 12.5598 16.5306 12.085 16.234 11.7959L14.663 10.2653C14.2941 9.90582 13.706 9.90582 13.3371 10.2653L11.7661 11.7959C11.4694 12.085 11.4633 12.5598 11.7523 12.8565C12.0414 13.1532 12.5162 13.1593 12.8129 12.8703L13.25 12.4444V19.6664C13.25 20.0807 13.5858 20.4164 14 20.4164C14.4142 20.4164 14.75 20.0807 14.75 19.6664V12.4444Z"
                  fill="#3988E5"
                />
              </g>
            </svg>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "0.75rem" }}>
              업로드하려면 클릭하거나<br></br> 이 영역으로 드래그하세요
            </Typography>
            <Typography
              className="ant-upload-hint"
              style={{
                fontSize: "0.5625rem",
                float: type == "glb" ? "left" : "none",
              }}
            >
              {type == "glb" ? "지원 형식 glb" : "jpg, png, jpeg"}
            </Typography>
          </Box>
        </Box>
      </Dragger>
      <Box
        sx={{
          height: "0.1rem",
          width: "100%",
          marginTop: "0.81rem",
          marginBottom: "0.75rem",
          backgroundColor: "#F0F0F0",
          display: line ? "block" : "none",
        }}
      ></Box>
    </Box>
  );
};
export default UploadFile;
