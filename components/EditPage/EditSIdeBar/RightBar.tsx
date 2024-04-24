//에딧 페이지 우측 슬라이드바

import { useEffect } from "react";
import EnvRight from "./Env/Right/EnvRight";
import AssetRight from "./Asset/Right/AssetRight";
import AssetSettingRight from "./AssetSetting/Right/AssetSettingRight";
import BuildingRight from "./Building/Right/BuildingRight";
import UploadRight from "./Upload/Right/UploadRight";
import FileRight from "./File/Right/FileRight";
import QrRight from "./QR/Right/QrRight";
import ScenarioRight from "./CameraScenario/Right/ScenarioCamRight";
import { ClickSidebar } from "../../Drawer/state";
import { useRecoilState, useRecoilValue } from "recoil";
import { Box, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Segmented } from "antd";
import { useState } from "react";
import RightTopbar from "../Edit_com/RIghtTopbar";
const Rightbar = ({ page }: { page: any }) => {
  const editPageInfo = useRecoilValue(ClickSidebar);
  const [isClick, setIsClick] = useState("속성");
  const [isLayerClick, setIsLayerClick] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const fillColor = isLayerClick ? "#ECEAFF" : isHover ? "#E9E9E9" : "#F9F9F9";
  const onHandleChange = (value) => {
    setIsClick(value);
  };
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          {/* wrapper에 스타일 적용 */}
          <RightTopbar
            setIsClick={setIsClick}
            firstLabel="속성"
            firstSet={false}
            secondLabel="효과"
            secondSet={true}
          ></RightTopbar>
          <Button
            aria-label="layer"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => setIsLayerClick(!isLayerClick)}
            disableRipple
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <rect width="40" height="40" rx="3" fill={fillColor} />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.191 12.0392C20.0567 11.9881 19.9043 11.9881 19.77 12.0392L10.2009 15.6801C9.95364 15.7741 9.94249 16.0793 10.1824 16.1871L19.7391 20.4853C19.8907 20.5535 20.0703 20.5535 20.2219 20.4853L29.7786 16.1871C30.0185 16.0793 30.0074 15.7741 29.7601 15.6801L20.191 12.0392ZM12.9807 19.1281C12.4964 18.9103 11.9454 18.894 11.4491 19.0829L10.2419 19.5422C9.99466 19.6363 9.9835 19.9414 10.2234 20.0493L19.7801 24.3474C19.9317 24.4156 20.1113 24.4156 20.2629 24.3474L29.8196 20.0493C30.0595 19.9414 30.0484 19.6363 29.8011 19.5422L28.594 19.0829C28.0977 18.894 27.5467 18.9103 27.0624 19.1281L20.287 22.1753C20.1203 22.2503 19.9228 22.2503 19.756 22.1753L12.9807 19.1281ZM12.9807 22.7287C12.4964 22.5109 11.9454 22.4946 11.4491 22.6834L10.2419 23.1427C9.99466 23.2368 9.9835 23.5419 10.2234 23.6498L19.7801 27.948C19.9317 28.0161 20.1113 28.0161 20.2629 27.948L29.8196 23.6498C30.0595 23.5419 30.0484 23.2368 29.8011 23.1427L28.594 22.6834C28.0977 22.4946 27.5467 22.5109 27.0624 22.7287L20.2629 25.7867C20.1113 25.8549 19.9317 25.8549 19.7801 25.7867L12.9807 22.7287Z"
                fill={isLayerClick ? "#554AD3" : "#4D4D4D"}
              />
            </svg>
          </Button>
        </Box>
      </Box>

      {editPageInfo === "1" && <FileRight></FileRight>}
      {editPageInfo === "2" && <UploadRight></UploadRight>}
      {editPageInfo === "3" && <EnvRight></EnvRight>}
      {editPageInfo === "4" && <BuildingRight></BuildingRight>}
      {editPageInfo === "5" && <AssetRight></AssetRight>}
      {editPageInfo === "6" && <AssetSettingRight></AssetSettingRight>}
      {editPageInfo === "7" && <ScenarioRight></ScenarioRight>}
      {editPageInfo === "8" && <QrRight></QrRight>}
    </Box>
  );
};

export default Rightbar;
