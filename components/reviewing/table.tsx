import * as React from "react"
import { forwardRef, HTMLAttributes, Ref, TdHTMLAttributes } from "react"
import { tv } from "tailwind-variants" //--------------------------------styles------------------------------------//

//--------------------------------styles------------------------------------//
const tableSlots = tv({
  slots: {
    // ---group--- //
    tableRoot: "relative w-auto overflow-auto",
    table: "w-full caption-bottom rounded text-sm",
    // ---group--- //

    tableHeader: "[&_tr]:border-b-[2px]",

    tableBody: "py-1 [&_tr:last-child]:border-0",

    tableFoot:
      "border-t-[2px] border-zinc-600 py-1 font-medium hover:bg-slate-100/50 dark:hover:bg-white/10 [&>tr]:last:border-b-0",

    tableRow:
      "border-b-[2px] border-zinc-600 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-white/10 dark:data-[state=selected]:bg-slate-800",

    tableHead:
      "h-10 max-w-fit px-2 text-left align-middle font-medium text-slate-500 dark:text-slate-200 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",

    tableCell:
      "max-w-fit whitespace-nowrap p-2 py-1.5  [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",

    tableCaption: "mt-4 text-sm text-slate-500 dark:text-slate-400",
  },
  variants: {
    size: {},
  },
})
const {
  table,
  tableHeader,
  tableBody,
  tableFoot,
  tableRow,
  tableHead,
  tableCell,
  tableCaption,
  tableRoot,
} = tableSlots()
//--------------------------------styles------------------------------------//

type TableProps = HTMLAttributes<HTMLTableElement>

function TableRoot(
  { className, ...props }: TableProps,
  ref: Ref<HTMLTableElement>
) {
  return (
    <div className={tableRoot()}>
      <table ref={ref} className={table({ className })} {...props} />
    </div>
  )
}

const ForwardedTable = forwardRef(TableRoot)
ForwardedTable.displayName = "Table"

//-------------------------------------------------------------------------//

type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>

function TableHeader(
  { className, ...props }: TableHeaderProps,
  ref: Ref<HTMLTableSectionElement>
) {
  return <thead ref={ref} className={tableHeader({ className })} {...props} />
}

const ForwardedTableHeader = forwardRef(TableHeader)
ForwardedTableHeader.displayName = "TableHeader"

//-------------------------------------------------------------------------//

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>

function TableBody(
  { className, ...props }: TableBodyProps,
  ref: Ref<HTMLTableSectionElement>
) {
  return <tbody ref={ref} className={tableBody({ className })} {...props} />
}

const ForwardedTableBody = forwardRef(TableBody)
ForwardedTableBody.displayName = "TableBody"

//-------------------------------------------------------------------------//

type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>

function TableFooter(
  { className, ...props }: TableFooterProps,
  ref: Ref<HTMLTableSectionElement>
) {
  return (
    <tfoot
      ref={ref}
      className={tableFoot({
        className,
      })}
      {...props}
    />
  )
}

const ForwardedTableFooter = forwardRef(TableFooter)
ForwardedTableFooter.displayName = "TableFooter"

//-------------------------------------------------------------------------//

type TableRowProps = HTMLAttributes<HTMLTableRowElement>

function TableRow(
  { className, ...props }: TableRowProps,
  ref: Ref<HTMLTableRowElement>
) {
  return (
    <tr
      ref={ref}
      className={tableRow({
        className,
      })}
      {...props}
    />
  )
}

const ForwardedTableRow = forwardRef(TableRow)
ForwardedTableRow.displayName = "TableRow"

//-------------------------------------------------------------------------//

type TableHeadProps = HTMLAttributes<HTMLTableCellElement>

function TableHead(
  { className, ...props }: TableHeadProps,
  ref: Ref<HTMLTableCellElement>
) {
  return (
    <th
      ref={ref}
      className={tableHead({
        className,
      })}
      {...props}
    />
  )
}

const ForwardedTableHead = forwardRef(TableHead)
ForwardedTableHead.displayName = "TableHead"

//-------------------------------------------------------------------------//

type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>

function TableCell(
  { className, ...props }: TableCellProps,
  ref: Ref<HTMLTableCellElement>
) {
  return (
    <td
      ref={ref}
      className={tableCell({
        className,
      })}
      {...props}
    />
  )
}

const ForwardedTableCell = forwardRef(TableCell)
ForwardedTableCell.displayName = "TableCell"

//-------------------------------------------------------------------------//

type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>

function TableCaption(
  { className, ...props }: TableCaptionProps,
  ref: Ref<HTMLTableCaptionElement>
) {
  return (
    <caption ref={ref} className={tableCaption({ className })} {...props} />
  )
}

const ForwardedTableCaption = forwardRef(TableCaption)
ForwardedTableCaption.displayName = "TableCaption"

export {
  ForwardedTable as TableRoot,
  ForwardedTableHeader as TableHeader,
  ForwardedTableBody as TableBody,
  ForwardedTableFooter as TableFooter,
  ForwardedTableHead as TableHead,
  ForwardedTableRow as TableRow,
  ForwardedTableCell as TableCell,
  ForwardedTableCaption as TableCaption,
}
