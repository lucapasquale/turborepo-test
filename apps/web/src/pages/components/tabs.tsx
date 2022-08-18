import React from "react";
import type { NextPage } from "next";

import { Tabs } from "ui";

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
      <Tabs defaultValue={ITEMS[0].value} orientation="vertical">
        <Tabs.List>
          {ITEMS.map((item) => (
            <Tabs.Trigger
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {ITEMS.map((item) => (
          <Tabs.Content key={item.value} value={item.value}>
            {item.content}
          </Tabs.Content>
        ))}
      </Tabs>
    </>
  );
};

export default Page;
