import React from "react";

import { styled, theme } from "../../stitches.config";

const StyledButton = styled('button', {
  background: theme.colors.gray500,
  padding: 5,

  variants: {
    size: {
      small: {
        padding: '20px'
      },
      large: {
        padding: '50px',
      }
    }
  }
})

type Props = React.ComponentProps<typeof StyledButton> & {

}

export function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>;
};
