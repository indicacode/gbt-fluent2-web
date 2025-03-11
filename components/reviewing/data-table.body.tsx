import { cn } from "@/lib/utils"
import { flexRender, Table } from "@tanstack/react-table"
import { TableBody, TableCell, TableRow } from "./table"

interface DataTableBodyProps<TData> {
  table: Table<TData>
  noResults?: React.ReactNode
  onRowClick?: (row: TData) => void
  rowClassName?: string | ((row: TData) => string)
  cellClassName?: string | ((cell: any, row: TData) => string)
}

export function DataTableBody<TData>({
  table,
  noResults = "No results.",
  onRowClick,
  rowClassName,
  cellClassName,
}: DataTableBodyProps<TData>) {
  const rows = table.getRowModel().rows
  const hasRows = rows?.length > 0

  const getRowClass = (row: TData): string => {
    if (typeof rowClassName === "function") {
      return rowClassName(row)
    }
    return rowClassName || ""
  }

  const getCellClass = (cell: any, row: TData): string => {
    if (typeof cellClassName === "function") {
      return cellClassName(cell, row)
    }
    return cellClassName || ""
  }

  if (!hasRows) {
    return (
      <TableBody>
        <TableRow>
          <TableCell
            colSpan={table.getAllColumns().length}
            className="h-24 text-center"
          >
            {noResults}
          </TableCell>
        </TableRow>
      </TableBody>
    )
  }

  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          data-state={row.getIsSelected() && "selected"}
          onClick={() => onRowClick?.(row.original)}
          className={cn(
            "hover:bg-muted/50 transition-colors",
            row.getIsSelected() && "bg-muted",
            getRowClass(row.original)
          )}
        >
          {row.getVisibleCells().map((cell) => (
            <TableCell
              key={cell.id}
              className={getCellClass(cell, row.original)}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}
