"use client"

import { Root } from "@radix-ui/react-label"
import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const label = tv({
  base: "flex justify-center gap-0.5 align-middle text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  variants: {
    disabled: {
      true: "cursor-not-allowed opacity-50",
    },
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
  },
})

export type LabelProps = VariantProps<typeof label> &
  Omit<ComponentProps<typeof Root>, "disabled"> & {
    required?: boolean
    disabled?: boolean
    children: ReactNode
  }

export function Label({
  className,
  required,
  children,
  disabled,
  size,
  ...props
}: LabelProps) {
  return (
    <Root
      data-slot="label"
      className={label({ className, size, disabled })}
      {...props}
    >
      {children}
      {required && <span className="text-red-500">*</span>}
    </Root>
  )
}
