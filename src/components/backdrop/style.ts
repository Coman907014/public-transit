import styled, { css } from "styled-components";
import mediaAbove from "../../theme/utils/mediaAbove/mediaAbove";
import mediaBelow from "../../theme/utils/mediaBelow/mediaBelow";

export const BackdropWrapper = styled.div<{ shouldShow: boolean }>`
  width: 80%;
  min-height: 650px;
  min-width: 200px;
  word-break: break-word;
  top: 3%;
  left: 10%;
  position: absolute;
  background: white;
  box-shadow: ${(p) => `3px 3px 3px 3px ${p.theme.colors.grey}`};
  border-radius: 20px;
  padding: 10px 0;
  display: ${p => p.shouldShow ? 'block' : 'none' };
  z-index: 999;

  ${mediaAbove.mobileLarge(css`
    top: 15%;
    width: 60%;
    left: 20%;
    min-height: 450px;
  `)}

  ${mediaAbove.tablet(
    css`
      top: 20%;
    `
  )}

  ${mediaAbove.desktop(css`
    top: 25%;
  `)}

  ${mediaAbove.desktopLarge(css`
    top: 28%;
  `)}
`

export const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 30px;
  cursor: pointer;
`

const defaultTitlePositioning: string = `
    text-align: left;
    padding-left: 30px;
    padding-bottom: 15px;
    width: 80%;
    margin: auto;
`

export const Title = styled.h1`
  ${ defaultTitlePositioning }

  ${mediaBelow.mobileLarge(
    css`
      padding-left: 0;
      word-break: break-word;
    `
  )}
`

export const Subtitle1 = styled.h4`
  ${ defaultTitlePositioning }

    ${mediaBelow.mobileLarge(
    css`
      padding-left: 0;
      word-break: break-word;
    `
    )}
`

export const Subtitle2 = styled.h4`
  ${ defaultTitlePositioning }

    ${mediaBelow.mobileLarge(
    css`
      padding-left: 0;
      word-break: break-word;
    `
    )}
`