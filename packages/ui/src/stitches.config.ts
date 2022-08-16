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

      core50: "#26A791",

      coolGray10: "#F2F4F8",
      coolGray40: "#A2A9B0",

      gray100: "#121619",
    },
  },
});
