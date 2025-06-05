export const progressbar_card = {
  header: "ProgressBar",
  subText:
    "A ProgressBar provides a visual representation of content being loaded or processed.",
  cards: [
    {
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Color",
      cardSubtext:
        "The color prop can be used to indicate a brand state (default), error state (red), warning state (orange), or success state (green).",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Indeterminate",
      cardSubtext:
        "ProgressBar is indeterminate when 'value' is undefined. Indeterminate ProgressBar is best used to show that an operation is being executed.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Max",
      cardSubtext:
        "You can specify the maximum value of the determinate ProgressBar. This is useful for instances where you want to show capacity, or how much of a total has been uploaded/downloaded.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Shape",
      cardSubtext:
        "The shape prop affects the corners of the bar. It can be rounded (default) or square.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Thickness",
      cardSubtext:
        "The thickness prop affects the size of the bar. It can be medium (default) or large.",
      cardComponent: <div></div>,
    },
  ],
}
