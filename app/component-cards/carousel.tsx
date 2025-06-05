export const carousel_card = {
  header: "Carousel",
  subText:
    "A Carousel component is a sliding window of elements controlled by previous, next, and direct pagination buttons.",
  cards: [
    {
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Responsive",
      cardSubtext:
        "Carousel can have responsive cards that adjust their size based on the content, using autoSize prop on CarouselCard.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Controlled",
      cardSubtext:
        "Carousel can be controlled by setting activeIndex and onActiveIndexChange props.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Image Slideshow",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Alignment And Whitespace",
      cardSubtext:
        "Carousel can have slides aligned relative to the carousel viewport, use the align prop to set the alignment. Note, the whitespace prop could be used to clear leading and trailing empty space that causes excessive scrolling.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Autoplay",
      cardSubtext:
        "The Autoplay button must be present to enable autoplay as it is an accessibility requirement. To enable, any valid prop (recommended ariaLabel) must be passed in, while setting the autoplay prop in CarouselNav to undefined will disable and remove it.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "First Run Experience",
      cardSubtext:
        "Carousel can be used in a Dialog to create a first-run experience.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Eventing",
      cardSubtext:
        "Carousel provides callbacks on index change with a multitude of event types.",
      cardComponent: <div></div>,
    },
  ],
}
