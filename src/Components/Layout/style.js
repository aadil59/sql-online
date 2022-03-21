import styled from 'styled-components';
import utility from '../../assets/css/utility';
import cssVar from '../../assets/css/variables';

export const Wrapper = styled.section`
  margin: ${cssVar.spacingXxl} ${cssVar.spacingXxl} 0;
  /* box-shadow: 0px 0px 20px #acacac; */
  overflow: hidden ;
  > header {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ebebeb, color-stop(1, #d5d5d5)));
    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);
    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);
    background: -ms-linear-gradient(top, #ebebeb, #d5d5d5);
    background: -o-linear-gradient(top, #ebebeb, #d5d5d5);
    background: linear-gradient(top, #ebebeb, #d5d5d5);
    padding: ${cssVar.spacingXs};
    border-radius: 10px 10px 0 0;
  }
`;

export const IconOs = styled.i`
  ${utility.posRel};
  width: 13px;
  height: 13px;
  border-radius: 50%;
  ${utility.inlineFlex};
  ${props => props.idx === 1 ? `background: ${cssVar.color4}; margin-right: ${cssVar.spacingXxs}; border: 1px solid #e09e3e;` : props.idx === 2 ? `background: ${cssVar.color5}; margin-right: ${cssVar.spacingXxs}; border: 1px solid #e33e41;` : props.idx === 3 ? `background: ${cssVar.color6}; border: 1px solid #14ae46;` : null}
`;
export const Body = styled.div`
  background-color:${cssVar.colorPrimary300};
  height: calc(100vh - 80px);
`;

