import React from "react"
import { tv, VariantProps } from "tailwind-variants"

//--------------------types--------------------//

type StatusBadgeProps = VariantProps<typeof statusBadge>

//--------------------------------------------//

const statusBadge = tv({
  base: "absolute bottom-0 right-0 aspect-square max-h-2.5 w-2.5 max-w-2.5 rounded-full",
  variants: {
    variant: {
      default: "rounded-full",
      group: "rounded-[5px]",
    },
    size: {
      default: "h-8 w-8",
      sm: "h-4 w-4",
      lg: "h-14 w-14",
      icon: "h-6 w-6",
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
    size: "default",
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
