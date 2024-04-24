//에딧 페이지 좌측 사이드바

import React, { useState, useEffect } from "react";
import styles from "../../../styles/MainLeftNav.module.css";
import { editSidelist } from "../../Navigation/state";
import {
  BuildingIcon,
  FileIcon,
  UploadIcon,
  EnvIcon,
  AssetIcon,
  AssetSettingIcon,
  CameraScenarioIcon,
  QRIcon,
} from "../../SVGIcon";
import { Box, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { ClickSidebar } from "../../Drawer/state";

export default function EditSideBar() {
  const [selected, setSelected] = useState(1);
  const [sidePage, setSidePage] = useRecoilState(ClickSidebar);

  useEffect(() => {
    setSidePage(selected.toString());
  }, [selected, setSidePage]);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const sliderStyle = {
    top: `${(selected - 1) * 7}rem`,
    transition: "top 0.3s ease-out",
  };

  const TabChange = (value: any) => {
    //여기서 슬라이드바 내용 변경
    return (
      <>
        {" "}
        {value === 1 && <FileIcon selected={selected} value={value} />}
        {value === 2 && <UploadIcon selected={selected} value={value} />}
        {value === 3 && <EnvIcon selected={selected} value={value} />}
        {value === 4 && <BuildingIcon selected={selected} value={value} />}
        {value === 5 && <AssetIcon selected={selected} value={value} />}
        {value === 6 && <AssetSettingIcon selected={selected} value={value} />}
        {value === 7 && (
          <CameraScenarioIcon selected={selected} value={value} />
        )}
        {value === 8 && <QRIcon selected={selected} value={value} />}
      </>
    );
  };
  return (
    <nav className={styles.nav} style={{}}>
      <Box className={styles.div}>
        <Box className={styles.divnav} style={sliderStyle}></Box>
        {/* 슬라이드바 제작 */}
        {editSidelist.map((link) => (
          <React.Fragment key={link.name}>
            <input
              type="radio"
              id={link.name}
              value={link.value}
              name="dxStudioMain"
              onChange={handleChange}
              style={sliderStyle}
              checked={selected === link.value}
            />
            <label
              htmlFor={link.name}
              className={`${styles.label} ${
                selected === link.value ? styles.activeLabel : ""
              }`}
            >
              <Box className={styles.icon}>{TabChange(link.value)}</Box>

              <Typography className={styles.typo}>{link.name}</Typography>
            </label>
          </React.Fragment>
        ))}
      </Box>
    </nav>
  );
}
