import React from "react";
import type { NextPage } from "next";

import { Radix, styled } from "ui";

const { Accordion } = Radix;

const Wrapper = styled("main", {
  backgroundColor: "Grey",
  padding: 20,
});

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
      <button onClick={() => setCounter((c) => c + 1)}>Change size</button>

      <Wrapper>
        <Accordion collapsible type="single" size={size}>
          <Accordion.Item value="item-1" title="Is it accessible?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor leo
            vel ultrices eget placerat imperdiet quam. At vitae leo ultrices
            convallis in at in maecenas cursus. Sit porttitor facilisis ipsum
            sapien faucibus tortor, purus. Aenean viverra id pharetra nisl.
            Netus egestas neque a posuere in. Turpis euismod blandit vitae, in
            id. Malesuada suspendisse vitae eget magnis iaculis risus tempus
            consectetur eget. Massa ultricies in sit massa arcu.
          </Accordion.Item>

          <Accordion.Item value="item-2" title="Is it unstyled?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor leo
            vel ultrices eget placerat imperdiet quam. At vitae leo ultrices
            convallis in at in maecenas cursus. Sit porttitor facilisis ipsum
            sapien faucibus tortor, purus. Aenean viverra id pharetra nisl.
            Netus egestas neque a posuere in. Turpis euismod blandit vitae, in
            id. Malesuada suspendisse vitae eget magnis iaculis risus tempus
            consectetur eget. Massa ultricies in sit massa arcu.
          </Accordion.Item>

          <Accordion.Item disabled value="item-3" title="Disabled?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor leo
            vel ultrices eget placerat imperdiet quam. At vitae leo ultrices
            convallis in at in maecenas cursus. Sit porttitor facilisis ipsum
            sapien faucibus tortor, purus. Aenean viverra id pharetra nisl.
            Netus egestas neque a posuere in. Turpis euismod blandit vitae, in
            id. Malesuada suspendisse vitae eget magnis iaculis risus tempus
            consectetur eget. Massa ultricies in sit massa arcu.
          </Accordion.Item>
        </Accordion>
      </Wrapper>
    </>
  );
};

export default Page;
