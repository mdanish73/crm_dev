"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
//schema
const schema = z.object({
  Username: z.string().nonempty("Username is required"),
  Password: z.string().nonempty("Password is required"),
});
//zod validation
const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      Username: "",
      Password: "",
    },
  });

  const { handleSubmit, control } = form;
  const router = useRouter();

  //axios
  const formSubmit = async (data) => {
    console.log("Form submitted with data:", data);
    try {
      const response = await axios.post("/api/auth/superadmin/login", {
        email: data.Username,
        password: data.Password,
      });

      if (response.data.success) {
        console.log(response.data.message);
        router.push("/dashboard");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inputs = [
    { name: "Username", type: "text", placeholder: "Username" },
    { name: "Password", type: "password", placeholder: "Password" },
  ];
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col space-y-4 w-[250px] text-white text-xs"
        >
          {inputs.map((v, i) => (
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
          ))}
          <Button type="submit" className="text-[10px] gap-2">
            LOG IN
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="blue"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-arrow-right"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="m12 16 4-4-4-4" />
              </svg>
            </span>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
