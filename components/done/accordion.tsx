"use client"

import * as React from "react"
import { Content, Header, Item, Root, Trigger } from "@radix-ui/react-accordion"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { tv } from "tailwind-variants"

import { cn } from "@/lib/utils"

const accordionSlots = tv({
  slots: {
    accordionItem: "relative mx-1 pb-4 pl-5",

    // ---group--- //
    header: "flex items-center bg-transparent",
    trigger:
      "flex flex-1 items-center gap-2 text-sm font-medium transition-all dark:text-white [&[data-state=open]>svg]:rotate-90",
    icon: "absolute left-0 h-4 w-4 shrink-0 text-black transition-transform duration-200 dark:text-white",
    // ---group--- //

    content:
      "overflow-hidden bg-transparent text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down dark:text-white",
  },
  variants: {
    size: {
      sm: { accordionItem: "", header: "", trigger: "", icon: "", content: "" },
      md: { accordionItem: "", header: "", trigger: "", icon: "", content: "" },
      lg: { accordionItem: "", header: "", trigger: "", icon: "", content: "" },
      xl: { accordionItem: "", header: "", trigger: "", icon: "", content: "" },
    },
  },
})

const { accordionItem, header, trigger, icon, content } = accordionSlots({
  // size,
})

const Accordion = ({ children, size, ...props }: any) => {
  React.useEffect(() => {
    // context.setSize(size)
  }, [size])
  //@ts-ignore
  return <Root>{children}</Root>
}

Accordion.displayName = "Accordion"
//----------------------------------------//

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => {
  // const [size] = getcontext()
  return <Item ref={ref} className={accordionItem({ className })} {...props} />
})

AccordionItem.displayName = "AccordionItem"
//----------------------------------------//

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Header className={header()}>
    <Trigger
      ref={ref}
      className={trigger({
        className,
      })}
      {...props}
    >
      <ChevronRightIcon className={icon()} />
      {children}
    </Trigger>
  </Header>
))

AccordionTrigger.displayName = Trigger.displayName
//----------------------------------------//

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content ref={ref} className={content({ className })} {...props}>
    <div className={content({ className })}>{children}</div>
  </Content>
))
AccordionContent.displayName = Content.displayName
//----------------------------------------//

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
