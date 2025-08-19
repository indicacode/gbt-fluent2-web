import React, { useRef, useState } from "react"
import { PiMagnifyingGlassLight, PiXLight } from "react-icons/pi"
import { tv } from "tailwind-variants"

const searchboxVariants = tv({
  variants: {
    size: { small: "", medium: "", large: "" },
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

type SearchBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value?: string
  showMode?: "selecting" | "focusAndValue"
  appearance?:
    | "outline"
    | "underline"
    | "filled-darker"
    | "filled-lighter"
    | "filled-darker-shadow"
    | "filled-lighter-shadow"
}

export function SearchBox({
  value = "",
  onChange,
  showMode = "selecting",
  className,
  appearance,
  ...props
}: SearchBoxProps) {
  const [string, setString] = useState(value.toString())
  const [focused, setFocused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div
      tabIndex={-1}
      className={
        searchboxVariants({ appearance }) +
        " relative flex items-center justify-between gap-2 overflow-hidden rounded-md px-3 py-2 text-black " +
        className
      }
    >
      <PiMagnifyingGlassLight />
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
          ref={inputRef}
          value={string}
          type="text"
          className={"w-full outline-0"}
          {...props}
        />
        {focused && (
          <button
            type="button"
            className="hover:cursor-pointer"
            onClick={() => {
              setString("")
              inputRef.current?.focus()
            }}
          >
            <PiXLight />
          </button>
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
