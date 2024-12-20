"use client"

import { cn } from "@/lib/utils"
import * as ProgressPrimitive from "@radix-ui/react-progress"

function Progress({ className, value, ...props }) {
  return (
    <ProgressPrimitive.Root
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-slate-900/20 dark:bg-slate-50/20",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-slate-900 transition-all duration-500 dark:bg-slate-50"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}
export { Progress }
