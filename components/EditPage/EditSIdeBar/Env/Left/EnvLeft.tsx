import { Box, Typography } from "@mui/material";
import EnvSetBackground from "./EnvSetBackgound";
import dynamic from "next/dynamic";
import EnvSetColor from "./EnvSetColor";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { GoBack } from "../../../Edit_com/GoBack";
import { EditRightbar } from "../../../../Drawer/state";
import { useRecoilState, useRecoilValue } from "recoil";
import { EnvColorPage } from "../EnvSetPage";
import { EnvPage } from "../EnvSetPage";

const EnvLeft = () => {
  const [editRightBar, setEditRightBar] = useRecoilState(EditRightbar);
  const [envColorPage, setEnvColorPage] = useRecoilState(EnvColorPage);
  const [envPage, setEnvPage] = useRecoilState(EnvPage);
  const initialState = () => {
    setEnvPage("env");
  };
  const [data, setData] = useState(initialState);

  const backOnClick = () => {
    setEnvPage("env");
    setEnvColorPage("");
  };
  useEffect(() => {
    setEditRightBar(true);
    setEnvPage("env");
  }, [setEditRightBar, setEnvPage]);

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
        <GoBack isSHow={envPage !== "env"} onClick={backOnClick} />
        <Typography>위치</Typography>
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
      {envPage == "env" && (
        <EnvSetBackground setEnvPage={setEnvPage}></EnvSetBackground>
      )}

      {envPage === "virtual" && <EnvSetColor></EnvSetColor>}
      {envPage === "map" && <div></div>}
    </Box>
  );
};
export default EnvLeft;
//  <div
//    onClick={() => {
//      clickHandle("map");
//    }}
//  >
//    <EnvSetColor></EnvSetColor>
//  </div>;
