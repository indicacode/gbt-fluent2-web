"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { ComponentProps, ReactNode } from "react"
import { tv } from "tailwind-variants"

type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root> &
  React.HtmlHTMLAttributes<"div"> & {
    content: ReactNode
    appearance?: "normal" | "inverted"
    hideDelay?: number
    onVisibleChange?: (visible: boolean) => void
    positioning?: ComponentProps<typeof TooltipPrimitive.Content>["side"]
    relationship: "label" | "description" | "inaccessible"
    showDelay?: number
    visible?: boolean
    withArrow?: boolean
  }

const tooltipSlots = tv({
  slots: {
    tooltipContent:
      "z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs shadow-md",
    tooltipArrow: "shadow-md",
  },
  variants: {
    appearance: {
      normal: {
        tooltipContent:
          "bg-slate-900 text-white dark:bg-slate-50 dark:text-black",
        tooltipArrow: "fill-slate-900 dark:fill-slate-50",
      },
      inverted: {
        tooltipContent:
          "bg-slate-50 text-black dark:bg-slate-900 dark:text-white",
        tooltipArrow: "fill-slate-50 dark:fill-slate-900",
      },
    },
  },
  defaultVariants: { appearance: "normal" },
})

const { tooltipContent, tooltipArrow } = tooltipSlots({})

function Tooltip({
  content,
  appearance = "normal",
  positioning = "top",
  relationship = "label",
  showDelay = 250,
  hideDelay = 250,
  withArrow = false,
  onVisibleChange,
  className,
  children,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider
      delayDuration={showDelay}
      skipDelayDuration={hideDelay}
    >
      <TooltipPrimitive.Root onOpenChange={onVisibleChange} {...props}>
        <TooltipPrimitive.Trigger
          aria-label={
            relationship === "label" ? content?.toString() : undefined
          }
          aria-description={
            relationship === "description" ? content?.toString() : undefined
          }
          asChild
        >
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={positioning}
            sideOffset={4}
            className={tooltipContent({ appearance, className })}
          >
            {content}
            {withArrow && (
              <TooltipPrimitive.Arrow
                className={tooltipArrow({ appearance, className })}
              />
            )}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export default Tooltip
