import { Box } from "@mui/material";
import Opacity from "../../editImg/opacity/Opacity";
import Reverse from "../../editImg/reverse/Reverse";
import Sort from "../../editImg/sort/Sort";

const EnvVideoRight = () => {
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
    </Box>
  );
};

export default EnvVideoRight;
