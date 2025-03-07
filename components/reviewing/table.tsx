import { ComponentProps } from "react"
import { tv } from "tailwind-variants"

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

export function Table({ className, ...props }: ComponentProps<"table">) {
  return (
    <div className={tableRoot()}>
      <table data-slot="table" className={table({ className })} {...props} />
    </div>
  )
}

export function TableHeader({ className, ...props }: ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={tableHeader({ className })}
      {...props}
    />
  )
}

export function TableBody({ className, ...props }: ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={tableBody({ className })}
      {...props}
    />
  )
}

export function TableFooter({ className, ...props }: ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={tableFoot({ className })}
      {...props}
    />
  )
}

export function TableRow({ className, ...props }: ComponentProps<"tr">) {
  return (
    <tr data-slot="table-row" className={tableRow({ className })} {...props} />
  )
}

export function TableHead({ className, ...props }: ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={tableHead({ className })}
      {...props}
    />
  )
}

export function TableCell({ className, ...props }: ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={tableCell({ className })}
      {...props}
    />
  )
}

export function TableCaption({
  className,
  ...props
}: ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={tableCaption({ className })}
      {...props}
    />
  )
}
