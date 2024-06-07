"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EachElement } from "../others/Each";
import { Button } from "../ui/button";
import { Edit, LoaderCircle } from "lucide-react";
import { toast } from "sonner";

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
  fullName: z.string().nonempty("Full name is required"),
  identification_number: z
    .string()
    .nonempty("Identification number is required"),
  phone: z.string(),
  dateOfBirth: z.string().nonempty("Date of birth is required"),
  username: z.string().nonempty("Username is required"),
  password: z.string().nonempty("Password is required"),
  email: z.string().nonempty("Email is required").email("Invalid email"),
});

const Ceoupdateform = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [duplicate, setDuplicate] = useState(null);
  const id = data._id;

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: data?.fullName || "",
      identification_number: data?.identification_number || "",
      phone: data?.phone || "",
      dateOfBirth: data?.dateOfBirth || "",
      username: data?.username || "",
      password: data?.password || "",
      email: data?.email || "",
    },
  });

  async function updateCeo(values) {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/ceo/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.AUTHORIZATION_KEY,
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message, {
          className: "toastSuccess",
        });
      } else {
        const field = data.field;
        setDuplicate(field);
        toast.error(
          `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`,
          {
            className: "toastError",
          }
        );
      }
    } catch (error) {
      console.log(error.message);
      toast.error("An error occurred. Please try again.", {
        className: "toastError",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="pl-2 hover:bg-[#83B4FF] hover:text-black transition-colors w-full py-1.5 rounded-sm">
          <div className="flex items-center gap-1.5">
            <Edit size={16} />
            <span className="text-sm font-medium">Edit</span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(updateCeo)}>
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
                          {form.formState.errors[v.name]?.message ||
                            (duplicate === v.name &&
                              `${v.label} already exists.`)}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                )}
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-secondaryHeading text-secondaryText w-full mt-10 py-5"
                disabled={loading}
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
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default Ceoupdateform;
