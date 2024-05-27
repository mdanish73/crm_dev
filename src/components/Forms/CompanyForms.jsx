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
import { Button } from '../ui/button';
import { useForm } from "react-hook-form";
import { EachElement } from '../others/Each';
import { Input } from '../ui/input';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";


//schema
// const schema = z.object({
//     companyname: z.string().nonempty("Username is required"),
//     contact: z.string().nonempty("Password is required"),
//     email: z.string().nonempty("Password is required"),
//     identificationNumber: z.string().nonempty("Password is required"),
//     industry: z.string().nonempty("Password is required"),
//     subIndustry: z.string().nonempty("Password is required"),
//     country: z.string().nonempty("Password is required"),
//   });

const CompanyForms = () => {

    // const form = useForm({
        // resolver: zodResolver(schema),
        // defaultValues: {
        //   companyname: "",
        //   contact: "",
        //   email: "",
        //   identificationNumber: "",
        //   industry: "",
        //   subIndustry: "",
        //   country: "",
        // },
    //   });


    // const inputs = [
    //     { label:"Company Name", name: "companyname", type: "text", placeholder: "Company Name" },
    //     { label:"Contact Number", name: "contact", type: "tel", placeholder: "Contact Number" },
    //     { label:"Email", name: "email", type: "email", placeholder: "Email" },
    //     { label:"Identification Number", name: "identificationNumber", type: "text", placeholder: "Identification Number" },
    //     { label:"Industry", name: "industry", type: "text", placeholder: "Industry" },
    //     { label:"Sub-Industry", name: "subIndustry", type: "password", placeholder: "Sub-Industry" },
    //     { label:"Country", name: "country", type: "password", placeholder: "Country" },
    //   ];
  return (
    <>
      {/* <Form {...form}>
        <form
        //   onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col space-y-4 w-[250px] text-white text-xs"
        >
          <EachElement
            of={inputs}
            render={(v, i) => (
              <FormField
                // control={control}
                name={v.name}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                        <FormLabel htmlFor={v.name}>{v.label}</FormLabel>
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
      </Form> */}
      Matti
    </>
  )
}

export default CompanyForms
