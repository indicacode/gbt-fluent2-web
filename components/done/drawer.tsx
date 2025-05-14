"use client"

import {
  Children,
  cloneElement,
  ComponentProps,
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
    divider?: boolean
    defaultOpen: boolean
  }

function Drawer({
  shouldScaleBackground = true,
  position = "left",
  divider,
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

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

const DrawerOverlay = ({
  className,
  ...props
}: ComponentProps<typeof Overlay>) => (
  <Overlay
    data-slot="drawer-overlay"
    className={drawerOverlay({ className })}
    {...props}
  />
)

const DrawerContent = ({
  className,
  children,
  position,
  divider,
  size,
  ...props
}: ComponentProps<typeof Content> & VariantProps<typeof drawerContent>) => (
  <DrawerPortal data-slot="drawer-portal">
    <DrawerOverlay />
    <Content
      data-slot="drawer-content"
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

const DrawerHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="drawer-header"
    className={drawerHeader({ className })}
    {...props}
  />
)

const DrawerFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="drawer-footer"
    className={drawerFooter({ className })}
    {...props}
  />
)

const DrawerTitle = ({
  className,
  ...props
}: ComponentProps<typeof Title> & VariantProps<typeof drawerTitle>) => (
  <Title
    data-slot="drawer-title"
    className={drawerTitle({
      className,
    })}
    {...props}
  />
)

const DrawerDescription = ({
  className,
  ...props
}: ComponentProps<typeof Description> &
  VariantProps<typeof drawerDescription>) => (
  <Description className={drawerDescription({ className })} {...props} />
)

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
}
