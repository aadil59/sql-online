import React from "react";
import { ButtonEle } from "./style";
import IconChevron from "../../assets/icons/IconChevron";

const Button = ({ text, primary, size, handleClick, icon, disabled }) => {
  return (
    <>
      <ButtonEle
        type="button"
        primary={primary}
        size={size}
        onClick={handleClick}
        disabled={disabled}
      >
        {text}
        {icon && <IconChevron />}
      </ButtonEle>
    </>
  );
};

export default Button;
