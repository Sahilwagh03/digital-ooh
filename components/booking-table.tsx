"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const BookingTable = ({ data }: { data: any[] }) => {
  return (
    <div className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
      <Table className="overflow-x-hidden text-xs">
        <TableHeader className="bg-accent">
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="overflow-hidden">
          {data.map((item) => (
            <TableRow
              key={item.id}
              className="hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              <TableCell>{item.id}</TableCell>

              <TableCell className="font-medium max-w-55 truncate">
                {item.company}
              </TableCell>

              <TableCell>{item.client}</TableCell>

              <TableCell className="text-neutral-500">
                {item.duration}
              </TableCell>

              {/* 🔥 Status Badge */}
              <TableCell>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    item.status === "Active"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : item.status === "Upcoming"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      : "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
                  }`}
                >
                  {item.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};