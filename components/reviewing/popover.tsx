"use client"

import { Anchor, Content, Portal, Root, Trigger } from "@radix-ui/react-popover"
import * as React from "react"
import { ReactNode } from "react"

import { cn } from "@/lib/utils"

const Popover = Root

const PopoverAnchor = Anchor

const PopoverTrigger = Trigger

// React.ElementRef<typeof Content>,
// React.ComponentPropsWithoutRef<typeof Content>

// See
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content> & { container?: ReactNode }
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "rounded bg-slate-100 p-2 text-xs shadow-xl will-change-[transform,opacity] focus:outline-none dark:bg-slate-800" +
          " focus:ring-0 radix-state-closed:animate-out radix-state-closed:fade-out-0 radix-state-open:animate-in" +
          " data-[side=bottom]:slide-in-from-top-2 radix-state-closed:zoom-out-95 radix-state-open:fade-in-0 radix-state-open:zoom-in-95" +
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

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger }
