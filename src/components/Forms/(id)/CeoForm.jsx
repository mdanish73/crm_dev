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
import { Button } from "../../ui/button";
import { useForm } from "react-hook-form";
import { EachElement } from "../../others/Each";
import { Input } from "../../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, User } from "lucide-react";
import axios from "axios";

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
  fullName: z.string().nonempty("Fullname is required"),
  identification_number: z.string().nonempty("Identification number is required"),
  phone: z.string(),
  dateOfBirth: z.string().nonempty("Date of birth is required"),
  username: z.string().nonempty("Username is required"),
  password: z.string().nonempty("Password is required"),
  email: z.string().nonempty("Email is required"),
});

const CeoForm = () => {
  // states
  const [loading, setLoading] = useState(false);
  const [duplicate, setDuplicate] = useState(null);

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
     
  const onSubmit = async (ceo) => {
        setLoading(true);
    
        try {
          const updateForm = { ...form, ceo: { ...ceo } };
          const { data } = await axios.post("/api/creating", updateForm);
          if (!data.success) {
            if (data.field) {
              console.log(`Duplication error in field: ${data.field}`);
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
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false);
        }
      };

  // const onBack = () => {
  //   setSteps(Step - 1);
  // };

  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl flex gap-2">
          <span className="text-secondaryHeading">CEO</span> Information
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
                            {duplicate?.[v.name]?.message || (duplicate === v.name && `${v.label} , Already Exist`)}
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
              className="bg-secondary_bg mx-10 py-5 w-[12%]"
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
