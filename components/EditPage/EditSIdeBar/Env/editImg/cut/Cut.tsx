import DownupToggle from "../DownupToggle";
import { useState, useEffect } from "react";
import Collapse from "@mui/material/Collapse";
import { PurpleBtn } from "../../../../Edit_com/PurpleBtn";
import { Box, Button, Modal, Typography } from "@mui/material";
import { RecoilState, useRecoilState } from "recoil";
import { WorldBackgroundData } from "../../../../../Drawer/state";
import { CustomPurpleIconButton } from "../../../../Edit_com/CustomPurpleIconBtn";
import CutModal from "./CutModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Cut = () => {
  const [expand, setExpand] = useState(false);
  const [isCropin, setIsCropin] = useState(false);
  const [open, setOpen] = useState(false);
  const [isCutClick, setisCutClick] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const fillColor = isCutClick ? "#7E73FE" : isHover ? "#DDD" : "#F8F8F8";
  const fontColor = isCutClick ? "#fff" : isHover ? "#2F2F2F" : "#2F2F2F";
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);

  const IconComponent = ({ fillColor }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
    >
      <path
        d="M8.5 5V20C8.5 20.5523 8.94772 21 9.5 21H24.5"
        stroke={fillColor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M21.5 24L21.5 9C21.5 8.44772 21.0523 8 20.5 8L5.5 8"
        stroke={fillColor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
  const cutBtnClick = () => {
    setOpen(true); // 모달을 열기
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false); // 모달을 닫기
  };
  return (
    <Box sx={{ marginTop: "3.12rem" }}>
      <Box sx={{ display: "flex", marginBottom: "0.81rem" }}>
        <DownupToggle setExpand={setExpand} />
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "0.9375rem",
          }}
        >
          자르기
        </Typography>
      </Box>
      <Collapse in={expand} sx={{ marginTop: "0.81rem" }}>
        <CustomPurpleIconButton
          getWidth="100%"
          text="자르기"
          getonClick={cutBtnClick}
          Icon={IconComponent}
        ></CustomPurpleIconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CutModal></CutModal>
          </Box>
        </Modal>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.13rem",
          }}
        >
          <CustomPurpleIconButton
            getWidth="5.0625rem"
            text="1:1"
            getonClick={() => console.log("!!")}
          ></CustomPurpleIconButton>{" "}
          <CustomPurpleIconButton
            getWidth="5.0625rem"
            text="4:3"
            getonClick={() => console.log("!!")}
          ></CustomPurpleIconButton>{" "}
          <CustomPurpleIconButton
            getWidth="5.0625rem"
            text="16:9"
            getonClick={() => console.log("!!")}
          ></CustomPurpleIconButton>
        </Box>
      </Collapse>
    </Box>
  );
};
export default Cut;
