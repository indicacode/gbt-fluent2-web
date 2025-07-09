"use client"
import { tv } from "tailwind-variants"

type ImageProps = React.ComponentPropsWithRef<"img"> & {
  ref?: React.Ref<HTMLImageElement>
  block?: boolean
  bordered?: boolean
  fit?: "none" | "center" | "contain" | "cover" | "default"
  shadow?: boolean
  shape?: "circular" | "rounded" | "square"
  src: string | Blob | undefined
  alt?: string | undefined
  width?: number
  height?: number
}

const imageVariants = tv({
  variants: {
    block: { true: "object-contain", false: "" },
    bordered: { true: "border-2 border-gray-300", false: "" },
    fit: {
      none: "object-none",
      center: "object-center",
      contain: "object-contain",
      cover: "object-cover",
      default: "",
    },
    shadow: { true: "drop-shadow-xl", false: "" },
    shape: {
      circular: "rounded-full",
      rounded: "rounded-2xl",
      square: "rounded-none",
    },
  },
  defaultVariants: {
    block: false,
    bordered: false,
    fit: "default",
    shadow: false,
    shape: "square",
  },
})

export default function Image({
  ref,
  block,
  bordered,
  fit,
  shadow,
  shape,
  src,
  alt,
  width,
  height,
  className,
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      ref={ref}
      className={imageVariants({
        shape,
        bordered,
        block,
        fit,
        shadow,
        className,
      })}
    ></img>
  )
}
