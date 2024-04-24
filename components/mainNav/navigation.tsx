"use client";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import styles from "../../styles/mainNav/navigation.module.css";

import InputSearch from "../../components/mainNav/inputSearch";
import Multilingual from "../../components/mainNav//multilingual";
import Navalarm from "../../components/mainNav/navalarm";

export default function Navigation() {
  // const path = usePathname();
  return (
    <nav className={styles.nav}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link
          href="/DXStudio/Home/81211"
          color="rgba(255,255,255,1)"
          underline="none"
        >
          <Image
            alt=""
            className={styles.symbol}
            width={40}
            height={40}
            src="/img/symbol/1_심볼 1.png"
          ></Image>
        </Link>

        <div className={styles.title}>
          <Image
            alt=""
            src="/img/symbol/3_심볼+타이포+DT 1.png"
            width={80}
            height={80}
          ></Image>
          <div style={{ display: "none" }}>
            <label className={styles.titleLabel}>한양대 Erica</label>
            <div className={styles.rowbar}></div>
            <div className={styles.titlenamediv}>
              <Image
                alt=""
                src="/img/icon/DXpen.png"
                width={40}
                height={40}
                style={{ width: "2.25rem", height: "2.125rem" }}
              />
              <label className={styles.titlename}>삼성스토어 1층</label>
            </div>
          </div>
          {/* Aliot DT 로고 or
                  프로젝트 이름  | 검색? 소제목?  
                  위 아래 왔다갔다 가능하면 하고 안되면... 참고로 심볼과의 간격은 둘이 다름
                  */}
        </div>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InputSearch />
        <div style={{ marginLeft: "2.88rem", marginRight: "1.25rem" }}>
          <Multilingual />
        </div>
        <Navalarm />
        <div className={styles.miniprofile}>
          <Image
            alt=""
            src="/img/icon/Profile.png"
            style={{ width: "2.5rem", height: "2.5rem" }}
            width={40}
            height={40}
          ></Image>
        </div>
      </Box>
    </nav>
  );
}
