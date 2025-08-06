import {
  Info12Regular,
  Info16Regular,
  Info24Regular,
} from "@fluentui/react-icons"
import * as PopoverRadix from "@radix-ui/react-popover"
import { ReactNode } from "react"
import { tv } from "tailwind-variants"

import { Label } from "@/components/done/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/reviewing/popover"

const labelInfo = tv({
  slots: {
    container:
      "relative flex h-fit max-h-fit w-fit max-w-fit justify-center gap-1 align-middle",
  },
  variants: {
    size: {
      small: { container: "text-xs" },
      medium: { container: "text-sm" },
      large: { container: "text-base" },
    },
  },
})

const { container } = labelInfo()

function SizedIcons({ size = "medium" }: { size: "small" | "medium" | "large" }) {
  return (
    <>
      {size === "small" && <Info12Regular />}
      {size === "medium" && <Info16Regular />}
      {size === "large" && <Info24Regular />}
    </>
  )
}

export default function InfoLabel({
  children,
  size = "medium",
}: {
  children: ReactNode
  size?: "small" | "medium" | "large"
}) {
  return (
    <div className={container({})}>
      <Label size={size}>{children}</Label>
      <Popover>
        <PopoverTrigger className="max-w-fit">
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
