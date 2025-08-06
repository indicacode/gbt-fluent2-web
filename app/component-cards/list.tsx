import { List, ListItem } from "@/components/not-done/list"

export const list_card = {
  header: "List",
  subText:
    "The List is a component for rendering set of vertically stacked items (other layouts are being discussed). These items can be focusable, selectable, have one primary action and one or more secondary actions.",
  cards: [
    {
      cardComponent: (
        <List>
          <ListItem>Asia</ListItem>
          <ListItem>Africa</ListItem>
          <ListItem>Europe</ListItem>
          <ListItem>North America</ListItem>
          <ListItem>South America</ListItem>
          <ListItem>Australia/Oceania</ListItem>
          <ListItem>Antarctica</ListItem>
        </List>
      ),
    },
  ]
}
