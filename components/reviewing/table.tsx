import { ComponentProps } from "react"
import { tv } from "tailwind-variants"

//--------------------------------styles------------------------------------//
const tableSlots = tv({
  slots: {
    // ---group--- //
    tableRoot: "relative w-full overflow-x-auto",
    table: "w-full min-w-[500px] caption-bottom rounded-sm text-sm",
    // ---group--- //

    tableHeader: "[&_tr]:border-b-[2px]",

    tableBody: "py-1 [&_tr:last-child]:border-0",

    tableFoot:
      "border-t-[2px] border-zinc-600 py-1 font-medium hover:bg-slate-100/50 dark:hover:bg-white/10 last:[&>tr]:border-b-0",

    tableRow:
      "border-b-[2px] border-zinc-600 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-white/10 dark:data-[state=selected]:bg-slate-800",

    tableHead:
      "h-10 px-2 text-left align-middle font-medium text-slate-500 dark:text-slate-200 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",

    tableCell:
      "p-2 py-1.5 whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",

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

type TableProps = ComponentProps<"table">

function Table({ className, ...props }: TableProps) {
  return (
    <div className={tableRoot()}>
      <table
        data-slot="table"
        className={table({ className })} {...props} />
    </div>
  )
}

//-------------------------------------------------------------------------//

type TableHeaderProps = ComponentProps<"thead">

function TableHeader({ className, ...props }: TableHeaderProps) {
  return <thead
    data-slot="table-header"
    className={tableHeader({ className })} {...props} />
}

//-------------------------------------------------------------------------//

type TableBodyProps = ComponentProps<"tbody">

function TableBody({ className, ...props }: TableBodyProps) {
  return <tbody
    data-slot="table-body"
    className={tableBody({ className })} {...props} />
}

//-------------------------------------------------------------------------//

type TableFooterProps = ComponentProps<"tfoot">

function TableFooter({ className, ...props }: TableFooterProps) {
  return <tfoot
    data-slot="table-footer"
    className={tableFoot({ className })} {...props} />
}

//-------------------------------------------------------------------------//

type TableRowProps = ComponentProps<"tr">

function TableRow({ className, ...props }: TableRowProps) {
  return <tr
    data-slot="table-row"
    className={tableRow({ className })} {...props} />
}

//-------------------------------------------------------------------------//

type TableHeadProps = ComponentProps<"th">

function TableHead({ className, ...props }: TableHeadProps) {
  return <th
    data-slot="table-head"
    className={tableHead({ className })} {...props} />
}

//-------------------------------------------------------------------------//

type TableCellProps = ComponentProps<"td">

function TableCell({ className, ...props }: TableCellProps) {
  return <td
    data-slot="table-cell"
    className={tableCell({ className })} {...props} />
}

//-------------------------------------------------------------------------//

type TableCaptionProps = ComponentProps<"caption">

function TableCaption({ className, ...props }: TableCaptionProps) {
  return <caption
    data-slot="table-caption"
    className={tableCaption({ className })} {...props} />
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
}
