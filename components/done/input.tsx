"use client"

import * as React from "react"
import { ComponentProps, type ReactNode } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const inputVariants = tv({
  slots: {
    root: "flex flex-col",
    label: "py-1 text-black dark:text-gray-400",
    inputContainer:
      "relative flex w-full items-center gap-1 overflow-hidden rounded-[4px] px-2 text-[#707070] shadow-xs outline-0 transition-all select-none",
    inputDecoration:
      "absolute bottom-0 left-[50%] z-10 h-full max-h-[0px] w-full max-w-[0px] translate-x-[-50%] scale-y-1 bg-[#106CBD] text-white transition-all",
    input:
      "h-full w-full border-none bg-transparent placeholder-[#707070] outline-hidden select-text dark:text-gray-600",
  },
  variants: {
    variant: {
      outline: { inputContainer: "border-[1px] bg-white" },
      underline: {
        inputContainer: "border-b border-gray-500 bg-transparent",
      },
      filledLight: {
        inputContainer: "bg-white dark:bg-white/90",
      },
      filledDark: {
        inputContainer: "bg-gray-800",
      },
    },
    size: {
      sm: {
        inputContainer: "max-h-6 min-h-6 text-sm leading-6",
        input: "text-sm leading-6 placeholder:text-sm",
      },
      md: {
        inputContainer: "max-h-8 min-h-8 text-base leading-8",
        input: "text-base leading-8 placeholder:text-base",
      },
      lg: {
        inputContainer: "max-h-10 min-h-10 text-lg leading-10",
        input: "text-lg leading-10 placeholder:text-lg",
      },
    },
    disabled: {
      true: {
        inputContainer:
          "cursor-not-allowed bg-gray-200 text-[#aaabad] dark:bg-gray-700",
        input:
          "cursor-not-allowed text-[#aaabad] placeholder:text-[#aaabad] dark:text-gray-400",
      },
    },
    state: {
      neutral: {
        inputContainer: "",
      },
      success: {
        inputContainer: "border-green-500",
      },
      fail: {
        label: "text-red-500 dark:text-red-500",
        inputContainer: "border-red-500/80",
      },
      warning: {
        inputContainer: "border-yellow-500/80",
      },
    },
    focus: {
      true: {
        inputDecoration: "max-h-[3px] max-w-full scale-y-[1.0]",
      },
    },
    active: {
      true: {
        inputDecoration: "max-h-[3px] max-w-full scale-y-[1.0] bg-gray-500",
      },
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
    state: "neutral",
  },
})

type InputProps = Omit<ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants> & {
    containerClassName?: string
    helperText?: ReactNode
    labelText?: ReactNode
    iconOnly?: boolean
    error?: boolean
    children?: ReactNode
  }

const { input, root, inputContainer, inputDecoration, label } = inputVariants()

function InputLeftAddon({ children }: { children: ReactNode }) {
  return <>{children}</>
}

function InputRightAddon({ children }: { children: ReactNode }) {
  return <>{children}</>
}

function Input({
  variant = "outline",
  containerClassName,
  state = "neutral",
  iconOnly = false,
  size = "md",
  helperText,
  labelText,
  className,
  disabled,
  error,
  children,
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const [focus, setFocus] = React.useState(false)
  const [active, setActive] = React.useState(false)
  const inputId = React.useId()

  const handleMouseDown = React.useCallback(() => {
    setActive(true)
  }, [])

  const handleMouseUp = React.useCallback(() => {
    setActive(false)
  }, [])

  const handleFocus = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setFocus(true)
      onFocus?.(event)
    },
    [onFocus]
  )

  const handleBlur = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setFocus(false)
      onBlur?.(event)
    },
    [onBlur]
  )

  const RightAddon = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === InputRightAddon) {
      return React.cloneElement(child)
    }
  })

  const LeftAddon = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === InputLeftAddon) {
      return React.cloneElement(child)
    }
  })

  const inputState = error ? "fail" : state

  return (
    <div className={root()}>
      {labelText && (
        <label
          htmlFor={`input-${inputId}`}
          className={label({ state: inputState })}
        >
          {labelText}
        </label>
      )}
      <div
        className={inputContainer({
          className: containerClassName,
          state: inputState,
          variant,
          disabled,
          active,
          focus,
          size,
        })}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {LeftAddon?.[0]}
        <div className={inputDecoration({ focus, active })} />
        <input
          data-slot="input"
          {...props}
          id={`input-${inputId}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          className={input({
            className,
            variant,
            disabled,
            size,
          })}
        />
        {RightAddon?.[0]}
      </div>
      {helperText && (
        <p
          className={`text-xs text-gray-500 dark:text-gray-400 ${
            inputState === "fail" ? "text-red-500 dark:text-red-500" : ""
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  )
}

Input.displayName = "Input"

export {
  Input,
  InputLeftAddon,
  InputRightAddon,
  inputVariants,
  type InputProps,
}
