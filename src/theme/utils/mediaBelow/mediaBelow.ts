import { css, FlattenSimpleInterpolation } from 'styled-components';

import breakpoints from '../../constants/breakpoints';

interface MediaBelow {
  [key: string]: (
    styles: FlattenSimpleInterpolation | string,
  ) => FlattenSimpleInterpolation;
}

export default Object.keys(breakpoints).reduce(
  (accumulator, name) => ({
    ...accumulator,
    [name]: (styles: FlattenSimpleInterpolation | string) => css`
      @media screen and (max-width: ${breakpoints[name].breakpoint - 1}px) {
        ${styles}
      }
    `,
  }),
  {} as MediaBelow,
);
