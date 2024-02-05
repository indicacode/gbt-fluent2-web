"use client"

import {Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport,} from "@/components/not-done/toast"
import {useToast} from "@/components/not-done/use-toast"

export function Toaster() {
    const {toasts} = useToast()

    return (
        <ToastProvider>
            {toasts.map(function ({id, title, description, action, ...props}) {
                return (
                    <Toast key={id} {...props}>
                        <div className="grid gap-1">
                            {title && <ToastTitle>{title}</ToastTitle>}
                            {description && (
                                <ToastDescription>{description}</ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose/>
                    </Toast>
                )
            })}
            <ToastViewport/>
        </ToastProvider>
    )
}
