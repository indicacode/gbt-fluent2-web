import { Column } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div
      className={cn(
        "group flex min-w-fit items-center gap-0.5 whitespace-nowrap",
        className
      )}
      onClick={() => {
        const isSorted = column.getIsSorted() === "desc"

        column.toggleSorting(isSorted ? false : true)
      }}
    >
      <span className="text-lg">{title}</span>
      <div className="opacity-0 group-hover:opacity-100">
        {column.getIsSorted() === "desc" ? (
          <ArrowUp size={20} />
        ) : column.getIsSorted() === "asc" ? (
          <ArrowDown size={20} />
        ) : (
          <ChevronsUpDown size={20} />
        )}
      </div>
    </div>
  )
}
