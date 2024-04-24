"use client";
import { Box, Typography } from "@mui/material";
import Move from "./Move";
const CreateFile = ({
  title,
  addresss,
}: {
  title: string;
  addresss: string;
}) => {
  const onclickhandle = () => {
    //Move(addresss);
    if (typeof window !== undefined) window.location.href = addresss;
  };
  return (
    <Box onClick={onclickhandle}>
      <Box
        sx={{ backgroundColor: "gray", width: "12rem", height: "8rem" }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0.5rem",
        }}
      >
        <Typography>{title}</Typography>
      </Box>
    </Box>
  );
};

export default CreateFile;
