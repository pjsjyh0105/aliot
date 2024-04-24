import { Box } from "@mui/material";
import EnvSetBackgroundRight from "./EnvSetBackgroundRight";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { EnvPage } from "../EnvSetPage";
import { EnvColorPage } from "../EnvSetPage";
import EnvPhotoRight from "../setColor/photo/EnvPhotoRight";
import EnvVideoRight from "../setColor/videof/EnvVideoRight";
const EnvRight = () => {
  const envPage = useRecoilValue(EnvPage);
  const envColorPage = useRecoilValue(EnvColorPage);
  const [colorPage, setColorPage] = useRecoilState(EnvColorPage);
  useEffect(() => {
    if (envPage == "env") setColorPage("색상");
  }, [envPage, setColorPage]);
  return (
    <Box>
      {envPage == "env" && <EnvSetBackgroundRight></EnvSetBackgroundRight>}
      {envColorPage == "사진" && <EnvPhotoRight></EnvPhotoRight>}
      {envColorPage == "영상" && <EnvVideoRight></EnvVideoRight>}
    </Box>
  );
};
export default EnvRight;
