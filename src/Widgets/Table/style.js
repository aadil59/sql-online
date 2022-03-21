import styled from "styled-components";
import utility from "../../assets/css/utility";
import cssVar from "../../assets/css/variables";

export const TableWrapper = styled.div`
  max-height: calc(100vh - 160px);
  overflow: hidden scroll;
  thead {
    position: sticky;
    top: 0px;
    z-index: 1;
  }
  th,
  td {
    padding: ${cssVar.spacingXxxs};
    ${utility.fontXs}
    vertical-align: middle;
  }
  th {
    padding: ${cssVar.spacingXxs};
    font-weight: ${cssVar.fontBold};
    color: ${cssVar.colorPrimary300};
    background-color: ${cssVar.colorTypePrimary};
    ${utility.txtCapitalize}
  }
  td {
    overflow: hidden;
    border: 1px solid ${cssVar.colorPrimary100};
  }
`;
