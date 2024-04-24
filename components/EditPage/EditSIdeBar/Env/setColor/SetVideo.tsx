import { Box, Typography } from "@mui/material";
import UploadFile from "../../../Edit_com/UploadFile";
import FileList from "../../../Edit_com/FileList";
const SetVideo = () => {
  return (
    <Box sx={{ paddingX: "1rem" }}>
      <UploadFile type="video"></UploadFile>
      <FileList state={"Video"}></FileList>
    </Box>
  );
};
export default SetVideo;
