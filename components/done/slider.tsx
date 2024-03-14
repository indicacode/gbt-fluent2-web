"use client"

import * as React from "react"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { Range, Root, Thumb, Track } from "@radix-ui/react-slider"
import {tv, VariantProps} from "tailwind-variants"

const sliderVariants = tv({
  slots: {
    root: "relative flex w-full touch-none select-none items-center",
    range: "absolute h-full bg-brand-primary dark:bg-brand-primary",
    track:
      "relative w-full grow overflow-hidden rounded-full dark:bg-slate-50/20",
    thumb:
      "relative block rounded-full border-2 border-[1.5px] border-slate-900/50 bg-white shadow transition-colors before:absolute before:left-1/2 before:top-1/2 before:aspect-square before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:bg-brand-primary before:content-[''] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-400 dark:bg-white dark:focus-visible:ring-transparent",
  },
  variants: {
    size: {
      sm: { root: "", track: "h-1", range: "", thumb: "h-4 w-4 before:w-2.5" },

      md: { root: "", track: "h-2", range: "", thumb: "h-5 w-5 before:w-3" },
    },
  },
})

interface SliderProps extends ComponentPropsWithoutRef<typeof Root>, VariantProps<typeof sliderVariants>  {
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
