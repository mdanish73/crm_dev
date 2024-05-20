"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

// Define the schema using zod
const schema = z.object({
  Username: z.string().nonempty("Username is required"),
  Password: z.string().nonempty("Password is required"),
});

const Page = () => {
  // Initialize the form
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      Username: "",
      Password: "",
    },
  });

  const { handleSubmit, control } = form;

  const formSubmit = (data) => {
    console.log(data);
  };

  const inputs = [
    { name: "Username", type: "text", placeholder: "Username" },
    { name: "Password", type: "password", placeholder: "Password" },
  ];

  return (
      <div className="bg-[#0E0F2A] items-center justify-center min-h-screen">
          <div className="bg-[#222239] lg:w-[270px] lg:h-[170px] sm:w-[200px] sm:h[150px]  rounded-lg shadow-2xl flex items-center justify-center relative z-50">
            <Form {...form}>
              <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
                {inputs.map((v, i) => (
                  <FormField
                    key={i}
                    control={control}
                    name={v.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
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
                <div className=" relative left-12">
                <Button type="submit">Login</Button>
                </div>
              </form>
            </Form>
          </div>
          <svg
            height="100"
            width="100"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-24 bottom-32"
          >
            <circle r="35" cx="50" cy="50" fill="#252443" />
          </svg>
          <svg
            height="100"
            width="100"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-20 left-8"
          >
            <circle r="3" cx="8" cy="8" fill="#51526B" />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-10 left-40"
          >
            <line
              x1="2"
              y1="10"
              x2="18"
              y2="10"
              stroke="#51526B"
              strokeWidth="4"
            />
            <line
              x1="10"
              y1="2"
              x2="10"
              y2="18"
              stroke="#51526B"
              strokeWidth="4"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-36 left-32"
          >
            <line
              x1="2"
              y1="10"
              x2="18"
              y2="10"
              stroke="#51526B"
              strokeWidth="4"
            />
            <line
              x1="10"
              y1="2"
              x2="10"
              y2="18"
              stroke="#51526B"
              strokeWidth="4"
            />
          </svg>
        </div>
  );
};

export default Page;
