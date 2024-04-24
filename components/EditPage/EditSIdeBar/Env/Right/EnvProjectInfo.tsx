//환경 탭 오른쪽에 띄울 정보. 전역에 지정된 정보 가져와 넣어줌
import { Box, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { WorldBackgroundData } from "../../../../Drawer/state";
const EnvProjectInfo = () => {
  const [worldData] = useRecoilState(WorldBackgroundData);
  return (
    <Box sx={{ paddingTop: "1.38rem" }}>
      <Box sx={{ marginBottom: "1.31rem" }}>
        <Typography
          sx={{
            height: "1.875rem",
            fontSize: "0.875rem",
            color: "#2F2F2F",
            fontWeight: "400",
          }}
        >
          name
        </Typography>
        <Typography
          sx={{
            height: "1.875rem",
            fontSize: "0.9375rem",
            color: "#222",
            fontWeight: "500",
          }}
        >
          {worldData.name}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "1.31rem" }}>
        <Typography
          sx={{
            height: "1.875rem",
            fontSize: "0.875rem",
            fontWeight: "400",
            color: "#2F2F2F",
          }}
        >
          updated by
        </Typography>
        <Typography
          sx={{
            height: "1.875rem",
            fontSize: "0.9375rem",
            color: "#222",
            fontWeight: "500",
          }}
        >
          {worldData.updatedBy}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            height: "1.875rem",
            fontSize: "0.875rem",
            fontWeight: "400",
            color: "#2F2F2F",
          }}
        >
          date updated
        </Typography>
        <Typography
          sx={{
            height: "1.875rem",
            fontSize: "0.9375rem",
            color: "#222",
            fontWeight: "500",
          }}
        >
          {worldData.dateUpDated}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "0.01rem",
          backgroundColor: "#F0F0F0",
          marginTop: "1.75rem",
        }}
      ></Box>
    </Box>
  );
};

export default EnvProjectInfo;
