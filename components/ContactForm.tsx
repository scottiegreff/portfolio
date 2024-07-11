"use client";

import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import postEmail from "@/actions/postEmail";
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

const formSchema = z.object({
  email: z.string().email(),
});

type CustomerFormValues = z.infer<typeof formSchema>;

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);

  const title = "Create customer";
  const description = "Add a new customer";
  const toastMessage = "Thank you, Scott will be in contact with you shortly!";
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
      await postEmail(data);
      setUser(true);
      setTimeout(() => {
        toast.success(toastMessage);
      }, 3000);
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {user ? (
        <div className="ms-3 text-red-700 font-semibold">{toastMessage}</div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 text-red-700 ms-3"
          >
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        className="bg-white w-60 md:w-72 text-red-700"
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
              {loading ? loadingAction : action}
            </Button>
          </form>
        </Form>
      )}
      <p className="ms-3 my-3 text-red-700">scottiegreff@gmail.com</p>
    </>
  );
};
