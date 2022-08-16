/* eslint-disable react/display-name */
import React from "react";
import { styled } from "@stitches/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { theme } from "../stitches.config";

const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  width: 300,
  backgroundColor: "#DDE1E6",
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  marginTop: 1,
  backgroundColor: "white",

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    boxShadow: `0 0 0 2px ${theme.colors.primary}`,
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  border: "unset",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "14px 16px",
  width: "100%",
  color: theme.colors.gray100,

  "&:disabled": { color: theme.colors.coolGray40 },
  "&:hover": { backgroundColor: theme.colors.coolGray10 },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  padding: "8px 64px 24px 48px",
});

const StyledChevron = styled(ChevronDownIcon, {
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",

  "[data-state=open] &": {
    transform: "rotate(180deg)",
  },
});

export const Accordion = StyledAccordion;

export const AccordionTrigger = React.forwardRef(
  ({ children, ...props }: any, forwardedRef: React.Ref<HTMLButtonElement>) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  )
);

export const AccordionContent = React.forwardRef(
  ({ children, ...props }: any, forwardedRef: React.Ref<HTMLDivElement>) => (
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  )
);

type Props = AccordionPrimitive.AccordionItemProps & {
  title: React.ReactNode;
};

export function AccordionItem(props: Props) {
  return (
    <StyledItem {...props}>
      <AccordionTrigger>{props.title}</AccordionTrigger>

      <AccordionContent>{props.children}</AccordionContent>
    </StyledItem>
  );
}
