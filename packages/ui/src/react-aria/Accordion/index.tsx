import React from "react";
import { styled } from "@stitches/react";

import { AccordionItem } from "./Item";

const StyledAccordion = styled("div", {
  backgroundColor: "#DDE1E6",
});

export type AccordionSize = "small" | "medium" | "large";

type Props = React.ComponentProps<typeof StyledAccordion> & {
  children?: React.ReactNode;
  size?: AccordionSize;
};

export function Accordion({ size = "large", children, ...props }: Props) {
  const [selected, setSelected] = React.useState<string | number | null>(null);

  const onItemClick = React.useCallback(
    (value: string | number) => {
      if (selected === value) {
        setSelected(null);
      } else {
        setSelected(value);
      }
    },
    [selected]
  );

  return (
    <StyledAccordion {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        return React.cloneElement(child, {
          size,
          onClick: onItemClick,
          selected: child.props.value === selected,
        });
      })}
    </StyledAccordion>
  );
}

Accordion.Item = AccordionItem;
