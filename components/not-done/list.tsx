const listSlots = {
  variants: {
    navigationMode: {
      items: "navigationModeItems",
      composite: "navigationModeComposite",
    },
  },
  defaultVariants: {},
}

type ListProps = React.ComponentProps<"ul"> & {
  as?: "div" | "ol" | "ul"
  navigationMode?: "items" | "composite"
  selectionMode?: "single" | "multiselect"
  selectedItems?: string[]
  defaultSelectedItems?: string[]
  onSelectionChange?: (selectedItems: string[]) => void
}
type ListItemProps = React.ComponentProps<"li"> & {}

function List({
  as,
  navigationMode,
  selectionMode,
  selectedItems,
  defaultSelectedItems,
  onSelectionChange,
  children,
  className,
  ...props
}: ListProps) {
  return <ul {...props}>{children}</ul>
}
function ListItem({ children, className, ...props }: ListItemProps) {
  return <li {...props}>{children}</li>
}

export { List, ListItem }
