import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 80%;
  margin: auto
`

export const TableHead = styled.thead``;
export const TableHeadElement = styled.th`
  width: 30%
`;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr`
  padding: 2.5px 0;

`;
export const TableData = styled.td`
  border-top: 0.5px solid ${(p) => p.theme.colors.grey};
`;