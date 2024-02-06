"use client"

import * as React from "react"
import {Fallback, Image, Root} from "@radix-ui/react-avatar"
import {CiUser} from "react-icons/ci"
import {tv, VariantProps} from "tailwind-variants";

import {cn} from "@/lib/utils"

//--------------------types--------------------//

type AvatarProps = React.ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof avatar>

//--------------------------------------------//

const avatar = tv(
    {
        base: "relative flex dark:bg-gray-700 bg-gray-200 shrink-0 overflow-hidden",
        variants: {
            variant: {
                default: "rounded-full",
                group: "rounded-[5px]",
            },
            size: {
                default: "h-10 w-10",
                sm: "h-4 w-4",
                lg: "h-14 w-14",
                icon: "h-6 w-6",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)
type Props = { size: string }
/** Root of the avatar component
 *
 * @remarks Inherits all properties from {@link HTMLSpanElement}.
 *
 * @param {Props} props
 * @property {string} size - Size of the avatar
 * @property {string?} variant - Style variants
 * @property {string} className - Additional user styles
 */

const Avatar = React.forwardRef<React.ElementRef<typeof Root>, AvatarProps>(
    ({className, variant, size, ...props}, ref) => (
        <Root
            className={avatar({variant, size, className})}
            ref={ref}
            {...props}
        />
    )
)
Avatar.displayName = Root.displayName

//--------------------------------------------//

/**
 * The image to be rendered inside the avatar.
 * If the image fails to load, the {@link AvatarFallback} component will be displayed.
 *
 * @remarks Inherits all properties from {@link HTMLImageElement}.
 * @param {string} className - Additional CSS classes provided by the user.
 */

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof Image>,
    React.ComponentPropsWithoutRef<typeof Image>
>(({className, ...props}, ref) => (
    <Image
        ref={ref}
        className={cn("aspect-square h-full w-full", className)}
        {...props}
    />
))
AvatarImage.displayName = Image.displayName

//--------------------------------------------//


/**
 * Fallback component displayed when an image fails to load or isn't provided.
 *
 * Renders {@link CiUser} if no children are provided.
 *
 * @remarks Inherits all properties from {@link HTMLSpanElement}.
 * @param {ReactNode} children - The fallback content.
 * @param {string} className - Additional CSS classes provided by the user.
 */

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof Fallback>,
    React.ComponentPropsWithoutRef<typeof Fallback>
>(({className, children, ...props}, ref) => (
    <Fallback
        ref={ref}
        className={cn(
            "flex h-full w-full items-center justify-center rounded-full",
            className
        )}
        {...props}
    >
        {children ?? <CiUser className="text-2xl text-gray-800 dark:text-white"/>}
    </Fallback>
))
AvatarFallback.displayName = Fallback.displayName

//--------------------------------------------//

export {Avatar, AvatarImage, AvatarFallback}
