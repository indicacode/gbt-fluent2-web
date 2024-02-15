import * as React from "react"
import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode
}

const buttonVariants = tv({
  base: "flex cursor-pointer items-center justify-center rounded-[4px] px-4 py-2 text-lg font-medium disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default:
        "dark:text-whitesmoke active:gray-200 duration-400 bg-brand-primary text-white hover:bg-[#115EA3] active:border-brandColor-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white",
      secondary:
        "duration-400 bg-gray-200 text-black before:border-black hover:bg-gray-300 active:bg-gray-400 disabled:bg-[#F0F0F0] data-[selected=true]:before:bg-black",
      outline:
        "duration-400 duration-400 hover:bg-brand-default border-brand-primary border-2 border-slate-300 shadow-sm before:border-black checked:bg-[#0F548C] hover:bg-[#F5F5F5] active:bg-[#E0E0E0] data-[selected=true]:bg-[#EBEBEB] data-[selected=true]:before:bg-black dark:text-white",
      transparent:
        "data-[selected=true]:before:bg-brand-primary active:before:bg-brand-primary hover:before:bg-brand-primary hover:text-brand-primary data-[selected=true]:text-brand-primary bg-transparent hover:before:border-0",
      subtle:
        "data-[selected=true]:before:bg-brand-primary active:before:bg-brand-primary hover:before:bg-brand-primary bg-transparent before:border-black hover:bg-[#F5F5F5] hover:before:border-0 data-[selected=true]:before:border-slate-300 dark:before:border-slate-300",
    },
    toggle: {
      true: "aspect-square w-fit before:rounded-full before:border-2 before:p-2 before:content-['']",
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
      data-toggle={toggle}
      onClick={({ currentTarget: target }) =>
        target.dataset.toggle === "true" &&
        (target.dataset.selected =
          target.dataset.selected === "false" ? "true" : "false")
      }
      className={buttonVariants({
        variant,
        toggle,
        size,
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
