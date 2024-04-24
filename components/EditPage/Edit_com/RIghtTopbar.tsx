import { Segmented } from "antd";
import { useState } from "react";

const RightTopbar = ({
  setIsClick,
  firstLabel,
  firstSet,
  secondLabel,
  secondSet,
  thirdLabel,
  thirdSet,
}: {
  setIsClick: any;
  firstLabel: string;
  firstSet: boolean;
  secondLabel: string;
  secondSet: boolean;
  thirdLabel?: string;
  thirdSet?: boolean;
}) => {
  const onHandleChange = (value) => {
    setIsClick(value);
  };
  const options = [
    { label: firstLabel, value: firstLabel, disabled: firstSet },
    { label: secondLabel, value: secondLabel, disabled: secondSet },
    // thirdLabel이 있는 경우에만 해당 옵션을 추가합니다.
    ...(thirdLabel
      ? [{ label: thirdLabel, value: thirdLabel, disabled: thirdSet }]
      : []),
  ];
  return <Segmented options={options} block onChange={onHandleChange} />;
};

export default RightTopbar;
