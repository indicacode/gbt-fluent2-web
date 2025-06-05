export const image_card = {
  header: "Image",
  subText:
    "An image displays graphical content such as a photo or illustration.",
  cards: [
    {
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Shape",
      cardSubtext:
        "Images can be styled as square (default), circular, or with rounded corners.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Bordered",
      cardSubtext:
        "The bordered prop will apply a border style to images regardless of its shape.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Fallback",
      cardSubtext:
        "In cases when images fail to load, the Image component will result into the native <img/> browser fallback.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Block",
      cardSubtext:
        "An Image can be maximized in order to fill its parent container.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Fit",
      cardSubtext:
        "The fit prop is used to determine how the image should be resized in order to fit its container.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Shadow",
      cardSubtext:
        "The shadow prop will apply box shadow styling to the image.",
      cardComponent: <div></div>,
    },
  ],
}
