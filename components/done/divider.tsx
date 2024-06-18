"use client"

import * as React from "react"
import { ComponentPropsWithoutRef, forwardRef, Ref } from "react"
import { Root } from "@radix-ui/react-separator"
import { tv } from "tailwind-variants"

function alignOrientation(
  align: "center" | "start" | "end",
  orientation: "horizontal" | "vertical"
) {
  if (orientation === "horizontal") {
    if (align === "center") return "horizontal_center"
    if (align === "start") return "horizontal_start"
    if (align === "end") return "horizontal_end"
  }
  if (orientation === "vertical") {
    if (align === "center") return "vertical_center"
    if (align === "start") return "vertical_start"
    if (align === "end") return "vertical_end"
  }
  return false
}

const dividerSlots = tv({
  slots: {
    root: "flex gap-1 overflow-hidden",
    before: "shrink-0  border",
    after: "shrink-0  border",
  },
  variants: {
    dashed: {
      true: { before: "border-dashed", after: "border-dashed" },
    },
    variant: {
      primary: {
        before: "border-[#e0e0e0] dark:border-zinc-300 ",
        after: "border-[#e0e0e0] dark:border-zinc-300 ",
      },
      subtle: {
        before: "border-[#f0f0f0] dark:border-zinc-600 ",
        after: "border-[#f0f0f0] dark:border-zinc-600 ",
      },
      brand: { before: "border-brand-primary", after: "border-brand-primary" },
      strong: { before: "border-gray-400", after: "border-gray-400" },
    },
    align: {
      vertical_start: {
        root: " items-start",
        before: "min-h-[10%]",
        after: "min-h-full",
      },
      vertical_center: {
        root: " items-center",
        before: "min-h-full",
        after: "min-h-full",
      },
      vertical_end: {
        root: "items-end",
        before: "min-h-full",
        after: "min-h-[10%]",
      },
      //---------------------//
      horizontal_start: {
        root: "justify-start",
        before: "min-w-[10%]",
        after: "w-full",
      },
      horizontal_center: {
        root: "justify-center",
        before: "w-full",
        after: "w-full",
      },
      horizontal_end: {
        root: "justify-end",
        before: "w-full",
        after: "min-w-[10%]",
      },
      false: "",
    },

    orientation: {
      horizontal: {
        root: "h-fit w-full min-w-fit flex-row items-center",
        before: "max-h-[1px] min-h-[1px]",
        after: "max-h-[1px] min-h-[1px]",
      },
      vertical: {
        root: "h-full min-w-[1px] max-w-fit flex-col justify-center",
        before: "min-w-[1px] max-w-[1px]",
        after: "min-w-[1px] max-w-[1px]",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    vertical_align: "center",
    horizontal_align: "center",
    orientation: "horizontal",
  },
})

const { root, before, after } = dividerSlots()

interface DividerProps extends ComponentPropsWithoutRef<typeof Root> {
  variant?: "primary" | "subtle" | "brand" | "strong"
  orientation?: "horizontal" | "vertical"
  align?: "center" | "start" | "end"
  dashed?: boolean
}

function Divider(
  {
    orientation = "vertical",
    variant = "primary",
    decorative = true,
    align = "center",
    dashed = false,
    className,
    children,
    ...props
  }: DividerProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <Root
      ref={ref}
      className={root({
        align: alignOrientation(align, orientation),
        orientation,
        variant,
        className,
      })}
      {...props}
    >
      <span
        className={before({
          align: alignOrientation(align, orientation),
          orientation,
          dashed,
          variant,
        })}
      />
      <div className="flex shrink-0">{children}</div>
      <span
        className={after({
          align: alignOrientation(align, orientation),
          orientation,
          dashed,
          variant,
        })}
      />
    </Root>
  )
}

Divider.displayName = "Divider"
const forwardedDivider = forwardRef(Divider)
export { forwardedDivider as Divider }
