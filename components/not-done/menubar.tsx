"use client"

import {
    CheckIcon,
    ChevronRightIcon,
    DotFilledIcon,
} from "@radix-ui/react-icons"
import {
    CheckboxItem,
    Content,
    Group,
    Item,
    ItemIndicator,
    Label,
    Menu, MenubarCheckboxItemProps,
    MenubarContentProps, MenubarItemProps as RadixMenubarItemProps, MenubarLabelProps as RadixMenubarLabelProps,
    MenubarProps, MenubarRadioItemProps, MenubarSeparatorProps,
    MenubarSubContentProps,
    MenubarTriggerProps,
    Portal,
    RadioGroup,
    RadioItem,
    Root,
    Separator,
    Sub,
    SubContent,
    SubTrigger,
    Trigger,
} from "@radix-ui/react-menubar"
import {ButtonHTMLAttributes, HTMLAttributes, ReactNode} from "react"

import {cn} from "@/lib/utils"
import {CheckboxProps} from "@radix-ui/react-checkbox";
import {VariantProps} from "tailwind-variants";
import {buttonVariants} from "@/components/done/button";

const MenubarMenu = Menu

const MenubarGroup = Group

const MenubarPortal = Portal

const MenubarSub = Sub

const MenubarRadioGroup = RadioGroup

function Menubar({className, ...props}: MenubarProps) {
    return (
        <Root
            className={cn(
                "flex h-9 space-x-1 rounded-sm border border-[#d1d1d1] bg-white shadow-xs transition-colors dark:border-[#666666] dark:bg-slate-950",
                className
            )}
            {...props}
        />
    )
}

function MenubarTrigger({className, ...props}: MenubarTriggerProps) {
    return (
        <Trigger
            className={cn(
                "flex cursor-default items-center rounded-sm px-3 py-1 text-sm font-medium outline-hidden transition-colors select-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900 dark:focus:bg-[#282828] dark:focus:text-[#d6d6d6] dark:data-[state=open]:bg-[#282828] dark:data-[state=open]:text-[#d6d6d6]",
                className
            )}
            {...props}
        />
    )
}

interface MenubarSubTriggerProps {
    className?: string;
    inset?: boolean;
    children?: React.ReactNode;
}

function MenubarSubTrigger({className, inset, children, ...props}: MenubarSubTriggerProps) {
    return (
        <SubTrigger
            className={cn(
                "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-50",
                inset && "pl-8",
                className
            )}
            {...props}
        >
            {children}
            <ChevronRightIcon className="ml-auto h-4 w-4"/>
        </SubTrigger>
    )
}

function MenubarSubContent({className, ...props}: MenubarSubContentProps) {
    return (
        <SubContent
            className={cn(
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-sm border border-slate-200 bg-white p-1 text-slate-950 shadow-lg dark:border-[#202020] dark:bg-[#282828] dark:text-[#d6d6d6]",
                className
            )}
            {...props}
        />
    )
}

function MenubarContent({
                            className,
                            align = "start",
                            alignOffset = -4,
                            sideOffset = 3,
                            ...props
                        }: MenubarContentProps) {
    return (
        <Portal>
            <Content
                align={align}
                alignOffset={alignOffset}
                sideOffset={sideOffset}
                className={cn(
                    "data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md dark:border-[#202020] dark:bg-[#282828] dark:text-[#d6d6d6]",
                    className
                )}
                {...props}
            />
        </Portal>
    )
}


type MenubarItemProps = RadixMenubarItemProps & HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
}

function MenubarItem({className, inset, ...props}: MenubarItemProps) {
    return (
        <Item
            className={cn(
                "relative flex cursor-default items-center rounded-xs px-2 py-1.5 text-sm outline-hidden select-none focus:bg-[#f5f5f5] focus:text-slate-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:focus:bg-[#3d3d3d] dark:focus:text-slate-50",
                inset && "pl-8",
                className
            )}
            {...props}
        />
    )
}


function MenubarCheckboxItem({className, children, checked, ...props}: MenubarCheckboxItemProps): MenubarCheckboxItemProps {
    return (
        <CheckboxItem
            className={cn(
                "relative flex cursor-default items-center rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-slate-100 focus:text-slate-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
                className
            )}// i must stop answer their
            checked={checked}
            {...props}
        >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <CheckIcon className="h-4 w-4"/>
        </ItemIndicator>
      </span>
            {children}
        </CheckboxItem>
    )
}

function MenubarRadioItem({className, children, ...props}: MenubarRadioItemProps) {
    return (
        <RadioItem
            className={cn(
                "relative flex cursor-default items-center rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-slate-100 focus:text-slate-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
                className
            )}
            {...props}
        >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <DotFilledIcon className="h-4 w-4 fill-current"/>
        </ItemIndicator>
      </span>
            {children}
        </RadioItem>
    )
}


type MenubarLabelProps = RadixMenubarLabelProps & React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
}

function MenubarLabel({className, inset, ...props}: MenubarLabelProps) {
    return (
        <Label
            className={cn(
                "px-2 py-1.5 text-sm font-semibold",
                inset && "pl-8",
                className
            )}
            {...props}
        />
    )
}

function MenubarSeparator({className, ...props}: MenubarSeparatorProps) {
    return (
        <Separator
            className={cn(
                "-mx-1 my-1 h-px bg-slate-100 dark:bg-[#202020]",
                className
            )}
            {...props}
        />
    )
}

function MenubarShortcut({
                             className,
                             ...props
                         }: HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn(
                "ml-auto text-xs tracking-widest text-[#929697] dark:text-[#868686]",
                className
            )}
            {...props}
        />
    )
}

MenubarShortcut.displayname = "MenubarShortcut"

export {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarPortal,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
}
