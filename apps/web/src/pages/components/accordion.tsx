import React from "react";
import type { NextPage } from "next";

import { Accordion, styled } from "ui";

const Flex = styled("div", { display: "flex" });

const ITEMS = [
  {
    value: "item-1",
    title: "Item 1",
    disabled: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor leovel ultrices eget placerat imperdiet quam. At vitae leo ultricesconvallis in at in maecenas cursus. Sit porttitor facilisis ipsumsapien faucibus tortor, purus. Aenean viverra id pharetra nisl.Netus egestas neque a posuere in. Turpis euismod blandit vitae, inid. Malesuada suspendisse vitae eget magnis iaculis risus tempusconsectetur eget. Massa ultricies in sit massa arcu.",
  },
  {
    value: "item-2",
    title: "Item 2",
    disabled: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor leovel ultrices eget placerat imperdiet quam. At vitae leo ultricesconvallis in at in maecenas cursus. Sit porttitor facilisis ipsumsapien faucibus tortor, purus. Aenean viverra id pharetra nisl.Netus egestas neque a posuere in. Turpis euismod blandit vitae, inid. Malesuada suspendisse vitae eget magnis iaculis risus tempusconsectetur eget. Massa ultricies in sit massa arcu.",
  },
  {
    value: "item-3",
    title: "Item 3",
    disabled: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor leovel ultrices eget placerat imperdiet quam. At vitae leo ultricesconvallis in at in maecenas cursus. Sit porttitor facilisis ipsumsapien faucibus tortor, purus. Aenean viverra id pharetra nisl.Netus egestas neque a posuere in. Turpis euismod blandit vitae, inid. Malesuada suspendisse vitae eget magnis iaculis risus tempusconsectetur eget. Massa ultricies in sit massa arcu.",
  },
];

const Page: NextPage = () => {
  const [counter, setCounter] = React.useState(0);
  const size = React.useMemo(() => {
    switch (counter % 3) {
      case 0:
        return "small";
      case 1:
        return "medium";
      case 2:
        return "large";
    }
  }, [counter]);

  return (
    <>
      <Flex css={{ alignItems: "center", gap: 10, marginBottom: 20 }}>
        <button onClick={() => setCounter((c) => c + 1)}>Change size</button>
        {size}
      </Flex>

      <Accordion collapsible type="single" size={size}>
        {ITEMS.map((item) => (
          <Accordion.Item
            key={item.value}
            value={item.value}
            title={item.title}
            disabled={item.disabled}
          >
            {item.content}
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default Page;
