import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { styled, theme } from "../../stitches.config";

const StyledTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  gap: 8,
  borderBottom: `1px solid ${theme.colors.primary30}`,
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  padding: "0 20px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 15,
  lineHeight: 1,
  color: theme.colors.gray100,
  userSelect: "none",

  "&:disabled": { color: theme.colors.gray40 },
  "&:hover": { backgroundColor: theme.colors.primary5 },
  '&[data-state="active"]': {
    color: theme.colors.primary50,
    boxShadow: "inset 0 -2px 0 0 currentColor, 0 2px 0 0 currentColor",
  },
  "&:focus": {
    position: "relative",
    boxShadow: `0 0 0 2px ${theme.colors.primary30}`,
  },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: theme.colors.white,
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: "none",
});

export function Tabs(props: TabsPrimitive.TabsProps) {
  return <StyledTabs {...props} />;
}

Tabs.List = StyledList;
Tabs.Trigger = StyledTrigger;
Tabs.Content = StyledContent;
