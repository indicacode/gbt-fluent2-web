export const link_card = {
  header: "Link",
  subText:
    "Links allow users to navigate between different locations. They can be used as standalone controls or inline with text.",
  cards: [
    {
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Appearance",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Inline",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Disabled",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Disabled Focusable",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "As Button",
      cardSubtext:
        "When the href property is not provided, the component is rendered as an html <button>",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "As Span",
      cardSubtext:
        "A Link can be rendered as an html <span>, in which case it will have role=button set. Links that render as a span wrap correctly between lines, behaving as inline elements as opposed to links rendered as buttons, which always behave as inline-block elements that do not wrap correctly.",
      cardComponent: <div></div>,
    },
  ],
}
