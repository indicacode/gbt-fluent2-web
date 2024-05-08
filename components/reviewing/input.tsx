"use client"

import * as React from "react"
import {
  Children,
  cloneElement,
  Fragment,
  InputHTMLAttributes,
  isValidElement,
  ReactNode,
  useCallback,
  useId,
  useRef,
  useState,
} from "react"
import { tv, VariantProps } from "tailwind-variants"

export interface InputPropsType
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  containerClassName?: string
  helperText?: string
  labelText?: string
  iconOnly?: boolean
}

const inputVariants = tv({
  slots: {
    root: "flex flex-col",
    label: "py-1 text-black dark:text-white",
    inputContainer:
      "relative flex w-full select-none items-center gap-1 overflow-hidden rounded-[4px] px-2  text-[#707070] shadow-sm outline-0 transition-all ",
    inputDecoration:
      "absolute bottom-0 left-[50%] z-10 h-full max-h-[0px] w-full max-w-[0px] translate-x-[-50%] scale-y-[1] bg-[#106CBD] text-white transition-all", // This is the line that appears under the input
    input:
      "h-full w-full select-text border-none bg-transparent placeholder-[#707070] outline-none dark:text-white dark:placeholder-white",
  },
  variants: {
    variant: {
      outline: { inputContainer: "border-[1px] bg-white" },
      underline: {
        inputContainer: "border-b border-gray-500 bg-transparent",
      },
      filledLight: {
        inputContainer: " bg-white dark:bg-white/90",
      },
      filledDark: {
        inputContainer: "dark:bg-dark/90 bg-neutral-100",
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
  },
})

const { input, root, inputContainer, inputDecoration, label } = inputVariants()

const Input = React.forwardRef<HTMLInputElement, InputPropsType>(
  (
    {
      variant = "outline",
      containerClassName,
      state = "neutral",
      iconOnly = false,
      size = "md",
      helperText,
      labelText,
      className,
      children,
      disabled,
      ...rest
    },
    ref
  ) => {
    ref = useRef(null)
    const [focus, setFocus] = useState(false)
    const [active, setActive] = useState(false)

    const inputId = useId()

    // By using useCallback the function doesn't get recreated on a new
    // memory reference every time the component re-renders.
    const handleFocus = useCallback(() => {
      setFocus(true)
    }, [])

    const handleBlur = useCallback(() => {
      setFocus(false)
    }, [])

    const handleMouseDown = useCallback(() => {
      setActive(true)
    }, [])

    const handleMouseUp = useCallback(() => {
      setActive(false)
    }, [])
    //-------------------------------------------------------------//

    const RightAddon = Children.map(children, (child) => {
      if (isValidElement(child) && child.type === InputRightAddon) {
        return cloneElement(child)
      }
    })
    const LeftAddon = Children.map(children, (child) => {
      if (isValidElement(child) && child.type === InputLeftAddon) {
        return cloneElement(child)
      }
    })

    if (RightAddon || LeftAddon) {
      console.assert(
        RightAddon?.length! <= 1,
        "Only one right addon is allowed"
      )
      console.assert(LeftAddon?.length! <= 1, "Only one left addon is allowed")
    }
    return (
      <div className={root()}>
        {labelText && (
          <label htmlFor={"input_id" + inputId} className={label({ state })}>
            {labelText}
          </label>
        )}
        <div
          className={inputContainer({
            className: containerClassName,
            state,
            variant,
            disabled,
            active,
            focus,
            size,
          })}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={() => ref?.current?.focus()}
        >
          {LeftAddon?.[0]}
          <div className={inputDecoration({ focus, active })} />
          <input
            id={"input_id-" + inputId}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            className={input({
              className,
              variant,
              disabled,
              size,
            })}
            ref={ref}
            {...rest}
          />
          {RightAddon?.[0]}
        </div>
        {helperText && (
          <p
            className={`text-xs text-gray-500 dark:text-gray-400 ${
              state === "fail" ? "text-red-500 dark:text-red-500" : ""
            }`}
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

function InputLeftAddon({ children }: { children: ReactNode }) {
  return <>{children}</>
}
function InputRightAddon({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export { InputLeftAddon, InputRightAddon, Input, inputVariants }
