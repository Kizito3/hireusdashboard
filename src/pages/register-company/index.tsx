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
import { CompanySchema } from "@/library/schema/register-company";

export const RegisterCompany = () => {
  const form = useForm<z.infer<typeof CompanySchema>>({
    resolver: zodResolver(CompanySchema),
    defaultValues: {
      company_name: "",
      address_text: "",
      country: "",
      email: "",
      state: "",
      city: "",
      postal_code: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof CompanySchema>) => {
    console.log("submitted", values);
    form.reset();
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
              name="company_name"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    Company Name
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
              name="address_text"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    Address
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="Victor@gmail.com"
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
              name="country"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    Country
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="Country of residence"
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
                      placeholder="Email"
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
              name="city"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    City
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="Ejigbo"
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
              name="state"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    State
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="Lagos State"
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
              name="postal_code"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold md:text-xl text-md">
                    Postal Code
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="no 15 law nwankwo street"
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
              Continue
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
