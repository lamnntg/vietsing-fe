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
import { cn } from "@/lib/utils";
import { RowDataDef } from "@/types/project.type";
import { FC } from "react";

type CustomTableProps = {
  header: RowDataDef[][];
  row: RowDataDef[][];
};

const CustomTable: FC<CustomTableProps> = ({ header, row }) => {
  return (
    <div>
      <Table className="border-[#e2e8f0] border border-solid w-full text-base">
        <TableHeader>
          {header.map((item, index) => (
            <TableRow key={index}>
              {item.map((t) => (
                <TableHead
                  colSpan={t.colSpan}
                  rowSpan={t.rowSpan}
                  key={t.label}
                  style={{
                    width: t.width || undefined,
                  }}
                  className="text-center border-l border-solid border-[#e2e8f0]"
                >
                  {t.label}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {row.map((item, index) => (
            <TableRow key={index}>
              {item.map((r, index) => (
                <TableCell
                  colSpan={r.colSpan}
                  rowSpan={r.rowSpan}
                  key={r.label}
                  style={{
                    width: r.width || undefined,
                  }}
                  className={cn(
                    index === 0 && item.length > 3 ? "text-center" : "",
                    row.length === 29 && index === 3 ? "text-center" : "",
                    item.length === 1 && "font-medium",
                    "border border-[#e2e8f0] text-nowrap"
                  )}
                >
                  {r.label}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;
