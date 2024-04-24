import React from "react";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const BabylonCanvas = dynamic(() => import("../BabylonScene/BabylonCanvas"), {
  ssr: false,
});

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: "9.75rem",
  width: "6.75rem",
  background: "#F3F3F3",
  gap: "1.4375rem",
  padding: "0.44rem 0.44rem 1.44rem 0.44rem",
  display: "flex",
  border: "1.8px solid transparent",
  flexDirection: "column",
  borderRadius: "0.1875rem",
  "& .MuiTypography-root": {
    fontFamily: "'Noto Sans KR'",
    color: "#000",
    fontSize: "0.8125rem",
    lineHeight: "normal",
    fontWeight: "500",
  },
  "&:hover .MuiTypography-root": {
    color: "#554AD3",
    fontWeight: "600",
  },
  "&:hover, &.Mui-focusVisible": {
    backgroundColor: "#F0EEFF",
    border: "1.8px solid #7E73FE",
    zIndex: 1,
  },
}));

const ObjmodelViewer: React.FC<{ src: string; name: string }> = ({
  src,
  name,
}) => {
  async function loadModel() {
    try {
      const { scene, engineRef } = await import(
        "../BabylonScene/BabylonCanvas"
      );
      const c = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "https://dt.gractor.com/demoModeling/",
        `${name}.glb`,
        scene
      );

      // 로딩 후 처리
    } catch (error) {
      console.error("Error loading model:", error);
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: "6.75rem",
        width: "6.75rem",
      }}
    >
      <ImageButton onClick={loadModel} focusRipple key={name}>
        <model-viewer
          src={src}
          alt="A 3D model"
          auto-rotate
          style={{
            display: "block",
            width: "5.875rem",
            height: "5.3125rem",
            background: "#fff",
            borderRadius: "0.1875rem",
          }}
        ></model-viewer>

        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          sx={{
            position: "relative",
          }}
        >
          {name}
        </Typography>
      </ImageButton>
    </Box>
  );
};

export default ObjmodelViewer;
