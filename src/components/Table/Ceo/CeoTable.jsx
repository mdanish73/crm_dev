import Tool from "@/components/Tooltip/Tool";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CeoTable({ Data }) {
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
    <section className="bg-[rgb(24,24,27)] backdrop-blur-lg py-5 px-3 rounded-2xl">
      <Table key={Data._id}>
        <TableHeader>
          <TableRow className="bg-[rgb(39,39,42)] uppercase text-[rgb(161,161,170)] rounded-2xl">
            {Tablejson.map((header, index) => (
              <TableHead key={index}>{header.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Data.length > 0 ? (
            Data.map((item, index) => (
              <TableRow
                className="text-secondaryText hover:bg-[#35374B] transition-colors"
                key={index}
              >
                <TableCell>{item.companyname}</TableCell>
                <TableCell>
                  {/* <div className="w-12 h-12 rounded-full flex items-center gap-1 cursor-pointer">
                    <img
                      className="w-full h-full rounded-full"
                      src={item.companyCeo.CeoImage}
                      alt="image"
                    />
                    <div className="flex flex-col">
                      <p>{item.companyCeo.fullName}</p>
                      <p className="text-[12px]">{item.companyCeo.email}</p>
                    </div>
                  </div> */}
                </TableCell>
                <TableCell>{item.contact}</TableCell>
                <TableCell>{item.identificationNumber}</TableCell>
                <TableCell>{item.industry}</TableCell>
                <TableCell>{item.subIndustry}</TableCell>
                <TableCell>
                  <Tool />
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
