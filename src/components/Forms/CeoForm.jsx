"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { EachElement } from "../others/Each";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const inputs = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    placeholder: "Full Name",
  },
  {
    label: "Identification Number",
    name: "identificationNumber",
    type: "text",
    placeholder: "Identification Number",
  },
  {
    label: "Contact Number",
    name: "phone",
    type: "tel",
    placeholder: "Contact Number",
  },
  { label: "Date Of Birth", name: "dateOfBirth", type: "date" },
  {
    label: "User Name",
    name: "username",
    type: "text",
    placeholder: "User Name",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Password",
  },
  {
    label: "Access Level",
    name: "accessLevel",
    type: "select",
    placeholder: "Access Level",
  },
];

// schema
const schema = z.object({
  fullName: z.string().nonempty(""),
  identificationNumber: z.string().nonempty(""),
  phone: z.string().nonempty(""),
  dateOfBirth: z.string().nonempty(""),
  username: z.string().nonempty(""),
  password: z.string().nonempty(""),
  accessLevel: z.string().nonempty(""),
});

const CEO = ({onSubmit,Step,setSteps}) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      identificationNumber: "",
      phone: "",
      dateOfBirth: "",
      username: "",
      password: "",
      accessLevel: "",
    },
  });

  const onBack = () => {
    setSteps( Step-1  ) ;

  }


  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl flex mb-2 gap-2">
          <span className="text-secondaryHeading">CEO</span>
          Information
        </h1>
        <p>
          This form enables users to input and submit comprehensive ceo data.
        </p>
        <p>It collects essential information about CEO.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
            <EachElement
              of={inputs}
              render={(v, i) => {
                if (v.type === "select") {
                  return (
                    <FormField
                      key={i}
                      control={form?.control}
                      name={v.name}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{v.label}</FormLabel>
                          <Select
                            onValueChange={field?.onChange}
                            defaultValue={field?.value}
                          >
                            <FormControl>
                              <SelectTrigger className=" w-full text-xs border-none h-9 placeholder:text-secondaryText bg-secondaryAccent rounded-[5px]">
                                <SelectValue placeholder={v.placeholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-secondaryAccent text-secondaryText rounded-[5px]">
                              <SelectItem value="option1">1</SelectItem>
                              <SelectItem value="option2">2</SelectItem>
                              <SelectItem value="option3">3</SelectItem>
                              <SelectItem value="option4">4</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                } else {
                  return (
                    <FormField
                      key={i}
                      control={form.control}
                      name={v.name}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor={v.name}>{v.label}</FormLabel>
                          <FormControl>
                            <Input
                              className="text-secondaryText w-full text-xs border-none h-9 placeholder:text-secondaryText bg-secondaryAccent rounded-[5px]"
                              placeholder={v.placeholder}
                              type={v.type}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                }
              }}
            />
          </div>
          <div className="text-right ">
            <Button
              type="button"
              className="bg-secondary_bg mx-10"
              onClick={onBack}
            >
              Previous
            </Button>
            <Button
              type="submit"
              className="bg-secondaryHeading text-secondaryText"
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CEO;
