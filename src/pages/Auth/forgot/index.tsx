import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ToastContainer, Slide } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useChangePassword } from "./lib/useChangePassword";

export const Forgot = () => {
  const { form, isLoading, onSubmit } = useChangePassword();

  return (
    <div className="px-14 font-body flex justify-center flex-col items-center">
      <div className="mb-10">
        <h2 className="sm:text-5xl text-3xl font-bold text-tertiary capitalize">
          Reset Your password
        </h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    {...field}
                    type="email"
                    className="sm:!w-[534px] outline-black h-16 placeholder:text-black font-bold placeholder:text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="flex justify-center items-center sm:!w-[534px] w-full text-xl h-14 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border"
          >
            {isLoading ? (
              <span className="flex gap-2 items-center">
                <Loader2 className="animate-spin" />
                Please wait...
              </span>
            ) : (
              "Recover Password"
            )}
          </Button>
        </form>
      </Form>
      <ToastContainer
        position="bottom-right"
        className="font-body font-bold"
        stacked
        transition={Slide}
      />
    </div>
  );
};
