import { useRecoilState } from "recoil";
import { EditRightbar } from "../../../../Drawer/state/Drawer";
import { useEffect, useState } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { GoBack } from "../../../Edit_com/GoBack";
import { BuildingPage } from "../BuildingSetPage";
import FileList from "../../../Edit_com/FileList";
import { PurpleBtn } from "../../../Edit_com/PurpleBtn";
import UploadFile from "../../../Edit_com/UploadFile";

const BuildingLeft = () => {
  const [editRightBar, setEditRightBar] = useRecoilState(EditRightbar);
  const [buildingPage, setBuildingPage] = useRecoilState(BuildingPage);
  const initialState = () => {
    setBuildingPage("building");
  };
  const backOnClick = () => {
    setBuildingPage("env");
  };
  const [data, setData] = useState(initialState);
  useEffect(() => {
    setEditRightBar(true);
  }, [setEditRightBar]);
  const [selected, setSelected] = useState("all");
  return (
    <Box>
      <Box
        sx={{
          height: "3.625rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {data}
        {/* 뒤로가기 버튼. 상황에 따라 보여지게 안보여지게 설정. 해당 버튼을 눌렀을 시 일어나야할 이벤트 onclick으로 연결 */}
        <GoBack isSHow={buildingPage !== "building"} onClick={backOnClick} />
        <Typography>건물 (외관)</Typography>
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
      {/* 환경탭 왼쪽 기본: env선택창 => 선택에 따라 virtual/map으로 변경.  변경 변수는 envstpage에서 관리 */}
      {buildingPage == "building" && (
        <Box sx={{ paddingX: "1.3rem" }}>
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
                selected={selected === "furniture"}
                widthed={6.75}
                onClick={() => setSelected("furniture")}
              >
                주거
              </PurpleBtn>
            </Grid>
            <Grid>
              <PurpleBtn
                selected={selected === "traffic"}
                widthed={6.75}
                onClick={() => setSelected("traffic")}
              >
                오피스
              </PurpleBtn>
            </Grid>
            <Grid>
              <PurpleBtn
                selected={selected === "facility"}
                widthed={6.75}
                onClick={() => setSelected("facility")}
              >
                학교
              </PurpleBtn>
            </Grid>
          </Grid>
          <UploadFile type="glb"></UploadFile>
          <FileList state={"Glb"}></FileList>
        </Box>
      )}
    </Box>
  );
};
export default BuildingLeft;
