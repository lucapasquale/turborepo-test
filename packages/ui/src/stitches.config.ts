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
      primary50: "#26A791",

      gray2: "#FCFCFD",
      gray10: "#F2F4F7",
      gray20: "#EAECF0",
      gray40: "#98A2B3",
      gray50: "#667085",
      gray100: "#090E17",
    },

    fonts: {
      sans: "Inter, sans-serif",
    },
  },
  media: {
    sm: "(max-width: 420px)",
    md: "(max-width: 640px)",
  },
});

export const globalStyles = globalCss({
  body: {
    fontFamily: theme.fonts.sans,
    backgroundColor: theme.colors.gray10,
  },
});
