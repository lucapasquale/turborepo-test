import React from "react";
import { styled } from "@stitches/react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { AccordionItem } from "./Item";

const StyledAccordion = styled(AccordionPrimitive.Root);

export type AccordionSize = "small" | "medium" | "large";

type Props = React.ComponentProps<typeof StyledAccordion> & {
  children?: React.ReactNode;
  size?: AccordionSize;
};

export function Accordion({ size = "large", children, ...props }: Props) {
  return (
    <StyledAccordion {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        return React.cloneElement(child, { size });
      })}
    </StyledAccordion>
  );
}

Accordion.Item = AccordionItem;
