import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

function Tabs({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-lg bg-transparent p-1 text-slate-500 dark:text-slate-400",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  value,
  ...props
}: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      value={value}
      className={cn(
        "inline-flex items-center justify-center px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-b-slate-950 data-[state=active]:text-slate-950 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:border-b-2 dark:data-[state=active]:border-b-white dark:data-[state=active]:text-slate-50",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  value,
  ...props
}: ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      value={value}
      className={cn(
        "mt-2 ring-offset-white focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:text-slate-200 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger }
