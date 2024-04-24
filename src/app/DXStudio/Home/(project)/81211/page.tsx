"use client";
// import StartSelected from "../../../../components/startPage_select";
// import ContentsList from "../../../../components/home/contentsList";
import styles from "../../../../../../styles/homeProject.module.css";
import { useState } from "react";
import CreateFile from "../../../../../../components/home/CreateFile";
import { Box } from "@mui/material";
import Image from "next/image";
export default function ProjectTab() {
  const [viewTypes, setView] = useState(true); // 선택된 탭 상태를 관리합니다.
  return (
    <div>
      <div className={styles.div}>
        <div className={styles.divName}>
          <label>프로젝트</label>
          <div className={styles.divBtn}>
            {/* <div className={styles.divBtnImport}>Import</div> */}
            <div className={styles.divBtnNew}>New file</div>
          </div>
        </div>
        <div className={styles.divsubmenu}>
          {/* <StartSelected /> */}
          <div className={styles.divsubmenubtn}>
            <div
              style={{ width: "40px", height: "40px", cursor: "pointer" }} // `rem` 대신 `px` 단위 사용
              onClick={() => setView(false)} // 클릭 이벤트를 감싸는 div에 적용
            >
              <Image
                src="/img/icon/DXarray text.png"
                alt="DXarray Text Icon" // 대체 텍스트 제공
                width={40} // Next.js의 Image는 pixel 값을 필요로 함
                height={40}
                layout="fixed" // 레이아웃을 fixed로 설정
              />
            </div>
            <div
              style={{ width: "40px", height: "40px", cursor: "pointer" }} // `rem` 대신 `px` 단위 사용
              onClick={() => setView(false)} // 클릭 이벤트를 감싸는 div에 적용
            >
              <Image
                src="/img/icon/DXarray box.png"
                alt="DXarray Text Icon" // 대체 텍스트 제공
                width={40} // Next.js의 Image는 pixel 값을 필요로 함
                height={40}
                layout="fixed" // 레이아웃을 fixed로 설정
              />
            </div>
          </div>
        </div>
        <div className={styles.contentsEmptyBox}>
          <div
            style={{
              width: "100px",
              height: "100px",
              cursor: "pointer",
              color: "#4D4D4D",
            }}
          >
            <Image
              src="/img/icon/DXfolder.png"
              alt="Folder Icon" // 적절한 대체 텍스트 제공
              width={100} // '6.25rem' assuming the base font-size is 16px (6.25 * 16)
              height={100}
              layout="fixed" // 레이아웃을 'fixed'로 설정하여 지정된 width와 height 사용
            />
          </div>
          <label style={{ fontSize: "1.25rem", fontWeight: "500" }}>
            비어있습니다.
          </label>
          <label style={{ fontSize: "1rem", fontWeight: "400" }}>
            DX Studio에서 작업해 보세요.
          </label>
        </div>
        {viewTypes ? (
          <></>
        ) : (
          <div className={styles.contentsListindex}>
            <label style={{ width: "24.31rem" }}>프로젝트명</label>
            <label style={{ width: "20.75rem" }}>태그</label>
            <label style={{ width: "23.125rem" }}>주소 / 위경도</label>
            <label style={{ width: "8.875rem" }}>생성 날짜</label>
            <label style={{ width: "10.6175rem" }}>마지막 작업 시간</label>
          </div>
        )}
        <div
          className={
            viewTypes ? styles.contentsDivBox : styles.contentsDivlistBox
          }
        >
          {/* <ContentsList viewType={viewTypes} /> */}
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              paddingX: "2rem",
              cursor: "Pointer",
            }}
          >
            <CreateFile title={"지윰"} addresss={"/Geyeum"}></CreateFile>
            <CreateFile
              title={"로봇 시뮬레이션"}
              addresss={"/robotz"}
            ></CreateFile>
            <CreateFile
              title={"지하차도 물 시뮬레이션"}
              addresss={"/water"}
            ></CreateFile>

            <CreateFile
              title={"DX-Studio"}
              addresss={"/DXStudio/EditPage"}
            ></CreateFile>
          </Box>
        </div>
      </div>
    </div>
  );
}
