import React from "react";
import { styled, theme } from "../../stitches.config";

const StyledInput = styled("input", {
  width: 200,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  boxShadow: "0 0 0 1px black",
  "&:focus": { boxShadow: "0 0 0 2px black" },

  variants: {
    invalid: {
      true: {
        borderColor: theme.colors.error,
        boxShadow: "none",
      },
    },
  },
});

type Props = React.ComponentProps<typeof StyledInput> & {
  invalid?: boolean;
};

export const Input = React.forwardRef(function Input(
  { children, invalid, ...props }: Props,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <StyledInput {...props} ref={ref} invalid={invalid}>
      {children}
    </StyledInput>
  );
});
