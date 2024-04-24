import { Box } from "@mui/material";
import SlideBox from "../../../Edit_com/SlideBox";
import AssetObjSetting from "./AssetObjSetting";

const AssetRight = () => {
  return (
    // <EnvSetBackgroundRight/>
    <Box sx={{ paddingTop: "1.12rem" }}>
      <SlideBox title={"오브젝트 속성"}>
        <AssetObjSetting />
      </SlideBox>
    </Box>
  );
};

export default AssetRight;
