import styled from "styled-components";
import utility from "../../assets/css/utility";
import cssVar from "../../assets/css/variables";

export const ButtonEle = styled.button`
  all: unset;
  cursor: pointer;
  color: ${(props) =>
    props.primary ? cssVar.colorPrimary300 : cssVar.colorTypePrimary};
  background-color: ${(props) =>
    props.primary ? cssVar.colorTypePrimary : cssVar.colorPrimary300};
  padding: ${cssVar.spacingXxs} ${cssVar.spacingS};
  font-weight: ${cssVar.fontSemibold};
  ${utility.flex};
  ${utility.alignItemC};
  border: 1px solid ${cssVar.colorTypePrimary};
  ${(props) => props.size === "lg" && `width: 90%; ${utility.justifyContentC}`};
  &:hover {
    background-color: ${cssVar.colorPrimary900};
    color: ${cssVar.colorPrimary300};
  }
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
  > svg {
    margin-left: ${cssVar.spacingXxs};
  }
`;
