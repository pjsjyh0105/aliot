"use client";
import React, { useState, useRef } from "react";
import { Box } from "@mui/material";


// inputComponent
const InputPurple: React.FC<{
  types: string,            //input 타입
  defaultValue: any,        //input defaultValue
  inputWidth: string,       //input width value
  inputHeight: string,      //input height value
  marginRight: string,      //input margin
  placeholder: string,      //input placeholder
  padding?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>  = (
  {types,
  defaultValue,
  inputWidth,
  inputHeight,
  marginRight,
  placeholder,
  padding,
  onChange,}) => {

  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setinputValueState] = useState(defaultValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(types=="number")
        setinputValueState(e.currentTarget.value);
    else{
        setinputValueState(e.currentTarget.value)
    }
    onChange(e); // Call the provided onChange callback
  };



  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Box
      sx={{
        width: inputWidth,
        height:inputHeight,
        marginRight: marginRight
      }}
    >    
      <input
        value={inputValue}
        placeholder={placeholder}
        type={types}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
        
          width: "100%",
          background: "transparent",
          border: isFocused ? "0.1125rem solid #7E73FE" : "0.1125rem solid #DBDBDB",
          color: "#2F2F2F",
          padding: padding? padding:"0.37rem 0.56rem",
          height:inputHeight,
          borderRadius: "0.1875rem",
          fontSize: types=="number"? "0.8125rem":"0.875rem",
          fontWeight: types=="number"? 400:500,
        
        }}
      ></input>
    </Box>
  );
};


export default InputPurple;
