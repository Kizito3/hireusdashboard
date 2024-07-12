import { CheckCircledIcon } from "@radix-ui/react-icons";

export const FormMessageSuccess = ({ message }: FormMessageProp) => {
  if (!message) return null;

  return (
    <div
      className={
        "p-3 rounded-md flex items-start gap-x-2 text-sm w-full bg-emerald-500/15 text-emerald-500"
      }
    >
      <CheckCircledIcon className="h-6 w-6" />
      <p>{message}</p>
    </div>
  );
};
