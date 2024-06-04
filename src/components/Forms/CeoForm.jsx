"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { EachElement } from "../others/Each";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";

const inputs = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    placeholder: "Full Name",
  },
  {
    label: "Identification Number",
    name: "identification_number",
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
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Email",
  },
];

// schema
const schema = z.object({
  fullName: z.string().nonempty(""),
  identification_number: z.string().nonempty(""),
  phone: z.string().nonempty(""),
  dateOfBirth: z.string().nonempty(""),
  username: z.string().nonempty(""),
  password: z.string().nonempty(""),
  email: z.string().email("Invalid email address").nonempty(""),
});

const CeoForm = ({ onSubmit, Step, setSteps, loading, errors }) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      identification_number: "",
      phone: "",
      dateOfBirth: "",
      username: "",
      password: "",
      email: "",
    },
  });

  // const onBack = () => {
  //   setSteps(Step - 1);
  // };

  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl flex gap-2">
          <span className="text-secondaryHeading">CEO</span>
          Information
        </h1>
        <p>
          This form enables users to input and submit comprehensive CEO data.
        </p>
        <p>It collects essential information about the CEO.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
            <EachElement
              of={inputs}
              render={(v, i) => (
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
                      <FormMessage>
                            {errors?.[v.name]?.message || (errors === v.name && `${v.label} , Already Exist`)}
                          </FormMessage>
                    </FormItem>
                  )}
                />
              )}
            />
          </div>
          <div className="text-left mt-10">
            {/* <Button
              type="button"
              className="py-5 w-[12%]"
              onClick={onBack}
            >
              Previous
            </Button> */}
            <Button
              type={loading ? "" : "submit"}
              className="bg-secondaryHeading text-secondaryText mx-10 py-5 w-[12%]"
            >
              {loading ? (
                <>
                  <LoaderCircle className="mr-3 animate-spin text-blue-800" />
                  Please wait
                </>
              ) : (
                <>Submit</>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CeoForm;
