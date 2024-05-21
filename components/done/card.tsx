import {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactNode,
  Ref,
  useEffect,
  useState,
} from "react"
import { tv, VariantProps } from "tailwind-variants"

const cardSlots = tv({
  slots: {
    card: "relative flex h-fit w-full flex-col overflow-hidden rounded-md border shadow-md",
    cardSpacing: "flex flex-col",
    cardHeader: "flex w-fit items-center gap-3",
    cardHeaderImage: "aspect-square h-full w-full object-cover",
    cardTitle: "font-semibold text-stone-800",
    cardDescription: "text-sm text-[#616161]",
    cardContent: "",
    cardFooter: "flex gap-4",
  },
  variants: {
    size: {
      sm: { cardSpacing: "p-2" },
      md: { cardSpacing: "p-3" },
      lg: { cardSpacing: "p-4" },
      none: { cardSpacing: "p-0" },
    },
    variant: {
      filled: {
        card: "bg-white text-slate-950 hover:bg-zinc-200 dark:bg-slate-950 dark:text-slate-50",
      },
      "filled-alt": {
        card: " bg-zinc-50 hover:bg-zinc-300",
      },
      outline: {
        card: "border border-gray-300 shadow-none dark:border-zinc-200",
      },
      subtle: {
        card: "border-none text-black shadow-none hover:cursor-pointer hover:bg-zinc-100 dark:text-gray-400",
      },
      _unstiled: { card: "", cardContent: "" },
    },
    pressed: {
      true: {
        card: "border border-gray-400",
      },
    },
    checked: {
      true: {
        card: "border border-gray-400",
      },
    },
    selectable: {
      true: {
        card: "hover:cursor-pointer",
      },
    },

    orientation: {
      horizontal: {
        card: "flex bg-transparent p-0",
        cardSpacing: "flex flex-col ",
        cardHeader: "",
        cardTitle: "",
        cardDescription: "",
        cardContent: "hidden",
        cardFooter: "hidden",
      },
      vertical: {
        card: "flex flex-col",
        cardSpacing: "flex-col gap-4",
        cardHeaderImage: "rounded",
      },
    },
  },
  defaultVariants: {
    variant: "filled",
    orientation: "vertical",
    size: "sm",
  },
})

const {
  card,
  cardSpacing,
  cardHeader,
  cardHeaderImage,
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
} = cardSlots({})

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardSlots> {
  onSelectionChange?: () => void
  /** False is the default value */
  cardPreview?: string | false

  size?: "sm" | "md" | "lg"
}

function Card(
  {
    onSelectionChange = () => {},
    orientation = "vertical",
    defaultChecked = false,
    selectable = false,
    cardPreview = false,
    size,
    className,
    children,
    variant,
    image,
    ...props
  }: CardProps,
  ref: Ref<HTMLDivElement>
) {
  const [pressed, setPressed] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(defaultChecked)

  useEffect(() => {
    onSelectionChange()
  }, [checked])

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === CardHeader) {
        return cloneElement(child, { orientation, image } as {
          orientation: "horizontal" | "vertical"
          image?: string
        })
      }
      return cloneElement(child, { orientation } as {
        orientation: "horizontal" | "vertical"
      })
    }
    return child
  })

  return (
    <div
      onMouseUp={() => variant === "outline" && setPressed(false)}
      onMouseDown={() => variant === "outline" && setPressed(true)}
      onClick={() => selectable && setChecked((prevState) => !prevState)}
      ref={ref}
      className={card({
        variant,
        orientation,
        pressed: pressed && selectable,
        selectable,
        checked,
        className,
      })}
      {...props}
    >
      {cardPreview && <img alt="card preview" src={cardPreview} />}
      <div className={cardSpacing({ orientation, size })}>
        {childrenWithProps}
      </div>
    </div>
  )
}

Card.displayName = "Card"

function FloatingAction({ children }: { children: ReactNode }) {
  return (
    <div className="absolute right-3 top-2 max-h-fit max-w-fit cursor-pointer">
      {children}
    </div>
  )
}

const ForwardedCard = forwardRef(Card)

interface OrientationOnlyCardProps
  extends HTMLAttributes<HTMLDivElement>,
    Pick<VariantProps<typeof cardSlots>, "orientation"> {
  image?: string
}

function CardHeader(
  {
    className,
    orientation,
    children,
    image,
    ...props
  }: OrientationOnlyCardProps,
  ref: Ref<HTMLDivElement>
) {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { orientation } as {
        orientation: "horizontal" | "vertical"
      })
    }
    return child
  })
  return (
    <div
      ref={ref}
      className={cardHeader({ className, orientation })}
      {...props}
    >
      {image && (
        <div className="h-16 w-16">
          <img
            src={image}
            alt="card image"
            className={cardHeaderImage({ orientation, className })}
          />
        </div>
      )}
      <div>{childrenWithProps}</div>
    </div>
  )
}

CardHeader.displayName = "CardHeader"

const ForwardedCardHeader = forwardRef(CardHeader)

interface CardTitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    Pick<VariantProps<typeof cardSlots>, "orientation"> {}

function CardTitle(
  { className, orientation, ...props }: CardTitleProps,
  ref: Ref<HTMLHeadingElement>
) {
  return (
    <h3
      ref={ref}
      className={cardTitle({
        orientation,
        className,
      })}
      {...props}
    />
  )
}

CardTitle.displayName = "CardTitle"

const ForwardedCardTitle = forwardRef(CardTitle)

interface CardDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement>,
    Pick<VariantProps<typeof cardSlots>, "orientation"> {}

function CardDescription(
  { className, orientation, ...props }: CardDescriptionProps,
  ref: Ref<HTMLParagraphElement>
) {
  return (
    <p
      ref={ref}
      className={cardDescription({
        className,
        orientation,
      })}
      {...props}
    />
  )
}

CardDescription.displayName = "CardDescription"

const ForwardedCardDescription = forwardRef(CardDescription)

function CardContent(
  { className, orientation, ...props }: OrientationOnlyCardProps,
  ref: Ref<HTMLDivElement>
) {
  if (orientation === "horizontal") {
    return null
  }
  return (
    <div
      ref={ref}
      className={cardContent({
        className,
        orientation,
      })}
      {...props}
    />
  )
}

CardContent.displayName = "CardContent"

const ForwardedCardContent = forwardRef(CardContent)

function CardFooter(
  { className, orientation, ...props }: OrientationOnlyCardProps,
  ref: Ref<HTMLDivElement>
) {
  if (orientation === "horizontal") {
    return null
  }
  return (
    <div
      ref={ref}
      className={cardFooter({
        className,
        orientation,
      })}
      {...props}
    />
  )
}

CardFooter.displayName = "CardFooter"

const ForwardedCardFooter = forwardRef(CardFooter)

export {
  FloatingAction,
  ForwardedCard as Card,
  ForwardedCardHeader as CardHeader,
  ForwardedCardFooter as CardFooter,
  ForwardedCardTitle as CardTitle,
  ForwardedCardDescription as CardDescription,
  ForwardedCardContent as CardContent,
}
