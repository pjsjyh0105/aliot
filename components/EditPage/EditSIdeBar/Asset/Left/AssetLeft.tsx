import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Image from "next/image";

import { GoBack } from "../../../Edit_com/GoBack";
import { EditRightbar } from "../../../../Drawer/state"; //변수 확인 필요 (삭제할수도있음)
import { EnvColorPage } from "../../Env/EnvSetPage"; //지울것.
import { AssetPage } from "../AssetSetPage";
import { PurpleBtn } from "../../../Edit_com/PurpleBtn";

import { Box, Grid, IconButton, Typography } from "@mui/material";
import UploadFile from "../../../Edit_com/UploadFile";
import FileList from "../../../Edit_com/FileList";

const AssetLeft = () => {
  const [selected, setSelected] = useState("all");

  const [editRightBar, setEditRightBar] = useRecoilState(EditRightbar);
  const [assetColorPage, setEnvColorPage] = useRecoilState(EnvColorPage);
  const [assetPage, setAssetPage] = useRecoilState(AssetPage);
  const backOnClick = () => {
    setAssetPage("asset");
    setEnvColorPage("");
  };
  useEffect(() => {
    setEditRightBar(true);
    setAssetPage("asset");
  }, [setAssetPage, setEditRightBar]);
  return (
    <Box sx={{ height: "100%" }}>
      <Box
        sx={{
          height: "3.625rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* 뒤로가기 버튼. 상황에 따라 보여지게 안보여지게 설정. 해당 버튼을 눌렀을 시 일어나야할 이벤트 onclick으로 연결 */}
        <GoBack isSHow={true} onClick={backOnClick} />
        <Typography
          sx={{
            color: "#2F2F2F",
            fontSize: "1rem",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          3D 에셋
        </Typography>
        <IconButton aria-label="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.9418 16.0713C26.1185 18.256 26.1185 21.7982 23.9418 23.9829C21.7651 26.1677 18.2359 26.1677 16.0592 23.9829C13.8825 21.7982 13.8825 18.256 16.0592 16.0713C18.2359 13.8865 21.7651 13.8865 23.9418 16.0713ZM25.5028 24.4857C27.7503 21.6985 27.5829 17.6006 25.0005 15.0086C22.2391 12.237 17.7619 12.237 15.0005 15.0086C12.2391 17.7803 12.2391 22.2739 15.0005 25.0455C17.5838 27.6384 21.6687 27.8056 24.4457 25.5472C24.4542 25.5567 24.463 25.566 24.4721 25.5751L26.1388 27.248C26.4312 27.5414 26.9052 27.5414 27.1975 27.248C27.4899 26.9545 27.4899 26.4788 27.1975 26.1853L25.5308 24.5125C25.5217 24.5033 25.5123 24.4944 25.5028 24.4857Z"
              fill="#4D4D4D"
            />
          </svg>
        </IconButton>
      </Box>
      <Box
        sx={{
          padding: "0 1.37rem",
        }}
      >
        {/* 현재 경로 */}
        <Typography
          sx={{
            color: "#6B6B6B",
            fontSize: "0.8125rem",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          3D 에셋 &gt; 전체
        </Typography>
        <Grid
          container
          rowGap={"0.37rem"}
          columnGap={"0.44rem"}
          sx={{ marginTop: "0.94rem", marginBottom: "1.25rem" }}
        >
          <Grid>
            <PurpleBtn
              widthed={6.75}
              selected={selected === "all"}
              onClick={() => setSelected("all")}
            >
              전체
            </PurpleBtn>
          </Grid>
          <Grid>
            <PurpleBtn
              selected={selected === "가구"}
              widthed={6.75}
              onClick={() => setSelected("가구")}
            >
              가구
            </PurpleBtn>
          </Grid>
          <Grid>
            <PurpleBtn
              selected={selected === "교통"}
              widthed={6.75}
              onClick={() => setSelected("교통")}
            >
              교통
            </PurpleBtn>
          </Grid>
          <Grid>
            <PurpleBtn
              selected={selected === "시설물"}
              widthed={6.75}
              onClick={() => setSelected("시설물")}
            >
              시설물
            </PurpleBtn>
          </Grid>
          <Grid>
            <PurpleBtn
              selected={selected === "장치"}
              widthed={6.75}
              onClick={() => setSelected("장치")}
            >
              장치
            </PurpleBtn>
          </Grid>
          <Grid>
            <PurpleBtn
              selected={selected === "자연"}
              widthed={6.75}
              onClick={() => setSelected("자연")}
            >
              자연
            </PurpleBtn>
          </Grid>
          <Grid>
            <PurpleBtn
              selected={selected === "건축"}
              widthed={6.75}
              onClick={() => setSelected("건축")}
            >
              건축
            </PurpleBtn>
          </Grid>
          <Grid>
            <PurpleBtn
              selected={selected === "기타"}
              widthed={6.75}
              onClick={() => setSelected("기타")}
            >
              기타
            </PurpleBtn>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ margin: "0.62rem 1.37rem" }}>
        <UploadFile type="glb" />
      </Box>
      <div>
        <div
          className="App"
          style={{ padding: "0 1.37rem", maxHeight: "35.4rem" }}
        >
          <FileList state={"Glb"} glbType={selected}></FileList>
        </div>
      </div>
      {/* 환경탭 왼쪽 기본: asset선택창 => 선택에 따라 virtual/map으로 변경.  변경 변수는 assetstpage에서 관리 */}
      {/* {assetPage == "asset" && (
          <EnvSetBackground setAssetPage={setAssetPage}></EnvSetBackground>
        )}

        {assetPage === "virtual" && <EnvSetColor></EnvSetColor>}
        {assetPage === "map" && <div></div>} */}
    </Box>
  );
};

export default AssetLeft;
