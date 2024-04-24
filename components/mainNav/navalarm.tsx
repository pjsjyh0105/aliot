"use client";
import { useState } from "react";
import styles from "../../styles/mainNav/navalarm.module.css";
import Image from "next/image";
export default function Navalarm() {
  const [newAlarm, setnewAlarm] = useState(false);
  return (
    <div className={styles.div}>
      <Image
        alt=""
        src="/img/icon/DXalarm 40.png"
        width={40}
        height={40}
      ></Image>
      {newAlarm ? <div className={styles.point}></div> : <></>}
    </div>
  );
}
