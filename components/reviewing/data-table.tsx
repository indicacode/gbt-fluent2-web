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
import React, { useEffect, useMemo, useRef, useState } from "react"
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

type PaginationProps<T> = {
  table: TableType<T>
  getData: (pageIndex: number) => { data: any; error: any; isLoading: boolean }
  dataLength: number
  pagination: {
    pageIndex: number
    pageSize: number
    rowCount: number
    pageCount?: number | undefined
    manualPagination: boolean
  }
}
export type PagedResponse<T> = {
  currentPage: number
  pageSize: number
  cacheKey: string
  results: Array<T>
}
type DataTableProps<T> = {
  fetchData: ({
    pageIndex,
    pageSize,
  }: {
    pageIndex: number
    pageSize: number
  }) => Promise<PagedResponse<T>>
  columns: Array<ColumnDef<T>>
  pagination: {
    pageIndex: number
    pageSize: number
    rowCount: number
    pageCount?: number
    manualPagination: boolean
  }
  filterPlaceholder?: string
  columnFilterKey?: string
}

export function DataTable<T>({
  columns,
  fetchData,
  pagination,
  columnFilterKey,
  filterPlaceholder = "Filter...",
}: DataTableProps<T>) {
  const [rowSelection, setRowSelection] = useState({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [paginationState, setPaginationState] = useState({
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
  })

  const getData = (pageIndex = null) => {
    const { data, error, isLoading } = useSWR(
      {
        pageSize: paginationState.pageSize,
        pageIndex: pageIndex ?? paginationState.pageIndex,
      },
      fetchData
    )
    return { data, error, isLoading }
  }

  const { data, error, isLoading } = getData()

  const memoizedColumns = useMemo(() => columns, [columns])

  const table: TableType<T> = useReactTable({
    //@ts-ignore
    data: !isLoading ? data?.results : [],
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
    pageCount: -1,
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
      <Table table={table} error={error} />
      <Pagination
        pagination={pagination}
        //@ts-ignore
        getData={getData}
        table={table}
        //@ts-ignore
        dataLength={data?.results?.length}
      />
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
  const [filterValue, setFilterValue] = useState<string>("")

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
    table.getColumn(columnKey)?.setFilterValue(event.target.value)
  }

  return (
    <div className="flex items-center py-4">
      <Input
        placeholder={placeholder}
        value={filterValue}
        onChange={handleFilterChange}
        className="max-w-sm"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="transparent" className="ml-auto">
            Columns
            <ChevronDownIcon className="ml-2 h-4 w-4" />
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

function Table<T>({ table, error }: { table: TableType<T>; error: any }) {
  const columns = table.getAllColumns()

  const tableContainerRef = useRef<HTMLDivElement>(null)

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div
      ref={tableContainerRef}
      className="max-h-[600px] overflow-auto rounded-md"
    >
      <TableRoot className="overflow-x-auto rounded-lg">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="border-slate-400 dark:border-slate-500"
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="min-w-fit"
                    style={{ width: `${header.getSize()}px` }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="border-slate-300 dark:border-slate-600"
                key={row.id}
                data-state={row.getIsSelected() && "Selecionadas"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Sem Resultados
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableRoot>
    </div>
  )
}

function Pagination<T>({
  table,
  getData,
  dataLength,
  pagination,
}: PaginationProps<T>) {
  const [pageIndex, setPageIndex] = useState(0)
  const [canNext, setCanNext] = useState(true)
  const { data: nextPageData, isLoading: isNextPageLoading } = getData(
    pageIndex + 1
  )

  useEffect(() => {
    if (dataLength < pagination.pageSize && canNext) {
      setCanNext(false)
    } else if (!isNextPageLoading && nextPageData?.results) {
      setCanNext(nextPageData.results?.length > 0)
    }
  }, [nextPageData, isNextPageLoading, dataLength])

  if (dataLength < pagination.pageSize && pageIndex === 0) return null

  return (
    <div className="flex w-full flex-row items-center justify-end gap-2 py-4">
      <Button
        variant="outline"
        size="sm"
        aria-label="Página Anterior"
        onClick={() => {
          if (pageIndex !== 0) {
            table.previousPage()
            setPageIndex((prev) => prev - 1)
          }
        }}
        disabled={pageIndex === 0}
      >
        Anterior
      </Button>
      <Button
        variant="outline"
        size="sm"
        aria-label="Proxima Página"
        onClick={() => {
          if (canNext) {
            table.nextPage()
            setPageIndex((prev) => prev + 1)
          }
        }}
        disabled={!canNext}
      >
        Próxima
      </Button>
    </div>
  )
}
