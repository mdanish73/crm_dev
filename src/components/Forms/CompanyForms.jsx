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
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { EachElement } from "../others/Each";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

// schema
const schema = z.object({
  companyname: z.string().nonempty(""),
  contact: z.string().nonempty(""),
  email: z.string().email("Invalid email address").nonempty(""),
  identificationNumber: z.string().nonempty(""),
  industry: z.string().nonempty(""),
  subIndustry: z.string().nonempty(""),
  // country: z.string().nonempty(""),
});
// inputs
const inputs = [
  {
    label: "Company Name",
    name: "companyname",
    type: "text",
    placeholder: "Company Name",
  },
  {
    label: "Contact Number",
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
];

const CompanyForms = () => {
  // states
  const [loading, setLoading] = useState(false);
  const [duplicate, setDuplicate] = useState(null);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      companyname:"",
      contact:"",
      email:"",
      identificationNumber:"",
      industry:"",
      subIndustry:"",
    },
  });


  const onSubmit = async (company) => {
    setLoading(true);
    try {
      const updateForm = { ...form, company: { ...company } };
      const { data } = await axios.post("/api/creating", updateForm);
      if (!data.success) {
        if (data.field) {
          const field = data.field;
          setDuplicate(field)
        }
        toast.error(data.message, {
          className: "toastError",
        });
      } else {
        toast.success(data.message, {
          className: "toastSuccess",
        });
    }
  } 
    catch (error) {
      console.log(error);
    }
    finally {
          setLoading(false);
        }
  }
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl flex mb-2 gap-2">
          <span className="text-secondaryHeading">Company</span> Information
        </h1>
        <p>
          This form enables users to input and submit comprehensive company
          data.
        </p>
        <p>It collects essential information about company.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="text-xs">
          <div className="grid grid-cols-2 gap-5">
            <EachElement
              of={inputs}
              render={(v, i) => {
                if (v.type === "select") {
                  return (
                    <FormField
                      key={i}
                      control={form.control}
                      name={v.name}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{v.label}</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full text-xs border-none h-9 placeholder:text-secondaryText bg-secondaryAccent rounded-[5px]">
                                <SelectValue placeholder={v.placeholder} />
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
                      control={form.control}
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
                          <FormMessage>
                            {duplicate?.[v.name]?.message || (duplicate === v.name && `${v.label}, Already Exist`)}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                  );
                }
              }}
            />
          </div>
          <div className="text-left mt-10">
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

export default CompanyForms;
