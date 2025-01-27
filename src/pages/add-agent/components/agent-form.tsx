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
import { AgentSchema } from "@/library/schema/agent-schema";
// import { SelectState } from "./SelectState";

export default function AgentForm() {
  const form = useForm<z.infer<typeof AgentSchema>>({
    resolver: zodResolver(AgentSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      agent_address: "",
      state: "",
    },
    mode: "onChange",
  });
  const onSubmit = (values: z.infer<typeof AgentSchema>) => {
    console.log(values);
    form.reset();
  };
  return (
    <div>
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
                name="first_name"
                render={({ field }) => (
                  <FormItem className="mb-8">
                    <Label className="text-[#424242] font-bold md:text-xl text-md">
                      FirstName
                    </Label>
                    <FormControl>
                      <Input
                        placeholder="John"
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
                name="last_name"
                render={({ field }) => (
                  <FormItem className="mb-8">
                    <Label className="text-[#424242] font-bold md:text-xl text-md">
                      LastName
                    </Label>
                    <FormControl>
                      <Input
                        placeholder="Victor"
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
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-8">
                    <Label className="text-[#424242] font-bold md:text-xl text-md">
                      Email
                    </Label>
                    <FormControl>
                      <Input
                        placeholder="johndoe@gmail.com"
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
                        placeholder="08164361932"
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
                        placeholder="Imo state"
                        {...field}
                        type="text"
                        className="sm:!w-[634px] outline-black md:h-16 h-10 placeholder:text-gray-500 font-bold"
                      />
                      {/* <SelectState /> */}
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
                      Number
                    </Label>
                    <FormControl>
                      <Input
                        placeholder="09056778352"
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
                name="agent_address"
                render={({ field }) => (
                  <FormItem className="mb-8">
                    <Label className="text-[#424242] font-bold md:text-xl text-md">
                      Address
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

              <Button
                type="submit"
                className="flex justify-center items-center sm:!w-[634px] w-full text-xl md:h-14 h-10 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
