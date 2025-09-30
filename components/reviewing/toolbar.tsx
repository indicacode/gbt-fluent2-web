"use client"

import * as ToolbarPrimitive from "@radix-ui/react-toolbar"
import { tv } from "tailwind-variants"

const toolbarVariants = tv({
  variants: {
    size: {
      small: "px-2 py-1 text-sm",
      medium: "px-3 py-2 text-base",
      large: "px-5 py-3 text-xl",
    },
    vertical: {
      true: "flex flex-col",
      false: "flex flex-row",
    },
  },
  defaultVariants: { size: "medium", vertical: false },
})

type ToolbarProps = {
  size?: "small" | "medium" | "large"
  vertical?: boolean
  checkedValues: (option: string[]) => void
  defaultCheckedValues: (option: string[]) => void
  onCheckedValueChange: (option: string[]) => void
} & React.HTMLAttributes<HTMLDivElement>

function Toolbar({size, ...props }: ToolbarProps) {
  return <ToolbarPrimitive.Root></ToolbarPrimitive.Root>
}

type ToolbarButtonProps = {}

function ToolbarButton({ ...props }: ToolbarButtonProps) {
  return <ToolbarPrimitive.Root></ToolbarPrimitive.Root>
}

type ToolbarDividerProps = {}

function ToolbarDivider({ ...props }: ToolbarDividerProps) {
  return <ToolbarPrimitive.Root></ToolbarPrimitive.Root>
}

type ToolbarGroupProps = {}

function ToolbarGroup({ ...props }: ToolbarGroupProps) {
  return <ToolbarPrimitive.Root></ToolbarPrimitive.Root>
}

type ToolbarRadioButtonProps = {}

function ToolbarRadioButton({ ...props }: ToolbarRadioButtonProps) {
  return <ToolbarPrimitive.Root></ToolbarPrimitive.Root>
}

type ToolbarRadioGroupProps = {}

function ToolbarRadioGroup({ ...props }: ToolbarRadioGroupProps) {
  return <ToolbarPrimitive.Root></ToolbarPrimitive.Root>
}

type ToolbarToogleButtonProps = {}

function ToolbarToogleButton({ ...props }: ToolbarToogleButtonProps) {
  return <ToolbarPrimitive.Root></ToolbarPrimitive.Root>
}

export {
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  ToolbarGroup,
  ToolbarRadioButton,
  ToolbarRadioGroup,
  ToolbarToogleButton,
}
