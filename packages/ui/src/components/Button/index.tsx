import React from "react";

import { styled, theme } from "../../stitches.config";

const StyledButton = styled("button", {
  background: theme.colors.gray500,

  variants: {
    type: {
      primary: {
        backgroundColor: "blue",
      },
      danger: {
        backgroundColor: "tomato",
      },
    },
  },
});

type Props = React.ComponentProps<typeof StyledButton> & {};

export type ButtonType = NonNullable<Props["type"]>;

export function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
