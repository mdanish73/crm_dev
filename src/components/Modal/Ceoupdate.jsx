import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { Edit } from "lucide-react";
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
  email: z.string().nonempty("Email is required"),
});

const Ceoupdate = ({ css }) => {
  const [loading, setLoading] = useState(false);
  const [duplicate, setDuplicate] = useState(null);
  function update() {}

  async function onSubmit() {
    console.log("Hello");
  }
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

  return (
    <>
      <Dialog>
        <DialogTrigger className={css}>
          <Edit size={18} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
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
                              {duplicate?.[v.name]?.message ||
                                (duplicate === v.name &&
                                  `${v.label} , Already Exist`)}
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
                    className="bg-secondaryHeading text-secondaryText w-auto mt-10 py-5"
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
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Ceoupdate;
