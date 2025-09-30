"use client"

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
import * as React from "react"
import { FaCheck } from "react-icons/fa"
import { PiCaretDown, PiCheck, PiX } from "react-icons/pi"
import { tv } from "tailwind-variants"

const dropdownVariants = tv({
  variants: {
    size: {
      small: "px-2 py-1 text-sm",
      medium: "px-3 py-2 text-base",
      large: "px-5 py-3 text-xl",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "hover:cursor-pointer",
    },
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
    onOptionSelect?: (option: string[]) => void
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
  placeholder = "Select an option",
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
  const [value, setValue] = React.useState<string[]>(
    defaultValue ? [String(defaultValue)] : []
  )

  const isMultiselect = multiselect

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<OptionProps>(child)) {
      return React.cloneElement(child, {
        setValue,
        setOpen,
        isMultiSelect: isMultiselect,
        selectedValue: value,
      })
    }
    return child
  })

  React.useEffect(() => {
    if (onOpenChange) {
      onOpenChange(open)
    }
  }, [open, onOpenChange])

  React.useEffect(() => {
    if (onOptionSelect) {
      onOptionSelect(value)
    }
  }, [value, onOptionSelect])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <button
          role="combobox"
          aria-expanded={open}
          className={
            dropdownVariants({ appearance, disabled, size }) +
            ` relative z-10 flex w-full items-center justify-between gap-2 rounded-md ${value.length > 0 ? "text-neutral-700" : " text-gray-500"} ${!placeholder ? " h-10" : ""}` +
            className
          }
        >
          <span className="max-w-full truncate text-start">
            {value.length > 0 ? value.join(", ") : placeholder}
          </span>
          <div
            className={`absolute bottom-0 left-0 z-30 h-[1px] w-full bg-gray-500`}
          />
          <div
            className={`bg-brand-primary absolute bottom-0 z-30 h-[2px] transition-all ${
              open ? "left-0 w-full" : "left-1/2 w-0"
            }`}
          />
          {clearable && !multiselect && value.length > 0 && (
            <div
              onClick={(e) => {
                e.stopPropagation()
                setOpen(false)
                setValue([])
              }}
              className="absolute right-3 z-[999] text-black"
            >
              <PiX />
            </div>
          )}
          {(!clearable || value.length === 0 || multiselect) && (
            <PiCaretDown
              className={`z-[999] ml-2 shrink-0 ${disabled ? "text-gray-400" : "text-black"}`}
            />
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        sideOffset={4}
        className="z-50 w-[var(--radix-popper-anchor-width)]  p-0"
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
  setValue?: (value: string[]) => void
  setOpen?: (open: boolean) => void
  selectedValue?: string[]
  isMultiSelect?: boolean
  children?: React.ReactNode
}

function Option({
  disabled = false,
  value,
  text,
  children,
  setValue,
  setOpen,
  selectedValue = [],
  isMultiSelect,
}: OptionProps) {
  const string = value || text || children?.toString() || ""

  const isSelected = selectedValue.includes(string)

  return (
    <CommandItem
      key={string}
      value={string}
      onSelect={() => {
        if (disabled) return
        if (isMultiSelect) {
          if (isSelected) {
            setValue?.(selectedValue.filter((v) => v !== string))
          } else {
            setValue?.([...selectedValue, string])
          }
        } else {
          setValue?.([string])
          setOpen?.(false)
        }
      }}
      className={`relative flex items-center justify-start gap-2 px-8 py-2 hover:cursor-pointer ${
        disabled ? "text-gray-400" : "text-black hover:bg-gray-100"
      }`}
    >
      {isMultiSelect ? (
        <div
          className={`absolute left-2 flex max-h-4 min-h-4 max-w-4 min-w-4 items-center justify-center rounded-xs border border-gray-500 p-1 text-sm text-slate-50 shadow-sm dark:border-slate-200 ${
            isSelected ? "bg-[#115EA3]" : ""
          }`}
        >
          {isSelected && <FaCheck className="max-h-2 max-w-2" />}
        </div>
      ) : (
        isSelected &&
        !isMultiSelect && (
          <PiCheck className="absolute left-2 h-4 w-4 text-wrap text-black" />
        )
      )}
      <span className="text-wrap">{children || text || string}</span>
    </CommandItem>
  )
}

type OptionGroupProps = {
  label?: string
  children?: React.ReactNode
  setValue?: (value: string[]) => void
  setOpen?: (open: boolean) => void
  selectedValue?: string[]
}

function OptionGroup({
  label,
  setValue,
  setOpen,
  selectedValue: value,
  children,
}: OptionGroupProps) {
  const heading = label?.toString() || "Options"
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
  return <CommandGroup heading={heading}>{childrenWithProps}</CommandGroup>
}

export { Dropdown, Option, OptionGroup }
