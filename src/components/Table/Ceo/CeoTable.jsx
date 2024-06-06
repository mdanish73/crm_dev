"use client";
import Ceoupdate from "@/components/Modal/Ceoupdate";
import Tooltip from "@/components/Tooltip/Tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Eye, Trash } from "lucide-react";
import { useState } from "react";

export default function CeoTable({ CeoData }) {
  const tooltipClass =
    "absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-[50px] border border-gray-300 text-black bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 hover:scale-100";
  const [id, setId] = useState("");
  async function deleteCeo(id) {
    try {
      console.log(id);
      await fetch(`http://localhost:3000/api/ceo/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.AUTHORIZATION_KEY,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async function updateCeo(id) {
    try {
      await fetch(`http://localhost:3000/api/ceo/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.AUTHORIZATION_KEY,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  function update() {}

  const TableHeaders = [
    "CompanyName",
    "CompanyCEO",
    "Company-Contact",
    "Identification-Number",
    "Industry",
    "Sub-industry",
    "Actions",
  ];

  return (
    <section className="bg-[rgb(24,24,27)]/40 backdrop-blur-lg py-5 px-3 rounded-2xl">
      <Table>
        <TableHeader className="bg-[rgb(38,38,38)]/50">
          <TableRow className="uppercase text-[rgb(161,161,170)] rounded-[15px] overflow-hidden">
            {TableHeaders.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {CeoData.length > 0 ? (
            CeoData.map((item) => (
              <TableRow
                className="text-secondaryText hover:bg-[#35374B] transition-colors"
                key={item._id}
              >
                <TableCell>{item.fullName}</TableCell>
                <TableCell>
                  <div className="w-8 h-8 rounded-full flex items-center gap-1 cursor-pointer">
                    <img
                      className="w-full h-full rounded-full"
                      src={
                        item?.companyCeo?.CeoImage
                          ? ""
                          : "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg"
                      }
                      alt="image"
                    />
                    <div className="flex flex-col">
                      {/* <p>{item.companyCeo.fullName}</p> */}
                      {/* <p className="text-[12px]">{item.companyCeo.email}</p> */}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.identification_number}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <button className="relative group">
                      <Eye size={18} />
                      <span className={tooltipClass}>View</span>
                    </button>
                    <Ceoupdate css={tooltipClass} />

                    <button
                      onClick={() => {
                        deleteCeo(item._id);
                      }}
                      className="relative group"
                    >
                      <Trash color="red" size={18} />
                      <span className={`${tooltipClass} bg-red-800`}>
                        Delete
                      </span>
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={TableHeaders.length}
                className="text-center text-secondaryText"
              >
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
}
