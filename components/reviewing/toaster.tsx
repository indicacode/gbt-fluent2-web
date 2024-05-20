"use client"

import { useMediaQuery } from "@/utils/use-media-query"

import { useToast } from "@/components/reviewing/use-toast"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastIcon,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast"

export function Toaster() {
  const { toasts } = useToast()

  const isMobile = useMediaQuery(["(max-width: 640px)"], {
    ssr: true,
    fallback: [false],
  })[0]

  return (
    <ToastProvider>
      {toasts.map(
        ({
          multiline = false,
          description,
          variant,
          action,
          title,
          id,
          ...props
        }) => {
          console.log(!multiline && !isMobile && "sometyhing")
          return (
            <Toast variant={variant} key={id} {...props}>
              <div className="flex w-full items-center gap-2">
                <ToastIcon variant={variant} />
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
                {!multiline && !isMobile && action}
                <ToastClose />
              </div>
              {(multiline || isMobile) && (
                <div className="flex w-full gap-2">
                  <div className="flex w-full" /> {action}
                </div>
              )}
            </Toast>
          )
        }
      )}
      <ToastViewport />
    </ToastProvider>
  )
}
