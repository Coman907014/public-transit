import styled, { css } from "styled-components";
import mediaBelow from "../../../theme/utils/mediaBelow/mediaBelow";

export const ShowTable = styled.div`
// @TODO: For some reason we can't add color from theme here
// Investigate why
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`
export const InfoContainerWrapper = styled.div`
  height: auto;
  width: 150px;
  flex-wrap: wrap;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 40%;
  }

  ${ mediaBelow.mobileLarge(
    css`
    flex-direction: column;
    width: auto;
    `
  ) }
`

export const Name = styled.div``
export const TextWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`