import React from "react";
import { styled } from "@stitches/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { theme } from "../../stitches.config";
import { AccordionSize } from ".";
import { useButton } from "react-aria";

const StyledItem = styled("div", {
  overflow: "hidden",
  marginTop: 1,
  backgroundColor: "white",

  "&:focus-within button": {
    borderColor: theme.colors.primary30,
  },
});

const StyledHeader = styled("h3", {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled("button", {
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

const StyledContent = styled("div", {
  overflow: "hidden",
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

  "&[aria-expanded=true]": {
    transform: "rotate(180deg)",
  },
});

type Props = React.ComponentProps<typeof StyledItem> & {
  title: React.ReactNode;
  value: string | number;
  isDisabled?: boolean;

  // Parent props
  onClick?: (value: string | number) => void;
  selected?: boolean;
  size?: AccordionSize;
};

export function AccordionItem(props: Props) {
  return (
    <StyledItem {...props}>
      <StyledHeader>
        <ItemTrigger
          size={props.size}
          isDisabled={props.isDisabled}
          onClick={() => props.onClick?.(props.value)}
        >
          {props.title}

          <StyledChevron aria-hidden aria-expanded={props.selected} />
        </ItemTrigger>
      </StyledHeader>

      {props.selected && (
        <StyledContent size={props.size}>{props.children}</StyledContent>
      )}
    </StyledItem>
  );
}

type TriggerProps = React.ComponentProps<typeof StyledTrigger> & {
  size?: AccordionSize;
  isDisabled?: boolean;
};

function ItemTrigger(props: TriggerProps) {
  const ref = React.useRef(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <StyledTrigger {...buttonProps} size={props.size}>
      {props.children}
    </StyledTrigger>
  );
}
