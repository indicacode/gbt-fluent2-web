import Persona from "@/components/done/persona"
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
      cardComponent: (
        <div className="w-[300px]">
          <label>Pick a color</label>
          <Dropdown
            clearable
            className={"mt-2 mb-1"}
            placeholder="Select a color"
          >
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
          </Dropdown>
        </div>
      ),
    },
    {
      cardHeader: "Complex Options",
      cardSubtext:
        "Options are defined as JSX children, and can include nested elements or other components. When this is the case, the Option's text prop should be the plain text version of the option, and is used as the Dropdown button's value when the option is selected. Options should never contain interactive elements, such as buttons or links.",
      cardComponent: (
        <div className="w-[300px]">
          <label>Schedule a meeting</label>
          <Dropdown clearable className={"mt-2 mb-1"} placeholder="">
            <Option text="Katri Athokas">
              <Persona
                name={"Katri Athokas"}
                secondaryText={"Available"}
                avatar={{
                  status: "online",
                  size: "sm",
                  src: "https://images.pexels.com/photos/26898037/pexels-photo-26898037/free-photo-of-european-garden-spider-with-web.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
                  name: "Katri Athokas",
                }}
              />
            </Option>
            <Option value="Elvia Atkins">
              <Persona
                name={"Elvia Atkins"}
                secondaryText={"Busy"}
                avatar={{
                  status: "offline",
                  size: "sm",
                  src: "https://images.pexels.com/photos/13925674/pexels-photo-13925674.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
                  name: "Elvia Atkins",
                }}
              />
            </Option>
            <Option value="Cameron Evans">
              <Persona
                name={"Cameron Evans"}
                secondaryText={"Away"}
                avatar={{
                  status: "away",
                  size: "sm",
                  src: "https://images.pexels.com/photos/27862762/pexels-photo-27862762/free-photo-of-a-man-standing-in-front-of-a-wall-with-a-bag.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
                  name: "Cameron Evans",
                }}
              />
            </Option>
          </Dropdown>
        </div>
      ),
    },
    {
      cardHeader: "Multiselect",
      cardSubtext:
        "Dropdown supports multiselect, and options within a multiselect will display checkbox icons.",
      cardComponent: (
        <div className="w-[300px]">
          <label>Best pet</label>
          <Dropdown
            multiselect
            className={"mt-2 mb-1"}
            placeholder="Select an animal"
          >
            <Option>Cat</Option>
            <Option>Dog</Option>
            <Option>Fish</Option>
          </Dropdown>
        </div>
      ),
    },
    {
      cardHeader: "Size",
      cardSubtext:
        "A Dropdown's size can be set to small, medium (default), or large.",
      cardComponent: (
        <div className="flex w-[300px] flex-col gap-4">
          <label className="text-xl font-bold">Small</label>
          <div>
            <label>Best pet</label>
            <Dropdown
              size="small"
              className={"mt-2 mb-1"}
              placeholder="Select an animal"
            >
              <Option>Cat</Option>
              <Option>Dog</Option>
              <Option>Fish</Option>
            </Dropdown>
          </div>
          <label className="text-xl font-bold">Medium</label>
          <div>
            <label>Best pet</label>
            <Dropdown
              size="medium"
              className={"mt-2 mb-1"}
              placeholder="Select an animal"
            >
              <Option>Cat</Option>
              <Option>Dog</Option>
              <Option>Fish</Option>
            </Dropdown>
          </div>
          <label className="text-xl font-bold">Large</label>
          <div>
            <label>Best pet</label>
            <Dropdown
              size="large"
              className={"mt-2 mb-1"}
              placeholder="Select an animal"
            >
              <Option>Cat</Option>
              <Option>Dog</Option>
              <Option>Fish</Option>
            </Dropdown>
          </div>
        </div>
      ),
    },
    {
      cardHeader: "Disabled",
      cardComponent: (
        <div className="w-[300px]">
          <p>Best pet</p>
          <Dropdown className="mt-2" placeholder="Select an animal" disabled />
        </div>
      ),
    },
    {
      cardHeader: "Truncated Value",
      cardSubtext:
        "The Dropdown button slot can be customized to render child JSX, which can be used to truncate the selected value text. Dropdown options can also be customized to overflow in various ways, e.g. by allowing long words to break and wrap.",
      cardComponent: (
        <div className="w-[300px]">
          <p>Best pet</p>
          <Dropdown className="mt-2" placeholder="Select an animal">
            <Option>Cat</Option>
            <Option>SuperLongName_123456789_SomeMoreStuffToMakeItLonger</Option>
            <Option>
              Screaming hairy armadillo (Chaetophractus vellerosus )
            </Option>
          </Dropdown>
        </div>
      ),
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
