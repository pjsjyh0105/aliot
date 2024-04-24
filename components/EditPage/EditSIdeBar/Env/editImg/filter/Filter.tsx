import { Box, Collapse, Typography } from "@mui/material";
import SetBtn from "./SetBtn";
import { useEffect, useState } from "react";
import SetFilter from "./SetFilter";
import DownupToggle from "../DownupToggle";
import SelfFilter from "./SelfFilter";
const Filter = () => {
  const [filterTab, setFilterTab] = useState("set");
  const [expand, setExpand] = useState(false);

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        {" "}
        <DownupToggle setExpand={setExpand} />
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "0.9375rem",
          }}
        >
          필터
        </Typography>
      </Box>

      <Collapse in={expand} sx={{ marginTop: "0.81rem" }}>
        {" "}
        <Box
          sx={{
            backgroundColor: "#F8F8F8",
            width: "16.875rem",
            height: "2.875rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: "0.62rem",
          }}
        >
          {" "}
          <SetBtn setFilterTab={setFilterTab}></SetBtn>
        </Box>
        {filterTab === "set" && <SetFilter></SetFilter>}
        {filterTab === "self" && <SelfFilter></SelfFilter>}
      </Collapse>
    </Box>
  );
};

export default Filter;
