import React, { forwardRef, PropsWithChildren, Ref } from "react"
import { default as NextLink } from "next/link"
import { tv, VariantProps } from "tailwind-variants"

const linkStyles = tv({
  base: "text-black dark:text-slate-100",
  variants: {
    variant: {
      default: "text-brand-primary hover:underline dark:text-brand-primary",
      subtle: "hover:underline",
      false: "decoration-none",
    },
    disabled: {
      true: "cursor-not-allowed select-text text-gray-600  opacity-50 dark:text-gray-600/90",
    },
    inline: "inline underline",
  },
  defaultVariants: {
    variant: "default",
  },
})

interface LinkProps
  extends Omit<HTMLAnchorElement, "children">,
    PropsWithChildren,
    VariantProps<typeof linkStyles> {}

function Link(
  { children, href, variant, disabled, ...props }: LinkProps,
  ref: Ref<HTMLAnchorElement>
) {
  return (
    <NextLink
      href={href}
      ref={ref}
      className={linkStyles({
        variant: disabled ? !disabled : variant,
        disabled,
      })}
    >
      {children}
    </NextLink>
  )
}
const ForwardedLink = forwardRef(Link)
export { ForwardedLink as Link }
