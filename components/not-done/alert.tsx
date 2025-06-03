import { tv, VariantProps } from "tailwind-variants"

import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

const alertVariants = tv({
  base: "relative w-full rounded-lg border border-slate-200 px-4 py-3 text-sm dark:border-slate-800 [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg]:text-slate-950 dark:[&>svg]:text-slate-50 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7",
  variants: {
    variant: {
      default: "bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
      destructive:
        "border-red-500/50 text-red-500 dark:border-red-500 dark:border-red-900/50 dark:dark:border-red-900 dark:text-red-900 [&>svg]:text-red-500 dark:[&>svg]:text-red-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function Alert({
  className,
  variant,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      role="alert"
      className={alertVariants({ variant, className })}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertDescription, AlertTitle }
