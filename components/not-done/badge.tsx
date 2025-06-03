import * as React from "react"
import { tv, VariantProps } from "tailwind-variants"

import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

const badgeVariants = tv({
  base: "inline-flex items-center rounded-md border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 focus:outline-hidden dark:border-slate-800 dark:focus:ring-slate-300",
  variants: {
    variant: {
      default:
        "border-transparent bg-slate-900 text-slate-50 shadow-sm hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
      secondary:
        "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
      destructive:
        "border-transparent bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80",
      outline: "text-slate-950 dark:text-slate-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
