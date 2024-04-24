import { Box, IconButton, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import VideoCCTV from "./VideoCCTV";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70.3125rem", // width는 하나만 유지
  height: "38.125rem",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  justifycontent: "center",
  display: "flex",
  flexDirection: "column",
};
const CCTVModal = ({ open, IsOpen }: { open: boolean; IsOpen: any }) => {
  const [isopen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    IsOpen(false);
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  return (
    <Modal open={isopen} onClose={handleClose}>
      <Box sx={style}>
        <VideoCCTV
          geturl={"https://dt.gractor.com/video/live.m3u8"}
        ></VideoCCTV>
        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            marginTop: "4rem",
          }}
        >
          <IconButton onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <rect width="40" height="40" rx="20" fill="#EEEEEE" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.9171 14.5365C27.2686 14.185 27.2686 13.6151 26.9171 13.2637C26.5656 12.9122 25.9958 12.9122 25.6443 13.2637L19.9414 18.9666L14.2385 13.2637C13.887 12.9122 13.3172 12.9122 12.9657 13.2637C12.6142 13.6151 12.6142 14.185 12.9657 14.5365L18.6686 20.2394L12.9636 25.9444C12.6121 26.2959 12.6121 26.8657 12.9636 27.2172C13.315 27.5687 13.8849 27.5687 14.2363 27.2172L19.9414 21.5122L25.6465 27.2172C25.9979 27.5687 26.5678 27.5687 26.9193 27.2172C27.2707 26.8657 27.2707 26.2959 26.9193 25.9444L21.2142 20.2394L26.9171 14.5365Z"
                fill="#474747"
              />
            </svg>
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default CCTVModal;
