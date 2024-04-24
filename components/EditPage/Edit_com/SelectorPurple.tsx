import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import ArowwIcon from "../../../asset/selectclick-arrow.png";
import Image from "next/image";

const MenuProps = {
  PaperProps: {
    style: {
      width: "18.875rem",
      boxShadow: "0px 3px 7px 0px rgba(0, 0, 0, 0.12)",
      borderRadius: "0.1875rem",
      marginTop: "0.25rem",
    },
  },
};

const groups = ["가구", "교통", "시설물", "장치", "자연", "건축", "기타"];

interface SelectorPurpleProps {
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectorPurple({ onChange }: SelectorPurpleProps) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
    onChange(event);
  };

  return (
    <div>
      <FormControl
        sx={{
          width: "18.875rem",
          "&:hover fieldset": {
            border: "1.8px solid transparent",
          },
        }}
      >
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <div style={{ color: "rgba(47, 47, 47, 0.50)" }}>
                  선택하세요
                </div>
              );
            }

            return selected;
          }}
          IconComponent={() => (
            <Image
              src={ArowwIcon.src}
              alt="Custom Icon"
              width={24}
              height={24}
              style={{
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                right: "0.75rem",
                cursor: "pointer",
              }}
            />
          )}
          sx={{
            borderRadius: "0.1875rem",
            height: "2.25rem",
            "& .MuiSelect-select": {
              outline: "1.8px solid #D6D6D6", // 활성 상태일 때 배경색 투명하게
              border: "1.8px solid transparent",
              borderRadius: "0.1875rem",
              background: "f00",
              padding: "0.5rem 0.69rem !important",
              display: "flex",
              alignItems: "center",
              color: "#2F2F2F",
              fontSize: "0.9375rem",
              fontWeight: "500",
              boxSizing: "inherit",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
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
          }}
          MenuProps={{
            ...MenuProps,
            MenuListProps: {
              sx: {
                padding: 0,
              },
            },
          }}
        >
          {groups.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{
                backgroundColor: "#F5F5F5",
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
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
