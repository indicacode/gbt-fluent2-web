export const ratingdisplay_card = {
  header: "RatingDisplay",
  subText:
    "RatingDisplay is used to communicate user sentiment. By default, it shows rating as filled stars out of 5, as well as a text displaying the average value and the aggregate number of ratings.",
  cards: [
    {
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Value",
      cardSubtext:
        "The value controls the number of filled stars, and is written out next to the RatingDisplay. The number of filled stars is rounded to the nearest half-star.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Count",
      cardSubtext:
        "You can specify the total number of ratings being displayed with the count.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Compact",
      cardSubtext: "You can specify a compact RatingDisplay with compact.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Max",
      cardSubtext:
        "You can specify the number of elements in the RatingDisplay with the max prop.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Size",
      cardSubtext:
        "A RatingDisplay's size can be small, medium, large, or extra-large.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Color",
      cardSubtext:
        "A RatingDisplay's color can be neutral (default), brand, or marigold.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Shape",
      cardSubtext:
        "You can pass in custom icons to the Rating component. You can specify the icons with the iconFilled and iconOutline props.",
      cardComponent: <div></div>,
    },
  ],
}
