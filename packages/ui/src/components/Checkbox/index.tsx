import React from "react";
import {
  AriaCheckboxProps,
  useCheckbox,
  useFocusRing,
  VisuallyHidden,
} from "react-aria";
import { useObjectRef } from "@react-aria/utils";
import { useToggleState } from "react-stately";

import { theme } from "../../stitches.config";

type Props = AriaCheckboxProps & {};

export const Checkbox = React.forwardRef(function Checkbox(
  props: Props,
  forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
  const ref = useObjectRef(forwardedRef);

  const state = useToggleState(props);
  const { inputProps } = useCheckbox(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label style={{ display: "flex", alignItems: "center" }}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>

      <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <rect
          x={state.isSelected ? 4 : 5}
          y={state.isSelected ? 4 : 5}
          width={state.isSelected ? 16 : 14}
          height={state.isSelected ? 16 : 14}
          fill={state.isSelected ? theme.colors.primary.value : "none"}
          stroke={state.isSelected ? "none" : "gray"}
          strokeWidth={2}
        />
        {state.isSelected && (
          <path
            transform="translate(7 7)"
            d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`}
          />
        )}
        {props.isIndeterminate && (
          <rect x={7} y={11} width={10} height={2} fill="gray" />
        )}
        {isFocusVisible && (
          <rect
            x={1}
            y={1}
            width={22}
            height={22}
            fill="none"
            stroke={theme.colors.primary.value}
            strokeWidth={2}
          />
        )}
      </svg>

      <span>{props.children}</span>
    </label>
  );
});
