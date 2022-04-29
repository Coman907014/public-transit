import React, { ReactElement } from 'react';
import { createGlobalStyle, css, ThemeProps } from 'styled-components';
import { CustomThemeProps } from '../model/Theme';
import mediaBelow from './utils/mediaBelow/mediaBelow';

const CustomGlobalStyles = createGlobalStyle`
  body {
    overflow-x: hidden;
    background-color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.white};
    color: ${({ theme: { colors } }: ThemeProps<CustomThemeProps>) => colors.black};
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.25;
    text-align: center;
    margin: 0;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
    font-style: oblique;
    line-height: 1.16;
    text-transform: uppercase;

    ${mediaBelow.desktop(css`
      font-size: 1.5rem;
    `)}
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-style: oblique;

    ${mediaBelow.desktop(css`
      font-size: 0.75rem;
    `)}
  }

  h3 {
    font-size: 1rem;
    margin: 0;

    ${mediaBelow.desktop(css`
      font-size: 0.75rem;
    `)}
  }

  h4 {
    margin: 0;
  }

`;

const SiteGlobalStyles = (): ReactElement => (
  <>
    <CustomGlobalStyles />
  </>
);
export default SiteGlobalStyles;
