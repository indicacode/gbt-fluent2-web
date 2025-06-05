export const spinbutton_card = {
  header: "SpinButton",
  subText:
    "SpinButtons are used to allow numerical and non-numerical input bounded between minimum and maximum values with buttons to increment and decrement the input value.",
  cards: [
    {
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Controlled",
      cardSubtext:
        "SpinButton can be a controlled input where the value and, optionally, the display value are stored in state and updated with onChange.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Uncontrolled",
      cardSubtext: "An uncontrolled SpinButton",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Bounds",
      cardSubtext:
        "SpinButton can be bounded with the min and max props. Using the spin buttons or hotkeys will clamp values in the range of [min, max]. Users may type a value outside the range into the text input and it will not be clamped by the control.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Display Value",
      cardSubtext: "SpinButton supports formatted display values.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Step",
      cardSubtext:
        "SpinButton step size can be set. Additionally stepPage can be set to a large value to allow bulk steps via the Page Up and Page Down keys.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Size",
      cardSubtext: "SpinButton can have different sizes.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Appearance",
      cardSubtext:
        "SpinButton can have different appearances. The colors adjacent to the input should have a sufficient contrast.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Size",
      cardSubtext: "SpinButton can be disabled.",
      cardComponent: <div></div>,
    },
  ],
}
