'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button } from '../ui/button';
import { LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';

const schema = z.object({
  country: z.array(
    z.object({
      countryName: z.string().nonempty('Country Name is required'),
      countryCode: z.string().nonempty('Country Code is required'),
    })
  ).min(1, 'At least one country is required'),
});

const Countries = () => {
  const [loading, setLoading] = useState(false);
  const [duplicate, setDuplicate] = useState(null);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      country: [{ countryName: '', countryCode: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'country',
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    setDuplicate(null);

    try {
      const res = await fetch('/api/countries/names', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: process.env.AUTHORIZATION_KEY,
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        if (data.field) {
          const field = data.field;
          setDuplicate(field);
          toast.error(
            `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`,
            {
              className: 'toastError',
            }
          );
        } else {
          toast.error(data.message, {
            className: 'toastError',
          });
        }
      } else {
        toast.success(data.message, {
          className: 'toastSuccess',
        });
        form.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error while submitting the form.', {
        className: 'toastError',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-secondaryHeading text-secondaryText hover:text-secondary_bg">
          Add Country
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl flex-1 text-left gap-2">
            <span className="text-secondaryHeading">Country</span> Data
          </DialogTitle>
          <DialogDescription>
            <p>This form enables user to submit country data.</p>
            <p>It collects essential information about country.</p>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-5">
              {fields.map((item, index) => (
                <div key={item.id}>
                  <FormField
                    control={form.control}
                    name={`country.${index}.countryName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor={`country.${index}.countryName`}>
                          Country Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="text-white w-full text-xs border-none h-9 placeholder:text-secondaryText bg-secondaryAccent rounded-[5px]"
                            placeholder="Country Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`country.${index}.countryCode`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor={`country.${index}.countryCode`}>
                          Country Code
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="text-white w-full text-xs border-none h-9 placeholder:text-secondaryText bg-secondaryAccent rounded-[5px]"
                            placeholder="Country Code"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className='text-right'>
                    <Button
                        type="button"
                        onClick={() => remove(index)}
                        className=" bg-secondaryHeading text-secondaryText mt-3"
                    >
                        Remove
                    </Button>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                onClick={() => append({ countryName: '', countryCode: '' })}
                className="bg-secondaryHeading text-secondaryText w-full mt-5"
              >
                Add More
              </Button>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-secondaryHeading text-secondaryText w-full mt-4 py-5"
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

export default Countries;
