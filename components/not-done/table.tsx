import * as React from "react"
import { forwardRef, HTMLAttributes, Ref } from "react"

import { cn } from "@/lib/utils"

interface TableProps extends HTMLAttributes<HTMLTableElement> {}

function Table(
  { className, ...props }: TableProps,
  ref: Ref<HTMLTableElement>
) {
  return (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

const ForwardedTable = forwardRef(Table)
ForwardedTable.displayName = "Table"

//-------------------------------------------------------------------------//

interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}

function TableHeader(
  { className, ...props }: TableHeaderProps,
  ref: Ref<HTMLTableSectionElement>
) {
  return (
    <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
  )
}
const ForwardedTableHeader = forwardRef(TableHeader)
ForwardedTableHeader.displayName = "TableHeader"

//-------------------------------------------------------------------------//

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

function TableBody(
  { className, ...props }: TableBodyProps,
  ref: Ref<HTMLTableSectionElement>
) {
  return (
    <tbody
      ref={ref}
      className={cn(" py-1 [&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}
const ForwardedTableBody = forwardRef(TableBody)
ForwardedTableBody.displayName = "TableBody"

//-------------------------------------------------------------------------//

interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {}

function TableFooter(
  { className, ...props }: TableFooterProps,
  ref: Ref<HTMLTableSectionElement>
) {
  return (
    <tfoot
      ref={ref}
      className={cn(
        "border-t py-1 bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}
const ForwardedTableFooter = forwardRef(TableFooter)
ForwardedTableFooter.displayName = "TableFooter"

//-------------------------------------------------------------------------//

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

function TableRow(
  { className, ...props }: TableRowProps,
  ref: Ref<HTMLTableRowElement>
) {
  return (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
        className
      )}
      {...props}
    />
  )
}
const ForwardedTableRow = forwardRef(TableRow)
ForwardedTableRow.displayName = "TableRow"

//-------------------------------------------------------------------------//

interface TableHeadProps extends HTMLAttributes<HTMLTableCellElement> {}

function TableHead(
  { className, ...props }: TableHeadProps,
  ref: Ref<HTMLTableCellElement>
) {
  return (
    <th
      ref={ref}
      className={cn(
        "h-10 px-2 text-left align-middle font-medium text-slate-500 dark:text-slate-400 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

const ForwardedTableHead = forwardRef(TableHead)
ForwardedTableHead.displayName = "TableHead"

//-------------------------------------------------------------------------//

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {}

function TableCell(
  { className, ...props }: TableCellProps,
  ref: Ref<HTMLTableCellElement>
) {
  return (
    <td
      ref={ref}
      className={cn(
        "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

const ForwardedTableCell = forwardRef(TableCell)
ForwardedTableCell.displayName = "TableCell"

//-------------------------------------------------------------------------//

interface TableCaptionProps extends HTMLAttributes<HTMLTableCaptionElement> {}

function TableCaption(
  { className, ...props }: TableCaptionProps,
  ref: Ref<HTMLTableCaptionElement>
) {
  return (
    <caption
      ref={ref}
      className={cn(
        "mt-4 text-sm text-slate-500 dark:text-slate-400",
        className
      )}
      {...props}
    />
  )
}

const ForwardedTableCaption = forwardRef(TableCaption)
ForwardedTableCaption.displayName = "TableCaption"

export {
  ForwardedTable as Table,
  ForwardedTableHeader as TableHeader,
  ForwardedTableBody as TableBody,
  ForwardedTableFooter as TableFooter,
  ForwardedTableHead as TableHead,
  ForwardedTableRow as TableRow,
  ForwardedTableCell as TableCell,
  ForwardedTableCaption as TableCaption,
}
