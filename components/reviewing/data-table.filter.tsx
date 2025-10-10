import { Input } from "@/components/done/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/done/select"
import { Table } from "@tanstack/react-table"
import { useState } from "react"

interface DataTableFilterProps<TData> {
  table: Table<TData>
}

export function DataTableFilter<TData>({ table }: DataTableFilterProps<TData>) {
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null)

  const filterableColumns = table
    .getAllColumns()
    .filter((column) => column.getCanFilter())

  const onColumnSelect = (columnId: string) => {
    setSelectedColumn(columnId)
    // Clear previous filter when changing columns
    if (selectedColumn) {
      const prevColumn = table.getColumn(selectedColumn)
      if (prevColumn) {
        prevColumn.setFilterValue("")
      }
    }
  }

  const onFilterChange = (value: string) => {
    if (selectedColumn) {
      const column = table.getColumn(selectedColumn)
      if (column) {
        column.setFilterValue(value)
      }
    }
  }

  return (
    <div className="flex gap-2">
      <Select value={selectedColumn || ""} onValueChange={onColumnSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select column to filter..." />
        </SelectTrigger>
        <SelectContent>
          {filterableColumns.map((column) => (
            <SelectItem key={column.id} value={column.id}>
              {column.id}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedColumn && (
        <Input
          placeholder="Type to filter..."
          value={
            (table.getColumn(selectedColumn)?.getFilterValue() as string) ?? ""
          }
          onChange={(e) => onFilterChange(e.target.value)}
          className="w-[180px]"
        />
      )}
    </div>
  )
}
