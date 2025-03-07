import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import {
  Content,
  Indicator,
  Item,
  Link,
  List,
  Root,
  Trigger,
  Viewport,
} from "@radix-ui/react-navigation-menu"
import { ComponentProps } from "react"
import { tv } from "tailwind-variants"

const trigger = tv({
  base: [
    "group inline-flex h-9 w-max items-center justify-center rounded-md",
    "bg-white px-4 py-2 text-sm font-medium transition-colors",
    "hover:bg-slate-100 hover:text-slate-900",
    "focus:bg-slate-100 focus:text-slate-900 focus:outline-hidden",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-active:bg-slate-100/50 data-[state=open]:bg-slate-100/50",
    "dark:bg-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-50",
    "dark:focus:bg-slate-800 dark:focus:text-slate-50",
    "dark:data-active:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50",
  ],
})

type NavigationMenuProps = ComponentProps<typeof Root> & {
  className?: string
  viewport?: boolean
}
type NavigationMenuListProps = ComponentProps<typeof List> & {
  className?: string
}
type NavigationMenuTriggerProps = ComponentProps<typeof Trigger> & {
  className?: string
}
type NavigationMenuContentProps = ComponentProps<typeof Content> & {
  className?: string
}
type NavigationMenuViewportProps = ComponentProps<typeof Viewport> & {
  className?: string
}
type NavigationMenuIndicatorProps = ComponentProps<typeof Indicator> & {
  className?: string
}

export function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: NavigationMenuProps) {
  return (
    <Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </Root>
  )
}

export function NavigationMenuList({
  className,
  ...props
}: NavigationMenuListProps) {
  return (
    <List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof Item>) {
  return (
    <Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

export function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuTriggerProps) {
  return (
    <Trigger
      data-slot="navigation-menu-trigger"
      className={cn(trigger(), "group", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </Trigger>
  )
}

export function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuContentProps) {
  return (
    <Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out",
        "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out",
        "data-[motion=from-end]:slide-in-from-right-52",
        "data-[motion=from-start]:slide-in-from-left-52",
        "data-[motion=to-end]:slide-out-to-right-52",
        "data-[motion=to-start]:slide-out-to-left-52",
        "top-0 left-0 w-full md:absolute md:w-auto",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuLink({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      data-slot="navigation-menu-link"
      className={cn(
        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

export function NavigationMenuViewport({
  className,
  ...props
}: NavigationMenuViewportProps) {
  return (
    <div className={cn("absolute top-full left-0 flex justify-center")}>
      <Viewport
        className={cn(
          "origin-top-center",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90",
          "relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)]",
          "w-full overflow-hidden rounded-md border border-slate-200",
          "bg-white text-slate-950 shadow-sm",
          "md:w-[var(--radix-navigation-menu-viewport-width)]",
          "dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

export function NavigationMenuIndicator({
  className,
  ...props
}: NavigationMenuIndicatorProps) {
  return (
    <Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out",
        "data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md dark:bg-slate-800" />
    </Indicator>
  )
}
