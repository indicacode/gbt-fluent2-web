import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Command as CommandPrimitive } from "cmdk"
import * as React from "react"
import { ComponentProps } from "react"

import { cn } from "@/lib/utils"

import { Dialog, DialogContent } from "./dialog"

type CommandProps = ComponentProps<typeof CommandPrimitive> & {}

export function Command({ className, ...props }: CommandProps) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )}
      {...props}
    />
  )
}

type CommandDialogProps = ComponentProps<typeof Dialog> & {}

export function CommandDialog({ children, ...props }: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

type CommandInputProps = ComponentProps<typeof CommandPrimitive.Input> & {
  rootClassName?: string
}

export function CommandInput({
  className,
  rootClassName,
  ...props
}: CommandInputProps) {
  return (
    <div
      data-slot="command-input-wrapper"
      className={cn("flex items-center border-b px-3", rootClassName)}
      cmdk-input-wrapper=""
    >
      <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

type CommandListProps = ComponentProps<typeof CommandPrimitive.List> & {}

export function CommandList({ className, ...props }: CommandListProps) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-[300px] overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

type CommandEmptyProps = ComponentProps<typeof CommandPrimitive.Empty> & {}

export function CommandEmpty(
  props: CommandEmptyProps,

) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}

type CommandGroupProps = ComponentProps<typeof CommandPrimitive.Group> & {}

export function CommandGroup(
  { className, ...props }: CommandGroupProps,

) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      )}
      {...props}
    />
  )
}

type CommandSeparatorProps = ComponentProps<typeof CommandPrimitive.Separator> & {}

export function CommandSeparator({
  className,
  ...props
}: CommandSeparatorProps) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  )
}

type CommandItemProps = ComponentProps<typeof CommandPrimitive.Item>

export function CommandItem({ className, ...props }: CommandItemProps) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default items-center rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

interface ComandShortcutProps extends ComponentProps<"span"> {}

export function CommandShortcut({ className, ...props }: ComandShortcutProps) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}
