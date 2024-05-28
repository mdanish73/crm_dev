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
import { ChevronRight } from "lucide-react";
import { EachElement } from "@/components/others/Each";
import toast from "react-hot-toast";
//schema
const schema = z.object({
  Username: z.string().nonempty("Username is required"),
  Password: z.string().nonempty("Password is required"),
});
//zod validation
const LoginForm = () => {
<<<<<<< HEAD
  
=======
  const[passwordshown,setPasswordShown]=useState(false)
>>>>>>> 2cff8d8260b948d65ac730c5695fde23d70c6851
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
        setTimeout(() => {
          toast.success("WelCome!!");
          router.push("/dashboard");
        }, 2000);
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
          <EachElement
            of={inputs}
            render={(v, i) => (
              <FormField
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
            )}
          />

          <Button type="submit" className=" font-medium text-xs gap-2">
            LOG IN
          </Button>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
