"use client";

import { useState } from "react";
import { getLocalStorage } from "@/hooks/useLocalStorage";
import {
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Image as Icon, Loader, Upload, X } from "lucide-react";
import { sanity } from "@/db/sanity";
import Image from "next/image";
import { createPost } from "@/lib/requests";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  content: z.string().max(300),
  image: z.string(),
});

export default function PostForm() {
  const [withImage, setWithImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState<any | null>(null);
  const auth = getLocalStorage();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
      image: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await createPost({
        userId: auth as string,
        content: values?.content,
        image: imageAsset,
      }).then((res: any) => {
        form.reset();
        toast({
          title: res?.message,
        });
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong, try again",
        variant: "destructive",
      });
    }
  };
  const uploadImage = (e: any) => {
    const selectedFile = e.target.files[0];
    // uploading asset to sanity
    if (
      selectedFile.type === "image/png" ||
      selectedFile.type === "image/svg" ||
      selectedFile.type === "image/jpeg" ||
      selectedFile.type === "image/gif" ||
      selectedFile.type === "image/tiff"
    ) {
      setLoading(true);
      sanity.assets
        .upload("image", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((document: any) => {
          setImageAsset(document?.url);
          setLoading(false);
        })
        .catch((error: any) => {
          console.log("Upload failed:", error.message);
        });
    } else {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea {...field} className="resize-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-between items-center">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setWithImage(!withImage)}
          >
            {withImage ? <X size="20px" /> : <Icon size="20px" />}
          </Button>
        </div>
        {withImage && !imageAsset && !loading ? (
          <label className="relative w-full h-[200px] grid place-items-center border border-gray-900 rounded-[.5em]">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="w-0 h-0 absolute opacity-0">
                  <FormControl>
                    <Input type="file" onChange={uploadImage} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Upload size="15px" />
          </label>
        ) : loading ? (
          <div className="w-full h-[200px] grid place-items-center border border-gray-900 rounded-[.5em]">
            <Loader className="animate-spin" size="15px" />
          </div>
        ) : (
          imageAsset && (
            <div className="w-full h-[200px] relative grid place-items-center border border-gray-900 rounded-[.5em]">
              <Image
                src={imageAsset}
                alt="uploaded image"
                className="h-[180px] object-contain"
                width={500}
                height={500}
              />
              <Button
                variant="secondary"
                className="absolute top-2 right-2"
                onClick={() => setImageAsset(null)}
                size="sm"
              >
                <X size="20px" />
              </Button>
            </div>
          )
        )}
        <div className="w-full flex justify-end items-center">
          <Button type="submit">Post</Button>
        </div>
      </form>
    </Form>
  );
}
