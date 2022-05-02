import styled, { css } from "styled-components";
import mediaBelow from "../../theme/utils/mediaBelow/mediaBelow";

export const PaginationWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding-top: 20px;

  select {
    margin-left: 5px;
  }

  ${mediaBelow.tablet(
    css`
      width: 95%;
      justify-content: center
    `
  )}
`

export const Select = styled.select`
  ${mediaBelow.tablet(
    css`
      flex-basis: 80%;
      margin: 5px;
    `
  )}`;
export const Option = styled.option``;

const arrow: string = `
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  cursor: pointer;
`
export const ArrowRight = styled.i`
  ${ arrow }
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`

export const ArrowLeft = styled.i`
  ${ arrow }
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`
export const ArrowWrapper = styled.div`
  margin-left: 10px;
  width: 10px;
`;

export const ElementsCount = styled.div`
  margin-left: 10px;
  min-width: 30px;
`

export const Title = styled.div`

  ${mediaBelow.mobileLarge(
    css`
      display: block;
    `
  )}
`