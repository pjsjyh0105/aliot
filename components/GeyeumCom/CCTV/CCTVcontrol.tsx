import { Box, Typography } from "@mui/material";
import { CCTVIcon } from "../SVGFile/CCTVIcon";
import { useEffect, useState } from "react";
import { clickCCTVlist } from "../CCTVclick";
import { useRecoilState } from "recoil";
import { poiClick, clickcctvname } from "../CCTVclick";
const CCTVcontrol = ({
  name,
  state,
  setfloor,
}: {
  name: any;
  state: any;
  setfloor: any;
}) => {
  const [clickcctv, setClickcctv] = useState(false);
  const [isON, setIsON] = useState(false);
  const [getpoiClick, setGetpoiClick] = useRecoilState(poiClick);
  const [clickCCTVList, setclickCCTVList] = useRecoilState(clickCCTVlist);
  const [getclickcctvname, setGetclickcctvname] = useRecoilState(clickcctvname);
  useEffect(() => {
    if (setfloor == "all") {
      setIsON(false);
    } else if (setfloor == "first") {
      if (name.includes("1F")) {
        setIsON(true);
      } else {
        setIsON(false);
      }
    } else if (setfloor == "second") {
      if (name.includes("2F")) {
        setIsON(true);
      } else {
        setIsON(false);
      }
    } else if (setfloor == "cctv") {
      setIsON(true);
    }
  }, [setfloor]);
  useEffect(() => {
    if (clickcctv) {
      const updatedList = [...clickCCTVList, name];
      setGetclickcctvname(name.split("_")[0]);
      setclickCCTVList(updatedList);
    } else {
      setGetpoiClick("");
      const updatedList = clickCCTVList.filter((cctv) => cctv !== name);
      setclickCCTVList(updatedList);
    }
  }, [clickcctv]);
  useEffect(() => {
    if (getpoiClick == name.split("_")[0]) {
      setClickcctv(true);
    }
  }, [getpoiClick]);
  return (
    <Box
      sx={{
        display: isON ? "flex" : "none",
        padding: "0.25rem 0.75rem 0.25rem 0.25rem",
        borderRadius: "1.125rem",
        border: clickcctv ? "1px solid #06FFFF" : "1px solid #343A3F",
        backgroundColor: clickcctv ? "rgba(46, 255, 192, 0.10)" : "none",
        marginBottom: "0.69rem",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      onClick={() => {
        setClickcctv(!clickcctv);
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CCTVIcon></CCTVIcon>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "600",
            color: "#C1C7CD",
            marginLeft: "0.5rem",
          }}
        >
          {name.split("_")[0]}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: "0.875rem",
          color: "#24FF00",
          fontWeight: "600",
        }}
      >
        {state}
      </Typography>
    </Box>
  );
};

export default CCTVcontrol;
