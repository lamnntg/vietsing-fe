"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RowDataDef } from "@/types/project.type";
import { FC } from "react";

type CustomTableProps = {
  header: RowDataDef[];
  row: RowDataDef[];
};

const CustomTable: FC<CustomTableProps> = ({ header, row }) => {
  return (
    <div>
      <Table className="border-[#e2e8f0] border border-solid w-full">
        <TableHeader>
          <TableRow>
            {header.map((item) => (
              <TableHead
                colSpan={item.colSpan}
                rowSpan={item.rowSpan}
                key={item.label}
                style={{
                  width: item.width || undefined,
                }}
              >
                {item.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {row.map((item) => (
              <TableCell
                colSpan={item.colSpan}
                rowSpan={item.rowSpan}
                key={item.label}
                style={{
                  width: item.width || undefined,
                }}
              >
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;
