"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import styles from "../../styles/mainNav/multilingual.module.css";
import { Menu, Transition } from "@headlessui/react"; //버튼, 모달 등 라이브러리
import { Box } from "@mui/material";

export default function Multilingual() {
  const [select, setSelectedSelect] = useState(true);
  const [language, setlanguage] = useState("한국어");

  const handleSelctClick = () => {
    setSelectedSelect(!select); // 선택된 탭을 변경합니다.
  };
  return (
    <Menu
      as="div"
      style={{
        position: "relative",
        textAlign: "left",
        marginLeft: "3rem",
        width: "8rem",
        display: "inline-block",
      }}
      className="relative inline-block text-left ml-11 w-32"
    >
      <Menu.Button
        style={{
          display: "inline-flex", // inline-flex 설정
          width: "100%", // w-full은 요소의 너비를 부모의 100%로 설정
          columnGap: "0.375rem", // gap-x-1.5 (Tailwind의 1.5는 0.375rem)
          backgroundColor: "white", // bg-white는 배경색을 흰색으로 설정
          justifyContent: "space-between", // justify-between은 자식 요소들을 양 끝에 정렬
          padding: "0.5rem 0", // py-2 (상하 패딩을 0.5rem)
          fontSize: "0.875rem", // text-sm (Tailwind의 sm는 약 0.875rem)
          fontWeight: "600", // font-semibold (일반적으로 600에 해당)
          color: "#1f2937", // text-gray-900 (Tailwind의 gray-900은 #1f2937)
          alignItems: "center", // items-center는 세로 중앙 정렬
          border: "none",
        }}
        className="inline-flex w-full gap-x-1.5 bg-white justify-between  py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 items-center"
      >
        <Image
          src="/img/icon/flag/Korea.png"
          alt="Vercel Logo"
          className="dark:invert mr-3.5"
          width={24}
          height={24}
          priority
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {language}
          <Image
            src="/img/icon/arrow.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
        </Box>
      </Menu.Button>
      <Transition //애니메이션
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{
            display: "flex", // flex-col은 display: flex와 flex-direction: column 조합
            flexDirection: "column", // flex-col에 해당
            position: "absolute", // absolute 위치
            right: 0, // right-0
            zIndex: 10, // z-10
            marginTop: "0.5rem", // mt-2 (Tailwind 기준 0.5rem)
            width: "6rem", // w-24 (Tailwind 기준 1rem = 4, 따라서 24 / 4 = 6rem)
            transformOrigin: "top right", // origin-top-right
            borderRadius: "0.375rem", // rounded-md (Tailwind 기준 약 0.375rem)
            backgroundColor: "white", // bg-white
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // shadow-lg
            outline: "none", // focus:outline-none
            border: "1px solid rgba(0, 0, 0, 0.5)", // ring-1 ring-black ring-opacity-5
          }}
        >
          <Menu.Item>
            {({ active }) => (
              <a
                style={{
                  backgroundColor: active ? "#3b82f6" : "transparent", // bg-blue-500을 hex 코드로 변환
                  color: active ? "white" : "#1f2937", // text-white와 text-gray-900을 hex 코드로 변환
                  padding: "0.5rem 1rem", // py-2와 px-4의 Tailwind 값을 CSS로 변환
                  display: "block", // block display 적용
                }}
                onClick={(e) => {
                  setlanguage("한국어");
                }}
              >
                한국어
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                style={{
                  backgroundColor: active ? "#3b82f6" : "transparent", // bg-blue-500을 hex 코드로 변환
                  color: active ? "white" : "#1f2937", // text-white와 text-gray-900을 hex 코드로 변환
                  padding: "0.5rem 1rem", // py-2와 px-4의 Tailwind 값을 CSS로 변환
                  display: "block", // block display 적용
                }}
                onClick={(e) => {
                  setlanguage("English");
                }}
              >
                영어
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
