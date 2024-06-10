"use client";
import { Menu, User } from "lucide-react";
import Ceoupdate from "@/components/Dialog/Ceoupdateform";
import Ceodelete from "@/components/Dialog/Ceodelete";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CeoTable({ CeoData }) {
  const TableHeaders = [
    "Full Name",
    "Image",
    "CEO Contact",
    "Identification Number",
    "Email",
    "Username",
    "Actions",
  ];

  return (
    <section className="w-full bg-primary_bg p-3 rounded-md">
      <div>
        <table className="w-full">
          <thead className="border-[0.5px] uppercase sticky top-0">
            <tr className="text-primaryText text-left">
              {TableHeaders.map((v, i) => (
                <th className="text-center py-2 font-normal tracking-wider" key={i}>
                  {v}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CeoData.map((v) => (
              <tr key={v._id} className="text-secondaryText text-sm">
                <td className="py-4">{v.fullName}</td>
                <td className="py-4">
                  <div className="flex justify-center">
                    <User size={30} />
                  </div>
                </td>
                <td className="py-4">{v.phone}</td>
                <td className="py-4">{v.identification_number}</td>
                <td className="py-4">{v.email}</td>
                <td className="py-4">{v.username}</td>
                <td className="py-4">
                  <div className="flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Menu />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuGroup>
                          <Ceoupdate data={v} />
                          <Ceodelete Ceoid={v._id} />
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
