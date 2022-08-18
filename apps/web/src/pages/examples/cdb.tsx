import React from "react";
import type { NextPage } from "next";

import { Radix, theme } from "ui";

const Page: NextPage = () => {
  return (
    <>
      <h1>Environmental Databases</h1>

      <Radix.Tabs defaultValue="cdb">
        <Radix.Tabs.List>
          <Radix.Tabs.Trigger value="cdb">Company Database</Radix.Tabs.Trigger>
          <Radix.Tabs.Trigger value="sinai">SINAI Database</Radix.Tabs.Trigger>
        </Radix.Tabs.List>

        <Radix.Tabs.Content value="cdb">
          <p>
            Changes in Company Database will be applied to activity data in
            Inventories and might affect BAU, LCS and ICP modules.
          </p>

          <Radix.Tabs defaultValue="1">
            <Radix.Tabs.List>
              <Radix.Tabs.Trigger value="1">Protocol 1</Radix.Tabs.Trigger>
              <Radix.Tabs.Trigger value="2">Protocol 2</Radix.Tabs.Trigger>
              <Radix.Tabs.Trigger value="3">Protocol 3</Radix.Tabs.Trigger>
              <Radix.Tabs.Trigger value="4">Protocol 4</Radix.Tabs.Trigger>
              <Radix.Tabs.Trigger value="5">Protocol 5</Radix.Tabs.Trigger>
              <Radix.Tabs.Trigger value="6">Protocol 6</Radix.Tabs.Trigger>
            </Radix.Tabs.List>

            <Radix.Tabs.Content value="1">
              <h3>Scope 1</h3>

              <Radix.Accordion
                type="multiple"
                css={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <Radix.Accordion.Item
                  value="1"
                  title="Stationary Combustion"
                  css={{ backgroundColor: theme.colors.gray20 }}
                >
                  <pre>Insert table here lol</pre>
                </Radix.Accordion.Item>

                <Radix.Accordion.Item
                  value="2"
                  title="Mobile Combustion"
                  css={{ backgroundColor: theme.colors.gray20 }}
                >
                  <pre>Insert table here lol</pre>
                </Radix.Accordion.Item>
              </Radix.Accordion>
            </Radix.Tabs.Content>
          </Radix.Tabs>
        </Radix.Tabs.Content>
      </Radix.Tabs>
    </>
  );
};

export default Page;
