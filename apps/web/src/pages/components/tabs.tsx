import React from "react";
import type { NextPage } from "next";

import { Radix, ReactAria, styled, theme } from "ui";

const Flex = styled("div", { display: "flex" });

const Wrapper = styled("section", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: 40,
  padding: 20,
  backgroundColor: theme.colors.gray10,
});

const ITEMS = [
  {
    value: "item-1",
    title: "Item 1",
    disabled: false,
    content: "Item 1".repeat(20),
  },
  {
    value: "item-2",
    title: "Item 2",
    disabled: false,
    content: "Item 2".repeat(20),
  },
  {
    value: "item-3",
    title: "Item 3",
    disabled: true,
    content: "Item 3".repeat(20),
  },
];

const Page: NextPage = () => {
  return (
    <>
      <Wrapper>
        <h2>Radix</h2>
        <h2>React-ARIA</h2>

        <Radix.Tabs defaultValue={ITEMS[0].value}>
          <Radix.Tabs.List>
            {ITEMS.map((item) => (
              <Radix.Tabs.Trigger
                key={item.value}
                value={item.value}
                disabled={item.disabled}
              >
                {item.title}
              </Radix.Tabs.Trigger>
            ))}
          </Radix.Tabs.List>

          {ITEMS.map((item) => (
            <Radix.Tabs.Content key={item.value} value={item.value}>
              {item.content}
            </Radix.Tabs.Content>
          ))}
        </Radix.Tabs>

        <ReactAria.Tabs
          disabledKeys={ITEMS.filter((i) => i.disabled).map((i) => i.value)}
        >
          {ITEMS.map((item) => (
            <ReactAria.Tabs.Item key={item.value} title={item.title}>
              {item.content}
            </ReactAria.Tabs.Item>
          ))}
        </ReactAria.Tabs>
      </Wrapper>
    </>
  );
};

export default Page;
