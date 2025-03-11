import { ComponentProps, useId, useState } from "react"
import { tv, VariantProps } from "tailwind-variants"

export interface TextareaProps
  extends ComponentProps<"textarea">,
    VariantProps<typeof textarea> {
  labelText: string
  error: boolean
}

const inputVariants = tv({
  slots: {
    root:
      "relative z-10 flex flex-col overflow-hidden before:absolute before:bottom-0 before:left-[50%] before:scale-y-1 " +
      " before:w-full before:translate-x-[-50%] before:bg-[#106CBD] before:transition-all before:content-['']",
    label: "text-lg font-bold dark:text-slate-200",
    textarea:
      "flex w-full resize-none rounded-md border bg-transparent px-4 py-2 text-clip " +
      " text-sm shadow-xs transition-colors duration-200 placeholder:text-slate-500 focus:border-b-blue-400" +
      " focus-visible:ring-slate-950 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50" +
      " dark:text-slate-200 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
  },
  variants: {
    variant: {
      focus: { textarea: "border-b-[2px] border-gray-500" },
      outline: { textarea: "border-[1px] bg-transparent" },
      filledDark: { textarea: "bg-gray-600 dark:bg-black/90" },
      filledLight: { textarea: "dark:bg-white" },
    },
    size: {
      sm: { textarea: "min-h-16 w-full" },
      md: { textarea: "min-h-24 w-full" },
      lg: { textarea: "min-h-32 w-full" },
    },
    error: {
      true: {
        root: "before:h-0 before:w-0",
        textarea: "border dark:border-red-500",
      },
      false: {
        root: "relative z-10 h-fit before:h-full before:max-h-[0px]",
      },
    },
    focus: {
      true: {
        root: "before:h-[3px] before:max-w-full before:scale-y-[1.0]",
      },
    },
    active: {
      true: {
        root: "before:max-h-[3px] before:max-w-full before:scale-y-[1.0] before:bg-gray-500",
      },
    },
  },
})
const { textarea, label, root } = inputVariants()

export function Textarea({
  className,
  labelText,
  variant,
  size,
  error = false,
  ...props
}: TextareaProps) {
  const [focus, setFocus] = useState(false)
  const [active, setActive] = useState(false)

  const handleFocus = () => setFocus(true)
  const handleBlur = () => setFocus(false)
  const handleMouseDown = () => setActive(true)
  const handleMouseUp = () => setActive(false)

  const uid = useId()

  return (
    <div className={root({ error: error, focus: focus, active: active })}>
      <label htmlFor={uid} className={label()}>
        {labelText}
      </label>
      <textarea
        data-slot="textarea"
        id={uid}
        maxLength={50}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={textarea({
          className,
          variant,
          size,
          error,
          focus,
          active,
        })}
        {...props}
      />
    </div>
  )
}
