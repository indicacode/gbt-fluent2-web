export const tagpicker_card = {
  header: "TagPicker",
  subText:
    "A TagPicker combines a text field and a dropdown giving people a way to select an option from a list or enter their own choice. It is a specialized version of a Combobox where selecting an option from a list results in a Tag being added close to the text field.",
  cards: [
    {
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Button",
      cardSubtext:
        "The component TagPickerButton renders an invisible button that can be used instead of TagPickerInput to opt-out of a text field and to provide something similar to a Dropdown behavior.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Filtering",
      cardSubtext:
        "TagPicker can take advantage of the provided useTagPickerFilter hook to filter the options based on the user-typed string. It can be configured for a custom filter function, custom message, and custom render function.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Size",
      cardSubtext:
        "A TagPicker's size can be set to medium (default), large or extra-large.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Appearance",
      cardSubtext: "A TagPicker can have appearance variants.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Disabled",
      cardSubtext:
        "A TagPicker can be disabled. Disabling TagPicker will disable the access to the TagPickerList, but it'll still allow modifications to the selectedOptions.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Expand Icon",
      cardSubtext:
        "TagPickerControl provides an expandIcon slot for modifying the default expandIcon chevron. You can also remove the slot entirely by providing null to it.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Secondary Action",
      cardSubtext:
        "TagPickerControl provides a secondaryAction slot for possible extra functionalities that may be desired. secondaryAction slot is absolute positioned on the top right corner of the control component together with expandIcon slot.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Grouped",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Truncated Text",
      cardSubtext:
        "Text truncation is a common pattern used to handle long text that doesn't fit within the available space.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Single Select",
      cardSubtext:
        "By default, the TagPicker allows you to have multiple tags selected . To enable single selection, you can manage the selected options state yourself and pass only one selected option to the TagPicker component.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "No Popover",
      cardSubtext:
        "You can use the TagPicker without the popover with the list of options by providing the noPopover property. This is useful when you want to allow users to input their own tags. ",
      cardComponent: <div></div>,
    },
  ],
}
