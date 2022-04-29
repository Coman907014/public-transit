import { css, FlattenSimpleInterpolation } from 'styled-components';

import breakpoints from '../../constants/breakpoints';

interface MediaAbove {
  [key: string]: (
    styles: FlattenSimpleInterpolation | string,
  ) => FlattenSimpleInterpolation;
}

export default Object.keys(breakpoints).reduce(
  (accumulator, name) => ({
    ...accumulator,
    [name]: (styles: FlattenSimpleInterpolation | string) => css`
      @media screen and (min-width: ${breakpoints[name].breakpoint}px) {
        ${styles}
      }
    `,
  }),
  {} as MediaAbove,
);
