import { ColumnDef, flexRender } from "@tanstack/react-table"
import { DataTableBody } from "./data-table.body"
import { DataTableFilter } from "./data-table.filter"
import { DataTablePagination } from "./data-table.pagination"
import { DataTableViewOptions } from "./data-table.view-options"
import { useDataTable } from "./useDataTable"

interface DataTableProps<TData, TValue> {
  data: TData[]
  columns: ColumnDef<TData, TValue>[]
  features?: {
    sorting?: boolean
    filtering?: boolean
    pagination?: boolean
    columnVisibility?: boolean
    rowSelection?: boolean
    viewOptions?: boolean
  }
}

export function DataTable<TData, TValue>({
  data,
  columns,
  features = {
    sorting: true,
    filtering: true,
    pagination: true,
    columnVisibility: false,
    rowSelection: false,
    viewOptions: true,
  },
}: DataTableProps<TData, TValue>) {
  const table = useDataTable({
    data,
    columns,
    enableSorting: features.sorting,
    enableFiltering: features.filtering,
    enablePagination: features.pagination,
    enableColumnVisibility: features.columnVisibility,
    enableRowSelection: features.rowSelection,
  })

  return (
    <div className="w-full rounded-md border">
      <div className="flex items-center justify-between py-4">
        {features.filtering && <DataTableFilter table={table} />}
        {features.viewOptions && <DataTableViewOptions table={table} />}
      </div>
      <span className="text-red-700 text-6xl">not styled</span>
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
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
        <DataTableBody table={table} />
      </table>

      {features.pagination && <DataTablePagination table={table} />}
    </div>
  )
}
