import Link from "next/link";
import React from "react";

import { styled } from "ui";

const Nav = styled("nav", {
  display: "flex",
  gap: 15,
  marginBottom: 25,
});

export function Header() {
  return (
    <header>
      <Nav>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/examples/cdb">
          <a>Example CDB page</a>
        </Link>

        <Link href="/components/accordion">
          <a>Accordion</a>
        </Link>

        <Link href="/components/tabs">
          <a>Tabs</a>
        </Link>
      </Nav>
    </header>
  );
}
