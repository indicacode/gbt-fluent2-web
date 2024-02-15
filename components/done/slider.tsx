"use client"

import * as React from "react"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { Range, Root, Thumb, Track } from "@radix-ui/react-slider"
import { tv } from "tailwind-variants"

const sliderVariants = tv({
  slots: {
    root: "relative flex w-full touch-none select-none items-center",
    range:
      "absolute h-full bg-brandColor-secondary dark:bg-brandColor-secondary",
    track:
      "relative w-full grow overflow-hidden rounded-full dark:bg-slate-50/20",
    thumb:
      "block rounded-full border-4 border-brandColor-dark border-slate-900/50 bg-brandColor-primary shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:border-brandColor-secondary dark:bg-brandColor-light dark:focus-visible:ring-slate-100",
  },
  variants: {
    size: {
      sm: { root: "", track: "h-1", rangel: "", thumb: "h-4 w-4" },

      md: { root: "", track: "h-2", rangel: "", thumb: "h-5 w-5" },
    },
  },
})

interface SliderProps extends ComponentPropsWithoutRef<typeof Root> {
  size: "sm" | "md"
}

function Slider(
  { className, size, ...props }: SliderProps,
  ref: React.Ref<ElementRef<typeof Root>>
) {
  const { root, track, range, thumb } = sliderVariants({ size })
  return (
    <Root ref={ref} className={root({ className })} {...props}>
      <Track className={track()}>
        <Range className={range()} />
      </Track>
      <Thumb className={thumb()} />
    </Root>
  )
}

const ForwardedSlider = forwardRef(Slider)
ForwardedSlider.displayName = Root.displayName

export { ForwardedSlider as Slider }
