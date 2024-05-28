"use client";

import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const IndustryForm = () => {
  const industrySchema = z.object({
    name: z.string().min(1, { message: "Industry name is required" }),
    options: z
      .array(
        z.object({
          subIndustryName: z
            .string()
            .min(1, { message: "Sub-industry name is required" }),
        })
      )
      .min(1, { message: "At least one sub-industry must be added" }),
  });

  const form = useForm({
    resolver: zodResolver(industrySchema),
    defaultValues: {
      name: "",
      options: [{ subIndustryName: "" }],
    },
  });

  const { control, handleSubmit, formState: { errors } } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'options',
  });

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add Industry</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="text-white text-xs border-none h-9 bg-[#8C8CA3]/40 rounded-[5px]"
                    placeholder="Industry name"
                    type="text"
                  />
                </FormControl>
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          <FormLabel>Add Sub-Industries</FormLabel>
          {fields.map((field, index) => (
            <FormItem key={field.id}>
              <FormControl>
                <Controller
                  control={control}
                  name={`options.${index}.subIndustryName`}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Sub-industry name"
                      type="text"
                    />
                  )}
                />
              </FormControl>
              <Button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-600 text-xs w-14 h-5 text-white"
              >
                Remove
              </Button>
              {errors.options?.[index]?.subIndustryName && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.options[index].subIndustryName.message}
                </p>
              )}
            </FormItem>
          ))}
          <Button
            type="button"
            onClick={() => append({ subIndustryName: "" })}
            className="bg-blue-600 text-xs text-white mt-2"
          >
            Add Sub-Industry
          </Button>
          <Button type="submit" className="mt-5 bg-green-600 text-white">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default IndustryForm;



