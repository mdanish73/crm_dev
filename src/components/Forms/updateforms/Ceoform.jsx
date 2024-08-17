import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EachElement } from "@/components/others/Each";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

// Define the form validation schema using zod
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

const Ceoform = ({
  Data,
  Edit,
  Duplicate,
  state,
  setterState,
  setterDuplicate,
  setterLoading,
  imagefunc,
  Image,
  ID,
  Loading,
  toggle,
  Inputs,
}) => {
  const updateCeo = async (values) => {
    setterLoading(true);
    try {
      let imageUri = state;
      if (Image && !imageUri) {
        imageUri = await imagefunc();
        setterState(imageUri);
      }

      const response = await fetch(`${process.env.LOCAL_HOST}api/ceo/${ID}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.AUTHORIZATION_KEY,
        },
        body: JSON.stringify({
          ...values,
          CeoImage: imageUri || Data.CeoImage,
        }),
      });

      const responseData = await response.json();
      if (response.ok) {
        toast.success(responseData.message, {
          className: "toastSuccess",
        });
      } else {
        const field = responseData.field;
        setterDuplicate(field);
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
      setterLoading(false);
    }
  };
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: Data?.fullName || "",
      identification_number: Data?.identification_number || "",
      phone: Data?.phone || "",
      dateOfBirth: Data?.dateOfBirth || "",
      username: Data?.username || "",
      password: Data?.password || "",
      email: Data?.email || "",
    },
  });

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(updateCeo)} className="my-5">
          <div className="grid grid-cols-2 gap-5">
            <EachElement
              of={Inputs}
              render={(v, i) => (
                <FormField
                  key={i}
                  control={form.control}
                  name={v.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white" htmlFor={v.name}>
                        {v.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-secondaryText w-full text-xs border-none h-9 placeholder:text-secondaryText bg-secondaryAccent rounded-[5px]"
                          placeholder={v.placeholder}
                          type={v.type}
                          disabled={!Edit}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors[v.name]?.message ||
                          (Duplicate === v.name &&
                            `${v.label} already exists.`)}
                      </FormMessage>
                    </FormItem>
                  )}
                />
              )}
            />
          </div>
          <div className=" flex items-center justify-end mt-5">
            {Edit && (
              <Button
                variant="secondary"
                className="py-5 bg-orange-500 w-[20%] text-white rounded-[50px]"
                type="submit"
              >
                {Loading ? (
                  <>
                    <LoaderCircle className="animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            )}
            <button
              type="button"
              className="bg-slate-700 py-2 px-8 rounded-[50px] text-white"
              onClick={() => {
                toggle();
              }}
            >
              {Edit ? "Cancel" : "Edit"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Ceoform;
