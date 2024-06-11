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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { EachElement } from "../others/Each";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";

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
  { label: "Email", name: "email", type: "email", placeholder: "Email" },
];

const schema = z.object({
  fullName: z.string().nonempty("Full Name is required"),
  identification_number: z
    .string()
    .nonempty("Identification number is required"),
  phone: z.string(),
  dateOfBirth: z.string().nonempty("Date of birth is required"),
  username: z.string().nonempty("Username is required"),
  password: z.string().nonempty("Password is required"),
  email: z.string().nonempty("Email is required"),
});

const CeoForm = ({ID}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
      const res = await fetch(`/api/ceo?id=${ID}`, {
        method: "POST",
        headers: {  
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.AUTHORIZATION_KEY,
        },
        body: JSON.stringify(ceo),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.field) {
          toast.error(
            `${
              data.field.charAt(0).toUpperCase() + data.field.slice(1)
            } already exists.`,
            { className: "toastError" }
          );
        } else {
          toast.error(data.message, { className: "toastError" });
        }
      } else {
        toast.success(data.message, { className: "toastSuccess" });
        form.reset();
        router.push("/companies/ceo");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error while submitting the form.", {
        className: "toastError",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 m-auto text-secondaryText">
      <div className="mb-6">
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
                        {form.formState.errors[v.name]?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
              )}
            />
          </div>
          <div className="text-left mt-6">
            <Button
              type={loading ? "button" : "submit"}
              className="bg-secondaryHeading text-secondaryText w-auto mt-10 py-5"
            >
              {loading ? (
                <>
                  <LoaderCircle className="mr-3 animate-spin text-blue-800" />
                  Please wait
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CeoForm;
