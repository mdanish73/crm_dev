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
import { Eye, User } from "lucide-react";
import Ceoform from "../Forms/updateforms/Ceoform";


const Ceoupdateform = ({ data }) => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [duplicate, setDuplicate] = useState(null);
  const [image, setImage] = useState(null);
  const [uri, setUri] = useState("");
  const [clduri, setClduri] = useState(data.CeoImage || "");
  const id = data._id;

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "CRMDevelopment");
      formData.append("cloud_name", "dzeveeijn");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dzeveeijn/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  const toggleBtn = () => {
    setEdit(!edit);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="pl-2 hover:bg-slate-800 transition-colors w-full py-1.5 rounded-sm">
          <div className="flex items-center gap-1.5 text-primaryText">
            <Eye size={16} />
            <span className="text-sm font-normal">View</span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] border-[0.5px] mt-7">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        {edit && (
          <div className="w-full">
            <div
              onClick={() => {
                document.querySelector(".input-field").click();
              }}
              className="border w-40 h-40 rounded-full mx-auto bg-gray-300"
            >
              <div className="w-full h-full flex items-center justify-center">
                <input
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    const uri = URL.createObjectURL(e.target.files[0]);
                    setUri(uri);
                  }}
                  className="input-field"
                  hidden={true}
                  type="file"
                />
                {!uri && !data.CeoImage && <User color="white" size={80} />}
                {(uri || data.CeoImage) && (
                  <img
                    className="w-full h-full rounded-full"
                    src={uri || data.CeoImage}
                    alt="Profile"
                  />
                )}
              </div>
            </div>
            {data.CeoImage && (
              <p className="text-white text-center">
                Tap on it to change image
              </p>
            )}
          </div>
        )}
        <Ceoform
          Data={data}
          Edit={edit}
          Duplicate={duplicate}
          state={clduri}
          setterState={setClduri}
          setterDuplicate={setDuplicate}
          setterLoading={setLoading}
          Loading={loading}
          imagefunc={uploadImage}
          Image={image}
          ID={id}
          toggle={toggleBtn}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Ceoupdateform;
