import styles from "../../../../../../styles/homeProject.module.css";
// import StartSelected from "../../../../components/startPage_select";
import Image from "next/image";
export default function dataAsset() {
  return (
    <div>
      <div className={styles.div}>
        <div className={styles.divName}>
          <label>라이브러리</label>
          <div className={styles.divBtn}>
            <div className={styles.divBtnImport}>Import</div>
            <div className={styles.divBtnNew}>New file</div>
          </div>
        </div>
        <div className={styles.divsubmenu}>
          {/* <StartSelected /> */}
          <div className={styles.divsubmenubtn}>
            <div
              style={{ cursor: "pointer", width: "2.5rem", height: "2.5rem" }}
            >
              <Image
                src="/img/icon/DXarray text.png" // 경로를 정확히 확인하세요
                alt="DXarray Text" // 이미지에 대한 적절한 alt 텍스트 제공
                width={40} // '2.5rem' assuming the base font-size is 16px (2.5 * 16)
                height={40} // 높이도 같게 설정
                layout="fixed" // 레이아웃을 'fixed'로 설정하여 지정된 width와 height 사용
              />
            </div>

            <div
              style={{ cursor: "pointer", width: "2.5rem", height: "2.5rem" }}
            >
              <Image
                src="/img/icon/DXarray box.png"
                alt="DXarray Text" // 이미지에 대한 적절한 alt 텍스트 제공
                width={40} // '2.5rem' assuming the base font-size is 16px (2.5 * 16)
                height={40} // 높이도 같게 설정
                layout="fixed" // 레이아웃을 'fixed'로 설정하여 지정된 width와 height 사용
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
