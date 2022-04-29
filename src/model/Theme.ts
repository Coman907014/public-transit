import { DefaultTheme } from "styled-components";

export interface CustomThemeProps extends DefaultTheme {
  colors: { [key: string]: string };
  screenSize: {
    desktopExtraLarge: string;
    extraSmallMobile: string;
    smallMobile: string;
  }
  zIndex: {
    default: number;
    max: number;
    none: number;
  }
}