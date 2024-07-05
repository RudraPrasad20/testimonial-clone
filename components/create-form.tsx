"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRecoilState } from "recoil";
import {
  cardTitleState,
  cardDescriptionState,
  cardLinkNameState,
} from "@/hooks/cardAtom";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  spacename: z.string().min(2, {
    message: "Link name must be at least 2 characters.",
  }),
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
});

const CreateForm = () => {
  const [cardTitle, setCardTitle] = useRecoilState(cardTitleState);
  const [cardDescription, setCardDescription] =
    useRecoilState(cardDescriptionState);
  const [cardLinkName, setCardLinkName] = useRecoilState(cardLinkNameState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      spacename: "",
      title: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await axios.post("/api/create", values);
    console.log(values);
    return res.data;
  }

  const handleSpacenameChange = (value: string) => {
    const newValue = value.replace(/\s+/g, "-");
    setCardLinkName(newValue || "default-link");
  };

  const handleTitleChange = (value: string) => {
    setCardTitle(value || "Default Title");
  };

  const handleDescriptionChange = (value: string) => {
    setCardDescription(value || "Default Description");
  };

  return (
    <div className="  w-1/2 ">
      <div className=" flex flex-col justify-center align-middle items-center mt-8 px-5">
      <h1 className=" font-bold text-4xl">Create a new Space</h1>
      <p>it will generate a dedicated page for collecting testimonials.</p>
      </div>
      <div className=" ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="spacename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      className="border-2 border-black"
                      onChange={(e) => {
                        field.onChange(e);
                        handleSpacenameChange(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      className="border-2 border-black"
                      onChange={(e) => {
                        field.onChange(e);
                        handleTitleChange(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="shadcn"
                      {...field}
                      className="border-2 border-black"
                      onChange={(e) => {
                        field.onChange(e);
                        handleDescriptionChange(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateForm;
