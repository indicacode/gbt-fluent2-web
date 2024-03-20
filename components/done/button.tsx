import * as React from "react"
import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"





export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode
}

const buttonVariants = tv({
  base: "text-md flex cursor-pointer items-center justify-center rounded-[4px] px-3 py-1 font-medium disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default:
        "dark:text-whitesmoke active:gray-200  duration-400 bg-brand-primary text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white",
      secondary:
        "bg-gray-200 text-black before:border-black hover:bg-gray-300 active:bg-gray-400 disabled:bg-[#F0F0F0] data-[selected=true]:before:bg-black",
      outline:
        "border-2 border-brand-primary  shadow-sm before:border-black hover:bg-[#F5F5F5] active:border-slate-400 active:before:border-slate-400 data-[selected=true]:before:bg-black dark:text-white dark:before:border-white dark:hover:bg-white/10",
      transparent:
        "bg-transparent hover:text-brand-primary hover:before:border-0 hover:before:bg-brand-primary active:before:bg-brand-primary data-[selected=true]:text-brand-primary data-[selected=true]:before:bg-brand-primary dark:data-[selected=true]:before:border-0",
      subtle:
        "bg-transparent before:border-black hover:bg-[#F5F5F5] hover:before:border-0 hover:before:bg-brand-primary active:bg-[#E0E0E0] active:before:bg-brand-primary data-[selected=true]:bg-[#EBEBEB] data-[selected=true]:before:border-0 data-[selected=true]:before:bg-brand-primary dark:text-white  dark:before:border-slate-300 dark:hover:bg-white/10 dark:active:bg-white/20 dark:data-[selected=true]:bg-[#f0f0f011] dark:data-[selected=true]:hover:bg-white/10 dark:data-[selected=true]:active:bg-white/20",
    },
    toggle: {
      true: "aspect-square w-fit before:rounded-full before:border-2 before:p-2 before:content-['']",
    },
    size: {
      default: "h-9 py-1",
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

function Button(
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
    !toggle && !(children === undefined),
    "You cannot pass children to a toggle button. Children:" + children
  )

  return (
    <button
      ref={ref}
      data-selected={"false"}
      data-toggle={toggle}
      onClick={({ currentTarget: target }) =>
        target.dataset.toggle === "true" &&
        (target.dataset.selected =
          target.dataset.selected === "false" ? "true" : "false")
      }
      className={buttonVariants({
        className,
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

Button.displayName = "Button"

const ForwardedButton = React.forwardRef(Button)

export { ForwardedButton as Button }
