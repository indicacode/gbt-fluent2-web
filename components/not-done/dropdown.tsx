"use client"

import * as React from "react"
import { PiCaretDown, PiCheck } from "react-icons/pi"

import {
  Command,
  CommandGroup,
  CommandItem,
} from "@/components/not-done/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover"
import { tv } from "tailwind-variants"

const dropdownVariants = tv({
  variants: {
    size: { small: "text-xs", medium: "text-base", large: "text-xl" },
    disabled: { true: "cursor-not-allowed opacity-50" },
    appearance: {
      outline: "border border-gray-500",
      underline: "",
      "filled-darker": "bg-neutral-100",
      "filled-lighter": "bg-white",
      "filled-darker-shadow": "bg-neutral-100 shadow-2xl",
      "filled-lighter-shadow": "bg-white shadow-2xl",
    },
  },
  defaultVariants: { size: "medium", appearance: "outline" },
})

type DropdownVariantProps = Parameters<typeof dropdownVariants>[0]

type DropdownProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> &
  DropdownVariantProps & {
    onOptionSelect?: (option: string) => void
    onOpenChange?: (open: boolean) => void
    multiselect?: boolean
    defaultSelectedOptions?: string[]
    selectedOptions?: string[]
    appearance?: "outline" | "underline" | "filled-darker" | "filled-lighter"
    clearable?: boolean
    defaultOpen?: boolean
    disableAutoFocus?: boolean
    inlinePopup?: boolean
    size?: "small" | "medium" | "large"
    placeholder?: string
    open?: boolean
  }

function Dropdown({
  defaultValue = "",
  className,
  children,
  placeholder,
  appearance = "outline",
  disabled = false,
  size = "medium",
  multiselect = false,
  clearable = false,
  defaultSelectedOptions = [],
  selectedOptions,
  defaultOpen = false,
  open: controlledOpen,
  onOptionSelect,
  onOpenChange,
  ...props
}: DropdownProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string>(String(defaultValue ?? ""))

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<OptionProps>(child)) {
      return React.cloneElement(child, {
        setValue,
        setOpen,
        selectedValue: value,
      })
    }
    return child
  })

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          className={
            dropdownVariants({ appearance, disabled, size }) +
            ` relative flex w-full items-center justify-between gap-2 overflow-hidden rounded-md px-3 py-2 hover:cursor-pointer ${value ? "text-neutral-700" : "text-gray-500"} ` +
            className
          }
        >
          {value || placeholder}
          <div
            className={`absolute bottom-0 left-0 h-[1px] w-full bg-gray-500`}
          />
          <div
            className={`bg-brand-primary absolute bottom-0 h-[2px] transition-all ${
              open ? "left-0 w-full" : "left-1/2 w-0"
            }`}
          />
          <PiCaretDown className="ml-2 h-4 w-4 shrink-0 text-black opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={4}
        className="w-[var(--radix-popper-anchor-width)] p-0"
      >
        <Command className="rounded-md bg-white px-1 py-1 shadow-xl">
          <CommandGroup>{childrenWithProps}</CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

type OptionProps = {
  disabled?: boolean
  value?: string
  text?: string
  setValue?: (value: string) => void
  setOpen?: (open: boolean) => void
  selectedValue?: string
  children?: React.ReactNode
}

function Option({
  disabled = false,
  value,
  text,
  children,
  setValue,
  setOpen,
  selectedValue,
}: OptionProps) {
  const string = value || children?.toString() || ""

  const isSelected = selectedValue === string

  return (
    <CommandItem
      key={string}
      value={string}
      onSelect={() => {
        if (disabled) return
        setValue?.(string)
        setOpen?.(false)
      }}
      className={`relative flex items-center gap-2 px-8 py-2 hover:cursor-pointer ${
        disabled ? "text-gray-400" : "text-black hover:bg-gray-100"
      }`}
    >
      {isSelected && <PiCheck className="absolute left-2 h-4 w-4 text-black" />}
      {children || text || string}
    </CommandItem>
  )
}

export { Dropdown, Option }
