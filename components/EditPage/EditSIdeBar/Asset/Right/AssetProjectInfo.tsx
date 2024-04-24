import { Box } from "@mui/material";
import SlideBox from "../../../Edit_com/SlideBox";
import EnvProjectInfo from "../../Env/Right/EnvProjectInfo";

const AssetProjectInfo = () => {
  return (
    // <EnvSetBackgroundRight/>
    <Box sx={{ paddingTop: "1.12rem" }}>
      <SlideBox title={"오브젝트 속성"}>
        <EnvProjectInfo />
      </SlideBox>
    </Box>
  );
};

export default AssetProjectInfo;
