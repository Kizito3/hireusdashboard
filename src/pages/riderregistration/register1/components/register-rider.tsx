// import { Process } from "./process";
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


export const RegisterRider = () => {
  // const [currentStep, setCurrentStep] = useState<number>(0);
  // const [showNewComponent, setShowNewComponent] = useState<boolean>(false);
  // const [isVerificationDetails, setIsVerificationDetails] = useState<boolean>(false)

  const form = useForm({
    resolver: zodResolver(RegisterRiderSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      guarantor: "",
      guarantor_phone: "",
      guarantor_address: ""
    },
    mode: "onChange",
  });

  const handleNextClick = () => {
    form.trigger().then((isValid) => {
      console.log("Validation status:", isValid);
      console.log("Form errors:", form.formState.errors);
      // if (isValid) {
      //   setCurrentStep((prevStep) => prevStep + 1);
      //   setShowNewComponent(true);
      //   setIsVerificationDetails(true);
      // }
    });

  };

  const onSubmit = () => {
    console.log("submitted");
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
      {/* <div className="flex justify-start items-start w-full">
        <Process currentStep={currentStep} />
      </div> */}

      <div className="flex justify-start items-start mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold text-xl">
                    FirstName
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="John"
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
              name="last_name"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold text-xl">
                    LastName
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="Victor"
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
                  <Label className="text-[#424242] font-bold text-xl">
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
                  <Label className="text-[#424242] font-bold text-xl">
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
              name="guarantor"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold text-xl">
                    Guarantor's Name
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="Abiola Dami"
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
              name="guarantor_phone"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold text-xl">
                    Guarantor's Number
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="09056778352"
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
              name="guarantor_address"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <Label className="text-[#424242] font-bold text-xl">
                    Guarantor's Address
                  </Label>
                  <FormControl>
                    <Input
                      placeholder="no 15 law nwankwo street"
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
    </div>
  );
};
