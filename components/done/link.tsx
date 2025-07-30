import React from "react"
import { tv } from "tailwind-variants"

const linkVariants = tv({
  base: "text-black dark:text-slate-100",
  variants: {
    appearance: {
      default: "text-brand-primary dark:text-brand-primary",
      subtle: "",
    },
    disabled: {
      true: "cursor-not-allowed text-gray-600 opacity-50 dark:text-gray-600/90",
      false: "hover:underline",
    },
    disabledFocusable: {
      true: "focus:ring-0 focus:outline-none",
      false: "",
    },
    inline: { true: "inline underline", false: "" },
  },
  defaultVariants: {
    appearance: "default",
    disabled: false,
    disabledFocusable: false,
  },
})

type Tags = "a" | "button" | "span"

type PolymorphicProps<T extends React.ElementType> = {
  as?: T
} & LinkProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof LinkProps | "as">

type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
  appearance?: "default" | "subtle"
  disabled?: boolean
  disabledFocusable?: boolean
  inline?: boolean
  href?: string | undefined
}

function Link({
  as,
  appearance,
  disabled,
  disabledFocusable,
  inline,
  href,
  children,
  className,
  ...props
}: PolymorphicProps<Tags>) {
  disabled = disabled || disabledFocusable
  const Component = (disabled && "p") || as || "a"
  return (
    <Component
      href={href}
      className={linkVariants({
        appearance,
        disabled,
        disabledFocusable,
        inline,
        className,
      })}
      {...(props as any)}
    >
      {children}
    </Component>
  )
}

export default Link
