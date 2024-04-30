"use client"

import * as React from "react"
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react"
import { CheckedState, Indicator, Root } from "@radix-ui/react-checkbox"
import { FaCheck } from "react-icons/fa"
import { tv, VariantProps } from "tailwind-variants"

const checkboxSlots = tv({
  slots: {
    checkbox: `peer flex aspect-square shrink-0 overflow-hidden rounded-sm border border-gray-500 text-slate-50
     shadow transition-colors hover:border-neutral-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950
     disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-brand-primary data-[state=indeterminate]:border-brand-primary
     data-[state=checked]:bg-brand-primary dark:border-slate-200 dark:border-slate-50 dark:focus-visible:ring-slate-300
     dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900`,
    indicator: "flex h-full w-full items-center justify-center text-current",
    indeterminate:
      "aspect-square min-h-[50%] min-w-[50%] rounded-sm bg-brand-primary",
    indeterminateContainer: "flex items-center justify-center",
  },

  variants: {
    rounded: {
      true: {
        checkbox: "rounded-full",
        indeterminate: "rounded-full",
      },
    },
    size: {
      medium: {
        checkbox: "max-h-4 min-h-4 min-w-4 max-w-4",
        indeterminateContainer: "min-h-4 min-w-4",
      },
      large: {
        checkbox: "max-h-5 min-h-5 min-w-5 max-w-5",
        indeterminateContainer: "min-h-5 min-w-5",
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

const { checkbox, indicator, indeterminate, indeterminateContainer } =
  checkboxSlots({})

interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<typeof Root>, "onChange">,
    VariantProps<typeof checkboxSlots> {
  /** Runs whenever the value change
   * @param {CheckedState} checked  */
  onChange?: (checked: CheckedState) => void
}

const Checkbox = React.forwardRef<React.ElementRef<typeof Root>, CheckboxProps>(
  (
    {
      onChange = (checked: CheckedState) => {},
      defaultChecked = false,
      onClick = () => {},
      rounded = false,
      size = "medium",
      className,
      checked,
      ...rest
    },
    ref
  ) => {
    type State = boolean | "indeterminate"

    const [internalState, setInternalState] = useState<State | undefined>(
      undefined
    )
    ref = useRef(null)

    useEffect(() => {
      if (checked !== undefined) {
        setInternalState(checked)
      }
    }, [checked])

    function handleOnClick() {
      if (checked === undefined) {
        setInternalState((prev) => !prev)
      }
    }

    return (
      <Root
        ref={ref}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={(checked) => onChange(checked)}
        onClick={(event) => {
          handleOnClick()
          onClick(event)
        }}
        className={checkbox({ rounded, size, className })}
        {...rest}
      >
        <Indicator className={indicator({})}>
          {internalState === "indeterminate" ? (
            <div className={indeterminateContainer({})}>
              <span className={indeterminate({ rounded, size })} />
            </div>
          ) : (
            internalState && <FaCheck size="8" />
          )}
        </Indicator>
      </Root>
    )
  }
)
Checkbox.displayName = Root.displayName

export { Checkbox }
