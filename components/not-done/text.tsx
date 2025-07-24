import { tv } from "tailwind-variants"

type TextProps<T extends React.ElementType> = {
    as?: T
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
  }

const text = tv({
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
      100: "text-xs",
      200: "text-sm",
      300: "text-base",
      400: "text-lg",
      500: "text-xl",
      600: "text-2xl",
      700: "text-3xl",
      800: "text-4xl",
      900: "text-5xl",
      1000: "text-6xl",
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

function Text<T extends React.ElementType = "p">({
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
}: TextProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
  const TextTag = as || "p"
  return (
    <TextTag
      className={text({
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
      })}
      {...props}
    >
      {children}
    </TextTag>
  )
}
export default Text
