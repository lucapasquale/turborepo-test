import React from "react";
import { Button, ButtonType, styled } from "ui";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: 5,
});

export default function Web() {
  const [type, setType] = React.useState<ButtonType>("primary");

  const onClick = () => {
    setType(type === "primary" ? "danger" : "primary");
  };

  return (
    <Wrapper>
      <h1>Web</h1>

      <Button type={type} onClick={onClick}>
        test2
      </Button>
    </Wrapper>
  );
}
