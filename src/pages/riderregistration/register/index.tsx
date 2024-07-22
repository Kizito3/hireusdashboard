// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useForm } from "react-hook-form";
// import { RegisterRiderSchema2 } from "@/library/schema/register-riders-schema";
// import { Label } from "@radix-ui/react-dropdown-menu";
// import { useRef, useState } from "react";
// // import { Process } from "../register1/components/process";
// import { FaRegImage } from "react-icons/fa6";
// // import { SelectOption } from "@/components/Select";

// export const RiderRegister = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [showNewComponent, setShowNewComponent] = useState(false);
//   const fileRef = useRef<HTMLInputElement | null>(null)
//   const form = useForm({
//     resolver: zodResolver(RegisterRiderSchema2),
//     defaultValues: {
//       file: [],
//       vehicle_type: "",
//       bike_brand: "",
//       email: "",
//       plate_number: "",
//       guarantor: "",
//       guarantor_phone: "",
//       previous_workplace: "",
//     },
//     mode: "onChange",
//   });

//   const handleNextClick = () => {
//     form.trigger().then((isValid) => {
//       if (isValid) {
//         setCurrentStep((prevStep) => prevStep + 1);
//         setShowNewComponent(true);
//       }
//     });
//   };

//   const onSubmit = () => {
//     console.log("submitted");
//   };
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(e.target.files[0]);
//   };
// if(fileRef.current){
//   fileRef.current.setAttribute("hidden","true")
//   fileRef.current.setAttribute("accept",".pdf .doc .docx")
// }
//   return (
//     <section className="font-body w-full">
//       <div className="mb-10 mt-10 flex flex-col justify-start items-start w-full">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)}>
//             <FormField
//               control={form.control}
//               name="file"
//               render={({ field }) => (
//                 <FormItem className="mb-8">
//                   <Label className="text-black font-bold text-xl">
//                     Upload a Picture of your Driver’s License
//                   </Label>
//                   <FormControl>
//                     <label
//                       htmlFor="file"
//                       className="sm:!w-[634px] outline-black h-32 text-xl flex items-center justify-center gap-2 cursor-pointer text-black p-4 font-bold bg-[#ebe6f0]"
//                     >
//                       <input
//                         {...field}
//                         id="file"
//                         ref={fileRef}
//                         accept=".pdf .doc .docx"
//                         hidden
//                         type="file"
//                         onChange={handleFileChange}
//                       />
//                       <p>Click to choose file</p>
//                       <FaRegImage size={30} className="text-[#9279c4]" />
//                     </label>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
           

//             <FormField
//               control={form.control}
//               name="bike_brand"
//               render={({ field }) => (
//                 <FormItem className="mb-8">
//                   <Label className="text-[#424242] font-bold text-xl">
//                     Vehicle Brand
//                   </Label>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       type="text"
//                       className="sm:!w-[634px] outline-black h-10 text-xl text-black font-bold"
//                       placeholder="e.g  Power Bike "
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem className="mb-8">
//                   <Label className="text-[#424242] font-bold text-xl">
//                     Email
//                   </Label>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       type="email"
//                       className="sm:!w-[634px] outline-black h-10 text-xl text-black font-bold"
//                       placeholder="victorjohn@gmail.com"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="plate_number"
//               render={({ field }) => (
//                 <FormItem className="mb-8">
//                   <Label className="text-[#424242] font-bold text-xl">
//                     Plate Number
//                   </Label>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       type="text"
//                       className="sm:!w-[634px] outline-black h-10 text-xl text-black font-bold"
//                       placeholder="23569000-272"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="guarantor"
//               render={({ field }) => (
//                 <FormItem className="mb-8">
//                   <Label className="text-[#424242] font-bold text-xl">
//                     Guarantor Name 1
//                   </Label>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       type="text"
//                       className="sm:!w-[634px] outline-black h-10 text-xl text-black font-bold"
//                       placeholder="Abiola Dami"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="guarantor_phone"
//               render={({ field }) => (
//                 <FormItem className="mb-8">
//                   <Label className="text-[#424242] font-bold text-xl">
//                     Guarantor Name 1 Phone No.
//                   </Label>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       type="text"
//                       className="sm:!w-[634px] outline-black h-10 text-xl text-black font-bold"
//                       placeholder="091768935639"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="previous_workplace"
//               render={({ field }) => (
//                 <FormItem className="mb-8">
//                   <Label className="text-[#424242] font-bold text-xl">
//                     Previous Workplace
//                   </Label>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       type="text"
//                       className="sm:!w-[634px] outline-black h-10 text-xl text-black font-bold"
//                       placeholder="DCI Logistics"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button
//               onClick={handleNextClick}
//               type="button"
//               className="flex justify-center items-center sm:!w-[634px] w-full text-xl h-14 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border"
//             >
//               Continue
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </section>
//   );
// };
