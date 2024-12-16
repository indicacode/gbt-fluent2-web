"use client"
import { Fallback, Root } from "@radix-ui/react-avatar"
import { CiUser } from "@react-icons/all-files/ci/CiUser"
import { Children, cloneElement, isValidElement, Ref, useMemo } from "react"
import { tv, VariantProps } from "tailwind-variants"
import { StatusBadge } from "../done/status-badge"

// Avatar styles using Tailwind Variants
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
      sm: { avatar: "h-8 w-8" },
      md: { avatar: "h-12 w-12" },
      lg: { avatar: "h-[72px] w-[72px]" },
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

const { avatar, avatarFallback, avatarActiveRing } = avatarSlots()

type AvatarProps = React.ComponentProps<typeof Root> &
  VariantProps<typeof avatar> & {
    status?: "online" | "offline" | "away" | "busy" | "do-not-disturb"
    active?: boolean
    size?: "sm" | "md" | "lg"
    className?: string
    ref?: React.Ref<HTMLSpanElement>
  }

function Avatar({
  className,
  variant,
  active = false,
  size = "md",
  status = "offline",
  children,
  ref,
  ...props
}: AvatarProps) {
  const childrenWithProps = useMemo(
    () =>
      Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { variant, size, status })
        }
        return child
      }),
    [children, variant, size, status]
  )

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

type AvatarImageProps = React.ImgHTMLAttributes<HTMLImageElement> &
  VariantProps<typeof avatar> & {
    src: string
  }

function AvatarImage({
  className,
  variant,
  size,
  src,
  ...props
}: AvatarImageProps) {
  return (
    <img
      src={src}
      className={avatar({ variant, size, className })}
      {...props}
    />
  )
}

type AvatarFallbackProps = typeof Fallback & {
  children?: string
  className?: string
  size?: "sm" | "md" | "lg"
  ref: Ref<HTMLSpanElement & typeof Fallback>
}

function AvatarFallback({
  className,
  children,
  size = "md",
  ref,
  ...props
}: AvatarFallbackProps) {
  const iconSize = size === "sm" ? 20 : size === "lg" ? 50 : 30

  return (
    <Fallback
      ref={ref}
      className={avatarFallback({ size, className })}
      {...props}
    >
      {children ? (
        children
          .split(" ")
          .map((name) => name.charAt(0).toUpperCase())
          .join("")
      ) : (
        <CiUser
          size={iconSize}
          data-testid="fallback-icon"
          className="text-2xl"
        />
      )}
    </Fallback>
  )
}

export { Avatar, AvatarFallback, AvatarImage }
