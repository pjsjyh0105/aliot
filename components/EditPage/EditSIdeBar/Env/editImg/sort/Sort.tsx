"use client";
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useState, useEffect } from "react";

import Collapse from "@mui/material/Collapse";
import styles from "../../../../../../app/style/EditPage/Env/Sort.module.css";
import { Space } from "antd";
import DownupToggle from "../DownupToggle";
import { Box, Button, Typography } from "@mui/material";
import { PurpleBtn } from "../../../../Edit_com/PurpleBtn";
import {
  Arrange_left,
  Arrange_right,
  Arrange_bottom,
  Arrange_lrcenter,
  Arrange_tbcenter,
  Arrange_top,
  Maintain,
  FullBtn,
  PreviewBtn,
} from "./SortBtn";
const Sort = () => {
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState("");
  const handleToggle = () => {
    setExpand(!expand);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "3.12rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <DownupToggle setExpand={setExpand}></DownupToggle>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.9375rem",
            }}
          >
            정렬
          </Typography>
        </Box>
        <PreviewBtn></PreviewBtn>
      </Box>

      <Collapse in={expand}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "0.81rem",
          }}
        >
          <FullBtn></FullBtn>
          <Maintain></Maintain>
        </Box>
        <Box sx={{ display: "flex", paddingTop: "1.13rem" }}>
          <Box style={{ marginRight: "0.37rem" }}>
            <Arrange_left></Arrange_left>
          </Box>
          <Box style={{ marginRight: "0.37rem" }}>
            <Arrange_lrcenter></Arrange_lrcenter>
          </Box>
          <Box style={{ marginRight: "0.37rem" }}>
            <Arrange_right></Arrange_right>
          </Box>

          <Box style={{ marginRight: "0.37rem" }}>
            <Arrange_top></Arrange_top>
          </Box>

          <Box>
            <Arrange_tbcenter></Arrange_tbcenter>
          </Box>
          <Box style={{ marginRight: "0.37rem" }}>
            <Arrange_bottom></Arrange_bottom>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};
export default Sort;
