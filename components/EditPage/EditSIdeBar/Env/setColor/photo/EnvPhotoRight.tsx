import Opacity from "../../editImg/opacity/Opacity";
import Cut from "../../editImg/cut/Cut";
import Sort from "../../editImg/sort/Sort";
import Reverse from "../../editImg/reverse/Reverse";
import { useRecoilState, useRecoilValue } from "recoil";
import { Box } from "@mui/material";
import Filter from "../../editImg/filter/Filter";
const EnvPhotoRight = () => {
  return (
    <Box
      sx={{
        paddingLeft: "1.37rem",
        paddingRight: "1.81rem",
        paddingTop: "1.87rem",
      }}
    >
      <Opacity></Opacity>
      <Sort></Sort>
      <Reverse></Reverse>
      <Cut></Cut>
      <Filter></Filter>
    </Box>
  );
};

export default EnvPhotoRight;
