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
      white: "#FFFFFF",
      black: "#000000",

      primary: "green",
      primary5: "#F0F8F7",
      primary30: "#86CABD",

      core50: "#26A791",

      gray40: "#98A2B3",
      gray100: "#090E17",
    },
  },
  media: {
    sm: "(max-width: 420px)",
    md: "(max-width: 640px)",
  },
});
