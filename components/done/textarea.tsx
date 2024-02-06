import * as React from "react"

import {cn} from "@/lib/utils"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({className,label , ...props}, ref) => {
        return (
            <>
                <div className={"flex flex-col"}>
                    <h2 className={"font-bold text-lg dark:text-slate-200"} > {label}</h2>
            <textarea
                className={cn(
                    "flex min-h-[60px] text-clip dark:text-slate-200 transition-colors duration-200 active:border-b-blue-500   w-full  focus:border-b-blue-400 rounded-md border  border-slate-200 bg-transparent px-4 py-2 text-sm shadow-sm placeholder:text-slate-500 focus-visible:outline-none  focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-200 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
                    className
                )}
                ref={ref}
                {...props}
            />
                </div>
            </>
        )
    }
)
Textarea.displayName = "Textarea"

export {Textarea}
