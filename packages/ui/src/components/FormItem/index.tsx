import React from "react";
import {
  FieldError,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import * as LabelPrimitive from "@radix-ui/react-label";

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
  name: Path<FormValue>;
  register: UseFormRegister<FormValue>;
  options?: RegisterOptions<FormValue>;
  error?: FieldError | undefined;
};

export function FormItem<FormValue>({
  children,
  title,
  register,
  name,
  error,
  options = {},
  ...props
}: Props<FormValue>) {
  const value = React.useMemo(() => {
    if (!React.isValidElement(children)) {
      return children;
    }

    return React.cloneElement(children, {
      id: name,
      invalid: !!error,
      "aria-invalid": !!error ? "true" : "false",
      ...register(name, options),
    });
  }, [children, register, error, name, options]);

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        marginBottom: "12px",
      }}
    >
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
          {options.required && (
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
