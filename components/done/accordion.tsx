"use client"

import * as React from "react"
import { Content, Header, Item, Root, Trigger } from "@radix-ui/react-accordion"
import { ChevronRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"





//TODO need refactor
const Accordion = Root

Accordion.displayName = "Accordion"
//----------------------------------------//

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn("relative mx-1 pb-4 pl-5", className)}
    {...props}
  />
))

AccordionItem.displayName = "AccordionItem"
//----------------------------------------//

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Header className="flex items-center bg-transparent">
    <Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center gap-2 text-sm font-medium transition-all dark:text-white [&[data-state=open]>svg]:rotate-90",
        className
      )}
      {...props}
    >
      <ChevronRightIcon className="absolute left-0 h-4 w-4 shrink-0 text-black transition-transform duration-200 dark:text-white" />
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
  <Content
    ref={ref}
    className={
      "overflow-hidden bg-transparent text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down dark:text-white"
    }
    {...props}
  >
    <div className={cn("px-0", className)}>{children}</div>
  </Content>
))

AccordionContent.displayName = Content.displayName
//----------------------------------------//

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
// "use client"
//
// import * as React from "react"
// import { Content, Header, Item, Root, Trigger } from "@radix-ui/react-accordion"
// import { ChevronRightIcon } from "@radix-ui/react-icons"
//
// import { cn } from "@/lib/utils"
//
//
//
//
//
// const Accordion = Root
//
// Accordion.displayName = "Accordion"
// //----------------------------------------//
//
// const AccordionItem = React.forwardRef<
//     React.ElementRef<typeof Item>,
//     React.ComponentPropsWithoutRef<typeof Item>
// >(({ className, ...props }, ref) => (
//     <Item ref={ref} className={cn(className)} {...props} />
// ))
//
// AccordionItem.displayName = "AccordionItem"
// //----------------------------------------//
//
// const AccordionTrigger = React.forwardRef<
//     React.ElementRef<typeof Trigger>,
//     React.ComponentPropsWithoutRef<typeof Trigger>
// >(({ className, children, ...props }, ref) => (
//     <Header className="flex items-center bg-white bg-transparent">
//         <Trigger
//             ref={ref}
//             className={cn(
//                 "flex flex-1  items-center gap-2 py-4 text-sm font-medium transition-all hover:underline dark:text-white [&[data-state=open]>svg]:rotate-90",
//                 className
//             )}
//             {...props}
//         >
//             <ChevronRightIcon className="h-4 w-4 shrink-0 text-black transition-transform duration-200 dark:text-white" />
//             {children}
//         </Trigger>
//     </Header>
// ))
//
// AccordionTrigger.displayName = Trigger.displayName
// //----------------------------------------//
//
// const AccordionContent = React.forwardRef<
//     React.ElementRef<typeof Content>,
//     React.ComponentPropsWithoutRef<typeof Content>
// >(({ className, children, ...props }, ref) => (
//     <Content
//         ref={ref}
//         className={
//             "overflow-hidden bg-white  px-7 text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down dark:bg-gray-900 dark:text-white"
//         }
//         {...props}
//     >
//         <div className={cn("pb-4 pt-0", className)}>{children}</div>
//     </Content>
// ))
//
// AccordionContent.displayName = Content.displayName
// //----------------------------------------//
//
// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
