"use client"

import * as React from "react"
import {Content, Header, Item, Root, Trigger} from "@radix-ui/react-accordion"
import {ChevronRightIcon} from "@radix-ui/react-icons"

import {cn} from "@/lib/utils"

const Accordion = Root

Accordion.displayName = "Accordion"
//----------------------------------------//

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof Item>,
    React.ComponentPropsWithoutRef<typeof Item>
>(({className, ...props}, ref) => (
    <Item ref={ref} className={cn("border-b", className)} {...props} />
))

AccordionItem.displayName = "AccordionItem"
//----------------------------------------//

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof Trigger>,
    React.ComponentPropsWithoutRef<typeof Trigger>
>(({className, children, ...props}, ref) => (
    <Header className="flex items-center">
        <Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-90",
                className
            )}
            {...props}
        >
            <ChevronRightIcon
                className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 dark:text-slate-400"/>
            {children}
        </Trigger>
    </Header>
))

AccordionTrigger.displayName = Trigger.displayName
//----------------------------------------//

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof Content>,
    React.ComponentPropsWithoutRef<typeof Content>
>(({className, children, ...props}, ref) => (
    <Content
        ref={ref}
        className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </Content>
))

AccordionContent.displayName = Content.displayName
//----------------------------------------//

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent}
