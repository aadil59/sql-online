import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Canvas, CodeBlock, Divider } from "./style";
import { logo, customeAPI } from "../../helpers/app_constant";
import { handleGetCustomer } from "../../services/getCostomer";
import Table from "../../Widgets/Table/Table";
import Button from "../../Widgets/Button/Button";
import useOnClickOutside from "../../helpers/customHooks/useOnClickOutside";
import DropDown from "../../Widgets/DropDown/DropDown";
import IconChevron from "../../assets/icons/IconChevron";

const Editor = () => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Select * from table_name");
  const [selected, setSelected] = useState([]);

  // CHECKBOX HANDLER
  const handleSelect = (check) => {
    const isExist = selected.some((item) => item.id === check.id);
    isExist
      ? setSelected(selected.filter((item) => item.id !== check.id))
      : setSelected([...selected, data.find((item) => item.id === check.id)]);
  };

  // USE EFFECT FOR DEFAULT RENDERING
  useEffect(() => {
    getCustomer(customeAPI);
  }, []);

  // METHOD TO CALL SERVICE
  const getCustomer = async (url) => {
    const res = await handleGetCustomer(url);
    setData(res);
  };

  // BUTTON CLICK
  const handleClick = () => {
    const res = data.reverse().filter((item) => item);
    setData(res);
  };

  // DELETE SELCETED ROWS
  const handleDeleteRows = () => {
    const arrData =
      selected?.length > 0 && data.filter((item) => !selected.includes(item));
    setData(arrData);
    setSelected([]);
  };

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // State for our modal
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setIsSideBarOpen(false));
  return (
    <Wrapper>
      <header>
        <img src={logo} alt="SQL ATLAN" />
        <CodeBlock>
          <input
            contentEditable
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Button
            text="Run"
            primary
            handleClick={handleClick}
            size="xs"
            disabled={!value}
            icon
          />
        </CodeBlock>
      </header>
      <Canvas isSideBarOpen={isSideBarOpen}>
        <Table data={data} handleSelect={handleSelect} checked={selected} />
        {selected.length > 0 && (
          <div className="animate__fadeInBottom bottom-actions">
            <Button
              primary
              text="Remove"
              handleClick={handleDeleteRows}
              size="sm"
            />
          </div>
        )}
        {isSideBarOpen && (
          <aside ref={ref}>
            <div className="animate__fadeInRight">
              <h2>Some human effort you can put if you're not lazy</h2>
              <label>Select Connector</label>
              <DropDown options={options} value="Option 1" />
              <label>Select Table</label>
              <DropDown options={options} value="Option 2" />
              <label>Select Keys</label>
              <div className="keys" contentEditable>
                <span>_id</span>
                <span>_name</span>
                <span>_username</span>
                <span>_email</span>
                <span>_phone</span>
                <span>_city</span>
              </div>
              <Divider>Or Lazy</Divider>
              <h4>Enter your query</h4>
              <code contentEditable></code>
              <Button
                text="Run"
                handleClick={() => setIsSideBarOpen(false)}
                size="lg"
              />
            </div>
          </aside>
        )}
        {!isSideBarOpen && (
          <div className="drawer" onClick={() => setIsSideBarOpen(true)}>
            <IconChevron size={20} />
          </div>
        )}
      </Canvas>
    </Wrapper>
  );
};

export default Editor;
