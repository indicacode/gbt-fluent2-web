import * as React from "react"
import {tv, VariantProps} from "tailwind-variants";

const inputVariants = tv(
    {
        base: "flex w-full rounded-md bg-transparent px-4 py-2 text-sm shadow-sm outline-0",
        variants: {
            variant: {
                default: "flex border-2 hover:border-b-blue-500 transition-colors"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export interface InputPropsType
    extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    variant?: "default"
    subtext?: string
    subtextClasses?: string
    placeholderText?: string
    placeholderClasses?: string
}

const Input = React.forwardRef<
    HTMLInputElement,
    InputPropsType
>(({subtextClasses, className, placeholderClasses, placeholderText, subtext, type, variant, ...props}, ref) => {
    return (
        (
            <div className={"flex flex-col"}>
                <h2 className={"text-black  py-1" + placeholderClasses}>{placeholderText}</h2>
                <input
                    data-focus={false}
                    onFocus={(e) =>
                        e.target.dataset.focus = true
                    }
                    type={type}
                    className={inputVariants({variant, className}) + " data-[focus=true]:border-red-700"}
                    ref={ref}
                    {...props} />
                <h2 className={"" + subtextClasses}>{subtext}</h2>
            </div>
        ))
})
Input.displayName = "Input"

export {Input, inputVariants}
