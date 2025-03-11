"use client"

import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

export const HoverCard = HoverCardPrimitive.Root

export const HoverCardTrigger = HoverCardPrimitive.Trigger

export function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return (
    <HoverCardPrimitive.Content
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        className
      )}
      {...props}
    />
  )
}
