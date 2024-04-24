"use client";
import DownupToggle from "../DownupToggle";
import { useState, useEffect } from "react";
import styles from "../../../../../../app/style/EditPage/Env/Sort.module.css";
import Collapse from "@mui/material/Collapse";
import { Box, Typography } from "@mui/material";
import { PurpleBtn } from "../../../../Edit_com/PurpleBtn";
import { LRreverse, TBreverse } from "./index";
const Reverse = () => {
  const [expand, setExpand] = useState(false);
  const [reversex, setReversex] = useState(false);
  const [reversey, setReversey] = useState(false);
  const [selected, setSelected] = useState("");

  const ImageReverseX = () => {
    setSelected("X");
    setReversex(!reversex);
  };
  const ImageReverseY = () => {
    setSelected("Y");

    setReversey(!reversey);
  };
  return (
    <Box>
      <Box sx={{ display: "flex", marginTop: "3.12rem" }}>
        <DownupToggle setExpand={setExpand}></DownupToggle>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "0.9375rem",
          }}
        >
          반전
        </Typography>
      </Box>
      <Collapse in={expand}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0.81rem",
          }}
        >
          <LRreverse></LRreverse>
          <TBreverse></TBreverse>
        </Box>
      </Collapse>
    </Box>
  );
};
export default Reverse;
