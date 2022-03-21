import React from "react";
import Editor from "../Editor";
import { Wrapper, IconOs, Body } from "./style";

const Layout = () => {
  return (
    <Wrapper>
      {/* HEADER */}
      <header>
        {Array(3)
          .fill()
          .map((item, idx) => {
            return <IconOs key={idx} idx={idx + 1} />;
          })}
      </header>
      <Body>
        {/* EDITON */}
        <Editor />
      </Body>
    </Wrapper>
  );
};

export default Layout;
