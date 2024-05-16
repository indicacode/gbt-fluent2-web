"use client"

import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactElement,
} from "react"
import {
  Action,
  Close,
  Description,
  Provider,
  Root,
  Title,
  Viewport,
} from "@radix-ui/react-toast"
import { X } from "lucide-react"
import { tv, type VariantProps } from "tailwind-variants"

import { cn } from "@/lib/utils"

const ToastProvider = Provider

const toastVariants = tv({
  slots: {
    toast:
      "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-sm p-4 shadow-md transition-all" +
      "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]" +
      "data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80" +
      "data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    toastViewport:
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    toastAction:
      "ring-offset-background hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30" +
      "group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive" +
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:outline-none" +
      "focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    toastClose:
      "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100" +
      "focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50" +
      "group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
  },
  variants: {
    variant: {
      default: { toast: "text-foreground  bg-white" },
      destructive: {
        toast:
          "destructive border-destructive bg-destructive text-destructive-foreground group",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const { toast, toastViewport, toastAction, toastClose } = toastVariants({})

const Toast = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <Root ref={ref} className={toast({ variant, className })} {...props} />
})
Toast.displayName = Root.displayName

const ToastViewport = forwardRef<
  ElementRef<typeof Viewport>,
  ComponentPropsWithoutRef<typeof Viewport>
>(({ className, ...props }, ref) => (
  <Viewport ref={ref} className={toastViewport({ className })} {...props} />
))
ToastViewport.displayName = Viewport.displayName

const ToastAction = forwardRef<
  ElementRef<typeof Action>,
  ComponentPropsWithoutRef<typeof Action>
>(({ className, ...props }, ref) => (
  <Action ref={ref} className={toastAction({ className })} {...props} />
))
ToastAction.displayName = Action.displayName

const ToastClose = forwardRef<
  ElementRef<typeof Close>,
  ComponentPropsWithoutRef<typeof Close>
>(({ className, ...props }, ref) => (
  <Close
    ref={ref}
    className={toastClose({
      className,
    })}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </Close>
))
ToastClose.displayName = Close.displayName

const ToastTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = Title.displayName

const ToastDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = Description.displayName

type ToastProps = ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
