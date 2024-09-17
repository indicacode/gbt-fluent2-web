"use client"

import { Root } from "@radix-ui/react-separator"
import { ComponentPropsWithoutRef, forwardRef } from "react"
import { tv } from "tailwind-variants"

type AlignOrientationReturn =
  | "horizontal_center"
  | "horizontal_start"
  | "horizontal_end"
  | "vertical_center"
  | "vertical_start"
  | "vertical_end"

interface DividerProps extends ComponentPropsWithoutRef<typeof Root> {
  variant?: "primary" | "subtle" | "brand" | "strong"
  orientation?: "horizontal" | "vertical"
  align?: "center" | "start" | "end"
  dashed?: boolean
}

const dividerSlots = tv({
  slots: {
    root: "flex gap-1 overflow-hidden",
    before: "shrink-0 border",
    after: "shrink-0 border",
  },
  variants: {
    dashed: {
      true: { before: "border-dashed", after: "border-dashed" },
    },
    variant: {
      primary: {
        before: "border-[#e0e0e0] dark:border-zinc-300",
        after: "border-[#e0e0e0] dark:border-zinc-300",
      },
      subtle: {
        before: "border-[#f0f0f0] dark:border-zinc-600",
        after: "border-[#f0f0f0] dark:border-zinc-600",
      },
      brand: { before: "border-brand-primary", after: "border-brand-primary" },
      strong: { before: "border-gray-400", after: "border-gray-400" },
    },
    align: {
      vertical_start: {
        root: "items-start",
        before: "min-h-[10%]",
        after: "min-h-full",
      },
      vertical_center: {
        root: "items-center",
        before: "min-h-full",
        after: "min-h-full",
      },
      vertical_end: {
        root: "items-end",
        before: "min-h-full",
        after: "min-h-[10%]",
      },
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
    align: "horizontal_center", // Changed default align to be generic
    orientation: "horizontal",
  },
})

function alignOrientation(
  align: "center" | "start" | "end",
  orientation: "horizontal" | "vertical"
): AlignOrientationReturn {
  return `${orientation}_${align}`
}

const { root, before, after } = dividerSlots()

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      variant = "primary",
      align = "center",
      dashed = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const alignment = alignOrientation(align, orientation)

    return (
      <Root
        ref={ref}
        className={root({ align: alignment, orientation, variant, className })}
        {...props}
      >
        <span
          className={before({ align: alignment, orientation, dashed, variant })}
        />
        <div className="flex shrink-0">{children}</div>
        <span
          className={after({ align: alignment, orientation, dashed, variant })}
        />
      </Root>
    )
  }
)

Divider.displayName = "Divider"
export { Divider }
