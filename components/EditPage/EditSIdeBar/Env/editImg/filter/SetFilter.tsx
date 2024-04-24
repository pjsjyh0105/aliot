import { Box, Typography } from "@mui/material";
import { WorldBackgroundData } from "../../../../../Drawer/state";
import { RecoilState, useRecoilState } from "recoil";

const SetFilter = () => {
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const filterValue = [
    "없음",
    "흐림",
    "밝기",
    "대비",
    "흑백",
    "반전",
    "채도",
    "세피아",
  ];
  const filterSettings = {
    없음: "",
    흐림: "blur(4px)",
    밝기: "brightness(150%)",
    대비: "contrast(120%)",
    흑백: "grayscale(100%)",
    반전: "invert(100%)",
    채도: "saturate(200%)",
    세피아: "sepia(100%)",
  };
  const onClickFilter = (value) => {
    setWorldData((prevWorldData) => ({
      ...prevWorldData,
      filter: value,
    }));
  };
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", gap: 2, marginTop: "1.12rem" }}
    >
      {filterValue.map((filter, index) => (
        <Box
          key={filter}
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => onClickFilter(filterSettings[filter])}
        >
          <Box
            sx={{
              width: "3.375rem",
              height: "3.375rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          ></Box>
          <Typography sx={{ marginTop: "0.56rem" }}>{filter}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SetFilter;
