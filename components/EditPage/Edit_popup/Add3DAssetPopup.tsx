import { Box } from "@mui/material";
import InputPurple from "../Edit_com/InputPurple";
import { PurpleBtn } from "../Edit_com/PurpleBtn";
import { CustomColorBtn } from "../Edit_com/CustomColorBtn";
import SelectorPurple from "../Edit_com/SelectorPurple";
import { atom, useRecoilState } from "recoil";
import { GlbData } from "../../Drawer/state";
import { useState } from "react";

export const AssetUploading = atom<boolean>({
  //이미지 리스트 저장
  key: "imgDataState2",
  default: false,
});

const Add3DAssetPopup = ({ getfiles = null }: { getfiles?: File | null }) => {
  const [glbData, setGlbData] = useRecoilState(GlbData);
  const [assetUploading, setAssetUploading] = useRecoilState(AssetUploading);
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as string);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const cancel = () => {
    setAssetUploading(false);
  };
  const confirm = () => {
    const GlbFile = getfiles;
    if (GlbFile) {
      const getGlbFile = {
        id: GlbFile.name,
        name: inputValue,
        url: URL.createObjectURL(GlbFile),
        uid: GlbFile.uid,
        type: GlbFile.type,
        opacity: 1,
        objType: selectedValue,
      };
      if (inputValue != "" && selectedValue)
        setGlbData((currentGlbData) => [...currentGlbData, getGlbFile]);
    }

    setAssetUploading(false);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        top: "15.31rem",
        left: "41.87rem",
        background: "#fff",
        width: "24.75rem",
        height: "21.875rem",
        borderRadius: "0.1875rem",
        boxShadow: "0px 3px 7px 0px rgba(0, 0, 0, 0.12)",
      }}
    >
      <Box
        sx={{
          height: "2.5625rem",
          width: "100%",
          alignItems: "center",
          backgroundColor: "#F9F9F9",
          display: "flex",
          flexDirection: "row",
          padding: "0.38rem 0.94rem",
          borderRadius: "0.1875rem",
          color: "#2F2F2F",
          fontSize: "0.8125rem",
          fontWeight: 500,
          fontFamily: "Noto Sans KR",
        }}
      >
        <svg
          style={{ marginRight: "0.37rem" }}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M14.25 8.14434C14.4047 8.05502 14.5953 8.05502 14.75 8.14434L20.7452 11.6057C20.8999 11.695 20.9952 11.86 20.9952 12.0387V18.9613C20.9952 19.14 20.8999 19.305 20.7452 19.3943L14.75 22.8557C14.5953 22.945 14.4047 22.945 14.25 22.8557L8.25481 19.3943C8.10011 19.305 8.00481 19.14 8.00481 18.9613V12.0387C8.00481 11.86 8.10011 11.695 8.25481 11.6057L14.25 8.14434Z"
            stroke="#2F2F2F"
            stroke-width="1.1"
          />
          <path
            d="M14.25 11.1443C14.4047 11.055 14.5953 11.055 14.75 11.1443L18.1471 13.1057C18.3018 13.195 18.3971 13.36 18.3971 13.5387V17.4613C18.3971 17.64 18.3018 17.805 18.1471 17.8943L14.75 19.8557C14.5953 19.945 14.4047 19.945 14.25 19.8557L10.8529 17.8943C10.6982 17.805 10.6029 17.64 10.6029 17.4613V13.5387C10.6029 13.36 10.6982 13.195 10.8529 13.1057L14.25 11.1443Z"
            stroke="#2F2F2F"
            stroke-width="1.1"
          />
          <path
            d="M8 12L14.5 15.3333M14.5 15.3333L21 12M14.5 15.3333V22.5"
            stroke="#2F2F2F"
            stroke-width="1.1"
          />
        </svg>{" "}
        3D 에셋 추가하기
      </Box>
      <Box
        sx={{
          padding: "1.75rem 2.94rem 1.37rem 2.94rem",
          gap: "2.56rem",
          display: "flex",
          flexDirection: "column",
          fontSize: "0.93751rem",
          fontWeight: "500",
        }}
      >
        <Box
          sx={{
            marginBottom: "0.21rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.81rem",
          }}
        >
          파일명
          <InputPurple
            types="text"
            defaultValue={""}
            inputWidth="18.875rem"
            inputHeight="2.25rem"
            marginRight="0"
            placeholder="파일명"
            padding="0.5rem 0.69rem"
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.81rem" }}>
          그룹
          <SelectorPurple onChange={handleSelectChange}></SelectorPurple>
        </Box>
        <Box>
          <Box sx={{ display: "flex", gap: "0.63rem", float: "right" }}>
            <CustomColorBtn widthed={3.375} onClick={cancel}>
              취소
            </CustomColorBtn>
            <CustomColorBtn
              widthed={3.375}
              backAcColor="#554AD3"
              backColor="#7E73FE"
              backhvColor="#6C62E4"
              fontColor="#fff"
              onClick={confirm}
            >
              확인
            </CustomColorBtn>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Add3DAssetPopup;
