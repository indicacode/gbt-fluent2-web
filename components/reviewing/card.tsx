import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  ReactNode,
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
    cardTitle: "font-semibold text-stone-800 dark:text-slate-50",
    cardDescription: "text-sm text-[#616161] dark:text-slate-400",
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
        card: "bg-zinc-50 hover:bg-zinc-300 dark:hover:bg-slate-800",
      },
      outline: {
        card: "border border-gray-300 shadow-none dark:border-zinc-200 dark:text-slate-50 dark:hover:bg-slate-950",
      },
      subtle: {
        card: "border-none text-black shadow-none hover:cursor-pointer hover:bg-zinc-100 dark:text-gray-400 dark:hover:bg-slate-800",
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
        cardSpacing: "flex flex-col",
        cardHeader: "",
        cardTitle: "",
        cardDescription: "",
        cardContent: "hidden",
        cardFooter: "hidden",
      },
      vertical: {
        card: "flex flex-col",
        cardSpacing: "flex-col gap-4",
        cardHeaderImage: "rounded-sm",
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

type CardProps = ComponentProps<"div"> &
  VariantProps<typeof cardSlots> & {
    onSelectionChange?: () => void
    /** False is the default value */
    cardPreview?: string | false
    image?: string
    size?: "sm" | "md" | "lg"
  }

function Card({
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
}: CardProps) {
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
      data-slot="card"
      onMouseUp={() => variant === "outline" && setPressed(false)}
      onMouseDown={() => variant === "outline" && setPressed(true)}
      onClick={() => selectable && setChecked((prevState) => !prevState)}
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

function FloatingAction({ children }: { children: ReactNode }) {
  return (
    <div className="absolute top-2 right-3 max-h-fit max-w-fit cursor-pointer">
      {children}
    </div>
  )
}

type OrientationOnlyCardProps = ComponentProps<"div"> &
  Pick<VariantProps<typeof cardSlots>, "orientation"> & {
    image?: string
  }

function CardHeader({
  className,
  orientation,
  children,
  image,
  ...props
}: OrientationOnlyCardProps) {
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
      data-slot="card-header"
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

type CardTitleProps = ComponentProps<"h3"> &
  Pick<VariantProps<typeof cardSlots>, "orientation"> & {}

function CardTitle({ className, orientation, ...props }: CardTitleProps) {
  return (
    <h3
      data-slot="card-title"
      className={cardTitle({
        orientation,
        className,
      })}
      {...props}
    />
  )
}

type CardDescriptionProps = ComponentProps<"p"> &
  Pick<VariantProps<typeof cardSlots>, "orientation"> & {}

function CardDescription({
  className,
  orientation,
  ...props
}: CardDescriptionProps) {
  return (
    <p
      data-slot="card-description"
      className={cardDescription({
        className,
        orientation,
      })}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end"
      }
      {...props}
    />
  )
}

function CardContent({
  className,
  orientation,
  ...props
}: OrientationOnlyCardProps) {
  if (orientation === "horizontal") {
    return null
  }
  return (
    <div
      data-slot="card-content"
      className={cardContent({
        className,
        orientation,
      })}
      {...props}
    />
  )
}

function CardFooter({
  className,
  orientation,
  ...props
}: OrientationOnlyCardProps) {
  if (orientation === "horizontal") {
    return null
  }
  return (
    <div
      data-slot="card-footer"
      className={cardFooter({
        className,
        orientation,
      })}
      {...props}
    />
  )
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FloatingAction,
}
