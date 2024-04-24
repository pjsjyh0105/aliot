//에딧 페이지 좌측 슬라이드바
import { useEffect } from "react";
import EnvLeft from "./Env/Left/EnvLeft";
import AssetLeft from "./Asset/Left/AssetLeft";
import AssetSettingLeft from "./AssetSetting/Left/AssetSettingLeft";
import BuildingLeft from "./Building/Left/BuildingLeft";
import UploadLeft from "./Upload/Left/UploadLeft";
import FileLeft from "./File/Left/FileLeft";
import QrLeft from "./QR/Left/QrLeft";
import ScenarioLeft from "./CameraScenario/Left/ScenarioCamLeft";
import { useRecoilState, useRecoilValue } from "recoil";
import { Box, Typography } from "@mui/material";
import { ClickSidebar } from "../../Drawer/state";
import IconButton from "@mui/material/IconButton";
import { EditCurrentPage, EditRecentPage } from "../../Drawer/state";

const Leftbar = ({ page }: { page: any }) => {
  const editPageInfo = useRecoilValue(ClickSidebar);
  const [editPage, setEditPage] = useRecoilState(EditCurrentPage);
  const [editRecentPage, setEditRecentPage] = useRecoilState(EditCurrentPage);
  const backOnClick = () => {
    setEditPage(editRecentPage);
  };
  return (
    <>
      <Box>
        {/*   */}
        {editPageInfo === "1" && <FileLeft></FileLeft>}
        {editPageInfo === "2" && <UploadLeft></UploadLeft>}
        {editPageInfo === "3" && <EnvLeft></EnvLeft>}
        {editPageInfo === "4" && <BuildingLeft></BuildingLeft>}
        {editPageInfo === "5" && <AssetLeft></AssetLeft>}
        {editPageInfo === "6" && <AssetSettingLeft></AssetSettingLeft>}
        {editPageInfo === "7" && <ScenarioLeft></ScenarioLeft>}
        {editPageInfo === "8" && <QrLeft></QrLeft>}
      </Box>
    </>
  );
};

export default Leftbar;
