import * as z from "zod";
import React from "react";
import type { NextPage } from "next";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Button, Checkbox, FormItem, Input, styled, theme } from "ui";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: theme.colors.gray500,
  gap: 5,
});

const schema = z.object({
  name: z.string(),
  age: z.number(),
  test: z.boolean(),
});
type FormValue = z.infer<typeof schema>;

const Page: NextPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: zodResolver(schema),
    // defaultValues: { name: "Luca", age: 28, test: false },
  });

  const onSubmit: SubmitHandler<FormValue> = (data) => console.log(data);

  return (
    <Wrapper>
      <h1>Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label="Name"
              errorMessage={errors.name?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="age"
          control={control}
          rules={{ required: true, min: 5 }}
          render={({ field }) => (
            <Input
              type="number"
              label="Name"
              {...field}
              errorMessage={errors.age?.message}
              value={String(field.value)}
            />
          )}
        />

        {/* <Controller
          name="test"
          control={control}
          render={({ field }) => (
            <Checkbox {...field} value={String(field.value)} errorMessage={errors.test}>
              Test 2
            </Checkbox>
          )}
        /> */}

        <Button type="submit" kind="primary">
          Submit
        </Button>
      </form>
    </Wrapper>
  );
};

export default Page;
