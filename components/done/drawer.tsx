"use client"

import {
  Children,
  cloneElement,
  ComponentProps,
  HTMLAttributes,
  isValidElement,
  useEffect,
  useState,
} from "react"
import { tv, VariantProps } from "tailwind-variants"
import { Drawer as DrawerPrimitive } from "vaul"

const {
  Root,
  Title,
  Description,
  Content,
  Overlay,
  Portal,
  Trigger,
  NestedRoot,
  Close,
} = DrawerPrimitive

const drawerSlots = tv({
  slots: {
    drawerOverlay: "fixed inset-0 z-50 bg-black/80",
    drawerContent:
      "fixed z-50 flex h-full flex-col border border-slate-200 bg-white p-4 text-white dark:border-slate-800 dark:bg-[#292929]",
    drawerHeader: "gap-1.5text-center flex sm:text-left",
    drawerFooter: "mt-auto flex flex-col gap-2",
    drawerTitle: "text-lg leading-none font-semibold tracking-tight",
    drawerDescription: "text-sm text-slate-500 dark:text-slate-400",
  },
  variants: {
    inline: {
      true: "flex",
    },
    position: {
      left: {
        drawerContent: "top-0 left-0 h-full",
      },
      right: {
        drawerContent: "top-0 right-0 h-full",
      },
      bottom: { drawerContent: "bottom-0 h-48 w-screen" },
    },
    size: {
      sm: { drawerContent: "w-[320px]" },
      md: { drawerContent: "w-[592px]" },
      lg: { drawerContent: "w-[940px]" },
      full: { drawerContent: "w-screen" },
      positionBottom: { drawerContent: "h-[320px] w-screen" },
    },
    divider: {
      true: {
        drawerContent: "border-r-slate-600 dark:border-r-slate-400",
      },
      false: {
        drawerContent: "border-t-slate-600 dark:border-t-slate-400",
      },
    },
  },
  defaultVariants: {
    position: "left",
    divider: true,
    size: "sm",
  },
})

const {
  drawerOverlay,
  drawerContent,
  drawerFooter,
  drawerHeader,
  drawerTitle,
  drawerDescription,
} = drawerSlots({})

type DrawerProps = ComponentProps<typeof Root> &
  VariantProps<typeof drawerSlots> & {
    defaultOpen: boolean
  }

export function Drawer({
  shouldScaleBackground = true,
  position = "left",
  divider = true,
  size = "sm",
  defaultOpen,
  children,
  open,
  ...props
}: DrawerProps) {
  const [internalOpen, setInternalOpen] = useState<boolean | undefined>(
    undefined
  )

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { position, divider, size } as VariantProps<
        typeof drawerSlots
      >)
    }
    return child
  })

  useEffect(() => {
    setInternalOpen(open)
  }, [open])

  return (
    <Root
      data-slot="drawer"
      shouldScaleBackground={shouldScaleBackground}
      direction={position}
      defaultOpen={defaultOpen}
      {...props}
    >
      {childrenWithProps}
    </Root>
  )
}

export function DrawerTrigger({ ...props }: ComponentProps<typeof Trigger>) {
  return <Trigger data-slot="drawer-trigger" {...props} />
}

export function DrawerPortal({ ...props }: ComponentProps<typeof Portal>) {
  return <Portal data-slot="drawer-portal" {...props} />
}

export function DrawerClose({ ...props }: ComponentProps<typeof Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

export function DrawerOverlay({
  className,
  ...props
}: ComponentProps<typeof Overlay>) {
  return (
    <Overlay
      data-slot="drawer-overlay"
      className={drawerOverlay({ className })}
      {...props}
    />
  )
}

export function DrawerContent({
  className,
  children,
  position,
  divider,
  size,
  ...props
}: ComponentProps<typeof Content> &
  Pick<DrawerProps, "position" | "divider" | "size">) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <Content
        className={drawerContent({
          position,
          divider: position !== "bottom",
          size: position === "bottom" ? "positionBottom" : size,
          className,
        })}
        {...props}
      >
        {children}
      </Content>
    </DrawerPortal>
  )
}

export function DrawerHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="drawer-header"
      className={drawerHeader({ className })}
      {...props}
    />
  )
}

export function DrawerFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="drawer-footer"
      className={drawerFooter({ className })}
      {...props}
    />
  )
}

export function DrawerTitle({
  className,
  ...props
}: ComponentProps<typeof Title>) {
  return (
    <Title
      data-slot="drawer-title"
      className={drawerTitle({
        className,
      })}
      {...props}
    />
  )
}

export function DrawerDescription({
  className,
  ...props
}: ComponentProps<typeof Description>) {
  return (
    <Description
      data-slot="drawer-description"
      className={drawerDescription({ className })}
      {...props}
    />
  )
}
