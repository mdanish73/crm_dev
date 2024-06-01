"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EditIcon, Eye, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function CeoTable() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await fetch("/api/creating", {
          method: "GET",
        });
        const response = await request.json();
        setData(response.message);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const Tablejson = [
    {
      name: "CompanyName",
    },
    {
      name: "CompanyCEO",
    },
    {
      name: "Company-Contact",
    },
    {
      name: "Company-Email",
    },
    {
      name: "identification-Number",
    },
    {
      name: "Industry",
    },
    {
      name: "Sub-industry",
    },
    {
      name: "Actions",
    },
  ];

  return (
    <section className="bg-[rgb(24,24,27)] backdrop-blur-lg p-5 rounded-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-[rgb(39,39,42)] uppercase text-[rgb(161,161,170)]">
            {Tablejson.map((header, index) => (
              <TableHead key={index}>{header.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <TableRow className="text-secondaryText hover:bg-slate-500 transition-colors" key={index}>
                <TableCell>{item.companyname}</TableCell>
                <TableCell>{item.companyCeo.fullName}</TableCell>
                <TableCell>{item.contact}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.identificationNumber}</TableCell>
                <TableCell>{item.industry}</TableCell>
                <TableCell>{item.subIndustry}</TableCell>
                <TableCell>
                  <span  className="flex gap-1">
                    <span title="Details" className="cursor-pointer">
                      <Eye size={18} />
                    </span>
                    <span title="Edit" className="cursor-pointer">
                      <EditIcon size={18} />
                    </span>
                    <span title="Delete" className="cursor-pointer">
                      <Trash size={18} color="red" />
                    </span>
                  </span>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={Tablejson.length}
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
