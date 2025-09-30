import { Toolbar } from "@/components/reviewing/toolbar"
export const toolbar_card = {
  header: "Toolbar",
  subText:
    "A toolbar is a container for grouping a set of controls, such as buttons, menu buttons, or checkboxes.",
  cards: [
    {
      cardComponent: <Toolbar></Toolbar>,
    },
    {
      cardHeader: "Small",
      cardSubtext:
        "The size determines the spacing around the toolbar controls. A small sized toolbar has no vertical padding and uses 4px for horizontal padding.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Medium",
      cardSubtext:
        "The size determines the spacing around the toolbar controls. A medium sized toolbar uses 4px for vertical padding and 8px for horizontal padding.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Large",
      cardSubtext:
        "The size determines the spacing around the toolbar controls. A large sized toolbar uses 4px for vertical padding and 20px for horizontal padding.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Overflow Items",
      cardSubtext:
        "This example uses the Overflow component and utilities, Please refer to the documentation to achieve more complex scenarios.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "With Tooltip",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "With Popover",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Subtle",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Controlled Toggle Button",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Vertical",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Vertical Button",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Far Group",
      cardComponent: <div></div>,
    },
  ],
}
