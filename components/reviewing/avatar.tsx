"use client"

import * as React from "react"
import { ComponentPropsWithoutRef, forwardRef, Ref } from "react"
import { Fallback, Image, Root } from "@radix-ui/react-avatar"
import { CiUser } from "react-icons/ci"
import { tv, VariantProps } from "tailwind-variants"

import { cn } from "@/lib/utils"

import { StatusBadge } from "../reviewing" //--------------------types--------------------//

//--------------------types--------------------//

type AvatarProps = React.ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof avatar> & {
    status: "online" | "offline" | "away" | "busy" | "do-not-disturb"
  }

//-------------avatar-and-avatar-image-------------//
const avatar = tv({
  base: "relative box-border flex shrink-0 rounded-full bg-gray-600",
  variants: {
    variant: {
      default: "rounded-full",
      group: "rounded-[5px]",
    },
    size: {
      sm: "h-8 w-8", //32px
      md: "h-12 w-12", //48px
      lg: "h-[72px] w-[72px]", //72px
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
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
  ({ className, variant, size = "md", status, children, ...props }, ref) => {
    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { variant, size, status })
      }
      return child
    })
    return (
      <Root
        className={avatar({ variant, size, className })}
        ref={ref}
        {...props}
      >
        {childrenWithProps}
        <StatusBadge size={size} status={status} />
      </Root>
    )
  }
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
>(({ className, variant, size, status, ...props }, ref) => (
  <Image
    ref={ref}
    className={avatar({ variant, size, className })}
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
  size: "sm" | "md" | "lg"
}
type AvatarFallbackTypes = Ref<HTMLSpanElement> & Ref<typeof Fallback>

function AvatarFallback(
  { className, children, size, ...props }: AvatarFallbackProps,
  ref: AvatarFallbackTypes
) {
  let initials = ""
  children.split(" ").forEach((item) => (initials += item.slice(0, 1)))
  console.log(initials)

  let iconSize: "20" | "30" | "50"

  switch (size) {
    case "sm":
      iconSize = "20"
      break
    case "md":
      iconSize = "30"
      break
    case "lg":
      iconSize = "50"
      break
    default:
      iconSize = "30"
  }

  return (
    <Fallback
      ref={ref}
      className={cn(
        "bg-muted flex h-full w-full items-center justify-center rounded-full text-white",
        className
      )}
      {...props}
    >
      {
        <>
          {<CiUser size={iconSize} className="text-2xl " /> ||
            children?.split(" ").map((name) => name.slice(0, 1).toUpperCase())}
        </>
      }
    </Fallback>
  )
}

const ForwardedAvatarFallback = forwardRef(AvatarFallback)
ForwardedAvatarFallback.displayName = Fallback.displayName

//--------------------------------------------//

export { Avatar, AvatarImage, ForwardedAvatarFallback as AvatarFallback }
