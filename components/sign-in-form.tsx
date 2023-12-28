"use client";

import {
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogContent,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const formSchema = z.object({
  username: z.string().min(5).max(10),
  password: z.string().min(5).max(10),
});

const signUpSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  username: z.string().min(5).max(10),
  password: z.string().min(5).max(10),
});

export default function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSignIn = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  const onSignUp = (values: z.infer<typeof signUpSchema>) => {
    console.log(values);
  };
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-5">
      <p className={cn(pacifico.className, "text-5xl")}>cnnct</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSignIn)}
          className="w-full flex justify-center items-center flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl>
                  <Input {...field} placeholder="Username" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl>
                  <Input {...field} placeholder="Password" type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-1/2">
            Sign In
          </Button>
        </form>
      </Form>
      <Separator className="w-1/2" />
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <Button variant="secondary" className="w-1/2">
            Create Account
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogDescription>It&#39;s easy and quick</DialogDescription>
          </DialogHeader>
          <Form {...signUpForm}>
            <form
              onSubmit={signUpForm.handleSubmit(onSignUp)}
              className="flex flex-col gap-5"
            >
              <div className="w-full flex gap-5 items-center">
                <FormField
                  control={signUpForm.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormControl>
                        <Input {...field} placeholder="Firstname" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signUpForm.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormControl>
                        <Input {...field} placeholder="Lastname" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={signUpForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Username" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signUpForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Password"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Sign Up</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
