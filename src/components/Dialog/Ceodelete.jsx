"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoaderCircle, Trash } from "lucide-react";
import { toast } from "sonner";

const Ceodelete = ({ Ceoid }) => {
  const [isLoading, setIsLoading] = useState(false);
  async function deleteCeo(id) {
    try {
      setIsLoading(true);
      const request = await fetch(`${process.env.LOCAL_HOST}api/ceo/${id}`, {
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
      } else {
        toast.error(response.message, {
          className: "toastError",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error("An error occurred. Please try again.", {
        className: "toastError",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="pl-2 hover:bg-slate-800 transition-colors w-full py-1.5 rounded-sm">
          <div className="flex items-center gap-1.5 text-primaryText">
            <Trash size={16} />
            <span className="text-sm font-normal ">Delete</span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-[0.5px] border-red-800">
        <DialogHeader>
          <DialogTitle>Dangerous Mode</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the CEO?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button
            type={"button"}
            className="text-red-700 bg-[rgb(27,22,29)] hover:bg-red-800 hover:text-white font-medium transition-colors w-full py-2 flex items-center justify-center"
            onClick={() => {
              deleteCeo(Ceoid);
            }}
          >
            {isLoading ? (
              <>
                <LoaderCircle className="animate-spin" />
                Please wait
              </>
            ) : (
              "OK"
            )}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Ceodelete;
