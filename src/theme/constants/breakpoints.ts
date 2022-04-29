interface Breakpoint {
  breakpoint: number;
}

export interface Breakpoints {
  [key: string]: Breakpoint;
}

const breakpoints: Breakpoints = {
  desktop: {
    breakpoint: 1024,
  },
  desktopLarge: {
    breakpoint: 1440,
  },
  mobile: {
    breakpoint: 0,
  },
  mobileLarge: {
    breakpoint: 480,
  },
  tablet: {
    breakpoint: 768,
  }
} as const;

export default breakpoints;
