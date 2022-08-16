import React from "react";
import { useObjectRef } from "@react-aria/utils";

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
  "&:focus": { boxShadow: `0 0 0 2px ${theme.colors.primary}` },

  variants: {
    invalid: {
      true: {
        borderColor: theme.colors.error,
        boxShadow: "none",
      },
    },
  },
});

import { AriaTextFieldOptions, useTextField } from "react-aria";

type Props = AriaTextFieldOptions<"input"> & {};

export const Input = React.forwardRef(function Input(
  props: Props,
  forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
  const ref = useObjectRef(forwardedRef);

  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
      <label {...labelProps}>{props.label}</label>

      <StyledInput {...inputProps} ref={ref} />

      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}

      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
});
