"use client"

import { Range, Root, Thumb, Track } from "@radix-ui/react-slider"
import { ComponentProps, useMemo } from "react"
import { tv, VariantProps } from "tailwind-variants"

const sliderVariants = tv({
  slots: {
    root: "relative flex w-full touch-none items-center select-none",
    range: "bg-brand-primary dark:bg-brand-primary absolute h-full",
    track:
      "relative w-full grow overflow-hidden rounded-full bg-gray-200 dark:bg-slate-50/20",
    thumb:
      "before:bg-brand-primary relative block rounded-full border-[1.5px] border-slate-900/50 bg-white shadow-sm transition-colors before:absolute before:top-1/2 before:left-1/2 before:aspect-square before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:content-[''] focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-slate-400 dark:bg-white dark:focus-visible:ring-transparent",
  },
  variants: {
    size: {
      sm: { root: "", track: "h-1", range: "", thumb: "h-4 w-4 before:w-2.5" },

      md: { root: "", track: "h-2", range: "", thumb: "h-5 w-5 before:w-3" },
    },
  },
})

type SliderProps = ComponentProps<typeof Root> &
  VariantProps<typeof sliderVariants> & {}

export function Slider({
  className,
  size,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderProps) {
  const _values = useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )
  const { root, track, range, thumb } = sliderVariants({ size })
  return (
    <Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={root({ className })}
      {...props}
    >
      <Track className={track()}>
        <Range className={range()} />
      </Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <Thumb key={index} className={thumb()} />
      ))}
    </Root>
  )
}
