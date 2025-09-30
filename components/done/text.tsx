import React from "react"
import { tv } from "tailwind-variants"

const textVariants = tv({
  variants: {
    align: {
      start: "text-start",
      center: "text-center",
      end: "text-end",
      justify: "text-justify",
    },
    block: {
      true: "block",
      false: "",
    },
    font: {
      base: "font-normal",
      numeric: "font-numeric",
      monospace: "font-mono",
    },
    italic: {
      true: "italic",
      false: "",
    },
    size: {
      100: "text-[10px]",
      200: "text-[12px]",
      300: "text-[15px]",
      400: "text-[18px]",
      500: "text-[21px]",
      600: "text-[24px]",
      700: "text-[28px]",
      800: "text-[32px]",
      900: "text-[42px]",
      1000: "text-[64px]",
    },
    strikethrough: {
      true: "line-through",
      false: "",
    },
    truncate: {
      true: "truncate",
      false: "",
    },
    underline: {
      true: "underline",
      false: "",
    },
    weight: {
      medium: "font-medium",
      regular: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    wrap: {
      true: "wrap",
      false: "",
    },
  },
  defaultVariants: {
    align: "start",
    block: false,
    font: "base",
    italic: false,
    size: 300,
    strikethrough: false,
    truncate: false,
    underline: false,
    weight: "regular",
    wrap: true,
  },
})

type TextProps = {
  align?: "start" | "center" | "end" | "justify"
  block?: boolean
  font?: "base" | "numeric" | "monospace"
  italic?: boolean
  size?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000
  strikethrough?: boolean
  truncate?: boolean
  underline?: boolean
  weight?: "regular" | "medium" | "semibold" | "bold"
  wrap?: boolean
  className?: string
  children?: React.ReactNode
}

type Tags =
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "b"
  | "em"
  | "i"
  | "strong"
  | "pre"


type PolymorphicProps<T extends React.ElementType> = {
  as?: T
} & TextProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps | "as">

function Text<T extends Tags = "p">({
  as,
  align,
  block,
  font,
  italic,
  size,
  strikethrough,
  truncate,
  underline,
  weight,
  wrap,
  children,
  className,
  ...props
}: PolymorphicProps<T>) {
  const Component = as || "p"
  return (
    <Component
      className={textVariants({
        align,
        block,
        font,
        italic,
        size,
        strikethrough,
        truncate,
        underline,
        weight,
        wrap,
        className,
      })}
      {...(props as any)}
    >
      {children}
    </Component>
  )
}

export default Text
