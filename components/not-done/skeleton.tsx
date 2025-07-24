import { cn } from "@/lib/utils"
import { tv } from "tailwind-variants"

type SkeletonProps = React.ComponentProps<"div"> & {
  animation?: "wave" | "pulse"
  appearance?: "opaque" | "translucent"
  shape?: "circle" | "rectangle" | "square"
  size?:
    | 8
    | 12
    | 16
    | 20
    | 24
    | 28
    | 32
    | 36
    | 40
    | 48
    | 56
    | 64
    | 72
    | 96
    | 120
    | 128
}

const skeletonVariants = tv({
  variants: {
    animation: { wave: "animate-wave", pulse: "animate-pulse" },
    appearance: { opaque: "opacity-100", translucent: "opacity-10" },
    shape: {
      circle: "rounded-full",
      rectangle: "rounded-md",
      square: "rounded-none",
    },
    size: {
      8: "h-[8px]",
      12: "h-[12px]",
      16: "h-[16px]",
      20: "h-[20px]",
      24: "h-[24px]",
      28: "h-[28px]",
      32: "h-[32px]",
      36: "h-[36px]",
      40: "h-[40px]",
      48: "h-[48px]",
      56: "h-[56px]",
      64: "h-[64px]",
      72: "h-[72px]",
      96: "h-[96px]",
      120: "h-[120px]",
      128: "h-[128px]",
    },
  },
  defaultVariants: {
    animation: "wave",
    appearance: "opaque",
    shape: "rectangle",
  },
})

function Skeleton({
  animation,
  appearance,
  shape,
  size,
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        skeletonVariants({ animation, appearance, shape, size }),
        "bg-accent animate-pulse bg-gray-200",
        className
      )}
      {...props}
    />
  )
}

export default { Skeleton }
