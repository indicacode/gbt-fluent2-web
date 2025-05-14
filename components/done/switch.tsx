"use client"

import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export function Switch({
  className,
  ...props
}: ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-brand-secondary dark:data-[state=checked]:bg-brand-secondary inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-slate-200 dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950 dark:data-[state=unchecked]:bg-slate-900",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-brand-secondary dark:bg-brand-secondary pointer-events-none block h-4 w-4 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-4 data-[state=checked]:bg-gray-50 data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-gray-800"
        )}
      />
    </SwitchPrimitive.Root>
  )
}
