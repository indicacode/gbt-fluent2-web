"use client"

import { StatusBadge } from "@/components/done/status-badge"
import { Fallback, Image, Root } from "@radix-ui/react-avatar"
import { CiUser } from "@react-icons/all-files/ci/CiUser"
import {
  Children,
  cloneElement,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  isValidElement,
  ReactElement,
  Ref,
} from "react"
import { tv, VariantProps } from "tailwind-variants"

//--------------------types--------------------//

type AvatarProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof avatar> & {
    status?: "online" | "offline" | "away" | "busy" | "do-not-disturb"
  }

//-------------avatar-and-avatar-image-------------//
const avatarSlots = tv({
  slots: {
    avatar:
      "relative box-border flex shrink-0 rounded-full bg-gray-600 object-cover",
    avatarFallback:
      "bg-muted flex h-full w-full items-center justify-center rounded-full text-white",
    avatarActiveRing:
      "h-fit max-h-fit w-fit max-w-fit rounded-full border-2 border-blue-500 border-opacity-0 p-0.5",
  },
  variants: {
    variant: {
      default: { avatar: "rounded-full" },
      group: { avatar: "rounded-[5px]" },
    },
    size: {
      sm: { avatar: "h-8 w-8" }, //32px
      md: { avatar: "h-12 w-12" }, //48px
      lg: { avatar: "h-[72px] w-[72px]" }, //72px
    },
    active: {
      true: { avatarActiveRing: "border-opacity-100" },
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

const { avatar, avatarFallback, avatarActiveRing } = avatarSlots({})

const Avatar = forwardRef<ElementRef<typeof Root>, AvatarProps>(
  (
    {
      className,
      variant,
      active = false,
      size = "md",
      status = "offline",
      children,
      ...props
    },
    ref
  ) => {
    const childrenWithProps = Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child as ReactElement, {
          variant,
          size,
          status,
        })
      }
      return child
    })

    return (
      <div className={avatarActiveRing({ active })}>
        <Root
          className={avatar({ variant, size, className })}
          ref={ref}
          {...props}
        >
          {childrenWithProps}
          <StatusBadge size={size} status={status} />
        </Root>
      </div>
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

const AvatarImage = forwardRef<
  ElementRef<typeof Image>,
  ComponentPropsWithoutRef<typeof Image> & AvatarProps
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
  size?: "sm" | "md" | "lg"
}
type AvatarFallbackTypes = Ref<HTMLSpanElement> & Ref<typeof Fallback>

function AvatarFallback(
  { className, children, size, ...props }: AvatarFallbackProps,
  ref: AvatarFallbackTypes
) {
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
      className={avatarFallback({
        size,
        className,
      })}
      {...props}
    >
      {
        <>
          {children === undefined ? (
            <CiUser size={iconSize} className="text-2xl" />
          ) : (
            children?.split(" ").map((name) => name.slice(0, 1).toUpperCase())
          )}
        </>
      }
    </Fallback>
  )
}

const ForwardedAvatarFallback = forwardRef(AvatarFallback)
ForwardedAvatarFallback.displayName = Fallback.displayName

//--------------------------------------------//

export { Avatar, ForwardedAvatarFallback as AvatarFallback, AvatarImage }
