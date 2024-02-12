import * as React from "react"
import { ReactNode } from "react"
import { ChevronDown } from "lucide-react"
import { tv, VariantProps } from "tailwind-variants"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/not-done/dropdown-menu"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  Icon?: undefined
  hasIcon?: boolean
  asChild?: boolean
  buttonType?: string
  dropdownContent?: ReactNode
  dropdownclassName?: string
}

const buttonVariants = tv({
  base: "inline-flex cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-sm text-center text-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300",
  variants: {
    variant: {
      default:
        " text-whitesmoke active:gray-200  duration-400 bg-brandColor-primary bg-center px-4 py-2 text-lg transition-colors ease-out hover:bg-brandColor-hover active:border-brandColor-secondary active:bg-brandColor-dark ",

      outline:
        " duration-400 duration-400 hover:bg-brandColor-default border-2 border-brandColor-primary px-4 py-2 text-lg text-white shadow-sm transition-colors transition-colors  ease-out hover:bg-brandColor-secondary active:border-brandColor-secondary  active:bg-brandColor-secondary ",
      secondary:
        "duration-400 rounded-sm bg-gray-200 px-4 py-2 text-lg text-brandColor-primary transition-colors ease-out hover:bg-gray-300 active:bg-gray-400 ",
      disabled: "bg-gray-600 px-4 py-2 text-lg text-gray-400",
      link: "duration-400 px-4 py-2 text-lg text-slate-50 underline-offset-4 transition-colors ease-out hover:underline dark:text-slate-50",
      transparent: " bg-none text-lg hover:text-slate-300 ",
      subtle:
        " bg-none text-lg hover:bg-slate-400 hover:text-slate-100 active:bg-slate-500 ",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      Icon,
      buttonType = "default",
      dropdownclassName,
      dropdownContent,
      hasIcon,
      size,
      asChild = false,
      ...props
    },
    href
  ) => {
    switch (buttonType) {
      case "default":
        return (
          <>
            <i>{hasIcon ? Icon : ""}</i>
            <a
              className={buttonVariants({ variant, size, className })}
              href={href}
              {...props}
            />
          </>
        )
      case "split":
        return (
          <div className={"flex flex-row"}>
            <i>{hasIcon ? Icon : ""}</i>
            <a
              className={"" + buttonVariants({ variant, size, className })}
              href={href}
              {...props}
            />
            <div
              className={
                "ml-1 flex px-1 py-0 " +
                buttonVariants({ variant, size, className })
              }
            >
              <DropdownMenu>
                <DropdownMenuTrigger className={"select-none focus:outline-0"}>
                  <ChevronDown size={18} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`${dropdownclassName}`}>
                  <DropdownMenuGroup>{dropdownContent}</DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )
    }
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
