import * as React from "react"
import {tv, VariantProps} from "tailwind-variants"

import {JSX, ReactNode} from "react";

const badgeVariants = tv({
    base: "inline-flex items-center rounded-md border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 focus:outline-hidden dark:border-slate-800 dark:focus:ring-slate-300",
    slots: {
        badgeContainer: "rounded-[999px] px-[6px] inline-flex items-center " +
            "text-xs font-bold text-center min-h-[var(--space-size-320)] min-w-[32px]",
        badgeText: "px-[2px] flex-1 "
    },
    variants: {
        variant: {
            default: "border-transparent bg-slate-900 text-slate-50 shadow hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
            // BRAND
            brandFilled: {
                badgeContainer: "bg-[var(--color-brand-background1-rest)] text-[var(--color-neutral-foreground1-rest)] border border-[var(--color-brand-stroke1-rest)]",
            },
            brandTint: {
                badgeContainer: "bg-[var(--color-brand-background2-rest)] text-[var(--color-neutral-foreground2-rest)]",
            },
            brandOutline: {
                badgeContainer: "bg-transparent text-[var(--color-brand-foreground2-rest)] border border-[var(--color-brand-stroke1-rest)]",
            },
            brandSubtle: {
                badgeContainer: "bg-transparent text-[var(--color-foreground2-rest)]",
            },
            // STATUS DANGER
            brandDangerFilled: {
                badgeContainer: "bg-[var(--color-status-danger-background3)] text-[var(--color-neutral-foreground-onBrand)]",
                badgeText: "text-caption1-strong"
            },
            brandDangerTint: {
                badgeContainer: "bg-[var(--color-status-danger-background1)] border-(length:--stroke-thin) border-[var(--color-status-danger-stroke1)] text-[var(--color-status-danger-foreground1)]",
                badgeText: "text-caption1-strong"

            },
            brandDangerOutline: {
                badgeContainer: "bg-transparent border-(length:--stroke-thin) border-[var(--color-status-danger-stroke2)] text-[var(--color-status-danger-foreground3)]",
                badgeText: "text-caption1-strong"
            },
            brandDangerSubtle: {
                badgeContainer: "bg-transparent text-[var(--color-status-danger-foreground3)]",
                badgeText: "text-caption1-strong"
            },

            // STATUS WARNING
            brandWarningFilled: {
                badgeContainer: "bg-[var(--color-status-warning-background3)] text-[var(--color-neutral-foreground1)]",
                badgeText: "text-caption1-strong"
            },
            brandWarningTint: {
                badgeContainer: "bg-[var(--color-status-warning-background1)] border-(length:--stroke-thin) border-[var(--color-status-warning-stroke1)] text-[var(--color-status-warning-foreground1)]",
                badgeText: "text-caption1-strong"

            },
            brandWarningOutline: {
                badgeContainer: "bg-transparent border-(length:--stroke-thin) border-[var(--color-status-warning-stroke2)] text-[var(--color-status-warning-foreground2)]",
                badgeText: "text-caption1-strong"
            },
            brandWarningSubtle: {
                badgeContainer: "bg-transparent text-[var(--color-status-warning-foreground2)]",
                badgeText: "text-caption1-strong"
            },

            // STATUS SUCCESS
            brandSuccessFilled: {
                badgeContainer: "bg-[var(--color-status-success-background3)] text-[var(--color-neutral-foreground1)]",
                badgeText: "text-caption1-strong"
            },
            brandSuccessTint: {
                badgeContainer: "bg-[var(--color-status-success-background1)] border-(length:--stroke-thin) border-[var(--color-status-success-stroke1)] text-[var(--color-status-success-foreground1)]",
                badgeText: "text-caption1-strong"

            },
            brandSuccessOutline: {
                badgeContainer: "bg-transparent border-(length:--stroke-thin) border-[var(--color-status-success-stroke2)] text-[var(--color-status-success-foreground3)]",
                badgeText: "text-caption1-strong"
            },
            brandSuccessSubtle: {
                badgeContainer: "bg-transparent text-[var(--color-status-success-foreground3)]",
                badgeText: "text-caption1-strong"
            },

            // STATUS IMPORTANT
            brandImportantFilled: {
                badgeContainer: "bg-[var(--color-neutral-foreground1)] text-[var(--color-neutral-background1-rest)]",
                badgeText: "text-caption1-strong"
            },
            brandImportantTint: {
                badgeContainer: "bg-[var(--color-neutral-foreground3-rest)] border-(length:--stroke-thin) border-[var(--color-neutral-foreground3-rest)] text-[var(--color-neutral-background1-rest)]",
                badgeText: "text-caption1-strong"

            },
            brandImportantOutline: {
                badgeContainer: "bg-transparent border-(length:--stroke-thin) border-[var(--color-neutral-foreground3-rest)] text-[var(--color-neutral-foreground3-rest)]",
                badgeText: "text-caption1-strong"
            },
            brandImportantSubtle: {
                badgeContainer: "bg-transparent text-[var(--color-neutral-foreground3-rest)]",
                badgeText: "text-caption1-strong"
            },

            // STATUS INFORMATIVE
            brandInformativeFilled: {
                badgeContainer: "bg-[var(--color-neutral-background5-rest)] text-[var(--color-neutral-foreground3-rest)]",
                badgeText: "text-caption1-strong"
            },
            brandInformativeTint: {
                badgeContainer: "bg-[var(--color-neutral-background4-rest)] border-(length:--stroke-thin) border-[var(--color-neutral-stroke2-rest)] text-[var(--color-neutral-foreground3-rest)]",
                badgeText: "text-caption1-strong"

            },
            brandInformativeOutline: {
                badgeContainer: "bg-transparent border-(length:--stroke-thin) border-[var(--color-neutral-stroke2-rest)] text-[var(--color-neutral-foreground3-rest)]",
                badgeText: "text-caption1-strong"
            },
            brandInformativeSubtle: {
                badgeContainer: "bg-transparent text-[var(--color-neutral-foreground3-rest)]",
                badgeText: "text-caption1-strong"
            },

            // STATUS SUBTLE
            brandSubtleFilled: {
                badgeContainer: "bg-[var(--color-neutral-background5-rest)] text-[var(--color-neutral-foreground1-rest)]",
                badgeText: "text-caption1-strong"
            },
            brandSubtleTint: {
                badgeContainer: "bg-[var(--color-neutral-background1-rest)] border-(length:--stroke-thin) border-[var(--color-neutral-stroke2-rest)] text-[var(--color-neutral-foreground3-rest)]",
                badgeText: "text-caption1-strong"

            },
            brandSubtleOutline: {
                badgeContainer: "bg-transparent border-(length:--stroke-thin) border-[var(--color-neutral-foreground-onBrand)] text-[var(--color-neutral-foreground-onBrand)]",
                badgeText: "text-caption1-strong"
            },
            brandSubtleSubtle: {
                badgeContainer: "bg-transparent text-[var(--color-neutral-foreground-onBrand)]",
                badgeText: "text-caption1-strong"
            },

            secondary:
                "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
            destructive:
                "border-transparent bg-red-500 text-slate-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80",
            outline: "text-slate-950 dark:text-slate-50",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeContainer> {
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
}

const {badgeContainer, badgeText} = badgeVariants();

interface BadgeIconProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    size?: string;
}

export function BadgeRightIcon({icon: Icon, size}: BadgeIconProps) {
    return <Icon fontSize={size ?? "16px"} width={"16px"} height={"16px"}/>
}

export function BadgeLeftIcon({icon: Icon, size,}: BadgeIconProps) {
    return <Icon fontSize={size ?? "16px"} width={"16px"} height={"16px"}/>
}

export function BadgeCenterIcon({icon: Icon, size}: BadgeIconProps) {
    return <Icon fontSize={size ?? "16px"} width={"16px"} height={"16px"}/>
}

function Badge({className, variant, children, ...props}: BadgeProps) {
    const RightIcon = React.Children.map(children, (child, className) => {
        if (React.isValidElement(child) && child.type === BadgeRightIcon) {
            return (
                <div
                    className={"w-[20px] h-[20px] flex items-center justify-center ml-[var(--space-size-20)]"}>
                    {React.cloneElement(child)}
                </div>
            );
        }
    })?.filter(Boolean) || [];

    const LeftIcon = React.Children.map(children, (child,) => {
        if (React.isValidElement(child) && child.type == BadgeLeftIcon) {
            return (
                <div
                    className={"w-[20px] h-[20px] flex items-center justify-center mr-[var(--space-size-20)]"}>
                    {React.cloneElement(child)}
                </div>
            )
        }
    })?.filter(Boolean) || [];

    const CenterIcon = React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type == BadgeCenterIcon) {
            return (
                <div className={"w-full flex justify-center"}>
                    {React.cloneElement(child)}
                </div>
            )
        }
    })?.filter(Boolean) || [];

    // Children without Icons
    const filteredChildren = React.Children.toArray(children).filter(
        (child) =>
            !(
                React.isValidElement(child) &&
                (child.type === BadgeRightIcon || child.type === BadgeLeftIcon || child.type === BadgeCenterIcon)
            )
    );

    return (
        <div className={badgeContainer({variant, className})} {...props}>
            {LeftIcon[0]}

            {/* To avoid the px and not leave the center icon decentralized */}
            {filteredChildren[0] != undefined ?
                <div className={badgeText({variant, className})}>
                    {filteredChildren}
                </div>
                : undefined
            }

            {CenterIcon[0]}

            {RightIcon[0]}
        </div>
    )
}

export {Badge, badgeVariants}