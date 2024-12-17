import {
  ButtonHTMLAttributes,
  ReactNode,
  Ref,
  forwardRef,
  type MouseEvent,
} from "react"
import { VariantProps, tv } from "tailwind-variants"

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode
  isDisabled?: boolean
}

export const buttonVariants = tv({
  base: "text-md flex cursor-pointer items-center justify-center px-3 py-1 font-medium transition-colors data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:active:border-inherit",
  variants: {
    variant: {
      primary:
        "bg-brand-primary text-white duration-400 active:bg-[#0C3B5E] " +
        " hover:bg-[#115EA3] data-[disabled=true]:bg-[#F0F0F0] data-[disabled=true]:text-black data-[disabled=true]:active:border-transparent data-[selected=true]:before:bg-white",
      secondary:
        "bg-gray-200 text-black before:border-black hover:bg-gray-300 active:bg-gray-400 data-[disabled=true]:bg-[#F0F0F0] data-[selected=true]:before:bg-black",
      outline:
        "border-brand-primary data-[disabled=true]:active:border-brand-primary border-2 shadow-xs before:border-black active:border-slate-400 active:before:border-slate-400 data-[selected=true]:before:bg-black " +
        " data-[disabled=false]:hover:bg-[#F5F5F5] dark:text-white dark:before:border-white dark:data-[disabled=false]:hover:bg-white/10",
      transparent:
        "active:before:bg-brand-primary data-[selected=true]:text-brand-primary data-[selected=true]:before:bg-brand-primary bg-transparent " +
        " hover:before:bg-brand-primary data-[disabled=false]:hover:text-brand-primary hover:before:border-0" +
        " dark:data-[selected=true]:before:border-0",
      subtle:
        "active:before:bg-brand-primary bg-transparent before:border-black data-[disabled=false]:active:bg-[#E0E0E0] data-[selected=true]:bg-[#EBEBEB] " +
        " data-[selected=true]:before:bg-brand-primary data-[disabled=false]:hover:bg-[#F5F5F5] data-[selected=true]:before:border-0" +
        " hover:before:bg-brand-primary hover:before:border-0 dark:text-white" +
        " dark:before:border-slate-300 dark:data-[disabled=false]:active:bg-white/20 dark:data-[selected=true]:bg-[#f0f0f011]" +
        " dark:data-[disabled=false]:hover:bg-white/10 dark:data-[selected=true]:hover:bg-white/10 dark:data-[selected=true]:active:bg-white/20",
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
    variant: "primary",
    size: "default",
  },
})

function handleToggle(
  event: MouseEvent<HTMLButtonElement>,
  disabled: boolean | undefined
): void {
  const { dataset } = event.currentTarget
  if (disabled) return // Prevent toggling if the button is disabled
  if (dataset.toggle === "true") {
    dataset.selected = dataset.selected === "true" ? "false" : "true"
  }
}

function Button(
  {
    disabled = false,
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
      aria-disabled={disabled}
      data-disabled={disabled.toString()}
      data-selected="false"
      data-toggle={toggle ? "true" : "false"} // Ensure proper data-toggle value
      onClick={(event) => {
        if (!disabled) {
          handleToggle(event, disabled) // Only call handleToggle when not disabled
          onClick(event) // Only call onClick when not disabled
        }
      }}
      className={buttonVariants({
        variant,
        shape,
        toggle,
        size,
        className,
      })}
      {...props}
    >
      {/* Render icon if provided and button is not toggle */}
      {!toggle && !!icon && <span>{icon}</span>}
      {!toggle && children}
    </button>
  )
}

Button.displayName = "Button"

const ForwardedButton = forwardRef(Button)

export { ForwardedButton as Button }
