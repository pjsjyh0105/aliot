import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

import QuestionIcon from "../../../asset/component/Topbar/question.png";
import Image from "next/image";

export default function FloatingQuestionButton() {
  return (
    <Box
      sx={{
        position: "absolute",
        right: "3.38rem",
        bottom: "2.37rem",
        "& > :not(style)": { m: 1 },
      }}
    >
      <Fab
        size="small"
        aria-label="question"
        sx={{
          fontSize: "1.375rem",
          fontWeight: "600",
          fontFamily: "Noto Sans KR",
          background: "#7E73FE",
          color: "#FFF",
          boxShadow: "1px 2px 2px 0px rgba(0, 0, 0, 0.20)",
          "&:hover": {
            background: "#7E73FE",
          },
        }}
      >
        ?
      </Fab>
    </Box>
  );
}
