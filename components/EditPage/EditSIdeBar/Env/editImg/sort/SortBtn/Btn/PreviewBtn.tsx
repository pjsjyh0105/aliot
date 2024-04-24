import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { TextField } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { WorldBackgroundData } from "../../../../../../../Drawer/state";
export const PreviewBtn = () => {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("1:1");
  const [boxWidth, setBoxWidth] = useState("9rem");
  const [boxHeight, setBoxHeight] = useState("9rem");
  const [person, setPerson] = useState(false);
  const [personX, setPersonX] = useState();
  const [personY, setPersonY] = useState();
  const worldData = useRecoilValue(WorldBackgroundData);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    const selectedRatio = event.target.value;
    setMaxWidth(selectedRatio);
    if (selectedRatio != "person") {
      setPerson(false);
      const parts = selectedRatio.split(":");
      const widthRatio = parts[0];
      console.log(parts);
      const heightRatio = parts[1];
      switch (selectedRatio) {
        case "3:4":
          setBoxWidth("9rem");
          setBoxHeight("12rem");
          break;
        case "4:3":
          setBoxWidth("12rem");
          setBoxHeight("9rem");
          break;
        case "9:16":
          setBoxWidth("9rem");
          setBoxHeight("16rem");
          break;
        case "16:9":
          setBoxWidth("16rem");
          setBoxHeight("9rem");
          break;
        case "1:1":
          setBoxWidth("9rem");
          setBoxHeight("9rem");
          break;
      }
    } else {
      setPerson(true);
    }
  };
  const handlePersonXChange = (event) => {
    setPersonX(event.target.value);
  };

  const handlePersonYChange = (event) => {
    setPersonY(event.target.value);
  };
  const handleFullWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFullWidth(event.target.checked);
  };
  useEffect(() => {
    if (personX && personY) {
      if (personX > personY) {
        const cal = 9 / personY;
        const calX = cal * personX;
        setBoxWidth(calX + "rem");
        setBoxHeight("9rem");
      } else {
        const cal = 9 / personX;
        const calY = cal * personY;
        setBoxWidth("9rem");
        setBoxHeight(calY + "rem");
      }
    }
  }, [personX, personY]); // personX와 personY 상태가 변경될 때마다 실행

  return (
    <Box>
      <Box
        sx={{
          fontSize: "0.9375rem",
          cursor: "pointer",
          color: open ? "#7E73FE" : "#2F2F2F",
        }}
        onClick={handleClickOpen}
      >
        미리보기
      </Box>
      <Dialog
        sx={{
          position: "absolute", // 절대 위치 지정
          top: "auto", // 위쪽 위치 자동으로 설정
          right: "20%", // 오른쪽에서 16px 떨어진 위치
          bottom: "40%", // 아래쪽에서 16px 떨어진 위치
          left: "auto", // 왼쪽 위치 자동으로 설정
        }}
        open={open}
        onClose={handleClose}
        // BackdropComponent={() => <div />}
      >
        <DialogContent sx={{ paddingY: "1.12rem", paddingX: "2.97rem" }}>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: boxWidth,
                height: boxHeight,
                background: "#C8C6C6",
                backgroundImage: `url(${worldData.backgroundImg.url})`,
                backgroundSize: worldData.backgroundImgSize,
                backgroundPosition: worldData.backgroundImgPosition,
                backgroundRepeat: worldData.backgroundRepeat,
                transform: worldData.backgroundImgTransform,
              }}
            ></Box>
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">비율</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: "max-width",
                  id: "max-width",
                }}
              >
                <MenuItem value="3:4">3:4</MenuItem>
                <MenuItem value="4:3">4:3</MenuItem>
                <MenuItem value="9:16">9:16</MenuItem>
                <MenuItem value="16:9">16:9</MenuItem>
                <MenuItem value="1:1">1:1</MenuItem>
                <MenuItem value="person">사용자 지정</MenuItem>
              </Select>
              <Box
                sx={{ display: person ? "block" : "none", marginTop: "0.5rem" }}
              >
                <TextField
                  id="outlined-basic"
                  label="W"
                  variant="outlined"
                  onChange={handlePersonXChange}
                  sx={{ width: "4.625rem", height: "2.25rem" }}
                />
                <TextField
                  id="outlined-basic"
                  label="H"
                  variant="outlined"
                  onChange={handlePersonYChange}
                  sx={{ width: "4.625rem", height: "2.25rem" }}
                />
              </Box>
            </FormControl>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
