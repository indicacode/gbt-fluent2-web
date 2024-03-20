"use client"

import * as React from "react"
import { ComponentPropsWithoutRef, forwardRef, Ref } from "react"
import { Person20Regular } from "@fluentui/react-icons"
import { Fallback, Image, Root } from "@radix-ui/react-avatar"
import { CiUser } from "react-icons/ci"
import { tv, VariantProps } from "tailwind-variants"

import { cn } from "@/lib/utils"

import { StatusBadge } from "../reviewing"


//--------------------types--------------------//

type AvatarProps = React.ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof avatar> & {
    status: "online" | "offline" | "away" | "busy" | "do-not-disturb"
  }

//--------------------------------------------//

const avatar = tv({
  base: "relative flex shrink-0 overflow-hidden bg-gray-200 dark:bg-gray-700",
  variants: {
    variant: {
      default: "rounded-full",
      group: "rounded-[5px]",
    },
    size: {
      default: "h-8 w-8",
      sm: "h-4 w-4",
      lg: "h-14 w-14",
      icon: "h-6 w-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

/** Root of the avatar component
 *
 * @remarks Inherits all properties from {@link HTMLSpanElement}.
 *
 * @param {AvatarProps} props
 * @property {string} size - Size of the avatar
 * @property {string?} variant - Style variants
 * @property {string} className - Additional user styles
 */

const Avatar = React.forwardRef<React.ElementRef<typeof Root>, AvatarProps>(
  ({ className, variant, size, status, children, ...props }, ref) => (
    <div className="relative-wrapper relative max-h-fit max-w-fit rounded-full">
      <Root
        className={avatar({ variant, size, className })}
        ref={ref}
        {...props}
      >
        {children}
      </Root>
      <StatusBadge status={status} />
    </div>
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
>(({ className, ...props }, ref) => (
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
 * @param {string} children - The fallback content.
 * @param {string} className - Additional CSS classes provided by the user.
 */

type AvatarFallbackProps = ComponentPropsWithoutRef<typeof Fallback> & {
  children: string
}
type AvatarFallbackTypes = Ref<HTMLSpanElement> & Ref<typeof Fallback>

function AvatarFallback(
  { className, children, ...props }: AvatarFallbackProps,
  ref: AvatarFallbackTypes
) {
  let initials = ""
  children.split(" ").forEach((item) => (initials += item.slice(0, 1)))
  console.log(initials)

  return (
    <Fallback
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    >
      {
        <>
          <Person20Regular />
          {/*<CiUser className="text-2xl text-gray-800 dark:text-white" />*/}
        </>
      }
    </Fallback>
  )
}

const ForwardedAvatarFallback = forwardRef(AvatarFallback)
ForwardedAvatarFallback.displayName = Fallback.displayName

//--------------------------------------------//

export { Avatar, AvatarImage, ForwardedAvatarFallback as AvatarFallback }
