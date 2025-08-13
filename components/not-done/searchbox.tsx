import React, { useState } from "react"
import { PiMagnifyingGlassLight, PiXLight } from "react-icons/pi"
import { tv } from "tailwind-variants"

const searchboxVariants = tv({
  variants: {},
  defaultVariants: {},
})

type SearchBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  showMode?: "selecting" | "focusAndValue"
}

export function SearchBox({
  value,
  defaultValue,
  onChange,
  showMode = "selecting",
  ...props
}: SearchBoxProps) {
  const [selected, setSelected] = useState<boolean>(false)
  return (
    <div
      tabIndex={-1}
      className="flex items-center justify-between gap-2 rounded-md border border-gray-500 px-3 py-2 text-black"
    >
      <div className="flex w-full items-center gap-2">
        <PiMagnifyingGlassLight />
        <input
          defaultValue={defaultValue}
          value={value}
          onFocus={() => setSelected(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setSelected(false)
            }
          }}
          onChange={onChange}
          type="text"
          className={searchboxVariants({}) + " w-full outline-0"}
          {...props}
        />
      </div>
      {selected && (
        <button className="hover:cursor-pointer" onClick={() => value == ""}>
          <PiXLight />
        </button>
      )}
    </div>
  )
}
