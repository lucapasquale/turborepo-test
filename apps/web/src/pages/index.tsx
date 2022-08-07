import { Button, styled } from "ui";

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: "center",
  gap: 5
})

export default function Web() {
  return (
    <Wrapper>
      <h1>Web</h1>

      <Button size="large" onClick={() => console.log(1)}>
        test2
      </Button>
    </Wrapper>
  );
}
