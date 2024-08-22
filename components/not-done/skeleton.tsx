import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-900/20 dark:bg-slate-100/10",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
