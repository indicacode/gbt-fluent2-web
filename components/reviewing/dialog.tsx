"use client"

import { cn } from "@/lib/utils"
import {
  Close,
  Content,
  Description,
  type DialogDescriptionProps,
  type DialogTitleProps,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-dialog"
import { Children, cloneElement, ComponentProps, isValidElement, type ReactElement, type ReactNode } from "react"

interface DialogProps extends ComponentProps<typeof Root> {
  children: ReactNode
  nonmodal?: boolean
}

interface DialogContentProps extends ComponentProps<typeof Content> {
  nonmodal?: boolean
  className?: string
}

function DialogTrigger({ ...props }: ComponentProps<typeof Trigger>) {
  return <Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({ ...props }: ComponentProps<typeof Portal>) {
  return <Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({ ...props }: ComponentProps<typeof Close>) {
  return <Close data-slot="dialog-close" {...props} />
}

export function Dialog({ children, nonmodal, ...props }: DialogProps) {
  return (
    <Root
      data-slot="dialog" {...props}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<DialogContentProps>, {
            nonmodal,
          })
        }
        return child
      })}
    </Root>
  )
}

export function DialogOverlay({ className, ...props }: ComponentProps<typeof Overlay>) {
  return (
    <Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-[#00000066]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

export function DialogContent({
  className,
  onInteractOutside,
  nonmodal,
  children,
  ...props
}: DialogContentProps) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <Content
        onInteractOutside={(e) => {
          if (nonmodal) {
            e.preventDefault()
            e.stopPropagation()
          }
          onInteractOutside?.(e)
        }}
        className={cn(
          // Base styles
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg",
          "translate-x-[-50%] translate-y-[-50%] gap-4",
          "border border-slate-200 bg-white p-6",
          "text-sm text-black shadow-lg duration-200",
          "sm:rounded-lg",
          // Dark mode
          "dark:border-slate-800 dark:bg-gray-800 dark:text-white",
          // Animations
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          className
        )}
        {...props}
      >
        {children}
      </Content>
    </DialogPortal>
  )
}

export function DialogHeader({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )}
      {...props}
    />
  )
}

export function DialogFooter({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  )
}

export function DialogTitle({ className, ...props }: ComponentProps<typeof Title>) {
  return (
    <Title
      data-slot="dialog-title"
      className={cn(
        "text-xl leading-none font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

export function DialogDescription({
  className,
  ...props
}: ComponentProps<typeof .Description>) {
  return (
    <Description
      data-slot="dialog-description"
      className={cn("text-sm text-slate-400 dark:text-slate-300", className)}
      {...props}
    />
  )
}
