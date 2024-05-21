"use client"

import * as React from "react"
import { Anchor, Content, Portal, Root, Trigger } from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = Root

const PopoverAnchor = Anchor

const PopoverTrigger = Trigger

// React.ElementRef<typeof Content>,
// React.ComponentPropsWithoutRef<typeof Content>

// See
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "rounded bg-slate-100 p-2 text-xs shadow-xl will-change-[transform,opacity] focus:outline-none dark:bg-slate-900" +
          " radix-state-open:animate-in radix-state-closed:animate-out radix-state-closed:fade-out-0 focus:ring-0" +
          " radix-state-closed:zoom-out-95 radix-state-open:fade-in-0 radix-state-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2" +
          " data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </Portal>
))
PopoverContent.displayName = Content.displayName

// const ForwardedPopoverContent = forwardRef(PopoverContent)
// ForwardedPopoverContent.displayName = Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
