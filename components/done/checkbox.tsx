"use client"

import { CheckedState, Indicator, Root } from "@radix-ui/react-checkbox"
import { ComponentPropsWithoutRef, useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa"
import { tv, VariantProps } from "tailwind-variants"

const checkboxSlots = tv({
  slots: {
    checkbox: `peer data-[state=checked]:border-brand-primary data-[state=indeterminate]:border-brand-primary flex aspect-square shrink-0 overflow-hidden rounded-xs border border-gray-500 p-1 text-slate-50 shadow-sm transition-colors hover:cursor-pointer hover:border-neutral-700 focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#115EA3] dark:border-slate-200 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900 justify-center items-center`,
    indicator:
      "flex h-full max-h-2 w-full max-w-2 items-center justify-center text-white [&_svg]:h-3 [&_svg]:w-3",
    indeterminate:
      "aspect-square min-h-[50%] min-w-[50%] rounded-xs bg-[#115EA3]",
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
        checkbox: "max-h-4 min-h-4 max-w-4 min-w-4",
        indeterminateContainer: "min-h-4 min-w-4",
      },
      large: {
        checkbox: "max-h-5 min-h-5 max-w-5 min-w-5",
        indeterminateContainer: "min-h-5 min-w-5",
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<typeof Root>, "onChange" | "checked">,
    VariantProps<typeof checkboxSlots> {
  checked?: CheckedState
  onChange?: (checked: CheckedState) => void
}

export function Checkbox({
  onChange,
  defaultChecked = false,
  onClick,
  rounded = false,
  size = "medium",
  className,
  checked,
  ...props
}: CheckboxProps) {
  const [internalState, setInternalState] =
    useState<CheckedState>(defaultChecked)
  const styles = checkboxSlots({ rounded, size })

  useEffect(() => {
    if (checked !== undefined) {
      setInternalState(checked)
    }
  }, [checked])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (checked === undefined) {
      setInternalState((prev) => !prev)
    }
    onClick?.(event)
  }

  return (
    <Root
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onChange}
      onClick={handleClick}
      className={styles.checkbox({ className })}
      {...props}
    >
      <Indicator className={styles.indicator()}>
        {internalState === "indeterminate" ? (
          <div className={styles.indeterminateContainer()}>
            <span className={styles.indeterminate()} />
          </div>
        ) : (
          internalState && <FaCheck />
        )}
      </Indicator>
    </Root>
  )
}
