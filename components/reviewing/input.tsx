import * as React from "react"
import { useCallback, useState } from "react"
import { tv, VariantProps } from "tailwind-variants"





const inputVariants = tv({
  base: "flex w-full rounded-md bg-transparent px-4 py-2 text-sm shadow-sm outline-0",
  variants: {
    variant: {
      default: "flex border-2 transition-colors",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface InputPropsType
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  variant?: "default"
  helperText?: string
  label: string
}

const Input = React.forwardRef<HTMLInputElement, InputPropsType>(
  (props, ref) => {
    const { className, label, helperText, type, variant, ...rest } = props
    const [focus, setFocus] = useState(false)

    const handleFocus = useCallback(() => {
      setFocus(true)
    }, [])

    const handleBlur = useCallback(() => {
      setFocus(false)
    }, [])

    return (
      <div className={"flex flex-col "}>
        <div
          className={`
            relative
            z-10
            h-fit
            overflow-hidden
            rounded-md
            transition-all
            before:absolute
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
            ${focus && "before:max-h-[3px] before:max-w-full before:scale-y-[1.0]"}
            `}
        >
          <label className={"py-1 text-black dark:text-white"}>
            {label}
            <input
              onFocus={handleFocus}
              onBlur={handleBlur}
              type={type}
              className={`${inputVariants({ className, variant })}`}
              ref={ref}
              {...rest}
            />
          </label>
        </div>
        <span className={"text-gray-600"}>{helperText}</span>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
