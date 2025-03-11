"use client"
import { Fallback, Image, Root } from "@radix-ui/react-avatar"
import { CiUser } from "@react-icons/all-files/ci/CiUser"
import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  useMemo,
} from "react"
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
      "border-opacity-0 h-fit max-h-fit w-fit max-w-fit rounded-full border-2 border-blue-500 p-0.5",
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

type AvatarProps = ComponentProps<typeof Root> &
  VariantProps<typeof avatar> & {
    status?: "online" | "offline" | "away" | "busy" | "do-not-disturb"
    active?: boolean
    size?: "sm" | "md" | "lg"
    className?: string
  }

export function Avatar({
  className,
  variant,
  active = false,
  size = "md",
  status = "offline",
  children,
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
        data-slot="avatar"
        className={avatar({ variant, size, className })}
        {...props}
      >
        {childrenWithProps}
        <StatusBadge size={size} status={status} />
      </Root>
    </div>
  )
}

type AvatarImageProps = ComponentProps<typeof Image> &
  VariantProps<typeof avatar> & {
    src: string
  }

export function AvatarImage({
  className,
  variant,
  size,
  src,
  ...props
}: AvatarImageProps) {
  return (
    <Image
      data-slot="avatar-image"
      src={src}
      className={avatar({ variant, size, className })}
      {...props}
    />
  )
}

type AvatarFallbackProps = ComponentProps<typeof Fallback> & {
  children?: string
  className?: string
  size?: "sm" | "md" | "lg"
}

export function AvatarFallback({
  className,
  children,
  size = "md",
  ref,
  ...props
}: AvatarFallbackProps) {
  const iconSize = size === "sm" ? 20 : size === "lg" ? 50 : 30

  return (
    <Fallback
      data-slot="avatar-fallback"
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
