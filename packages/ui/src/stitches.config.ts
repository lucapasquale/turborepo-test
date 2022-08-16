import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "green",

      gray400: "gainsboro",
      gray500: "lightgray",

      error: "tomato",
    },
  },
});
