"use client";

import React, { useState } from "react";
import CeoForm from "@/components/Forms/CeoForm";
import axios from 'axios';
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
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// schema
const schema = z.object({
  companyname: z.string().nonempty(""),
  contact: z.string().nonempty(""),
  email: z.string().nonempty(""),
  identificationNumber: z.string().nonempty(""),
  industry: z.string().nonempty(""),
  subIndustry: z.string().nonempty(""),
  country: z.string().nonempty(""),
});

const CompanyForms = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      companyname: "",
      contact: "",
      email: "",
      identificationNumber: "",
      industry: "",
      subIndustry: "",
      country: "",
    },
  });

  const { handleSubmit, control } = form;
  const router = useRouter();

  const formSubmit = async (data) => {
    console.log("Form submitted with data:", data);
    setIsFormSubmitted(true);  // Update state immediately on submit
    try {
      const response = await axios.post("/api/createcompanyandceo", data);

      if (response.data.success) {
        console.log(response.data.message);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBackToCompanyForm = () => {
    setIsFormSubmitted(false);
  };

  const inputs = [
    {
      label: "Company Name",
      name: "companyname",
      type: "text",
      placeholder: "Company Name",
    },
    {
      label: "Phone Number",
      name: "contact",
      type: "tel",
      placeholder: "Phone Number",
    },
    { label: "Email", name: "email", type: "email", placeholder: "Email" },
    {
      label: "Identification Number",
      name: "identificationNumber",
      type: "text",
      placeholder: "Identification Number",
    },
    {
      label: "Industry",
      name: "industry",
      type: "select",
      placeholder: "Industry",
    },
    {
      label: "Sub-Industry",
      name: "subIndustry",
      type: "select",
      placeholder: "Sub-Industry",
    },
    {
      label: "Country",
      name: "country",
      type: "select",
      placeholder: "Country",
    },
  ];

  return (
    <>
      {!isFormSubmitted ? (
        <>
          <div className="mb-6">
            <h1 className="text-2xl flex mb-2 gap-2">
              <span className="text-secondaryHeading">Company</span>
              Information
            </h1>
            <p>
              This form enables users to input and submit comprehensive company
              data.
            </p>
            <p>It collects essential information about company.</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={handleSubmit(formSubmit)}
              className=" text-xs"
            >
              <div className="grid grid-cols-2 gap-5">
                <EachElement
                  of={inputs}
                  render={(v, i) => {
                    if (v.type === "select") {
                      return (
                        <FormField
                          key={i}
                          control={control}
                          name={v.name}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{v.label}</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className=" w-full text-xs border-none h-9 placeholder:text-secondaryText bg-secondaryAccent rounded-[5px]">
                                    <SelectValue
                                      placeholder={v.placeholder}
                                    />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-secondaryAccent text-secondaryText rounded-[5px]">
                                  <SelectItem value="option1">Option 1</SelectItem>
                                  <SelectItem value="option2">Option 2</SelectItem>
                                  <SelectItem value="option3">Option 3</SelectItem>
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
                          control={control}
                          name={v.name}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor={v.name}>{v.label}</FormLabel>
                              <FormControl>
                                <Input
                                  className="text-white w-full text-xs border-none h-9 placeholder:text-secondaryText bg-secondaryAccent rounded-[5px]"
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
              <Button
                type="submit"
                className="bg-secondaryHeading mt-10 font-medium text-xs gap-2"
              >
                SUBMIT
              </Button>
            </form>
          </Form>
        </>
      ) : (
        <CeoForm onBack={handleBackToCompanyForm} />
      )}
    </>
  );
};

export default CompanyForms;
