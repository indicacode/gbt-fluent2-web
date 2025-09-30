"use client"

import {
  ErrorCircle24Regular,
  Info24Regular,
  Warning24Regular,
} from "@fluentui/react-icons"
import {
  Action,
  Close,
  Description,
  Provider,
  ToastProps as RadixToastProps,
  Root,
  Title,
  ToastActionProps,
  ToastCloseProps,
  ToastDescriptionProps,
  ToastTitleProps,
  ToastViewportProps,
  Viewport,
} from "@radix-ui/react-toast"
import { X } from "lucide-react"
import { HTMLAttributes, ReactElement } from "react"
import { tv, VariantProps } from "tailwind-variants"

import { cn } from "@/lib/utils"

const ToastProvider = Provider

const toastVariants = tv({
  slots: {
    toast:
      "group pointer-events-auto relative flex w-full flex-col items-center gap-2 overflow-hidden rounded-sm p-4 shadow-md transition-all " +
      "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]" +
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[swipe=move]:transition-none" +
      "data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full",
    toastViewport:
      "fixed top-0 z-100 flex max-h-screen min-w-fit flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-[420px]",
    toastAction:
      "ring-offset-background hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 hover:group-[.destructive]:border-destructive/30 bg-white text-black " +
      "hover:group-[.destructive]:bg-destructive hover:group-[.destructive]:text-destructive-foreground focus:group-[.destructive]:ring-destructive" +
      "inline-flex h-6 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:outline-hidden" +
      "focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    toastClose:
      "text-foreground/50 hover:text-foreground top-2 right-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 " +
      "group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:ring-2 focus:outline-hidden" +
      "focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600",
    toastIcon: "",
  },
  variants: {
    location: {
      topright: "",
      topleft: "",
      topcenter: "",
      bottomcenter: "",
      bottomleft: "",
      bottomright: "",
    },
    variant: {
      info: {
        toast: "border-[#d1d1d1] bg-[#f5f5f5]",
        toastIcon: "text-slate-500",
        toastAction: "border-[#d1d1d1] text-black",
      },
      warning: {
        toast: "border-[#fdcfb4] bg-[#fff9f5]",
        toastIcon: "text-[#ffaaaa]",
        toastAction: "border-[#ffaaaa] text-black",
      },
      error: {
        toast: "border-[#eeacb2] bg-[#fdf3f4]",
        toastIcon: "text-[#ff5555]",
        toastAction: "border-[#ff5555] text-black",
      },
      success: {
        toast: "border-[#9fd89f] bg-[#f1faf1]",
        toastIcon: "text-[#9fff9f]",
        toastAction: "border-[#9fff9f] text-black",
      },
    },
    messageBar: {
      true: {
        toast: "min-w-full border",
      },
    },
  },
  defaultVariants: {
    variant: "info",
  },
})

const { toast, toastViewport, toastAction, toastClose, toastIcon } =
  toastVariants({})

const ToastIcon = ({ variant }: VariantProps<typeof toastIcon>) => {
  function currentIcon(variant?: string) {
    if (variant === "info") {
      return <Info24Regular />
    }
    if (variant === "warning") {
      return <Warning24Regular />
    }
    if (variant === "error") {
      return <ErrorCircle24Regular />
    }
  }

  return <span className={toastIcon({ variant })}> {currentIcon(variant)}</span>
}

type ToastProps = VariantProps<typeof toast> &
  RadixToastProps &
  HTMLAttributes<HTMLLIElement>

function Toast({ className, variant, messageBar, ...props }: ToastProps) {
  return (
    <Root className={toast({ variant, messageBar, className })} {...props} />
  )
}

function ToastViewport({ className, ...props }: ToastViewportProps) {
  return <Viewport className={toastViewport({ className })} {...props} />
}

function ToastAction({ className, altText, ...props }: ToastActionProps) {
  return (
    <Action
      altText={altText}
      className={toastAction({ className })}
      {...props}
    />
  )
}

function ToastClose({ className, ...props }: ToastCloseProps) {
  return (
    <Close
      className={toastClose({
        className,
      })}
      toast-close=""
      {...props}
    >
      <X className="h-4 w-4" />
    </Close>
  )
}

function ToastTitle({ className, ...props }: ToastTitleProps) {
  return (
    <Title
      className={cn("text-sm font-semibold text-[#272727]", className)}
      {...props}
    />
  )
}

function ToastDescription({ className, ...props }: ToastDescriptionProps) {
  return (
    <Description
      className={cn("text-sm text-[#242424] opacity-90", className)}
      {...props}
    />
  )
}

type ToastActionElement = ReactElement<typeof ToastAction>

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastIcon,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
}
