import styled, { css } from "styled-components";
import mediaAbove from "../../theme/utils/mediaAbove/mediaAbove";
import mediaBelow from "../../theme/utils/mediaBelow/mediaBelow";

export const TableComponent = styled.table`
  width: 80%;
  margin: auto;

  ${mediaBelow.mobileLarge(
    css`
      overflow: auto;
    `

  )}
`

export const TableWrapper = styled.div`
  min-height: 350px;

  ${ mediaAbove.mobileLarge(
    css`
      min-height: 250px;
    `
  )}
`

export const NoResults = styled.h3`

`

export const TableHead = styled.thead``;
export const TableHeadElement = styled.th`
  width: 30%;
`;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr`
  padding: 2.5px 0;

`;
export const TableData = styled.td`
  border-top: 0.5px solid ${(p) => p.theme.colors.grey};
`;