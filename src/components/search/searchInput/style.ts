import styled from "styled-components";

export const Search = styled.input`
  max-width: 400px;
  height: 30px;
  border-radius: 20px;
  padding-left: 10px;
`
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const SearchError = styled.div`
  min-height: 20px;
  color: ${p => p.theme.colors.red};
  font-weight: bold;
  text-align: left;
  margin: 10px;
`

export const ResultList = styled.datalist``;
export const Result = styled.option``;