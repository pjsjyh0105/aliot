import Link from "next/link";
import styles from "../../styles/dxStudioTab.module.css";
import Image from "next/image";
import { useEffect } from "react";

export default function DxStudioTab({
  name = "",
  id = -1,
  icon_path = "",
  isSelected = false,
  onClick = function nulls() {},
}) {
  const selectName = isSelected ? `${icon_path}select.svg` : icon_path + ".svg";

  useEffect(() => {
    // 페이지가 로드될 때 자동으로 첫 번째 항목 선택
    if (id === 81211) {
      onClick;
    }
  }, []);
  return (
    <Link href={`/DXStudio/Home/${id}`}>
      <div
        className={`${styles.tab} ${isSelected ? styles.selected : styles.div}`}
        onClick={onClick}
      >
        <Image src={icon_path + ".svg"} alt={name} width={40} height={40} />
        <label>{name}</label>
      </div>
    </Link>
  );
}
