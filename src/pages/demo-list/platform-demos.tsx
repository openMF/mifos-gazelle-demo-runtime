import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
  type CellContext,
} from '@tanstack/react-table';
import { useMemo, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  X,
  Search,
  Play,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
// import { fetchDemoListData } from '@/lib/api/fetchDemoListData';
import { SamplePlatformDemoData } from '@/data/sample-platform-demos';
import type { PlatformDemoData as DemoData } from '@/types/demodata';
import { allPlatforms } from '@/types/demodata';

const columnHelper = createColumnHelper<DemoData>();

export default function PlatformDemos() {
  const navigate = useNavigate();
  const NavigateToDemo = (id: string, demoName: string) => {
    const demoSlug = slugify(demoName, { lower: true });
    navigate(`/demo/${id}/${demoSlug}`);
  };
  const [globalFilter, setGlobalFilter] = useState('');
  // const [data, setData] = useState<DemoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    // setData(SamplePlatformDemoData);
    setLoading(false);
    // fetchDemoListData()
    //   .then(setData)
    //   .finally(() => setLoading(false));
  }, []);

  const filteredData = useMemo(() => {
    return SamplePlatformDemoData.filter(demo => {
      const matchesSearch =
        demo.demoName.toLowerCase().includes(globalFilter.toLowerCase()) ||
        demo.demoDescription.toLowerCase().includes(globalFilter.toLowerCase());

      const matchesPlatforms =
        selectedPlatforms.length === 0 ||
        selectedPlatforms.every(p => demo.platforms.includes(p));

      return matchesSearch && matchesPlatforms;
    });
  }, [globalFilter, selectedPlatforms]);

  const columns = useMemo(
    () => [
      columnHelper.accessor('demoName', {
        header: 'Demo Name',
        enableGlobalFilter: true,
        cell: info => (
          <div className="font-medium text-gray-900 dark:text-gray-400">
            {info.getValue()}
          </div>
        ),
      }),
      columnHelper.accessor('demoDescription', {
        header: 'Description',
        enableGlobalFilter: true,
        cell: info => (
          <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {info.getValue()}
          </div>
        ),
      }),
      columnHelper.accessor('platforms', {
        header: 'Deployments needed',
        enableGlobalFilter: false,
        cell: info => (
          <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="font-bold">
              {info
                .getValue()
                .map(platform => platform)
                .join(', ')}
            </p>
          </div>
        ),
      }),
      {
        id: 'action',
        header: 'Action',
        cell: (info: CellContext<DemoData, unknown>) => {
          const demoName = info.row.original.demoName;
          const id = info.row.original.demoID;
          return (
            <Button
              onClick={() => NavigateToDemo(id, demoName)}
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white  
                font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-200 shadow-sm"
              title="Start this demo"
            >
              <Play className="h-4 w-4" />
              Start Demo
            </Button>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: filteredData,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Platform Demo Center
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Each demo provides an interactive experience to help you understand
            our platform's capabilities.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750 px-8 py-6 dark:bg-gray-800 flex items-center gap-10">
            <div className="relative min-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={globalFilter}
                onChange={e => setGlobalFilter(e.target.value)}
                placeholder="Search demos by name or description..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-800
                 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                  focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="min-w-48 min-h-11">
                  <Button variant="outline" className="flex items-center gap-2">
                    Filter Platforms <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {allPlatforms.map(platform => (
                    <DropdownMenuCheckboxItem
                      key={platform}
                      checked={selectedPlatforms.includes(platform)}
                      onCheckedChange={(checked: boolean) => {
                        setSelectedPlatforms(prev =>
                          checked
                            ? [...prev, platform]
                            : prev.filter(p => p !== platform)
                        );
                      }}
                    >
                      {platform}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex flex-wrap gap-2 ">
              {selectedPlatforms.map(platform => (
                <Badge
                  key={platform}
                  variant="secondary"
                  className="flex items-center gap-3 min-h-11 min-w-28 text-sm"
                >
                  {platform}
                  <button
                    onClick={() =>
                      setSelectedPlatforms(prev =>
                        prev.filter(p => p !== platform)
                      )
                    }
                    className="ml-1 p-0.5 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
              <thead className="bg-gray-50 dark:bg-gray-750">
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th
                        key={header.id}
                        className="px-8 py-5 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider dark:bg-gray-800"
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

              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {table.getRowModel().rows.map(row => (
                  <tr
                    key={row.id}
                    className="dark:hover:bg-gray-700 hover:bg-gray-200 transition-colors duration-150"
                  >
                    {row.getVisibleCells().map(cell => (
                      <td
                        key={cell.id}
                        className="px-8 py-6 whitespace-nowrap text-sm"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {loading && (
            <div className=" bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
              <div className=" mx-auto space-y-6 flex justify-center items-center">
                <div className="bg-white dark:bg-gray-800 rounded-2xl dark:border-gray-700 p-6 space-y-4 min-w-7xl">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="grid grid-cols-3 gap-6">
                      <Skeleton className="h-10 w-full bg-gray-200 dark:bg-gray-700" />
                      <Skeleton className="h-10 w-full bg-gray-200 dark:bg-gray-700" />
                      <Skeleton className="h-10 w-32 bg-gray-200 dark:bg-gray-700" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="bg-gray-50 dark:bg-gray-750 px-8 py-6 border-t border-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Showing{' '}
                <span className="font-medium">
                  {table.getState().pagination.pageIndex *
                    table.getState().pagination.pageSize +
                    1}
                </span>{' '}
                to{' '}
                <span className="font-medium">
                  {Math.min(
                    (table.getState().pagination.pageIndex + 1) *
                      table.getState().pagination.pageSize,
                    table.getFilteredRowModel().rows.length
                  )}
                </span>{' '}
                of{' '}
                <span className="font-medium">
                  {table.getFilteredRowModel().rows.length}
                </span>{' '}
                results
              </div>

              <div className="flex items-center gap-2 dark:bg-gray-800">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                  className="p-2 disabled:opacity-50 disabled:cursor-not-allowed border-gray-300 dark:border-gray-600"
                  title="First page"
                >
                  <ChevronsLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="p-2 disabled:opacity-50 disabled:cursor-not-allowed border-gray-300 dark:border-gray-600"
                  title="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="mx-4 text-sm text-gray-700 dark:text-gray-300">
                  Page{' '}
                  <span className="font-medium">
                    {table.getState().pagination.pageIndex + 1}
                  </span>{' '}
                  of <span className="font-medium">{table.getPageCount()}</span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className="p-2 disabled:opacity-50 disabled:cursor-not-allowed border-gray-300 dark:border-gray-600"
                  title="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                  className="p-2 disabled:opacity-50 disabled:cursor-not-allowed border-gray-300 dark:border-gray-600"
                  title="Last page"
                >
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700 dark:text-gray-300 dark:bg-gray-800">
                  Rows per page:
                </span>
                <select
                  value={table.getState().pagination.pageSize}
                  onChange={e => {
                    table.setPageSize(Number(e.target.value));
                  }}
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {[5, 10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
