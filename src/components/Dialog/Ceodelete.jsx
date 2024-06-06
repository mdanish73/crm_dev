import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import { toast } from "sonner";

const Ceodelete = ({ Ceoid }) => {
  const [open, setOpen] = React.useState(false);

  async function deleteCeo(id) {
    try {
      const request = await fetch(`http://localhost:3000/api/ceo/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.AUTHORIZATION_KEY,
        },
      });
      const response = await request.json();
      if (request.ok) {
        toast.success(response.message, {
          className: "toastSuccess",
        });
        setOpen(false); // Close the dialog after successful deletion
      } else {
        toast.error(
          response.message || "An error occurred. Please try again.",
          {
            className: "toastError",
          }
        );
      }
    } catch (error) {
      console.log(error.message);
      toast.error("An error occurred. Please try again.", {
        className: "toastError",
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="pl-2 hover:bg-[#83B4FF] hover:text-black transition-colors w-full py-1.5 rounded-sm">
          <div className="flex items-center gap-1.5">
            <Trash size={16} />
            <span className="text-sm font-medium">Delete</span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[rgb(127,29,29)]">
        <DialogHeader>
          <DialogTitle>Dangerous Mode</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the CEO?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button
            className="text-white bg-red-600 hover:bg-red-950 transition-colors w-full py-2 flex items-center justify-center"
            onClick={() => {
              deleteCeo(Ceoid);
            }}
          >
            Yes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Ceodelete;
