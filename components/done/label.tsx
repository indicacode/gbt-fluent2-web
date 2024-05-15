"use client"

import { ComponentPropsWithoutRef, forwardRef, LegacyRef } from "react"
import { Root } from "@radix-ui/react-label"
import { tv, VariantProps } from "tailwind-variants"

const label = tv({
  base: "flex justify-center gap-0.5 align-middle text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
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

export interface LabelProps
  extends VariantProps<typeof label>,
    ComponentPropsWithoutRef<typeof Root> {
  required?: boolean
}

function Label(
  { className, required, children, disabled, size, ...props }: LabelProps,
  ref: LegacyRef<HTMLLabelElement>
) {
  return (
    <Root ref={ref} className={label({ className, size, disabled })} {...props}>
      {children}
      {required && <span className="text-red-500">*</span>}
    </Root>
  )
}

const ForwardedLabel = forwardRef(Label)
ForwardedLabel.displayName = Root.displayName

export { ForwardedLabel as Label }
