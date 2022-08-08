import * as z from "zod";
import React from "react";
import type { NextPage } from "next";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, FormItem, Input, styled, theme } from "ui";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: theme.colors.gray500,
  gap: 5,
});

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  age: z.number().gt(10, { message: "Must be greater than 10" }),
});
type FormValue = z.infer<typeof schema>;

const Page: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: zodResolver(schema),
    defaultValues: { age: 8 },
  });

  const onSubmit: SubmitHandler<FormValue> = (data) => console.log(data);

  return (
    <Wrapper>
      <h1>Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem
          name="name"
          title="Name"
          register={register}
          options={{ required: true }}
          error={errors.name}
        >
          <Input />
        </FormItem>

        <FormItem
          name="age"
          title="Age"
          register={register}
          options={{ required: true, valueAsNumber: true }}
          error={errors.age}
        >
          <Input type="number" />
        </FormItem>

        <Button type="submit" kind="primary">
          Submit
        </Button>
      </form>
    </Wrapper>
  );
};

export default Page;
