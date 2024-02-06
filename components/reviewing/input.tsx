import * as React from "react"
import { cn } from "@/lib/utils"
import {tv} from "tailwind-variants";

const inputVariants = tv(
    {
    base:"flex  w-full rounded-md  bg-transparent px-4 py-2 text-sm shadow-sm transition-colors outline-black file:bg-transparent file:text-sm file:font-medium  disabled:cursor-not-allowed disabled:opacity-50  dark:placeholder:text-slate-400 \",\n" +
        "        variants: {file:bg-transparent file:text-sm file:font-medium  disabled:cursor-not-allowed disabled:opacity-50  dark:placeholder:text-slate-400 ",
        variants: {
            variant: {
                default:"flex  w-full active:border-t-black active:border-l-black active:border-r-black   bg-transparent px-4 py-2 focus:border-r-2 border-l-2 border-r-2 border-t-2 border-b-2  rounded-br-none rounded-bl-none  active:border-b-blue-500  hover:border-b-blue-500 text-sm shadow-sm transition-colors "
            }

        },
        defaultVariants: {
            variant:"default"
        }
    }
)


const Input = React.forwardRef(({subtextClasses, className,placeholderClasses, placeholderText,subtext, type,variant, ...props }, ref) => {
    return (
        (
            <div className={"flex flex-col"}>
                <h2 className={" text-black  py-1"+placeholderClasses}>{placeholderText}</h2>
                <input
                    type={type}
                    className={cn(inputVariants({ variant, className }))}
                    ref={ref}
                    {...props} />
                <h2 className={""+ subtextClasses}>{subtext}</h2>
            </div>
        ))
})
Input.displayName = "Input"

export { Input, inputVariants }
