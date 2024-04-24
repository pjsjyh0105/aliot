import { Box, Button } from "@mui/material";
import { useState } from "react";

const SetBtn = ({ setFilterTab }: { setFilterTab: any }) => {
  const [clickBtn, setClickBtn] = useState("set");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button
        sx={{
          width: "7.4375rem",
          height: "2.25rem",
          borderRadius: "0.1875rem",
          backgroundColor: clickBtn == "set" ? "white" : "none",
          color: clickBtn == "set" ? "#554AD3" : "black",
          fontWeight: "400",
          fontSize: "0.9375rem",
          "&:hover": {
            background: clickBtn == "set" ? "white" : "none",
          },
          padding: 0,
          marginRight: "0.81rem",
        }}
        onClick={() => {
          setClickBtn("set");
          setFilterTab("set");
        }}
      >
        필터
      </Button>
      <Button
        sx={{
          width: "7.4375rem",
          height: "2.25rem",
          borderRadius: "0.1875rem",
          backgroundColor: clickBtn == "self" ? "white" : "none",
          color: clickBtn == "self" ? "#554AD3" : "black",
          fontWeight: "400",
          fontSize: "0.9375rem",
          "&:hover": {
            background: clickBtn == "self" ? "white" : "none",
          },
          padding: 0,
        }}
        onClick={() => {
          setClickBtn("self");
          setFilterTab("self");
        }}
      >
        직접 조정
      </Button>
    </Box>
  );
};

export default SetBtn;
