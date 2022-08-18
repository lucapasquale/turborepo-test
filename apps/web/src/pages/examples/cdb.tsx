import React from "react";
import type { NextPage } from "next";

import { Tabs, Accordion, theme } from "ui";

const Page: NextPage = () => {
  return (
    <>
      <h1>Environmental Databases</h1>

      <Tabs defaultValue="cdb">
        <Tabs.List>
          <Tabs.Trigger value="cdb">Company Database</Tabs.Trigger>
          <Tabs.Trigger value="sinai">SINAI Database</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="cdb">
          <p>
            Changes in Company Database will be applied to activity data in
            Inventories and might affect BAU, LCS and ICP modules.
          </p>

          <Tabs defaultValue="1">
            <Tabs.List>
              <Tabs.Trigger value="1">Protocol 1</Tabs.Trigger>
              <Tabs.Trigger value="2">Protocol 2</Tabs.Trigger>
              <Tabs.Trigger value="3">Protocol 3</Tabs.Trigger>
              <Tabs.Trigger value="4">Protocol 4</Tabs.Trigger>
              <Tabs.Trigger value="5">Protocol 5</Tabs.Trigger>
              <Tabs.Trigger value="6">Protocol 6</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="1">
              <h3>Scope 1</h3>

              <Accordion
                type="multiple"
                css={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <Accordion.Item
                  value="1"
                  title="Stationary Combustion"
                  css={{ backgroundColor: theme.colors.gray20 }}
                >
                  <pre>Insert table here lol</pre>
                </Accordion.Item>

                <Accordion.Item
                  value="2"
                  title="Mobile Combustion"
                  css={{ backgroundColor: theme.colors.gray20 }}
                >
                  <pre>Insert table here lol</pre>
                </Accordion.Item>
              </Accordion>
            </Tabs.Content>
          </Tabs>
        </Tabs.Content>
      </Tabs>
    </>
  );
};

export default Page;
