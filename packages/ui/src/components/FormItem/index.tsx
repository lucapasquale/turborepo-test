import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import {
  FieldError,
  Path,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";

import { styled, theme } from "../../stitches.config";

const Box = styled("div", {});
const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: 15,
  fontWeight: 500,
  color: "black",

  variants: {
    invalid: {
      true: { color: theme.colors.error },
    },
  },
});

type Props<FormValue> = React.ComponentProps<typeof StyledLabel> & {
  title: string;
  register: UseFormRegister<FormValue>;
  name: Path<FormValue>;
  error: FieldError | undefined;
  required?: boolean;
};

// Should use translatable message
const REQUIRED_MESSAGE = "This field is required";

export function FormItem<FormValue>({
  children,
  title,
  register,
  name,
  error,
  required,
  ...props
}: Props<FormValue>) {
  const value = React.useMemo(() => {
    if (!React.isValidElement(children)) {
      return children;
    }

    return React.cloneElement(children, {
      id: name,
      "aria-invalid": !!error ? "true" : "false",
      ...register(name, { required: required ? REQUIRED_MESSAGE : false }),
    });
  }, [children, register, error, name, required]);

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Box
        css={{
          display: "flex",
          padding: "0 20px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <StyledLabel
          {...props}
          as="label"
          invalid={!!error}
          htmlFor={name}
          css={{ width: 100, lineHeight: "35px", marginRight: 15 }}
        >
          {title}
          {required && (
            <Box
              as="span"
              role="alert"
              css={{ color: theme.colors.error, marginLeft: 4 }}
            >
              *
            </Box>
          )}
        </StyledLabel>

        {value}
      </Box>

      {!!error && (
        <Box as="span" role="alert" css={{ color: theme.colors.error }}>
          {error.message}
        </Box>
      )}
    </Box>
  );
}
