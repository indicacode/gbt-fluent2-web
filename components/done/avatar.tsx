"use client"

import * as React from "react"
import { Fallback, Image, Root } from "@radix-ui/react-avatar"
import { CiUser } from "react-icons/ci"
import {tv, VariantProps} from "tailwind-variants";

import { cn } from "@/lib/utils"
import {twMerge} from "tailwind-merge";

//--------------------types--------------------//

type AvatarProps = React.ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof avatar>
//--------------------------------------------//

const avatar = tv(
  {
  base:"relative flex dark:bg-gray-700 bg-gray-200 shrink-0 overflow-hidden",
    variants: {
      variant: {
        default: "rounded-full",
        group: "rounded-[5px]",
      },
      size: {
        default: "h-10 w-10",
        sm: "",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Avatar = React.forwardRef<React.ElementRef<typeof Root>, AvatarProps>(
  ({ className, variant, size, ...props }, ref) => (
    <Root
      className={avatar({ variant, size, className })}
      ref={ref}
      {...props}
    />
  )
)
Avatar.displayName = Root.displayName

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

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof Fallback>,
  React.ComponentPropsWithoutRef<typeof Fallback>
>(({ className, children, ...props }, ref) => (
  <Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full",
      className
    )}
    {...props}
  >
    {children ?? <CiUser className="text-2xl text-gray-800 dark:text-white" />}
  </Fallback>
))
AvatarFallback.displayName = Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
