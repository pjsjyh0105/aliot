import { Box } from "@mui/material";
import { useState } from "react";
import { Collapse, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import SlideBox from "../../../Edit_com/SlideBox";
import EnvProjectInfo from "./EnvProjectInfo";
const EnvSetBackgroundRight = () => {
  const [isClick, setIsClick] = useState("속성");
  const onHandleChange = (value) => {
    setIsClick(value);
  };
  const { token } = theme.useToken();
  const panelStyle: React.CSSProperties = {
    width: "16.1875rem",
  };
  return (
    <Box sx={{ paddingTop: "1.12rem" }}>
      <SlideBox title={"프로젝트 정보"}>
        <EnvProjectInfo />
      </SlideBox>
    </Box>
  );
};

export default EnvSetBackgroundRight;
