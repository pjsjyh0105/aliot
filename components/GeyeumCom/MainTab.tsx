"use client";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

const MainTab = ({ setNowTab }: { setNowTab: any }) => {
  const [value, setValue] = useState("all");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setNowTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        aria-label="secondary tabs example"
      >
        <Tab
          sx={{
            color: value ? "#FFF" : "rgba(255, 255, 255, 0.6)",
            width: "12rem",
          }}
          value="all"
          label="전체"
        />
        <Tab
          sx={{
            color: value ? "#FFF" : "rgba(255, 255, 255, 0.6)",
            width: "12rem",
          }}
          value="first"
          label="1층"
        />
        <Tab
          sx={{
            color: value ? "#FFF" : "rgba(255, 255, 255, 0.6)",
            width: "12rem",
          }}
          value="second"
          label="2층"
        />
        <Tab
          sx={{
            color: value ? "#FFF" : "rgba(255, 255, 255, 0.6)",
            width: "12rem",
          }}
          value="CCTV"
          label="전체CCTV"
        />
      </Tabs>
    </Box>
  );
};

export default MainTab;
