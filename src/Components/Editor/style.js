import styled from "styled-components";
import utility from "../../assets/css/utility";
import cssVar from "../../assets/css/variables";

export const Wrapper = styled.div`
  overflow: hidden;
  > header {
    padding: ${cssVar.spacingXs};
    ${utility.flex};
    ${utility.justifyContentSB};
    ${utility.alignItemC};
    border-bottom: 1px solid ${cssVar.colorPrimary100};
    > img {
      max-width: 9rem;
    }
  }
`;
export const Canvas = styled.div`
  ${utility.posRel};
  padding: ${cssVar.spacingXs};
  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    position: fixed;
    left: 32px;
    right: 32px;
    top: 74px;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    visibility: hidden;
  }
  ${(props) =>
    props.isSideBarOpen &&
    `&::after {
    opacity: 1;
    visibility: visible;
  }`}
  .bottom-actions {
    position: fixed;
    display: inline-flex;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, -50%);
  }
  aside {
    color: #ffffff;
    > div {
      width: 35rem;
      height: 100%;
      z-index: 2;
      position: fixed;
      right: ${cssVar.spacingXxl};
      bottom: 2px;
      top: 7.4rem;
      bottom: 2px;
      background-color: ${cssVar.colorTypePrimary};
      padding: ${cssVar.spacingM};
    }
    h2 {
      ${utility.fontL};
      font-weight: ${cssVar.fontSemibold};
      margin-bottom: ${cssVar.spacingS};
    }
    code {
      display: block;
      line-height: normal;
      border: 2px dashed ${cssVar.colorPrimary100};
      padding: ${cssVar.spacingXxs};
      font-weight: ${cssVar.fontSemibold};
      margin: ${cssVar.spacingXxs} 0 ${cssVar.spacingL} 0;
      min-height: 12rem;
    }
    .keys {
      padding: ${cssVar.spacingXxs};
      background-color: #ffffff;
      margin-top: ${cssVar.spacingXxs};
      color: ${cssVar.colorTypePrimary};
      > span {
        cursor: pointer;
        background-color: #eee;
        margin: 0.4rem;
        padding: 0.4rem 0.8rem;
        ${utility.inlineFlex}
        border-radius: 4px;
        ${utility.fontMicro};
        font-weight: ${cssVar.fontSemibold};
      }
    }
  }
  .drawer {
    background-color: ${cssVar.colorTypePrimary};
    width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 50%;
    top: 60px;
    border-radius: 50%;
    right: -50px;
    cursor: pointer;
    ${utility.flex};
    ${utility.alignItemC};
    padding: 2rem;
    > svg {
      transform: rotate(0.5turn);
    }
  }
`;
export const CodeBlock = styled.div`
  ${utility.flex};
  ${utility.alignItemC};
  ${utility.flex};
  > input {
    display: block;
    line-height: normal;
    border: 2px dashed ${cssVar.colorPrimary100};
    padding: ${cssVar.spacingXxs};
    font-weight: ${cssVar.fontSemibold};
    min-width: 30rem;
  }
`;
export const Divider = styled.div`
  ${utility.posRel};
  margin: ${cssVar.spacingL} 0;
  ${utility.txtUpperCase};
  ${utility.txtC};
  font-weight: ${cssVar.fontSemibold};
  &::before,
  &::after {
    content: "";
    height: 0.5rem;
    background-color: #fff;
    width: 37%;
    position: absolute;
    left: 0;
    top: 7px;
  }
  &::after {
    left: auto;
    right: 0;
  }
`;
