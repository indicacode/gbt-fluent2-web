import { Dropdown, Option, OptionGroup } from "@/components/not-done/dropdown"

export const dropdown_card = {
  header: "Dropdown",
  subText:
    "A Dropdown is a selection component composed of a button and a list of options. The button displays the current selected item or a placeholder, and the list is visible on demand by clicking the button. Dropdowns are typically used in forms.",
  cards: [
    {
      cardComponent: (
        <div className="w-[300px]">
          <p>Best pet</p>
          <Dropdown className={"mt-2"} placeholder="Select an animal">
            <Option>Cat</Option>
            <Option disabled>Dog</Option>
            <Option>Fish</Option>
          </Dropdown>
        </div>
      ),
    },
    {
      cardHeader: "Appearance",
      cardSubtext: "A Dropdown can have appearance variants.",
      cardComponent: (
        <div className="flex w-[380px] flex-col gap-4">
          <div className="px-6 py-3">
            <p>Outline appearance</p>
            <Dropdown
              appearance="outline"
              className={"mt-2"}
              placeholder="Select an animal"
            >
              <Option>Cat</Option>
              <Option>Dog</Option>
              <Option>Bird</Option>
            </Dropdown>
          </div>
          <div className="px-6 py-3">
            <p>Underline appearance</p>
            <Dropdown
              appearance="underline"
              className={"mt-2"}
              placeholder="Select an animal"
            >
              <Option>Cat</Option>
              <Option>Dog</Option>
              <Option>Bird</Option>
            </Dropdown>
          </div>
          <div className="bg-neutral-800 px-6 py-3 text-white">
            <p>Filled darker appearance</p>
            <Dropdown
              appearance="filled-darker"
              className={"mt-2"}
              placeholder="Select an animal"
            >
              <Option>Cat</Option>
              <Option>Dog</Option>
              <Option>Bird</Option>
            </Dropdown>
          </div>
          <div className="bg-neutral-800 px-6 py-3 text-white">
            <p>Filled lighter appearance</p>
            <Dropdown
              appearance="filled-lighter"
              className={"mt-2"}
              placeholder="Select an animal"
            >
              <Option>Cat</Option>
              <Option>Dog</Option>
              <Option>Bird</Option>
            </Dropdown>
          </div>
        </div>
      ),
    },
    {
      cardHeader: "With Field",
      cardSubtext:
        "Field can be used with Dropdown to provide a label, description, error message, and more.",
      cardComponent: (
        <div className="w-[300px]">
          <label>
            Best Pet <span className="text-red-500">*</span>
          </label>
          <Dropdown className={"mt-2 mb-1"} placeholder="Select an animal">
            <Option>Cat</Option>
            <Option>Dog</Option>
            <Option>Bird</Option>
          </Dropdown>
          <p className={`text-xs text-gray-500 dark:text-gray-400`}>
            Try picking 'Cat'
          </p>
        </div>
      ),
    },
    {
      cardHeader: "Grouped",
      cardSubtext:
        "Dropdown options can be semantically grouped with the OptionGroup element, with an optional group label.",
      cardComponent: (
        <div className="w-[300px]">
          <p>Best pet</p>
          <Dropdown className="mt-2" placeholder="Select an animal">
            <OptionGroup label="Land">
            <Option>Cat</Option>
            <Option>Dog</Option>
            </OptionGroup>
            <OptionGroup label="Sea">
            <Option>Fish</Option>
            <Option>Seal</Option>
            </OptionGroup>
          </Dropdown>
        </div>
      ),
    },
    {
      cardHeader: "Clearable",
      cardSubtext:
        "A Dropdown can be clearable and let users remove their selection. Note: this is not supported in multiselect mode yet.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Complex Options",
      cardSubtext:
        "Options are defined as JSX children, and can include nested elements or other components. When this is the case, the Option's text prop should be the plain text version of the option, and is used as the Dropdown button's value when the option is selected. Options should never contain interactive elements, such as buttons or links.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Custom Options",
      cardSubtext:
        "Options and OptionGroups can be extended and customized.Here OptionGroup is wrapped in CustomOptionGroup,which adds a custom label style and takes an options array prop which is mapped to child Option elements.Option is also wrapped in CustomOption, which adds a custom check icon and animal icon.The text prop is added to <Option>, since the children of <Option> are not a simple string.Carousel can be used in a Dialog to create a first-run experience.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Controlled",
      cardSubtext:
        "A Dropdown may have controlled or controlled selection and value. When the selection is controlled or a default selection is provided, a controlled value or default value must also be defined. Otherwise, the Dropdown will not be able to display a value before the Options are rendered.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Multiselect",
      cardSubtext:
        "Dropdown supports multiselect, and options within a multiselect will display checkbox icons.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Size",
      cardSubtext:
        "A Dropdown's size can be set to small, medium (default), or large.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Disabled",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Truncated Value",
      cardSubtext:
        "The Dropdown button slot can be customized to render child JSX, which can be used to truncate the selected value text. Dropdown options can also be customized to overflow in various ways, e.g. by allowing long words to break and wrap.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Active Option Change",
      cardSubtext:
        "OnActiveOptionChange notifies the user when the active option in the Dropdown was changed by keyboard. To react on mouse hover events, use onMouseEnter on the invididual options.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Controlling Open And Close",
      cardSubtext:
        "The opening and close of the Dropdown can be controlled with your own state. The onOpenChange callback will provide the hints for the state and triggers based on the appropriate event.",
      cardComponent: <div></div>,
    },
  ],
}
