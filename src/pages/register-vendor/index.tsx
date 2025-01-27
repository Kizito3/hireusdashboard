// import { Process } from "./process";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Label } from "@radix-ui/react-dropdown-menu";
import { VendorSchema } from "@/library/schema/vendor-schema";

export const RegisterVendor = () => {
  const form = useForm<z.infer<typeof VendorSchema>>({
    resolver: zodResolver(VendorSchema),
    defaultValues: {
      business_name: "",
      business_category: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof VendorSchema>) => {
    console.log("submitted", values);
  };

  return (
    <div className="font-body w-full">
      <div className="mb-10 flex flex-col justify-start items-start w-full">
        <h2 className="sm:text-4xl text-3xl font-bold text-tertiary capitalize sm:whitespace-nowrap">
          Registration
        </h2>
        <p className="font-bold text-[#5e6769] mt-2">
          Kindly go through these process and fill in the correct detail
        </p>
      </div>

      <div className="flex justify-start items-start mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="business_name"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    Business name
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="John Logistics"
                      {...field}
                      type="text"
                      className="sm:!w-[634px] outline-black md:h-16 h-10 placeholder:text-gray-500 font-bold "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="business_category"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    Business category
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="logistics"
                      {...field}
                      type="text"
                      className="sm:!w-[634px] outline-black md:h-16 h-10 placeholder:text-gray-500 font-bold "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    Firstname
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="Victor"
                      {...field}
                      type="text"
                      className="sm:!w-[634px] outline-black md:h-16 h-10 placeholder:text-gray-500 font-bold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    Lastname
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="Prince"
                      {...field}
                      type="text"
                      className="sm:!w-[634px] outline-black md:h-16 h-10 placeholder:text-gray-500 font-bold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    Email
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="Victor@gmail.com"
                      {...field}
                      type="email"
                      className="sm:!w-[634px] outline-black md:h-16 h-10 placeholder:text-gray-500 font-bold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    Phone
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="0908785643"
                      {...field}
                      type="text"
                      className="sm:!w-[634px] outline-black md:h-16 h-10 placeholder:text-gray-500 font-bold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    Password
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="*********"
                      {...field}
                      type="password"
                      className="sm:!w-[634px] outline-black md:h-16 h-10 placeholder:text-gray-500 font-bold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="flex justify-center items-center sm:!w-[634px] w-full md:text-xl text-md md:h-14 h-10 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
