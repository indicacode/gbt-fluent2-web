import React, { useEffect, useRef, useState } from "react"
import { PiMagnifyingGlassLight, PiXLight } from "react-icons/pi"
import { tv } from "tailwind-variants"

const searchboxVariants = tv({
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

type SearchBoxVariantProps = Parameters<typeof searchboxVariants>[0]

type SearchBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> &
  SearchBoxVariantProps & {
    value?: string
    defaultValue?: string
    beforeContent?: React.ReactNode
    afterContent?: React.ReactNode
    placeholder?: string
  }

export function SearchBox({
  value,
  defaultValue = "",
  onChange,
  className,
  beforeContent,
  afterContent,
  appearance,
  placeholder,
  disabled = false,
  type = "text",
  size,
  ...props
}: SearchBoxProps) {
  const [string, setString] = useState(value?.toString())
  const [focused, setFocused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setString(value?.toString())
  }, [value])

  const handleClear = () => {
    if (disabled) return
    setString("")
    inputRef.current?.focus()
    onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <div
      tabIndex={-1}
      className={
        searchboxVariants({ appearance, disabled, size }) +
        " relative flex items-center justify-between gap-2 overflow-hidden rounded-md px-3 py-2 text-neutral-700" +
        " " +
        className
      }
    >
      {beforeContent ?? <PiMagnifyingGlassLight />}
      <div
        ref={containerRef}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          if (!containerRef.current?.contains(e.relatedTarget as Node)) {
            setFocused(false)
          }
        }}
        className="flex w-full items-center gap-2"
      >
        <input
          onChange={(e) => {
            setString(e.target.value)
            onChange?.(e)
          }}
          disabled={disabled}
          ref={inputRef}
          value={string || defaultValue || ""}
          type={type}
          placeholder={placeholder}
          className={`w-full text-black outline-0 disabled:cursor-not-allowed`}
          {...props}
        />
        {focused && (
          <>
            {afterContent && (
              <button
                type="button"
                onClick={() => {
                  inputRef.current?.focus()
                }}
                className="hover:cursor-pointer"
              >
                {afterContent}
              </button>
            )}
            <button
              type="button"
              className="hover:cursor-pointer"
              onClick={handleClear}
            >
              <PiXLight />
            </button>
          </>
        )}
      </div>
      <div className={`absolute bottom-0 left-0 h-[1px] w-full bg-gray-500`} />
      <div
        className={`bg-brand-primary absolute bottom-0 h-[2px] transition-all ${
          focused ? "left-0 w-full" : "left-1/2 w-0"
        }`}
      />
    </div>
  )
}
