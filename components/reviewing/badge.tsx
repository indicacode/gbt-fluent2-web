import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import * as React from "react"
import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

type badgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
    as?: "div"
    icon?: ReactNode
    iconPosition?: "before" | "after"
  }

const badgeVariants = tv({
  base: "inline-flex items-center gap-1 font-semibold transition-colors focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 focus:outline-hidden dark:focus:ring-slate-300",
  variants: {
    appearance: {
      filled: "shadow-sm",
      ghost: "!bg-transparent !text-slate-900",
      outline: "border !border-slate-900 !bg-transparent !text-slate-900",
      tint: "border !border-slate-400 !bg-transparent !text-slate-900 !bg-slate-300",
    },
    size: {
      tiny: "h-2 min-w-2 px-[0.2rem] py-[1px] text-[0.30rem]",
      "extra-small": "h-3 min-w-3 px-[0.3rem] text-[0.45rem]",
      small: "h-4 min-w-4 px-[0.4rem] py-[0.025] text-[0.60rem]",
      medium: "h-5 min-w-5 px-[0.5rem] py-[0.125] text-[0.75rem]",
      large: "h-6 min-w-6 px-[0.6rem] py-[0.225] text-[0.9rem]",
      "extra-large": "h-7 min-w-7 px-[0.7rem] py-[0.325] text-[1.05rem]",
    },
    shape: {
      square: "rounded-none",
      rounded: "rounded-md",
      circular: "rounded-full",
    },
    color: {
      brand:
        "bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
      danger:
        "bg-red-500 text-white hover:bg-red-600 dark:bg-red-700 dark:text-white dark:hover:bg-red-800",
      important:
        "bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-700 dark:text-white dark:hover:bg-yellow-800",
      informative:
        "bg-green-500 text-white hover:bg-green-600 dark:bg-green-700 dark:text-white dark:hover:bg-green-800",
      severe:
        "bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-700 dark:text-white dark:hover:bg-orange-800",
      subtle:
        "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700",
      success:
        "bg-teal-500 text-white hover:bg-teal-600 dark:bg-teal-700 dark:text-white dark:hover:bg-teal-800",
      warning:
        "bg-yellow-400 text-black hover:bg-yellow-500 dark:bg-yellow-600 dark:text-black dark:hover:bg-yellow-700",
    },
  },
  defaultVariants: {
    color: "brand",
    size: "medium",
    shape: "circular",
  },
})

function Badge({
  className,
  appearance,
  asChild = false,
  size,
  shape,
  children,
  color,
  icon,
  iconPosition = "before",
  as = "div",
  ...props
}: badgeProps) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ appearance, size, shape, color }),
        className
      )}
      {...props}
    >
      {iconPosition === "before" ? icon : ""}
      {children}
      {iconPosition === "after" ? icon : ""}
    </Comp>
  )
}

export { Badge, badgeVariants }
