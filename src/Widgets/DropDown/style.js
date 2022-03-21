import styled from "styled-components";
import utility from "../../assets/css/utility";
import cssVar from "../../assets/css/variables";

export const DropDownWrraper = styled.div`
  margin: ${cssVar.spacingXxss} 0 ${cssVar.spacingS};
  max-width: 100%;
  ${utility.posRel}
  > label {
    cursor: pointer;
    border: 1px solid;
    padding: ${cssVar.spacingXs};
    ${utility.flex};
    ${utility.alignItemC};
    ${utility.justifyContentSB};
    > svg {
      transform: rotate(0.25turn);
      transition: all 0.2s ease-in-out;
    }
  }
  ${(props) =>
    props.open &&
    ` label > svg {
    transform: rotate(0.75turn)
  }`}
  .dropdownList {
    height: 0;
    overflow: hidden;
    position: absolute;
    min-width: 100%;
    z-index: 8;
    &.open {
      height: revert;
    }
    > li {
      cursor: pointer;
      background-color: #fff;
      padding: ${cssVar.spacingXxs};
      color: ${cssVar.colorTypePrimary};
      &:hover {
        color: revert;
        background-color: ${cssVar.colorTypePrimary};
      }
    }
  }
`;
