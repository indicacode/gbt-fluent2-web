import React from "react"
import { tv, VariantProps } from "tailwind-variants"

//--------------------types--------------------//

type StatusBadgeProps = VariantProps<typeof statusBadge>

//--------------------------------------------//

const statusBadge = tv({
  base: "absolute bottom-0 right-0 aspect-square rounded-full",
  variants: {
    variant: {
      default: "rounded-full",
    },
    size: {
      sm: "h-2 w-2", // 12px
      md: "h-3 w-3", // 16px
      lg: "bottom-0.5 right-0.5 h-4 w-4", // 20px
      // icon: "h-1 w-1",
    },
    status: {
      online: "bg-green-500",
      offline: "bg-gray-500",
      away: "bg-yellow-500",
      busy: "bg-red-500",
      "do-not-disturb": "bg-purple-500",
    },
    shape: {
      circular: "rounded-full",
      rounded: "rounded-md",
      square: "rounded-none",
    },
    appearance: {
      filled: "bg-opacity-100",
      ghost: "bg-opacity-0",
      outline: "border border-current",
      tint: "bg-opacity-50",
    },
    iconPosition: {
      before: "flex-row-reverse",
      after: "flex-row",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

export function StatusBadge({
  status = "online",
  appearance = "filled",
  iconPosition = "before",
  shape = "circular",
  size = "default",
  variant = "default",
}: StatusBadgeProps) {
  return (
    <div
      className={statusBadge({
        status,
        appearance,
        iconPosition,
        shape,
        size,
        variant,
      })}
    />
  )
}
