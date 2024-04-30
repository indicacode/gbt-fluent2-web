import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { ColumnDef, Row } from "@tanstack/react-table"

import { Button } from "@/components/done"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/not-done/dropdown-menu"
import { Checkbox } from "@/components/reviewing/checkbox"
import { User } from "@/components/reviewing/data-table.input"

function renderCell(key: string, row?: Row<User>) {
  if (row) {
    return <div className="lowercase">{row.getValue(key)}</div>
  }
  return <div className="capitalize text-white">{key}</div>
}

function renderActions(row: Row<User>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="subtle" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(row.getValue("id"))}
        >
          Copy payment ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View customer</DropdownMenuItem>
        <DropdownMenuItem>View payment details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const columns: Array<ColumnDef<User>> = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="text-white"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-white"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    maxSize: 10,
    minSize: 10,
    size: 10,
  },
  {
    accessorKey: "firstName",
    header: () => renderCell("First Name"),
    cell: ({ row }) => renderCell("firstName", row),
    maxSize: 100,
    minSize: 100,
    size: 100,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="subtle"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => renderCell("email", row),
    maxSize: 300,
    minSize: 300,
    size: 300,
  },
  {
    accessorKey: "age",
    header: () => renderCell("Age"),
    cell: ({ row }) => renderCell("age", row),
    size: 10,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => renderActions(row),
    maxSize: 10,
  },
]
