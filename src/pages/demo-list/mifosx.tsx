import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
  type CellContext,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { DemoSampleData } from '@/data/DemoTableSampleData';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

interface DemoData {
  id: string;
  name: string;
  description: string;
}

const columnHelper = createColumnHelper<DemoData>();

export default function MifosXDemos() {
  const navigate = useNavigate();
  const NavigateToDemo = (id: string, demoName: string) => {
    const demoSlug = slugify(demoName, { lower: true });
    navigate(`/demo/${id}/${demoSlug}`);
  };
  const [globalFilter, setGlobalFilter] = useState('');
  const data = useMemo(() => [...DemoSampleData], []);

  const columns = useMemo(
    () => [
      columnHelper.accessor('name', {
        header: 'Demo Name',
        enableGlobalFilter: true,
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('description', {
        header: 'Description',
        enableGlobalFilter: true,
        cell: info => info.getValue(),
      }),
      {
        id: 'action',
        header: '',
        cell: (info: CellContext<DemoData, unknown>) => {
          const demoName = info.row.original.name;
          const id = info.row.original.id;
          return (
            <Button
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 cursor-pointer"
              onClick={() => NavigateToDemo(id, demoName)}
            >
              Start Demo
            </Button>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    globalFilterFn: 'includesString',
  });

  return (
    <div className="p-8 min-h-screen flex flex-col items-center gap-8 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center">
        Explore guided walkthroughs of key flows in the MifosX application.
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden w-4/5">
        <input
          type="text"
          value={globalFilter}
          onChange={e => setGlobalFilter(e.target.value)}
          placeholder="Search demo..."
          className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none h-10 w-sm px-4 py-6 dark:bg-slate-700 bg-slate-100"
        />
        <table className="w-full">
          <thead className="bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-6 py-4 text-left text-sm font-medium text-gray-700 dark:text-gray-100"
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
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className={`hover:bg-blue-50 dark:hover:bg-gray-700 ${
                  index % 2 === 0
                    ? 'bg-white dark:bg-gray-900'
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}
              >
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between w-full bg-white dark:bg-gray-800 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span>
              Showing{' '}
              {table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
                1}{' '}
              to{' '}
              {Math.min(
                (table.getState().pagination.pageIndex + 1) *
                  table.getState().pagination.pageSize,
                table.getFilteredRowModel().rows.length
              )}{' '}
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
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Show
            </span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={e => {
                table.setPageSize(Number(e.target.value));
              }}
              className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {[5, 10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              entries
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
