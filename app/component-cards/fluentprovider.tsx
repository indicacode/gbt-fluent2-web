export const fluentprovider_card = {
  header: "FluentProvider",
  subText:
    "The FluentProvider transforms a passed theme to CSS variables and passes other settings to Fluent UI components.",
  cards: [
    {
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Dir",
      cardSubtext:
        "A Fluent provider can render text left-to-right (LTR) or right-to-left (RTL).",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Apply Styles To Portals",
      cardSubtext:
        "applyStylesToPortals controls if styles from FluentProvider should be applied to components that use Portal component.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Nested",
      cardSubtext:
        "A Fluent provider can be nested to override some or all of a tokens.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Frame",
      cardSubtext:
        "A FluentProvider does not cross an iframe boundary. To render into iframes pass a proper Document instance to targetDocument prop on FluentProvider & RendererProvider.",
      cardComponent: <div></div>,
    },
  ],
}
