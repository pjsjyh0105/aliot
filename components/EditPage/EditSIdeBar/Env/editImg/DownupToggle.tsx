import { Box } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

const DownupToggle = ({
  setExpand,
  width = "2.25rem",
}: {
  setExpand: any;
  width?: string;
}) => {
  const [isexpand, setisExpand] = useState(false);
  const handleToggle = () => {
    setisExpand(!isexpand);

    setExpand(!isexpand);
  };
  return (
    <Box
      sx={{
        width: width,
        height: width,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={handleToggle}
      style={{ marginRight: "0.56rem" }}
    >
      {isexpand ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M18.5361 22.3617C18.2563 22.6948 17.7437 22.6948 17.4639 22.3617L12.0377 15.9002C11.6552 15.4447 11.979 14.75 12.5737 14.75L23.4263 14.75C24.021 14.75 24.3448 15.4447 23.9623 15.9002L18.5361 22.3617Z"
            fill="#444444"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M17.4639 13.6383C17.7437 13.3052 18.2563 13.3052 18.5361 13.6383L23.9623 20.0998C24.3448 20.5553 24.021 21.25 23.4263 21.25L12.5737 21.25C11.979 21.25 11.6552 20.5553 12.0377 20.0998L17.4639 13.6383Z"
            fill="#444444"
          />
        </svg>
      )}
    </Box>
  );
};

export default DownupToggle;
