import React from "react";
import type { NextPage } from "next";

import { Radix, styled } from "ui";

const { Accordion, AccordionItem } = Radix;

const Wrapper = styled("main", {
  backgroundColor: "Grey",
});

const Page: NextPage = () => {
  return (
    <Wrapper>
      <Accordion collapsible type="single">
        <AccordionItem value="item-1" title="Is it accessible?">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionItem>

        <AccordionItem value="item-2" title="Is it unstyled?">
          Yes. It&apos;s unstyled by default, giving you freedom over the look
          and feel.
        </AccordionItem>

        <AccordionItem disabled value="item-3" title="Disabled?">
          Yes
        </AccordionItem>
      </Accordion>
    </Wrapper>
  );
};

export default Page;
