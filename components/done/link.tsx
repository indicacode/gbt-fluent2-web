import { default as NextLink } from "next/link"
import { PropsWithChildren } from "react"
import { tv, VariantProps } from "tailwind-variants"

const linkStyles = tv({
  base: "text-black dark:text-slate-100",
  variants: {
    variant: {
      default: "text-brand-primary dark:text-brand-primary hover:underline",
      subtle: "hover:underline",
      false: "decoration-none",
    },
    disabled: {
      true: "cursor-not-allowed text-gray-600 opacity-50 select-text dark:text-gray-600/90",
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

export function Link({
  children,
  href,
  variant,
  disabled,
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={linkStyles({
        variant: disabled ? !disabled : variant,
        disabled,
      })}
    >
      {children}
    </NextLink>
  )
}
