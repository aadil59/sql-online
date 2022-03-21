import React, {useState} from "react";
import { DropDownWrraper } from "./style";
import IconChevron from "../../assets/icons/IconChevron";

const DropDown = ({ options, value }) => {
  const[open, setOpen] = useState(false);
  const[selected, setSelected] = useState(value);
  const handleChange = (param) => {
    setOpen(false);
    setSelected(param);
  }
  return (
    <DropDownWrraper open={open}>
      <label onClick={() => setOpen(!open)}>{selected} <IconChevron /></label>
      <ul className={"dropdownList"+(open ? " open" : "")}>
        {options?.length > 0 &&
          options.map((item, idx) => <li onClick={() => handleChange(item)} key={idx}>{item}</li>)}
      </ul>
    </DropDownWrraper>
  );
};

export default DropDown;
