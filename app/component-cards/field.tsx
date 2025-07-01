import { Input } from "@/components/done/input"
export const field_card = {
  header: "Field",
  subText:
    "Field adds a label, validation message, and hint text to a control.",
  cards: [
    {
      cardComponent: <Input labelText="Example field"></Input>,
    },
    {
      cardHeader: "Horizontal Orientation",
      cardSubtext:
        "Setting orientation=horizontal places the label beside the input. The validationMessage and hint still appear below the input.",
      cardComponent: (
        <Input
          orientation="horizontal"
          helperText="Validation message and hint are below the input."
          labelText="Example field"
        ></Input>
      ),
    },
    {
      cardHeader: "Required",
      cardSubtext:
        "When a Field is marked as required, the label has a red asterisk, and the input gets the aria-required property for accessiblity tools.",
      cardComponent: <Input required labelText="Required field"></Input>,
    },
    {
      cardHeader: "Info button",
      cardSubtext:
        "Add an info button to the label by replacing the Field's label with an InfoLabel. This can be done using a slot render function. See the code from this story for more details.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Disabled control",
      cardSubtext:
        "When the control inside the Field is disabled, the label should not be marked disabled. This ensures the label remains readable to users.",
      cardComponent: (
        <Input disabled labelText="Field with disabled control"></Input>
      ),
    },
    {
      cardHeader: "Size",
      cardSubtext:
        "The size prop affects the size of the Field's label, as well as form controls that support a size prop.",
      cardComponent: (
        <div>
          <Input size="sm" labelText="Size small"></Input>
          <Input size="md" labelText="Size medium"></Input>
          <Input size="lg" labelText="Size large"></Input>
        </div>
      ),
    },
    {
      cardHeader: "Validation Message",
      cardSubtext:
        "The validationMessage is used to give the user feedback about the value entered. Field does not do validation itself, but can be used to report the result of form validation.",
      cardComponent: (
        <div>
          <Input
            state="success"
            labelText="Sucess state"
            helperText="This is a success message."
          ></Input>
          <Input
            state="warning"
            labelText="Warning state"
            helperText="This is a warning message."
          ></Input>
          <Input
            state="fail"
            labelText="Error state"
            helperText="This is an error message."
          ></Input>
          <Input
            state="neutral"
            labelText="Custom state"
            helperText="This is a custom message."
          ></Input>
        </div>
      ),
    },
    {
      cardHeader: "Hint",
      cardSubtext:
        "The hint provides additional descriptive information about the field. Hint text should be used sparingly.",
      cardComponent: (
        <Input
          labelText="Example with hint"
          helperText="Sample hint text."
        ></Input>
      ),
    },
    {
      cardHeader: "Component Examples",
      cardSubtext:
        "Field can be used with any input components in this library. This story shows some examples. It can also be used to add a label or error text to components like ProgressBar.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Third party controls a Field",
      cardSubtext:
        "Field uses context to associate its label and message text with its child form control. All of the form controls in this library support FieldContext.",
      cardComponent: (
        <Input
          labelText="Third party input"
          helperText="Use a render function to properly associate the label with the control."
        ></Input>
      ),
    },
  ],
}
