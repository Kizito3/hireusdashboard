import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { RegisterSchema } from "@/library/schema/register-schema";

export const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
        firstname: "",
        lastname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    console.log("submitted");
  };
  return (
    <div className="px-14 font-body flex justify-center flex-col items-center">
      <div className="mb-10">
        <h2 className="sm:text-5xl text-3xl font-bold text-tertiary capitalize">
          Create Account
        </h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    type="text"
                    className="sm:!w-[534px] outline-black h-16 placeholder:text-black font-bold placeholder:text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormControl>
                  <Input
                    placeholder="Last Name"
                    {...field}
                    type="text"
                    className="sm:!w-[534px] outline-black h-16 placeholder:text-black font-bold placeholder:text-xl"
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
                <FormControl>
                  <Input
                    placeholder="Email address"
                    {...field}
                    type="email"
                    className="sm:!w-[534px] outline-black h-16 placeholder:text-black font-bold placeholder:text-xl"
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
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    {...field}
                    type="password"
                    className="sm:!w-[534px] outline-black h-16 placeholder:text-black font-bold placeholder:text-xl"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mb-8 flex items-center gap-2 justify-end">
            <div>
              <p className="font-bold">Already have an account?</p>
            </div>
            <div>
              <Link to="/" className="font-bold text-[#f7931e]">
                Login
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 font-bold mb-8">
            <Checkbox />{" "}
            <p className="mt-6">
              By creating an account, you agree to our{" "}
              <span className="text-[#8f42db]">Terms of Service</span> <br />{" "}
              and <span className="text-[#8f42db]">Privacy Policy</span>
            </p>
          </div>
          <Button
            type="submit"
            className="flex justify-center items-center sm:!w-[534px] w-full text-xl h-14 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border mb-8"
          >
            Sign up
          </Button>
        </form>
      </Form>
    </div>
  );
};
