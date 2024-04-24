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
      }}
      className="relative inline-block text-left ml-11 w-32"
    >
      <Menu.Button className="inline-flex w-full gap-x-1.5 bg-white justify-between  py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 items-center">
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
        <Menu.Items className="flex-col absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active ? "bg-blue-500 text-white" : "text-gray-900"
                } 
                          px-4 py-2 block`}
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
                className={`${
                  active ? "bg-blue-500 text-white" : "text-gray-900"
                } 
                          px-4 py-2 block`}
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
