import React from "react";
import { styled } from "@stitches/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { theme } from "../../stitches.config";
import { AccordionSize } from ".";

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  marginTop: 1,
  backgroundColor: "white",

  "&:focus-within button": {
    borderColor: theme.colors.primary30,
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  color: theme.colors.gray100,
  padding: "0 14px",
  border: "solid 2px transparent",

  "&:disabled": { color: theme.colors.gray40 },
  "&:hover": { backgroundColor: theme.colors.primary5 },

  variants: {
    size: {
      small: { height: 32 },
      medium: { height: 40 },
      large: { height: 48 },
    },
  },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: theme.colors.white,
  padding: "8px 16px 24px 64px",

  variants: {
    size: {
      small: { paddingRight: 16 },
      medium: { paddingRight: 64 },
      large: { paddingRight: "25%" },
    },
  },
});

const StyledChevron = styled(ChevronDownIcon, {
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",

  "[data-state=open] &": {
    transform: "rotate(180deg)",
  },
});

type Props = React.ComponentProps<typeof StyledItem> & {
  title: React.ReactNode;
  size?: AccordionSize;
};

export function AccordionItem(props: Props) {
  return (
    <StyledItem {...props}>
      <StyledHeader>
        <StyledTrigger size={props.size}>
          {props.title}

          <StyledChevron aria-hidden />
        </StyledTrigger>
      </StyledHeader>

      <StyledContent size={props.size}>{props.children}</StyledContent>
    </StyledItem>
  );
}
