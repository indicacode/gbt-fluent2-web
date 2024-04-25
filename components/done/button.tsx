import {
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
  Ref,
  type MouseEvent,
} from "react"
import { tv, VariantProps } from "tailwind-variants"

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode
  isDisabled?: boolean
}

const buttonVariants = tv({
  base: "text-md flex cursor-pointer items-center justify-center px-3 py-1 font-medium data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
  variants: {
    variant: {
      default:
        "dark:text-whitesmoke active:gray-200  duration-400 bg-brand-primary text-white active:border-brand-secondary active:bg-[#0C3B5E] data-[disabled=true]:bg-[#F0F0F0] data-[disabled=true]:text-black data-[selected=true]:before:bg-white data-[disabled=false]:hover:bg-[#115EA3]",
      secondary:
        "bg-gray-200 text-black before:border-black active:bg-gray-400 data-[disabled=true]:bg-[#F0F0F0] data-[selected=true]:before:bg-black data-[disabled=false]:hover:bg-gray-300",
      outline:
        "border-2 border-brand-primary  shadow-sm before:border-black active:border-slate-400 active:before:border-slate-400 data-[selected=true]:before:bg-black data-[disabled=false]:hover:bg-[#F5F5F5] dark:text-white dark:before:border-white data-[disabled=false]:dark:hover:bg-white/10",
      transparent:
        "bg-transparent active:before:bg-brand-primary data-[selected=true]:text-brand-primary data-[selected=true]:before:bg-brand-primary data-[disabled=false]:hover:text-brand-primary data-[disabled=false]:hover:before:border-0 data-[disabled=false]:hover:before:bg-brand-primary dark:data-[selected=true]:before:border-0",
      subtle:
        "bg-transparent before:border-black active:bg-[#E0E0E0] active:before:bg-brand-primary data-[selected=true]:bg-[#EBEBEB] data-[selected=true]:before:border-0 data-[selected=true]:before:bg-brand-primary data-[disabled=false]:hover:bg-[#F5F5F5] data-[disabled=false]:hover:before:border-0 data-[disabled=false]:hover:before:bg-brand-primary dark:text-white  dark:before:border-slate-300 dark:active:bg-white/20 dark:data-[selected=true]:bg-[#f0f0f011] dark:data-[selected=true]:hover:bg-white/10 data-[disabled=false]:dark:hover:bg-white/10 dark:data-[selected=true]:active:bg-white/20",
    },
    toggle: {
      true: "aspect-square w-fit before:rounded-full before:border-2 before:p-2 before:content-['']",
    },
    shape: {
      rounded: "rounded-[4px]",
      circular: "rounded-full",
      square: "rounded-none",
    },
    size: {
      default: "h-9 py-1",
      sm: "h-8 text-xs",
      lg: "h-10 px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    shape: "rounded",
    variant: "default",
    size: "default",
  },
})

function handleToggle(
  event: MouseEvent<HTMLButtonElement>,
  isDisabled: boolean | undefined
): void {
  const { dataset } = event.currentTarget
  if (!isDisabled && dataset.toggle === "true") {
    dataset.selected = dataset.selected === "true" ? "false" : "true"
  }
}

function Button(
  {
    isDisabled = false,
    onClick = () => {},
    toggle = false,
    icon = false,
    className,
    children,
    variant,
    shape,
    size,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  console.assert(
    !(toggle && children !== undefined),
    "You cannot pass children to a toggle button. Children:" + children
  )
  return (
    <button
      ref={ref}
      aria-disabled={isDisabled}
      data-disabled={isDisabled.toString()}
      data-selected="false"
      data-toggle={toggle}
      onClick={(event) => {
        handleToggle(event, isDisabled)
        onClick(event)
      }}
      className={buttonVariants({
        className,
        variant,
        shape,
        toggle,
      })}
      {...props}
    >
      {!toggle && icon !== false && <span>{icon}</span>}
      {!toggle && children}
    </button>
  )
}

Button.displayName = "Button"

const ForwardedButton = forwardRef(Button)

export { ForwardedButton as Button }
