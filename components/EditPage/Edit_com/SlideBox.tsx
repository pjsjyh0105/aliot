import { Box, Typography } from "@mui/material";
import DownupToggle from "../EditSIdeBar/Env/editImg/DownupToggle";
import { useState, useEffect } from "react";
import Collapse from "@mui/material/Collapse";
interface SlideBoxProps {
  title: string;
  children?: React.ReactNode; // children prop을 선택적(Optional)으로 정의
}
const SlideBox: React.FC<SlideBoxProps> = ({ title, children }) => {
  const [expand, setExpand] = useState(false);

  return (
    <Box>
      <Box
        sx={{ width: "100%", height: "0.01rem", backgroundColor: "#DBDBDB" }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            paddingY: "0.88rem",
            fontSize: "0.9375rem",
            paddingLeft: "1.38rem",
          }}
        >
          {title}
        </Typography>

        <Box sx={{ paddingRight: "1.88rem" }}>
          {" "}
          <DownupToggle setExpand={setExpand}></DownupToggle>
        </Box>
      </Box>

      <Box
        sx={{ width: "100%", height: "0.01rem", backgroundColor: "#DBDBDB" }}
      ></Box>
      <Collapse in={expand}>
        <Box sx={{ paddingX: "1.38rem" }}>{children}</Box>
      </Collapse>
    </Box>
  );
};

export default SlideBox;
