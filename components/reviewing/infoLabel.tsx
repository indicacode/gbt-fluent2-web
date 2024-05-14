import { ReactNode } from "react"
import {
  Info12Regular,
  Info16Regular,
  Info24Regular,
} from "@fluentui/react-icons"
import * as PopoverRadix from "@radix-ui/react-popover"
import { tv } from "tailwind-variants"

import { Label } from "@/components/reviewing/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/reviewing/popover"

const labelInfo = tv({
  slots: {
    container:
      "relative flex h-fit max-h-fit w-fit max-w-fit justify-center gap-0.5 align-middle",
  },
  variants: {
    size: {
      sm: { container: "text-xs" },
      md: { container: "text-sm" },
      lg: { container: "text-base" },
    },
  },
})

const { container } = labelInfo()

function SizedIcons({ size = "md" }: { size: "sm" | "md" | "lg" }) {
  return (
    <>
      {size === "sm" && <Info12Regular />}
      {size === "md" && <Info16Regular />}
      {size === "lg" && <Info24Regular />}
    </>
  )
}

export default function InfoLabel({
  children,
  size = "md",
}: {
  children: ReactNode
  size?: "sm" | "md" | "lg"
}) {
  return (
    <div className={container({})}>
      <Label size={size}>{children}</Label>

      <Popover>
        <PopoverTrigger asChild className="max-w-fit">
          <SizedIcons size={size} />
        </PopoverTrigger>
        <PopoverContent align="start" side="top">
          {children}
          <PopoverRadix.Arrow className="fill-white" />
        </PopoverContent>
      </Popover>
    </div>
  )
}
