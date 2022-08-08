import React from "react";
import type * as Stitches from "@stitches/react";
import { styled, theme } from "../../stitches.config";

const StyledButton = styled("button", {
  background: theme.colors.gray500,

  variants: {
    kind: {
      primary: {
        backgroundColor: "blue",
      },
      danger: {
        backgroundColor: "tomato",
      },
    },
  },
});

export type ButtonKind = Stitches.VariantProps<typeof StyledButton>["kind"];

type Props = React.ComponentProps<typeof StyledButton> & {
  loading?: boolean;
};

export function Button({ children, loading, ...props }: Props) {
  const disabled = props.disabled ?? loading;

  return (
    <StyledButton {...props} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
