import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, FormItem, styled, theme } from "ui";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: theme.colors.gray500,
  gap: 5,
});

type FormValue = {
  name: string;
  age: number;
};

export default function Web() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = (data) => console.log(data);

  return (
    <Wrapper>
      <h1>Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem
          required
          title="Name"
          name="name"
          register={register}
          error={errors.name}
        >
          <input />
        </FormItem>

        <FormItem
          required
          title="Age"
          name="age"
          register={register}
          error={errors.age}
        >
          <input type="number" />
        </FormItem>

        <Button type="submit" kind="primary">
          Submit
        </Button>
      </form>
    </Wrapper>
  );
}
