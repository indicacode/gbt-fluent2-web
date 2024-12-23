import { ColumnDef, flexRender } from "@tanstack/react-table"
import { DataTableBody } from "./data-table.body"
import { DataTableViewOptions } from "./data-table.columnToggle"
import { DataTableFilter } from "./data-table.filter"
import { DataTablePagination } from "./data-table.pagination"
import { Table, TableHead, TableHeader, TableRow } from "./table"
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
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-between py-4">
        {features.filtering && <DataTableFilter table={table} />}
        {features.viewOptions && <DataTableViewOptions table={table} />}
      </div>
      <Table className="my-4">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <DataTableBody table={table} />
      </Table>

      {features.pagination && <DataTablePagination table={table} />}
    </div>
  )
}
