// "use client";

import Image from "next/image";
import styles from "../../styles/mainNav/inputSearch.module.css";

export default function InputSearch() {
  return (
    <div className={styles.div}>
      <Image
        alt=""
        className={styles.divIcon}
        src="/img/icon/mini search 30x30.png"
        width={40}
        height={40}
      ></Image>
      <input
        className={styles.inputContents}
        placeholder="검색"
        type="text"
      ></input>
      <Image
        alt=""
        className={styles.inputContentscancle}
        src="/img/icon/cancel mini 30x30.png"
        width={40}
        height={40}
      ></Image>
    </div>
  );
}
