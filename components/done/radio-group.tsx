"use client"

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

function RadioGroup({
  className,
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-2", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  value,
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      value={value}
      className={cn(
        "light:border-slate-200 aspect-square h-4 w-4 rounded-full border border-slate-900 text-slate-900 shadow-sm focus:outline-hidden focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:text-slate-50 dark:focus-visible:ring-slate-300",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center"
      >
        <div className="fill-primary bg-brand-primary h-2 w-2 rounded-full" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
