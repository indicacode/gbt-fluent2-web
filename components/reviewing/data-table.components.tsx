import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { ColumnDef, Row } from "@tanstack/react-table"

import { Button } from "@/components/done"
import { Checkbox } from "@/components/not-done/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/not-done/dropdown-menu"
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
  },
  {
    accessorKey: "firstName",
    header: () => renderCell("First Name"),
    cell: ({ row }) => renderCell("firstName", row),
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
  },
  {
    accessorKey: "age",
    header: () => renderCell("Age"),
    cell: ({ row }) => renderCell("age", row),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => renderActions(row),
  },
]
