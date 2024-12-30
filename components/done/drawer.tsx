"use client"

import {
  Children,
  cloneElement,
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
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

function Drawer({
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
      shouldScaleBackground={shouldScaleBackground}
      direction={position}
      defaultOpen={defaultOpen}
      {...props}
    >
      {childrenWithProps}
    </Root>
  )
}

Drawer.displayName = "Drawer"

//-----------------------------//

const DrawerTrigger = Trigger

const DrawerPortal = Portal

const DrawerClose = Close

//-----------------------------//

const DrawerOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay ref={ref} className={drawerOverlay({ className })} {...props} />
))
DrawerOverlay.displayName = Overlay.displayName

//-----------------------------//

const DrawerContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content> &
    Pick<DrawerProps, "position" | "divider" | "size">
>(({ className, children, position, divider, size, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <Content
      className={drawerContent({
        position,
        divider: position !== "bottom",
        size: position === "bottom" ? "positionBottom" : size,
        className,
      })}
      ref={ref}
      {...props}
    >
      {children}
    </Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

//-----------------------------//

const DrawerHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={drawerHeader({ className })} {...props} />
)
DrawerHeader.displayName = "DrawerHeader"
//-----------------------------//

const DrawerFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={drawerFooter({ className })} {...props} />
)
DrawerFooter.displayName = "DrawerFooter"

//-----------------------------//

const DrawerTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={drawerTitle({
      className,
    })}
    {...props}
  />
))
DrawerTitle.displayName = Title.displayName

//-----------------------------//

const DrawerDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={drawerDescription({ className })}
    {...props}
  />
))
DrawerDescription.displayName = Description.displayName

//-----------------------------//

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
