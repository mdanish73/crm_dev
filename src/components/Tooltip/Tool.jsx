import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { EditIcon, Eye, Trash } from "lucide-react";

const Tool = () => {
  const json = [
    {
      name: "Details",
      icon: <Eye size={18} />,
    },
    {
      name: "Edit",
      icon: <EditIcon size={18} />,
    },
    {
      name: "Delete",
      icon: <Trash size={18} color="red" />,
    },
  ];

  return (
    <TooltipProvider>
      <div className="flex gap-1 font-semibold cursor-pointer">
        {json.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <span className={item.icon === <Trash /> && "text-red-700"}>
                {item.icon}
              </span>
            </TooltipTrigger>
            <TooltipContent
              className={
                item.name === "Delete"
                  ? "bg-red-700 rounded-[50px] text-white py-2 px-5"
                  : "rounded-[50px] bg-[rgb(27,27,24)] text-white py-2 px-5 "
              }
            >
              <p>{item.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default Tool;
