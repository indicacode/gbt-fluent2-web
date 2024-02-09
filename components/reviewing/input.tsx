import * as React from "react"
import { HTMLAttributes, ReactElement, useCallback, useState } from "react"
import { VscError, VscPassFilled, VscWarning } from "react-icons/vsc"
import { tv, VariantProps } from "tailwind-variants"

const icons = {
  neutral: "",
  success: <VscPassFilled className="inline text-green-600" />, // Checkmark character
  fail: <VscError className="inline text-red-600" />, // Crossmark character
  warning: <VscWarning className="inline text-yellow-600" />, // Optional warning icon
  // Add more states and icons as needed
}

const inputVariants = tv({
  slots: {
    base: "flex w-full rounded-md border-[1px] bg-white px-4 py-2 text-sm shadow-sm outline-0",
    decoration: "relative z-10 h-fit overflow-hidden rounded-md transition-all",
  },
  variants: {
    variant: {
      focus: "a",
      outline: "bg-transparent",
      filledDark: "dark:bg-dark/90",
      filledLight: "dark:bg-white/80",
    },
    state: {
      neutral: {
        base: "border-white/80",
      },
      success: {
        base: "border-green-500/80",
      },
      fail: {
        base: "border-red-500/80",
      },
      warning: {
        base: "border-yellow-500/80",
      },
    },
    iconOnly: {
      true: {
        base: "border-black/80 dark:border-white/80",
      },
    },
  },

  defaultVariants: {
    variant: "outline",
    size: "md",
  },
})

export interface InputPropsType
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  helperText?: string
  label: string
  state?: keyof typeof icons
  iconOnly?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputPropsType>(
  (props, ref) => {
    const {
      className,
      label,
      helperText,
      type,
      variant,
      state = "neutral",
      iconOnly = false,
      ...rest
    } = props
    const [focus, setFocus] = useState(false)

    console.log("state", state)
    console.log("iconOnly:", iconOnly)

    const handleFocus = useCallback(() => {
      setFocus(true)
    }, [])

    const handleBlur = useCallback(() => {
      setFocus(false)
    }, [])
    const { base } = inputVariants({ state })
    return (
      <div className={"flex  flex-col"}>
        <div
          data-state={state}
          className={`
        
            ${
              (iconOnly || state === "neutral") &&
              `before:absolute
            before:bottom-0
            before:left-[50%]
            before:h-full
            before:max-h-[0px]
            before:w-full
            before:max-w-[0px]
            before:translate-x-[-50%]
            before:scale-y-[1]
            before:bg-[#106CBD]
            before:text-white
            before:transition-all
            before:content-['']
            hover:before:max-h-[3px]
            hover:before:max-w-full
            hover:before:scale-y-[1.0]
            ${focus && "before:max-h-[3px] before:max-w-full before:scale-y-[1.0]"}`
            }
            `}
        >
          <label className={"py-1 text-black dark:text-white"}>
            {label}
            <input
              data-state={state}
              onFocus={handleFocus}
              onBlur={handleBlur}
              type={type}
              className={base({
                className,
                iconOnly: iconOnly,
                variant,
              })}
              ref={ref}
              {...rest}
            />
          </label>
        </div>
        <IconComponent
          iconOnly={iconOnly}
          state={state}
          className={"my-auto  mr-0.5"}
        >
          {helperText}
        </IconComponent>
      </div>
    )
  }
)
Input.displayName = "Input"

const iconComponent = tv({
  slots: {
    base: "flex items-center gap-1",
  },
  variants: {
    state: {
      neutral: {
        base: "",
      },
      success: {
        base: "text-green-500/80",
      },
      fail: {
        base: "text-red-500/80",
      },
      warning: {
        base: "text-yellow-500/80",
      },
    },
    iconOnly: {
      true: {
        base: "flex items-center text-black/80 dark:text-white/80",
      },
    },
  },
})

type props = HTMLAttributes<HTMLSpanElement> & {
  state: keyof typeof icons
  iconOnly: boolean
}

function IconComponent({
  state,
  className,
  iconOnly,
  children,
  ...rest
}: props): ReactElement {
  const { base } = iconComponent({ state })

  return (
    <span {...rest} className={base({ className, iconOnly: iconOnly })}>
      {icons[state]}
      <span>{children}</span>
    </span>
  )
}

export { IconComponent, Input, inputVariants }
