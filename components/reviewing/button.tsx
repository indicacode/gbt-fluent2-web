import * as React from "react"
import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode
}

const buttonVariants = tv({
  base: "flex cursor-pointer items-center justify-center rounded-sm px-4 py-2 text-lg font-medium before:rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300",
  variants: {
    variant: {
      default:
        "text-whitesmoke active:gray-200 duration-400 bg-brand-primary hover:bg-[#115EA3] active:border-brandColor-secondary active:bg-[#0C3B5E]",
      outline:
        "duration-400 duration-400 hover:bg-brand-default border-brand-primary hover:bg-brand-secondary active:border-brand-secondary active:bg-brand-secondary border-2 text-white shadow-sm  checked:bg-[#0F548C]",
      secondary:
        "duration-400 bg-gray-200 text-black hover:bg-gray-300 active:bg-gray-400",
      disabled: "bg-gray-600 text-gray-400",
      transparent: "bg-none hover:text-slate-300",
      subtle:
        "bg-none hover:bg-slate-400 hover:text-slate-100 active:bg-slate-500",
    },
    toggle: {
      true: "before:border-2 before:p-2 before:content-[''] data-[selected=true]:before:bg-red-400",
    },
    size: {
      default: "h-9 py-2",
      sm: "h-8 text-xs",
      lg: "h-10 px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

function actualButton(
  {
    toggle = false,
    icon = false,
    className,
    children,
    variant,
    size,
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  console.assert(
    toggle && children !== undefined,
    "You cannot pass children to a toggle button"
  )
  return (
    <button
      data-selected={"false"}
      data-type={toggle}
      onClick={({ currentTarget: target }) => {
        target.dataset.type === "true" &&
          (target.dataset.selected =
            target.dataset.selected === "false" ? "true" : "false"),
          console.log(target.dataset.selected)
      }}
      className={buttonVariants({
        variant,
        size,
        toggle,
      })}
      {...props}
    >
      {!toggle && icon !== false && <span>{icon}</span>}
      {!toggle && children}
    </button>
  )
}

actualButton.displayName = "Button"

const Button = React.forwardRef(actualButton)

export { Button }
