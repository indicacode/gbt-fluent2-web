import { cn } from "@/lib/utils"

import { Anchor, Content, Portal, Root, Trigger } from "@radix-ui/react-popover"
import { ComponentProps } from "react"

export function Popover({ ...props }: React.ComponentProps<typeof Root>) {
  return <Root data-slot="popover" {...props} />
}

export function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof Trigger>) {
  return <Trigger data-slot="popover-trigger" {...props} />
}

function PopoverAnchor({ ...props }: React.ComponentProps<typeof Anchor>) {
  return <Anchor data-slot="popover-anchor" {...props} />
}

export function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: ComponentProps<typeof Content>) {
  return (
    <Portal>
      <Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "rounded-sm bg-slate-100 p-2 text-xs shadow-xl will-change-[transform,opacity] focus:outline-hidden dark:bg-slate-800" +
            " radix-state-closed:animate-out radix-state-closed:fade-out-0 radix-state-open:animate-in focus:ring-0" +
            " data-[side=bottom]:slide-in-from-top-2 radix-state-closed:zoom-out-95 radix-state-open:fade-in-0 radix-state-open:zoom-in-95" +
            " data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </Portal>
  )
}
