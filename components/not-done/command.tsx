import * as React from "react"
import { ComponentPropsWithoutRef, forwardRef, Ref } from "react"
import { DialogProps } from "@radix-ui/react-dialog"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Command as CommandPrimitive } from "cmdk"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/not-done/dialog"

type CommandProps = ComponentPropsWithoutRef<typeof CommandPrimitive> & {}

function Command(
  { className, ...props }: CommandProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <CommandPrimitive
      ref={ref}
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        className
      )}
      {...props}
    />
  )
}

Command.displayName = CommandPrimitive.displayName
const ForwardedCommand = forwardRef(Command)

type CommandDialogProps = DialogProps & {}

function CommandDialog({ children, ...props }: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

type CommandInputProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Input
> & {}

function CommandInput(
  { className, ...props }: CommandInputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
      <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          className
        )}
        {...props}
      />
    </div>
  )
}

CommandInput.displayName = CommandPrimitive.Input.displayName
const ForwardedCommandInput = forwardRef(CommandInput)

type CommandListProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.List
> & {}

function CommandList(
  { className, ...props }: CommandListProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <CommandPrimitive.List
      ref={ref}
      className={cn(
        "max-h-[300px] overflow-y-auto overflow-x-hidden",
        className
      )}
      {...props}
    />
  )
}

CommandList.displayName = CommandPrimitive.List.displayName
const ForwardedCommandList = forwardRef(CommandList)

type CommandEmptyProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Empty
> & {}

function CommandEmpty(props: CommandEmptyProps, ref: Ref<HTMLDivElement>) {
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}
CommandEmpty.displayName = CommandPrimitive.Empty.displayName
const ForwardedCommandEmpty = forwardRef(CommandEmpty)

type CommandGroupProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Group
> & {}

function CommandGroup(
  { className, ...props }: CommandGroupProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        className
      )}
      {...props}
    />
  )
}

CommandGroup.displayName = CommandPrimitive.Group.displayName
const ForwardedCommandGroup = forwardRef(CommandGroup)

type CommandSeparatorProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Separator
> & {}

function CommandSeparator(
  { className, ...props }: CommandSeparatorProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cn("-mx-1 h-px bg-slate-200 dark:bg-slate-800", className)}
      {...props}
    />
  )
}

CommandSeparator.displayName = CommandPrimitive.Separator.displayName
const ForwardedCommandSeparator = forwardRef(CommandSeparator)

// type CommandItemProps = extends ComponentProps<typeof CommandPrimitive.Item> {}
type CommandItemProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Item
> & {}

function CommandItem(
  { className, ...props }: CommandItemProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-slate-100 aria-selected:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50",
        className
      )}
      {...props}
    />
  )
}

CommandItem.displayName = CommandPrimitive.Item.displayName
const ForwardedCommandItem = forwardRef(CommandItem)

interface ComandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
  //TODO this is empty
}

function CommandShortcut({ className, ...props }: ComandShortcutProps) {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400",
        className
      )}
      {...props}
    />
  )
}

CommandShortcut.displayName = "CommandShortcut"

export {
  ForwardedCommand as Command,
  CommandDialog,
  ForwardedCommandInput as CommandInput,
  ForwardedCommandList as CommandList,
  ForwardedCommandEmpty as CommandEmpty,
  ForwardedCommandGroup as CommandGroup,
  ForwardedCommandItem as CommandItem,
  CommandShortcut,
  ForwardedCommandSeparator as CommandSeparator,
}
