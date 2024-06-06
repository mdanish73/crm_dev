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
  fullName: z.string().nonempty("Fullname is required"),
  identification_number: z
    .string()
    .nonempty("Identification number is required"),
  phone: z.string(),
  dateOfBirth: z.string().nonempty("Date of birth is required"),
  username: z.string().nonempty("Username is required"),
  password: z.string().nonempty("Password is required"),
  email: z.string().nonempty("Email is required").email("Invalid email"),
});

const Ceoupdate = ({ css, data }) => {
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
      const request = await fetch(`http://localhost:3000/api/ceo/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.AUTHORIZATION_KEY,
        },
        body: JSON.stringify(values),
      });
      const response = await request.json();
      if (request.ok) {
        toast.success(response.message, {
          className: "toastSuccess",
        });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative group">
          <Edit size={18} />
          <span className={css}>Edit</span>
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
                              `${v.label} , Already Exist`)}
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

export default Ceoupdate;
