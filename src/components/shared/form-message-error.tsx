import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const FormMessageError = ({ message }: FormMessageProp) => {
  if (!message) return null;

  return (
    <div
      className={
        "p-3 rounded-md flex items-start gap-x-2 text-sm w-full bg-destructive/15 text-destructive"
      }
    >
      <ExclamationTriangleIcon className="h-6 w-6" />
      <p>{message}</p>
    </div>
  );
};
