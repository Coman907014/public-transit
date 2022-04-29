import styled, { css } from "styled-components";
import mediaAbove from "../../theme/utils/mediaAbove/mediaAbove";

export const BackdropWrapper = styled.div<{ shouldShow: boolean }>`
  width: 60%;
  min-height: 700px;
  min-width: 200px;
  word-break: break;
  top: 3%;
  left: 20%;
  position: fixed;
  background: white;
  box-shadow: ${(p) => `3px 3px 3px 3px ${p.theme.colors.grey}`};
  border-radius: 20px;
  padding: 10px 0;
  display: ${p => p.shouldShow ? 'block' : 'none' };
  z-index: 999;

  ${mediaAbove.mobileLarge(css`
    top: 5%
  `)}

  ${mediaAbove.desktop(css`
    top: 10%;
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
    margin: auto
`

export const Title = styled.h1`
  ${ defaultTitlePositioning }
`

export const Subtitle1 = styled.h4`
  ${ defaultTitlePositioning }
`

export const Subtitle2 = styled.h4`
  ${ defaultTitlePositioning }
`