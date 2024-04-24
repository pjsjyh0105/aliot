"use client";
import Image from "next/image";
import React, { forwardRef, useState } from "react";
import cancelImg from "../../../asset/cancel.png";
import { Box } from "@mui/material";
interface inputTemplateProps {
  size: string;
  icon: string;
  disable: boolean;
}

// inputComponent
const InputSearch = forwardRef<HTMLDivElement, inputTemplateProps>(
  (props, ref) => {
    const { size, icon, disable } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setinputValueState] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setinputValueState(e.currentTarget.value);
    };
    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const onClickCancel = () => {
      setinputValueState("");
    };

    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          width:
            size == "S"
              ? "13.9375rem"
              : size == "M"
              ? "15.875rem"
              : size == "L"
              ? "18.9375rem"
              : size,
          height: "2.25rem",
          padding: " 0.1875rem 0.125rem",
          alignItems: "center",
          borderRadius: "0.1875rem",
        }}
      >
        {disable ? (
          <></>
        ) : (
          <div
            style={{
              width: "2.25rem",
              height: "2.25rem",
              position: "absolute",
              top: "50%",
              left: "0.5rem",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {icon == "search" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.3343 11.4241C18.9664 13.0561 18.9664 15.7023 17.3343 17.3343C15.7023 18.9664 13.0561 18.9664 11.4241 17.3343C9.79198 15.7023 9.79198 13.0561 11.4241 11.4241C13.0561 9.79198 15.7023 9.79198 17.3343 11.4241ZM18.5827 17.7364C20.2738 15.6244 20.1405 12.5332 18.1829 10.5755C16.0822 8.47482 12.6762 8.47482 10.5755 10.5755C8.47482 12.6762 8.47482 16.0822 10.5755 18.1829C12.5328 20.1402 15.6232 20.2738 17.7353 18.5837C17.7423 18.5915 17.7495 18.5991 17.757 18.6066L19.0249 19.8745C19.2592 20.1088 19.6391 20.1088 19.8734 19.8745C20.1077 19.6402 20.1077 19.2603 19.8734 19.026L18.6055 17.7581C18.5981 17.7506 18.5905 17.7434 18.5827 17.7364Z"
                  fill={isFocused ? "#7E73FE" : "#474747"}
                />
              </svg>
            ) : icon == "naming" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.0985 11.4001L12.141 22.9984C12.1298 23.0147 12.1237 23.0339 12.1235 23.0537L12.0805 26.2797C12.0795 26.351 12.1514 26.4004 12.2177 26.3738L15.212 25.1727C15.2304 25.1654 15.2461 25.1528 15.2573 25.1365L23.2409 13.5002L20.0985 11.4001ZM24.2048 12.0952L24.8614 11.1382C25.4518 10.2776 25.2328 9.10142 24.3723 8.51101C23.5118 7.92061 22.3355 8.13959 21.7451 9.00012L21.0625 9.99514L24.2048 12.0952Z"
                  fill={isFocused ? "#7E73FE" : "#585858"}
                />
              </svg>
            ) : (
              <></>
            )}
          </div>
        )}

        <input
          value={inputValue}
          placeholder="검색"
          type="text"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            width: "100%",
            background: isFocused ? "transparent" : "#F8F8F8",
            border: isFocused
              ? "0.1125rem solid #7E73FE"
              : "1.8px solid transparent",
            color: "#2F2F2F",
            padding: 0,
            paddingLeft: "2.44rem",
            paddingRight: "2.38rem",
            height: "2.25rem",
            borderRadius: "0.1875rem",
            fontSize: "0.9375rem",
            fontWeight: 400,
          }}
        ></input>

        {isFocused || !(inputValue == "") ? (
          <Box
            sx={{
              cursor: "pointer",
              width: "1.875rem",
              height: "1.875rem",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "0.5rem",
              borderRadius: "50%",
              "&:hover": {
                background: "#EEE",
                borderRidus: "50%",
              },
            }}
          >
            <Image
              width={30}
              height={30}
              src={cancelImg.src}
              alt={""}
              onClick={onClickCancel}
            />
          </Box>
        ) : (
          <></>
        )}
      </div>
    );
  }
);

// 데코레이터 사용하여 디스플레이 네임 추가
InputSearch.displayName = "InputComponents";
export default InputSearch;
