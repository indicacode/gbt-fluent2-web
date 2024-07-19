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

type DataTableProps<T> = {
  fetchData: ({
    pageIndex,
    pageSize,
  }: {
    pageIndex: number
    pageSize: number
  }) => Promise<T[]>
  columns: Array<ColumnDef<T>>
  pagination: {
    pageIndex: number
    pageSize: number
    rowCount: number
    pageCount?: number
    manualPagination: boolean
  }
  initialData: T[]
  filterPlaceholder?: string
  columnFilterKey?: string
}

export function DataTable<T>({
  columns,
  fetchData,
  initialData,
  pagination,
  filterPlaceholder = "Filter...",
  columnFilterKey,
}: DataTableProps<T>) {
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
      pageSize: paginationState.pageSize,
      pageIndex: paginationState.pageIndex,
    },
    fetchData,
    { suspense: true, fallbackData: initialData }
  )

  const memoizedColumns = useMemo(() => columns, [columns])

  const table: TableType<T> = useReactTable({
    data: data ?? [],
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
      {columnFilterKey && (
        <FilterButton
          table={table}
          placeholder={filterPlaceholder}
          columnKey={columnFilterKey}
        />
      )}
      <Table table={table} />
      <Pagination table={table} />
    </div>
  )
}

function FilterButton<T>({
  table,
  placeholder,
  columnKey,
}: {
  table: TableType<T>
  placeholder: string
  columnKey: string
}) {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder={placeholder}
        value={(table.getColumn(columnKey)?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn(columnKey)?.setFilterValue(event.target.value)
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
            .map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

function Table<T>({ table }: { table: TableType<T> }) {
  const { rows } = table.getRowModel()
  const columns = table.getAllColumns()

  const tableContainerRef = useRef<HTMLDivElement>(null)
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
  })
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer

  const paddingTop = virtualRows.length > 0 ? virtualRows[0].start || 0 : 0
  const paddingBottom =
    virtualRows.length > 0 ? totalSize - (virtualRows.at(-1)?.end || 0) : 0

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
          {virtualRows.length ? (
            virtualRows.map((virtualRow) => {
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

function Pagination<T>({ table }: { table: TableType<T> }) {
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
