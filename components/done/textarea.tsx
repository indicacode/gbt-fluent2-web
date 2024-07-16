import * as React from "react"
import { forwardRef, Ref, useCallback, useState } from "react"
import { tv } from "tailwind-variants"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText: string
  error: boolean
  
}

const inputVariants = tv({
  slots: {
    root: " flex flex-col",
    label: " text-lg font-bold dark:text-slate-200",
    textarea:
      " flex  w-full resize-none text-clip rounded-md border border-slate-200 bg-transparent px-4 py-2 text-sm shadow-sm transition-colors duration-200 placeholder:text-slate-500 focus:border-b-blue-400 focus-visible:outline-none focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-200 dark:text-slate-200 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
  },
  variants: {
    variant: {
      focus: " border-b-2 border-gray-500",
      outline: " border-[1px] bg-transparent",
      filledDark: " dark:bg-dark/90",
      filledLight: " dark:bg-white/90",
},
    sizes:{
      sm: " min-h-10  w-full",
      md: " min-h-14 w-full",
      lg: " min-h-18 w-full"
    },
      error: {
      true: "",
      false: {
        root: " relative z-10 h-fit overflow-hidden rounded-md transition-all before:absolute before:bottom-0 before:left-[50%] before:h-full before:max-h-[0px] before:w-full before:max-w-[0px] before:translate-x-[-50%] before:scale-y-[1] before:bg-[#106CBD] before:text-white before:transition-all before:content-['']",
      },
    },
    focus: {
      true: {
        root: " h-[3px] before:max-w-full before:scale-y-[1.0]",
      },
    },
    active: {
      true: {
        root: " before:max-h-[3px] before:max-w-full before:scale-y-[1.0] before:bg-gray-500",
      },
    },
  },
})

function Textarea(
  { className, labelText,variant, error = false, ...props }: TextareaProps,
  ref: Ref<HTMLTextAreaElement>
) {
  const [focus, setFocus] = useState(false)
  const [active, setActive] = useState(false)

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

  const uid =
    "textAreaUID:" +
    Date.now().toString(36) +
    Math.random().toString(36).slice(2)

  const { textarea, label, root } = inputVariants()

  return (
    <div className={root({ error: error, focus: focus, active: active })}>
      <label htmlFor={uid} className={label()}>
        {labelText}
      </label>
      <textarea
        id={uid}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={textarea({
          className
        })}
        ref={ref}
        {...props}
      />
    </div>
  )
}

const ForwardedTextarea = forwardRef(Textarea)
Textarea.displayName = "Textarea"

export { ForwardedTextarea as Textarea }
