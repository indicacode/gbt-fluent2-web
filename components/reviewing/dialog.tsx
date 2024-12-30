"use client"

import { cn } from "@/lib/utils"
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
  type DialogDescriptionProps,
  type DialogOverlayProps,
  type DialogTitleProps,
  type DialogContentProps as RadixDialogContentProps,
  type DialogProps as RadixDialogProps,
} from "@radix-ui/react-dialog"
import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react"

interface DialogProps extends RadixDialogProps {
  children: ReactNode
  nonmodal?: boolean
}

interface DialogContentProps extends RadixDialogContentProps {
  nonmodal?: boolean
  className?: string
}

export const DialogTrigger = Trigger
export const DialogPortal = Portal
export const DialogClose = Close

export function Dialog({ children, nonmodal, ...props }: DialogProps) {
  return (
    <Root {...props}>
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

export function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return (
    <Overlay
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
    <DialogPortal>
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
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
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
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  )
}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <Title
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
}: DialogDescriptionProps) {
  return (
    <Description
      className={cn("text-sm text-slate-400 dark:text-slate-300", className)}
      {...props}
    />
  )
}
