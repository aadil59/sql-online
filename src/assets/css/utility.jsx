/*********************************************************************
**********************************************************************
Utility Classes which can be used across website
**********************************************************************
*********************************************************************/
import cssVar from './variables';
import { css } from 'styled-components';


const utility = {
	posRel: `
    position: relative;
  `,
	txtC: `
    text-align: center;
  `,
	txtR: `
    text-align: right;
  `,
	txtL: `
    text-align: left;
  `,
	txtLowerCase: `
    text-transform: lowercase;
  `,
	txtUnderline: `
    text-decoration: underline;
  `,
	txtCapitalize: `
    text-transform: capitalize;
  `,
	txtLineThrough: `
    text-decoration: line-through;
  `,
	txtUpperCase: `
    text-transform: uppercase;
  `,
	h1: `
    font-size: ${cssVar.h1};
  `,
	h2: `
    font-size: ${cssVar.h2};
  `,
	h3: `
    font-size: ${cssVar.h3};
  `,
	h4: `
    font-size: ${cssVar.h4};
  `,
	h5: `
    font-size: ${cssVar.h5};
  `,
	h6: `
    font-size: ${cssVar.h6};
  `,
	fontL: `
    font-size: ${cssVar.fontL};
  `,
	fontM: `
    font-size: ${cssVar.fontM};
  `,
	fontS: `
    font-size: ${cssVar.fontS};
  `,
	fontXs: `
    font-size: ${cssVar.fontXs};
  `,
	fontMini: `
    font-size: ${cssVar.fontMini};
  `,
	fontMicro: `
    font-size: ${cssVar.fontMicro};
  `,
	fontCaption: `
    font-size: ${cssVar.fontCaption};
  `,
	flex: `
    display: flex !important;
  `,
	inlineFlex: `
    display: inline-flex;
  `,
	flexR: `
    flex-direction: row;
  `,
	flexRR: `
    flex-direction: row-reverse;
  `,
	flexC: `
    flex-direction: column;
  `,
	flexCR: `
    flex-direction: column-reverse;
  `,
	flexWrapN: `
    flex-wrap: nowrap;
  `,
	flexWrapW: `
    flex-wrap: wrap;
  `,
	flexWrapWR: `
    flex-wrap: wrap-reverse;
  `,
	justifyContentFE: `
    justify-content: flex-end;
  `,
	justifyContentFS: `
    justify-content: flex-start;
  `,
	justifyContentC: `
    justify-content: center !important;
  `,
	justifyContentSA: `
    justify-content: space-around;
  `,
	justifyContentSB: `
    justify-content: space-between;
  `,
	alignItemFS: `
    align-items: flex-start;
  `,
	alignItemC: `
    align-items: center !important;
  `,
	alignItemFE: `
    align-items: flex-end;
  `,
	alignItemS: `
    align-items: stretch;
  `,
	flexShrink0: `
    flex-shrink: 0;
  `,
	alignItemB: `
    align-items: baseline;
  `,
	cardShadow: `
    box-shadow: 0 0 16px 0 rgb(0 0 0 / 8%);
  `,
	cardPadding: `
    padding: 1rem;
  `,
	textEllipsis: `
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
	marginReset: `
    margin: 0;
  `,
	paddingReset: `
    padding: 0;
  `,
	boxCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
}
export default utility;