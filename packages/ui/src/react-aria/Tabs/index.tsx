import React from "react";

import { styled, theme } from "../../stitches.config";
import { Item, TabListState, useTabListState } from "react-stately";
import { AriaTabListProps, useTab, useTabList, useTabPanel } from "react-aria";

const StyledList = styled("div", {
  flexShrink: 0,
  display: "flex",
  gap: 8,
  borderBottom: `1px solid ${theme.colors.primary30}`,
});

const StyledTrigger = styled("button", {
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

const StyledContent = styled("div", {
  flexGrow: 1,
  padding: 20,
  backgroundColor: theme.colors.white,
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: "none",
});

type Props = AriaTabListProps<object> & {
  isDisabled?: boolean;
};

export function Tabs(props: Props) {
  const state = useTabListState(props);
  const ref = React.useRef(null);
  const { tabListProps } = useTabList(props, state, ref);

  return (
    <div>
      <StyledList {...tabListProps} ref={ref}>
        {[...state.collection].map((item) => (
          <Tab key={item.key} item={item} state={state} />
        ))}
      </StyledList>

      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  );
}

Tabs.Item = Item;

function Tab({ item, state }: { item: any; state: TabListState<any> }) {
  const { key, rendered } = item;
  const ref = React.useRef(null);
  const { tabProps, isSelected, isDisabled } = useTab({ key }, state, ref);

  return (
    <StyledTrigger
      {...tabProps}
      ref={ref}
      disabled={isDisabled}
      data-state={isSelected ? "active" : "inactive"}
    >
      {rendered}
    </StyledTrigger>
  );
}

function TabPanel({ state, ...props }: { state: TabListState<any> }) {
  const ref = React.useRef(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);

  return (
    <StyledContent {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </StyledContent>
  );
}
