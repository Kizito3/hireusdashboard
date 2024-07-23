import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PopUp() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] font-body">
        <DialogHeader>
          <DialogTitle>Add a company</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4 place-content-center">
          <div className="justify-start gap-4 flex-col flex">
            <Label htmlFor="name" className="text-left text-black font-semibold">
              Company Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
            />
          </div>
          <div className=" justify-start gap-4 flex-col flex">
            <Label htmlFor="name" className="text-left">
              Email
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="justify-start gap-4 flex-col flex">
            <Label htmlFor="name" className="text-left">
              Phone Number
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="justify-start gap-4 flex-col flex">
            <Label htmlFor="username" className="text-left">
              Address
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="justify-start gap-4 flex-col flex">
            <Label htmlFor="username" className="text-left">
              Country
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="justify-start gap-4 flex-col flex">
            <Label htmlFor="username" className="text-left">
              City
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="justify-start gap-4 flex-col flex">
            <Label htmlFor="username" className="text-left">
              Postal Code
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="justify-start gap-4 flex-col flex">
            <Label htmlFor="username" className="text-left">
              State
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-tertiary">
            Register company
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
