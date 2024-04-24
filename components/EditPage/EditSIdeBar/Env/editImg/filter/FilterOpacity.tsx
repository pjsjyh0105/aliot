import { Box, Slider } from "@mui/material";
import { useState } from "react";

const FilterOpacity = ({
  start,
  end,
  middle,
  setFilter,
}: {
  start: number;
  end: number;
  middle: number;
  setFilter: (value: number) => void;
}) => {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setFilter(newValue as number);
  };
  return (
    <Box>
      {" "}
      <Slider
        defaultValue={middle}
        min={start}
        max={end}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        style={{ color: "#7E73FE", width: "100%" }}
      />
    </Box>
  );
};

export default FilterOpacity;
