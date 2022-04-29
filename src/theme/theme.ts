import colors from './constants/colors';

const commonTheme = {
  screenSize: {
    // screen size breakpoints for smooth transitions
    desktopExtraLarge: '1800px',
    extraSmallMobile: '319px',
    smallMobile: '359px',
  },
  zIndex: {
    default: 1,
    max: 10000,
    none: -1
  },
}

// @TODO: Colors naming should be more abstract
// body is not really abstract. Maybe darkBlue or similar.

export const theme = {
  ...commonTheme,
  colors: {
    ...colors,
  }
};
