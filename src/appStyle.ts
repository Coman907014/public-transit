import styled from "styled-components";

export const AppWrapper = styled.div`
  padding: 10%;

  #map {
    box-shadow: ${(p) => `3px 3px 3px 3px ${p.theme.colors.grey}`};
    height: 600px;
    border-radius: 20px;
  }
`