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
import { EachElement } from "@/components/others/Each";
import { Loader2, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
//schema
const schema = z.object({
  Username: z.string().nonempty("Username is required"),
  Password: z.string().nonempty("Password is required"),
});
//zod validation
const LoginForm = () => {
  const [passwordshown, setPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/superadmin/login", {
        email: data.Username,
        password: data.Password,
      });
      if (response.data.success) {
        router.push("/dashboard");
        toast.success("Login Successfully", {
          className: "toastSuccess",
        });
      } else {
        console.log(response.data.message);
        toast.error("Login Unsuccessfully", {
          className: "toastError",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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

          <Button
            type={isLoading ? "" : "submit"}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-xs gap-2 flex items-center justify-center h-9 rounded-[5px] w-full"
          >
            {isLoading ? (
              <>
                <LoaderCircle className="animate-spin" />
                Please wait
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
