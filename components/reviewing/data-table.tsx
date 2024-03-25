import React, { useMemo, useRef, useState } from "react"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { Table as TableType } from "@tanstack/table-core"
import { useVirtual } from "react-virtual"
import useSWR from "swr"

import { Button } from "@/components/done/button"
import { Input } from "@/components/done/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/not-done/dropdown-menu"
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from "@/components/reviewing/"

import { columns } from "./data-table.components"

type DataTableProps = {
  fetchUsers: ({
    pageIndex,
    pageSize,
  }: {
    pageIndex: any
    pageSize: any
  }) => Promise<any>
  columns: Array<ColumnDef<any>>
  pagination: {
    pageIndex: number
    pageSize: number
    rowCount: number
    pageCount?: number
    manualPagination: boolean
  }
}

type UserInput = Array<Record<string, unknown>>

/**
 * @param {UserInput} columns - An array that defines the structure of the table. Each item in the array represents a column in the table.
 * @param {(pageSize: number, pageIndex: number) => Promise<UserInput>} fetchUsers - A function that fetches the data for the table. It should return a promise that resolves with an array of data.
 * @param {Object} pagination - An object that controls the pagination behavior of the table.
 * @param {number} pagination.pageIndex - The current page index.
 * @param {number} pagination.pageSize - The number of rows per page.
 * @param {number} pagination.rowCount - The total number of rows in the table.
 * @param {number} [pagination.pageCount] - The total number of pages.
 * @param {boolean} pagination.manualPagination - A boolean that indicates whether the pagination is controlled manually or automatically.
 */
export function DataTable({ columns, fetchUsers, pagination }: DataTableProps) {
  const [rowSelection, setRowSelection] = useState({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [paginationState, setPaginationState] = useState({
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
  })

  const { data, error, isLoading } = useSWR(
    {
      pageSize: paginationState["pageSize"],
      pageIndex: paginationState["pageIndex"],
    },
    fetchUsers,
    { suspense: true }
  )

  const memoizedColumns = useMemo(() => columns, [])

  const table: TableType<UserInput[0]> = useReactTable({
    data,
    columns: memoizedColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPaginationState,
    manualPagination: pagination.manualPagination,
    rowCount: pagination.rowCount,
    pageCount: pagination.pageCount,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: paginationState,
    },
  })

  return (
    <div className="w-full text-black dark:text-white">
      <FilterButton table={table} />
      <Table table={table} />
      <Pagination table={table} />
    </div>
  )
}

function FilterButton({ table }: { table: TableType<UserInput[0]> }) {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder="Filter emails..."
        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("email")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="transparent" className="ml-auto">
            Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              )
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

function Table({ table }: { table: TableType<UserInput[0]> }) {
  const { rows } = table.getRowModel()

  const tableContainerRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
  })
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer

  const paddingTop = virtualRows?.length > 0 ? virtualRows?.[0]?.start || 0 : 0
  const paddingBottom =
    virtualRows?.length > 0 ? totalSize - (virtualRows?.at(-1)?.end || 0) : 0

  return (
    <div
      ref={tableContainerRef}
      className="max-h-[600px] overflow-auto rounded-md"
    >
      <TableRoot>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="rounded-sm" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  style={{
                    width: header.column.getSize(),
                    maxWidth: header.column.getSize(),
                    minWidth: header.column.getSize(),
                  }}
                >
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
        <TableBody>
          {paddingTop > 0 && (
            <tr>
              <td style={{ height: paddingTop }} />
            </tr>
          )}
          {virtualRows?.length ? (
            virtualRows.map((virtualRow, index) => {
              const row = rows[virtualRow.index]
              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              )
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
          {paddingBottom > 0 && (
            <tr>
              <td style={{ height: paddingBottom }} />
            </tr>
          )}
        </TableBody>
      </TableRoot>
    </div>
  )
}

function Pagination({ table }: { table: TableType<UserInput[0]> }) {
  return (
    <div className="flex w-full flex-row items-center justify-end space-x-2 py-4">
      <div className="text-muted-foreground flex-1 text-sm">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex flex-row space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
