export const list_card = {
  header: "List",
  subText:
    "The List is a component for rendering set of vertically stacked items (other layouts are being discussed). These items can be focusable, selectable, have one primary action and one or more secondary actions.",
  cards: [
    {
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Single Action",
      cardSubtext:
        "When the list item should have a custom primary action on it, you can pass the onAction prop to the ListItem component. This callback will also be automatically called when the user presses the Enter or Space key on the list item.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Single Action Selection",
      cardSubtext:
        "Any List can be selectable. You have an option to control the selection state yourself or let the List manage it for you.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Single Action Selection Controlled",
      cardSubtext:
        "This example shows how to use the selectedItems and onSelectionChange props to control the selection state of the List and keep track of it in the parent component.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Single Action Selection Different Primary",
      cardSubtext:
        "This example is similar to the previous one, but it implements a custom primary action on ListItem, allowing us to trigger a different action than the selection when the user clicks on the list item or presses Enter . This is useful when you want to have a primary action on the list item, but still want to allow the user to select it.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Multiple Actions With Primary",
      cardSubtext:
        "Base item with multiple actions. Doesn't support selection, but the list items have a primary action that can be triggered by clicking on the item or pressing Enter.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Multiple Actions Selection",
      cardSubtext:
        "Item with multiple actions. It has selection enabled, which is also it's primary action. The selection can be toggled by clicking on the item or pressing the Space key.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Multiple Actions Different Primary",
      cardSubtext:
        "Similar to previous example, but this one implements a custom onAction prop on the ListItem, allowing us to trigger a different action than the selection when the user clicks on the list item or presses Enter.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Virtualized List",
      cardSubtext:
        "When creating a list of large size, one way of making sure you are getting the best performance is to use virtualization. In this example we are leveraging the react-window package.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Virtualized List With Actionable Items",
      cardSubtext:
        "Virtualized list can also be used with interactive elements.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "List Active Element",
      cardSubtext:
        "You can use selection and custom styles to show the active element in a different way. This is useful for scenarios where you want to show the details of the selected item, for example.",
      cardComponent: <div></div>,
    },
  ],
}
