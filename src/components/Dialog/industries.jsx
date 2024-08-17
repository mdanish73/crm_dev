'use client';

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
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

// schema
const schema = z.object({
  name: z.string().nonempty("Name is required"),
  subindustry: z.array(z.object({
    name: z.string().nonempty("Sub-industry name is required")
  })).min(1, "At least one sub-industry is required"),
});

const Industries = () => {
  // states
  const [loading, setLoading] = useState(false);
  const [duplicate, setDuplicate] = useState(null);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      subindustry: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "subindustry",
  });

  // API for industry
  const onSubmit = async (formData) => {
    setLoading(true);
    setDuplicate(null); // Reset duplicate state before submitting
    try {
      const res = await fetch("/api/industry/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.AUTHORIZATION_KEY,
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json(); // Log the response data
      console.log(data);

      if (!res.ok) {
        if (data.field) {
          const field = data.field;
          setDuplicate(field);
          toast.error(
            `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`,
            {
              className: "toastError",
            }
          );
        } else {
          toast.error(data.message, {
            className: "toastError",
          });
        }
      } else {
        toast.success(data.message, {
          className: "toastSuccess",
        });
        form.reset(); // Reset form after successful submission
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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-secondaryHeading text-secondaryText hover:text-secondary_bg">Add Industries</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl flex-1 text-left gap-2">
            <span className="text-secondaryHeading">Industry</span> Data
          </DialogTitle>
          <DialogDescription>
            <p>This form enables users to submit industry data.</p>
            <p>It collects essential information about the company.</p>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry Name</FormLabel>
                  <FormControl>
                    <Input
                      className="text-white w-full text-xs border-none h-9 placeholder:text-secondaryText bg-secondaryAccent rounded-[5px]"
                      placeholder="Industry Name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {duplicate?.name?.message ||
                      (duplicate === "name" && "Industry Name, Already Exist")}
                  </FormMessage>
                </FormItem>
              )}
            />
            <div>
              <FormLabel>Sub-Industries</FormLabel>
              {fields.map((item, index) => (
                <div key={item.id} className="flex gap-2 items-center">
                  <FormField
                    control={form.control}
                    name={`subindustry.${index}.name`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            className="text-white w-full text-xs border-none h-9 placeholder:text-secondaryText bg-secondaryAccent rounded-[5px]"
                            placeholder={`Sub-Industry ${index + 1}`}
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    onClick={() => remove(index)}
                    className="bg-red-600 text-white rounded-full p-2"
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={() => append({ name: "" })}
                className="bg-secondaryHeading text-secondaryText w-full mt-10 mb-2 "
              >
                Add Sub-Industry
              </Button>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-secondaryHeading text-secondaryText w-full  py-5"
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

export default Industries;
