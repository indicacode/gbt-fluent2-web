import React from "react"
import { PiMagnifyingGlassLight } from "react-icons/pi"
import { tv } from "tailwind-variants"

const searchboxVariants = tv({
  variants: {},
  defaultVariants: {},
})

type searchboxProps = React.ComponentPropsWithoutRef<"input"> & {}

export function SearchBox({ children, className, ...props }: searchboxProps) {
  return (
    <div className="rounded-md border-1 border-gray-500 text-black">
      <PiMagnifyingGlassLight />
      <input className={searchboxVariants({})}>{children}</input>
    </div>
  )
}
