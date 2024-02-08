import * as React from "react"
import {Slot} from "@radix-ui/react-slot"

import {tv, VariantProps} from "tailwind-variants";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const buttonVariants = tv(
    {
        base: "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium text-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none text-center disabled:opacity-50 dark:focus-visible:ring-slate-300",
        variants: {
            variant: {
                default:
                    " text-whitesmoke text-lg  bg-center px-4 py-2 bg-brandColor-primary hover:bg-brandColor-hover active:bg-brandColor-dark active:border-brandColor-secondary active:gray-200 transition-colors ease-out duration-400 ",

                outline:
                    " border-brandColor-primary border-2 text-lg px-4 py-2 active:bg-brandColor-secondary hover:bg-brandColor-secondary transition-colors duration-400 transition-colors ease-out duration-400  active:border-brandColor-secondary shadow-sm text-white  hover:bg-brandColor-default ",
                secondary:
                    "px-4 py-2 text-lg bg-gray-200 hover:bg-gray-300 rounded-sm text-brandColor-primary transition-colors ease-out duration-400 active:bg-gray-400 ",
                disabled: "bg-gray-600 text-lg px-4 py-2 text-gray-400",
                link: "text-slate-50 text-lg px-4 py-2 transition-colors ease-out duration-400 underline-offset-4 hover:underline dark:text-slate-50",
                transparent: " bg-none text-lg hover:text-slate-300 ",
                subtle:
                    " bg-none text-lg hover:bg-slate-400 active:bg-slate-500 hover:text-slate-100 ",
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
    }
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className,hasIcon,Icon, variant, size, asChild = false, ...props}, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <>
                <i>{ hasIcon?  Icon :  ""}</i>
            <Comp
                className={buttonVariants({variant, size, className})}
                ref={ref}
                {...props}
            />
            </>
        )
    }
)
Button.displayName = "Button"

export {Button, buttonVariants}
