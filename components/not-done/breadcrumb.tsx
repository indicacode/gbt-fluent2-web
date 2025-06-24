import { Slot } from "@radix-ui/react-slot"
import { MoreHorizontal } from "lucide-react"
import * as React from "react"
import { GoChevronRight } from "react-icons/go"

import { cn } from "@/lib/utils"
import { tv } from "tailwind-variants"

const breadcrumbVariants = tv({
  base: "",
  variants: { size: { small: "text-sm", medium: "text-md", large: "text-lg" } },
  defaultVariants: { size: "medium" },
})

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({
  size,
  className,
  ...props
}: React.ComponentProps<"ol"> & { size?: "small" | "medium" | "large" }) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        breadcrumbVariants({ size }),
        "text-muted-foreground flex flex-wrap items-center gap-1.5 break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({
  size,
  className,
  ...props
}: React.ComponentProps<"li"> & { size?: "small" | "medium" | "large" }) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn(
        breadcrumbVariants({ size }),
        "inline-flex items-center gap-1.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbLink({
  size,
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "small" | "medium" | "large"
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        breadcrumbVariants({ size }),
        "hover:text-foreground transition-colors",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbPage({
  size,
  className,
  ...props
}: React.ComponentProps<"span"> & {
  size?: "small" | "medium" | "large"
}) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        breadcrumbVariants({ size }),
        "text-foreground font-semibold",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      {children ?? <GoChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}
