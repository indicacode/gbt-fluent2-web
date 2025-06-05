export const overflow_card = {
  header: "Overflow",
  subText:
    "The Overflow and OverflowItem components, are low level utilities that enable users to create overflow experiences with any component. The components will detect and hide overflowing elements in DOM and manage the overflow state.",
  cards: [
    {
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Reverse Dom Order",
      cardSubtext: "Overflow can happen in reverse DOM order.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Minimum Visible",
      cardSubtext:
        "The Overflow component will stop overflowing past a certain number of minimum visible overflow items.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Vertical",
      cardSubtext:
        "Use the overflowAxis property to switch different orientations.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Overflow By Priority",
      cardSubtext:
        "By assigning each OverflowItem a numerical priority, the items can overflow in user configured order that does not follow DOM order.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Wrapped",
      cardSubtext: "Overflow containers can be wrapped by other DOM elements.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Pinned",
      cardSubtext:
        "An item can be pinned (always visible) by setting it to be a higher priority that all other overflow items. This can be useful when implementing selection scenarios where the selected item must always be visible.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Dividers",
      cardSubtext:
        "Dividers can be handled by assigning groups to overflow items. The visibility of the divider can be configured to depend on the overflow item group.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Larger Dividers",
      cardSubtext:
        "For smaller dividers the padding prop can be set to take into account the unmeasured space that the divider takes up. When a larger divider is used its width is not calculated. This causes items to overflow later than needed.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Priority With Dividers",
      cardSubtext:
        "Overflow groups will respect the priority of overflow items.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Custom Component",
      cardSubtext:
        "It is possible to wrap the OverflowItem children with a custom component instead of rendering them directly.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Listen To Changes",
      cardSubtext:
        "You can listen to changes with the onOnverflowChange prop which will return the overflow state. This can be useful when you have other UI features that need to be triggered on changes to item visibility.",
      cardComponent: <div></div>,
    },
  ],
}
