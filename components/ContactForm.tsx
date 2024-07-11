"use client";

import * as z from "zod";
// import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import postEmail from "@/actions/postEmail";
// import { useParams, useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
// import { Heading } from "@/components/ui/heading";

const formSchema = z.object({
  email: z.string().email(),
});

type CustomerFormValues = z.infer<typeof formSchema>;

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const title = "Create customer";
  const description = "Add a new customer";
  const toastMessage = "Customer created.";
  const action = "Connect";
  const loadingAction = "Connecting";

  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: CustomerFormValues) => {
    setLoading(true);
    try {
      console.log("DATA??????????????", data);
      const res = postEmail(data)
     
      console.log("RES??????????????", res)

      toast.success("Nice to connect.", { icon: "👋" });
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      /> */}
      {/* <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
  
      </div> */}

      {/* CUST FIRST NAME */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 text-red-700 ms-3"
        >
          <div className="">
            {/* EMAIL */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      className="bg-white w-60 md:w-72"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={loading}
            className="ml-auto bg-red-700 drop-shadow-xl"
            type="submit"
          >
            {{ loading } ? action : loadingAction}
          </Button>
        </form>
      </Form>
      <p className="ms-3 my-3 text-red-700">scottiegreff@gmail.com</p>
    </>
  );
};
