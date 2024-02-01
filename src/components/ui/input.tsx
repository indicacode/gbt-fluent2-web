import * as React from "react"
import {cn} from "@/lib/utils"
import {cva} from "class-variance-authority";

const inputVariants = cva(
    "flex  w-full rounded-md  bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
    {
        variants: {
            variant: {
                default: "flex  w-full   bg-transparent px-2 border-t-2 border-l-2 border-r-2 border-b-2 focus:border-b-black focus:border-b-[1px] hover:border-b-[1px] hover:border-b-black text-sm shadow-sm transition-colors "
            }

        },
        defaultVariants: {
            variant: "default"
        }
    }
)


const Input = React.forwardRef(({
                                    SubtextClasses,
                                    className,
                                    PlaceholderClasses,
                                    PlaceholderText,
                                    Subtext,
                                    type,
                                    variant,
                                    ...props
                                }, ref) => {
    return (
        (
            <div className={"flex   flex-col"}>
                <h2 className={" text-black  py-1" + PlaceholderClasses}>{PlaceholderText}</h2>
                <input
                    type={type}
                    className={cn(inputVariants({variant, className}))}
                    ref={ref}
                    {...props} />
                <h2 className={"" + SubtextClasses}>{Subtext}</h2>
            </div>
        ))
})
Input.displayName = "Input"

export {Input, inputVariants}
