"use client";
import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";

const IndustryForm = () => {
  const industrySchema = z.object({
    industry: z.string().min(1, { message: "Industry name is required" }),
    options: z
      .array(
        z.object({
          subIndustryName: z
            .string()
            .min(1, { message: "Sub-industry name is required" }),
          subIndustryCode: z
            .string()
            .min(1, { message: "Sub-industry code is required" }),
        })
      )
      .min(1, { message: "At least one sub-industry must be added" }),
  });

  const form = useForm({
    resolver: zodResolver(industrySchema),
    defaultValues: {
      industry: "",
      options: [{ subIndustryName: "", subIndustryCode: "" }],
    },
  });

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });
  // FormSubmit Function
  const formSubmit = async (data) => {
    console.log(data);
    // try {
    //   const request = await axios.post("/api/industry/add", data);
    //   if (request.data.success) {
    //     toast.success(request.data.message);
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };
  return (
    <div className="px-4  m-auto text-secondaryText">
      <div className="mb-6 ">
          <h1 className="text-2xl flex mb-2 gap-2">
            <span className="text-secondaryHeading">Industry</span> Information
          </h1>
          <p>
            This form enables users to input and submit comprehensive industries
            data.
          </p>
          <p>It collects essential information about industries.</p>
        </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(formSubmit)}>
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add Industry</FormLabel>
                <FormControl>
                <Input
                  className="text-white w-full text-xs border-none h-9 placeholder:text-secondaryText bg-secondaryAccent rounded-[5px]"
                  placeholder="Name of Industry"
                  type="text"
                  {...field}
                 />
                </FormControl>
                {/* {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )} */}
              </FormItem>
            )}
          />
          <FormLabel>Add Sub-Industries</FormLabel>
          {fields.map((field, index) => (
            <div key={field.id} className="flex flex-col space-y-2">
              <FormItem>
                <FormControl>
                  <Controller
                    control={control}
                    name={`options.${index}.subIndustryName`}
                    render={({ field }) => (
                      <Input
                        {...field}
                        className="text-white focus:bg-[#8C8CA3]/40 text-xs border-none h-9 w-1/3 bg-[#8C8CA3]/40 rounded-[5px]"
                        placeholder="Sub-industry name"
                        type="text"
                      />
                    )}
                  />
                </FormControl>
                {errors.options?.[index]?.subIndustryName && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.options[index].subIndustryName.message}
                  </p>
                )}
              </FormItem>
              <FormItem>
                <FormControl>
                  <Controller
                    control={control}
                    name={`options.${index}.subIndustryCode`}
                    render={({ field }) => (
                      <Input
                        {...field}
                        className="text-white focus:bg-[#8C8CA3]/40 text-xs border-none h-9 w-1/3 bg-[#8C8CA3]/40 rounded-[5px]"
                        placeholder="Sub-industry code"
                        type="text"
                      />
                    )}
                  />
                </FormControl>
                {errors.options?.[index]?.subIndustryCode && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.options[index].subIndustryCode.message}
                  </p>
                )}
              </FormItem>
              <Button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-600 text-xs w-14 h-5 text-white"
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={() => append({ subIndustryName: "", subIndustryCode: "" })}
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
