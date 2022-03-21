import styled from "styled-components";
import utility from "../../assets/css/utility";
import cssVar from "../../assets/css/variables";

export const CheckboxContainer = styled.label`
  ${utility.flex};
  ${utility.justifyContentC};
  ${utility.posRel};
  width: 100%;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Icon = styled.div`
  ${utility.posRel};
  ${utility.flex};
  ${utility.alignItemC};
  ${utility.justifyContentC};
  height: 100%;
`;
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  background: ${(props) => (props.checked ? "#ffd344" : "#ffffff")};
  border: ${(props) => (props.checked ? "0 none" : `1px solid ${cssVar.colorTypePrimary}`)};
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
  transition: all 150ms;
  flex-shrink: 0;
  flex-grow: 0;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const CheckboxText = styled.span`
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
`;
