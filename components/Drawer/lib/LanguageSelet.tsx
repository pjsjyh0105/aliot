import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import KoeraImg from "../../../asset/Topbar/korean.png";
import EngImg from "../../../asset/Topbar/Eng.png";
import Image from "next/image";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "8.9375rem",
      boxShadow: "0px 3px 7px 0px rgba(0, 0, 0, 0.12)",
      borderRadius: "0.1875rem",
      marginTop: "0.25rem",
    },
  },
};

const Langs = [
  { name: "한국어", img: KoeraImg.src },
  { name: "English", img: EngImg.src },
];
function getStyles(name: string, personName: string, theme: Theme) {
  return {
    fontWeight: "500",
    fontSize: "0.9375rem",
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string>(Langs[0].name);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };

  return (
    <div>
      <FormControl sx={{ width: "8.9375rem" }}>
        <Select
          displayEmpty
          onChange={handleChange}
          defaultValue={Langs[0].name}
          sx={{
            borderRadius: "0.1875rem",
            "& .MuiSelect-select": {
              outline: "1.8px solid transparent", // 활성 상태일 때 배경색 투명하게
              border: "1.8px solid transparent",
              borderRadius: "0.1875rem",
              background: "f00",
              padding: "0.41rem 0.875rem !important",
              display: "flex",
              alignItems: "center",
              color: "#2F2F2F",
              fontSize: "0.9375rem",
              fontWeight: "500",
            },
            "& fieldset": {
              border: "1.8px solid transparent",
            },
            "& .MuiSelect-select:hover": {
              border: "1.8px solid transparent",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1.8px solid #7E73FE ",
            },
            "& svg": {
              width: "2.25rem",
              height: "2.25rem",
              top: "50%",
              transform: "translateY(-50%)",
              right: "0",
            },
            "& fieldset:focus-visible": {
              outline: "none",
            },
            "&:hover fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
          }}
          MenuProps={{
            ...MenuProps,
            MenuListProps: {
              sx: {
                width: "8.9375rem",
                padding: 0,
              },
            },
          }}
        >
          {Langs.map((Lang) => (
            <MenuItem
              key={Lang.name}
              value={Lang.name}
              sx={{
                fontWeight: "500",
                fontSize: "0.9375rem",
                height: "2.25rem",
                "&:hover": {
                  backgroundColor: "#F2F2F2",
                },
                "&.Mui-selected": {
                  backgroundColor: "#7E73FE !important",
                  color: "#FFF",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#7E73FE",
                  color: "#FFF",
                },
              }}
              defaultChecked={Lang.name == "한국어" ? true : false}
            >
              <Image
                src={Lang.img}
                alt={"국기"}
                width={36}
                height={22}
                style={{
                  width: "2.25rem",
                  height: "1.375rem",
                  marginRight: "0.88rem",
                }}
              />
              {Lang.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
