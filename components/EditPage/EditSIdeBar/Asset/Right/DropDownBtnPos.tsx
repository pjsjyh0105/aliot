import * as React from "react";
import { RecoilState, useRecoilState } from "recoil";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";

import arowBtnIcon from "../../../../../asset/DXarrowline 24.png";

// 기본 스타일을 가진 컴포넌트 생성
const DefaultMenuItem = styled(MenuItem)(({ theme }) => ({
  background: "#F8F8F8",
  fontSize: "0.9375rem", // 기본 폰트 크기를 1rem으로 설정
  color: " #2F2F2F",
  fontFamily: "Noto Sans",
  fontWeight: "400",
  width: "12.13rem",
}));

// 호버 시 적용되는 스타일을 가진 컴포넌트 생성
const HoverMenuItem = styled(DefaultMenuItem)({
  "&:hover": {
    backgroundColor: "#756AF4", // 호버 시 배경색 변경
    color: "#fff",
    fontWeight: "500",
  },
});

//list는 name과 event가 담겨져 있는 JSON 형태.
const DropDownBtnPos: React.FC<{
  posx: string; //팝업 상자의 x축 위치
  margintop: string; //팝업 상자와 버튼간의 거리
  list: any[]; //item
  iconsrc: string; //버튼 src
  boxwidth: string; //item width
  clickedColor: string; //버튼 클릭 시 컬러
  myState: RecoilState<any>; //클릭된 item을 넘겨주기
}> = ({ posx, margintop, list, iconsrc, boxwidth, clickedColor, myState }) => {
  const [imgData, setImgData] = useRecoilState(myState);
  const parentRef = React.useRef<HTMLDivElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [El, setEl] = React.useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = React.useState("위치");

  React.useEffect(() => {
    if (parentRef.current) {
      let parentElement = parentRef.current.parentElement;
      while (parentElement) {
        if (parentElement.id === "pivotPosition") {
          const linkElement = parentElement;
          if (linkElement instanceof HTMLElement) {
            setEl(linkElement);
            console.log(0);
          }
          break;
        }
        parentElement = parentElement.parentElement;
      }
    }
  }, []);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    if (El instanceof HTMLElement) {
      //El.classList.add(styles.clickedDiv); // 클래스 추가 display: flex;
      console.log(1, El);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
    if (El instanceof HTMLElement) {
      //El.classList.remove(styles.clickedDiv); // 클래스 추가
      console.log(-1);
    }
  };

  const handleSelect = (event: React.MouseEvent<HTMLElement>) => {
    setSelectedItem(event.currentTarget.innerText);
    setImgData(event.currentTarget.innerText);
    handleClose();
  };

  return (
    <div ref={parentRef}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{ background: open ? clickedColor : "none", padding: "0" }} //clickedColor
      >
        <Image src={arowBtnIcon.src} alt="" width={24} height={24} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // anchorOrigin={{
        //   vertical: "bottom",
        //   horizontal: "right",
        // }}
        // transformOrigin={{
        //   vertical: "top",
        //   horizontal: "right",
        // }}
        PaperProps={{
          style: {
            transform: posx, //"translateX(-2.56rem)", //posx
            width: boxwidth, //boxwidth
            marginTop: margintop, //margintop
            boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.15)",
          },
        }}
        sx={{
          "& ul": {
            padding: 0,
            borderRadius: "0.1875rem",
          },
          "& li": {
            padding: "0.56rem 0.62rem",
          },
          "& li.Mui-selected": {
            backgroundColor: "#7E73FE !important",
            color: "#FFF",
          },
        }}
      >
        {list.map((option) => (
          <HoverMenuItem
            key={option}
            selected={option === selectedItem}
            onClick={handleSelect}
            style={{ height: "2.25rem" }}
          >
            {option}
          </HoverMenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropDownBtnPos;
