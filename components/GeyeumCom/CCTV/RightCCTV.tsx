import { Box } from "@mui/material";
import CCTVView from "./CCTVView";

const RightCCTV = ({
  cctvinfo,
  setfloor,
}: {
  cctvinfo: any;
  setfloor: any;
}) => {
  return (
    <Box
      sx={{
        overflowY: "scroll",
        maxHeight: "53.5rem",
        position: "absolute",
        right: 0,
        zIndex: 1,
        marginRight: "1.87rem",
        scrollbarWidth: "none" /* Firefox */,
        msOverflowStyle: "none" /* Internet Explorer 10+ */,
        "&::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, Opera*/,
        },
        marginTop: "9.31rem",
        marginBottom: "2rem",
      }}
    >
      {cctvinfo.map((value) => (
        // eslint-disable-next-line react/jsx-key
        <CCTVView name={value.name} setfloor={setfloor}></CCTVView>
      ))}
    </Box>
  );
};

export default RightCCTV;
