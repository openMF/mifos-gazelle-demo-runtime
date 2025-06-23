import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { DemoSampleData } from "@/data/DemoTableSampleData";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface DemoData {
  name: string;
  description: string;
}

const columnHelper = createColumnHelper<DemoData>();

export default function MifosXDemos() {
  const data = useMemo(() => [...DemoSampleData], []);

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Demo Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("description", {
        header: "Description",
        cell: (info) => info.getValue(),
      }),
      {
        id: "action",
        header: "",
        cell: () => (
          <Button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 cursor-pointer">
            Start Demo
          </Button>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-8 min-h-screen flex flex-col items-center gap-8">
      <h1 className="text-xl font-semibold text-gray-800 mb-8">
        Explore guided walkthroughs of key flows in the MifosX application.
      </h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-4/5">
        <table className="w-full">
          <thead className="bg-gray-200 border-b border-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-4 text-left text-sm font-medium text-gray-700"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row, index) => (
              <tr key={row.id} className={`hover:bg-blue-50 ${index%2===0?'bg-white':'bg-gray-100'}`}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 text-sm text-gray-900">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      <div className="flex items-center justify-between w-full bg-white px-6 py-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>
            Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{" "}
            {Math.min(
              (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length
            )}{" "}
            of {table.getFilteredRowModel().rows.length} entries
          </span>
        </div>
        
        <div className="flex items-center gap-2">
         
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: table.getPageCount() }, (_, i) => (
              <Button
                key={i}
                variant={table.getState().pagination.pageIndex === i ? "default" : "outline"}
                size="sm"
                onClick={() => table.setPageIndex(i)}
                className={`w-8 h-8 p-0 text-sm ${
                  table.getState().pagination.pageIndex === i
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </Button>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Show</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-600">entries</span>
        </div>
      </div>
      </div>
      
    </div>
  );
}
