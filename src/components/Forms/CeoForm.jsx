'use client'
import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Button } from '../ui/button';
import { useForm } from "react-hook-form";
import { EachElement } from '../others/Each';
import { Input } from '../ui/input';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";


// schema
const schema = z.object({
    companyname: z.string().nonempty(""),
    contact: z.string().nonempty(""),
    email: z.string().nonempty(""),
    identificationNumber: z.string().nonempty(""),
    industry: z.string().nonempty(""),
    subIndustry: z.string().nonempty(""),
    country: z.string().nonempty(""),
  });

const CompanyForms = ({ onBack }) => {

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          companyname: "",
          contact: "",
          email: "",
          identificationNumber: "",
          industry: "",
          subIndustry: "",
          country: "",
        },
      });


      const { handleSubmit, control} = form;
      const router = useRouter();
    
      //axios
      const formSubmit = async (data) => {
        console.log("Form submitted with data:", data);
        try {
          const response = await axios.post("/api/company", {
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
        { label:"Full Name", name: "fullName", type: "text", placeholder: "Full Name" },
        { label:"Identification Number", name: "identificationNumber", type: "text", placeholder: "Identification Number" },
        { label:"Contact Number", name: "phone", type: "tel", placeholder: "Contact Number" },
        { label:"Date Of Birth", name: "dateOfBirth", type: "date" },
        { label:"User Name", name: "username", type: "text", placeholder: "User Name" },
        { label:"Password", name: "password", type: "password", placeholder: "Password" },
        { label:"Access Level", name: "accessLevel", type: "select", placeholder: "Access Level" },
      ];
      console.log(inputs)
  return (
    <>  
            <div className='mb-6'>
                <h1 className='text-2xl flex mb-2 gap-2'>
                <span className="text-secondaryHeading">CEO</span>
                Information 
                </h1>
                <p>
                This form enables users to input and submit comprehensive ceo data.
                </p>
                <p >
                It collects essential information about CEO.
                </p>
            </div>
            <Form {...form}>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className=" text-xs"
        >
          <div className="grid grid-cols-2 gap-5">
            <EachElement
              of={inputs}
              render={(v, i) => {
                if (v.type === "select") {
                  return (
                    <FormField
                      key={i}
                      control={control}
                      name={v.name}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{v.label}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className=" w-full text-xs border-none h-9 placeholder:text-secondaryText bg-secondaryAccent rounded-[5px]">
                                <SelectValue
                                  placeholder={v.placeholder}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-secondaryAccent text-secondaryText rounded-[5px]">
                              <SelectItem value="option1">1</SelectItem>
                              <SelectItem value="option2">2</SelectItem>
                              <SelectItem value="option3">3</SelectItem>
                              <SelectItem value="option3">4</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                } else {
                  return (
                    <FormField
                      key={i}
                      control={control}
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                }
              }}
            />
          </div>
          <div className="text-right mt-10">
            <Button
            type="button"
            className="bg-secondary_bg "
            onClick={onBack}
          >
            Previous
          </Button>
            <Button
              type="submit"
              className="bg-secondaryHeading  "
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default CompanyForms



<<<<<<< HEAD

=======
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
>>>>>>> 2cff8d8260b948d65ac730c5695fde23d70c6851

