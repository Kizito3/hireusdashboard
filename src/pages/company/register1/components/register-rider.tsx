import { Process } from "./process";
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
import { useForm } from "react-hook-form";
import { RegisterRiderSchema } from "@/library/schema/register-riders-schema";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { RiderRegister } from "../../register";


export const RegisterRider = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showNewComponent, setShowNewComponent] = useState(false);

  const form = useForm({
    resolver: zodResolver(RegisterRiderSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      next_of_kin: "",
      next_of_kin_phone: "",
    },
    mode: "onChange",
  });

  const handleNextClick = () => {
    form.trigger().then((isValid) => {
      if (isValid) {
        setCurrentStep((prevStep) => prevStep + 1);
        setShowNewComponent(true); // Show new component on successful validation
      }
    });
  };

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="font-body w-full">
      <div className="mb-10 flex flex-col justify-start items-start w-full">
        {showNewComponent ? (
          <h2 className="sm:text-4xl text-3xl font-bold text-tertiary capitalize sm:whitespace-nowrap">
            Verification Details
          </h2>
        ) : (
          <h2 className="sm:text-4xl text-3xl font-bold text-tertiary capitalize sm:whitespace-nowrap">
            Registration
          </h2>
        )}
        <p className="font-bold text-[#5e6769] mt-2">
          Kindly go through these process and fill in the correct detail
        </p>
      </div>
      <div className="flex justify-start items-start w-full">
        <Process currentStep={currentStep} />
      </div>
      {showNewComponent ? (
        <RiderRegister />
      ) : (
        <div className="flex justify-start items-start mt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem className="mb-8">
                    <Label className="text-black font-bold text-xl">
                      Fullname
                    </Label>
                    <FormControl>
                      <Input
                        placeholder="John Victor"
                        {...field}
                        type="text"
                        className="sm:!w-[634px] outline-black h-16 placeholder:text-gray-500 font-bold "
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
                    <Label className="text-black font-bold text-xl">
                      Phone
                    </Label>
                    <FormControl>
                      <Input
                        placeholder="08164361932"
                        {...field}
                        type="text"
                        className="sm:!w-[634px] outline-black h-16 placeholder:text-gray-500 font-bold"
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
                    <Label className="text-black font-bold text-xl">
                      Email
                    </Label>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        type="text"
                        className="sm:!w-[634px] outline-black h-16 placeholder:text-gray-500 font-bold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="next_of_kin"
                render={({ field }) => (
                  <FormItem className="mb-8">
                    <Label className="text-black font-bold text-xl">
                      Next of kin
                    </Label>
                    <FormControl>
                      <Input
                        placeholder="Next of kin"
                        {...field}
                        type="text"
                        className="sm:!w-[634px] outline-black h-16 placeholder:text-gray-500 font-bold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="next_of_kin_phone"
                render={({ field }) => (
                  <FormItem className="mb-8">
                    <Label className="text-black font-bold text-xl">
                      Next of kin phone
                    </Label>
                    <FormControl>
                      <Input
                        placeholder="Next of kin phone"
                        {...field}
                        type="text"
                        className="sm:!w-[634px] outline-black h-16 placeholder:text-gray-500 font-bold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                onClick={handleNextClick}
                type="button"
                className="flex justify-center items-center sm:!w-[634px] w-full text-xl h-14 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border"
              >
                Continue
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
};
