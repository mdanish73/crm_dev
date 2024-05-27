"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Phone, User } from "lucide-react";
import { EachElement } from "../others/Each";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const CeoForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const schema = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    username: z.string().min(1, "Username is required"),
    password: z.string().min(8, "Password must be at least 6 characters long"),
    phone: z.string().min(11, "Phone number must be at least 10 digits"),
    dob: z.string().min(1, "Date of Birth is required"),
    identification_number: z
      .string()
      .min(1, "Identification Number is required"),
  });

  const form = useForm({
    resolver: zodResolver(schema),
  });

  const { handleSubmit, control } = form;

  const handleFormSubmit = (data) => {
    console.log(data);
  };
  const Password = () => {
    setShowPassword(!showPassword);
  };
  const inputFields = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeHolder: "Enter Your Full Name",
      icon: <User />,
    },
    {
      name: "username",
      type: "text",
      label: "Username",
      placeHolder: "Enter Your Username",
      icon: <User />,
    },
    {
      name: "password",
      type: showPassword ? "text" : "password",
      label: "Password",
      placeHolder: "Enter Your Password",
      icon: showPassword ? <EyeOff /> : <Eye />,
    },
    {
      name: "phone",
      type: "tel",
      label: "Phone Number",
      placeHolder: "Enter Your Phone Number",
      icon: <Phone />,
    },
    {
      name: "dob",
      type: "date",
      label: "Date of Birth",
      placeHolder: "Enter Your Date of Birth",
      icon: <User />,
    },
    {
      name: "identification_number",
      type: "number",
      label: "Identification Number",
      placeHolder: "Enter Your Identification Number",
      icon: <User />,
    },
  ];
  return (
    <section className="">
      <Form {...form}>
        <form className="grid grid-cols-2 gap-5 px-40">
          <EachElement
            of={inputFields}
            render={(v, i) => (
              <div className="flex flex-col">
                <FormLabel htmlFor="">{v.label}</FormLabel>
                <div onClick={Password}>{v.icon}</div>
                <FormField
                  key={i}
                  control={control}
                  name={v.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-white text-xs border-none h-9 bg-[#8C8CA3]/40 rounded-[5px]"
                          placeholder={v.placeholder}
                          type={v.type}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          />
        </form>
      </Form>
    </section>
  );
};

export default CeoForm;
