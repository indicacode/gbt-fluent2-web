import { Input, InputLeftAddon, InputRightAddon } from "@/components/done/input"

export const input_card = {
  header: "Input",
  subText: "An input component. Enter text into the input.",
  cards: [
    {
      cardHeader: "Appearance",
      cardSubtext:
        "  An input can have different appearances. The colors adjacent to the input should have a sufficient contrast. Particularly, the color of input with filled darker and lighter styles needs to provide greater than 3 to 1 contrast ratio against the immediate surrounding color to pass accessibility requirements.",
      cardComponent: (
        <div className="flex gap-4">
          <Input
            labelText="Example of"
            placeholder="1000"
            helperText="Helper text"
            type="number"
          >
            <InputLeftAddon>$</InputLeftAddon>
            <InputRightAddon>.00</InputRightAddon>
          </Input>
          <Input
            variant="underline"
            labelText="Example of"
            placeholder="A Outline Input"
            helperText="Helper text"
          >
            <InputLeftAddon>icon</InputLeftAddon>
          </Input>
          <Input
            variant="filledDark"
            labelText="Example of "
            placeholder="A FilledDark Input"
            helperText="Helper text"
          >
            <InputLeftAddon>icon</InputLeftAddon>
          </Input>
          <Input
            variant="filledLight"
            labelText="Warning of"
            placeholder="A FilledLight Input"
            helperText="Helper text"
          >
            <InputLeftAddon>icon</InputLeftAddon>
          </Input>
        </div>
      ),
    },
    {
      cardComponent: (
        <div>
          <h2 className={"font-extrabold"}>Content before/after</h2>
          <h2>
            An input can have elements such as an icon or a button before or
            after the entered text. These elements are displayed inside the
            input border.
          </h2>
          <h2>here is an input with a left addon</h2>
          <Input
            variant={"filledLight"}
            labelText={"Left Addon"}
            placeholder={
              "The Addon is on the left! this addon is a dollar sign , for a money amount input"
            }
          >
            <InputLeftAddon>$</InputLeftAddon>
          </Input>
          <Input
            variant={"filledLight"}
            labelText={"Right Addon"}
            placeholder={
              "The Addon is on the right! this addon is a percent sign , for a percentage input"
            }
          >
            <InputRightAddon>%</InputRightAddon>
          </Input>
        </div>
      ),
    },
    {
      cardComponent: (
        <div>
          <h2 className={"font-extrabold"}>Inline</h2>
          <h2>An input can be rendered inline with text.</h2>
          <h2 className={"flex flex-row gap-2"}>
            {" "}
            this{" "}
            <Input
              className={" "}
              placeholder={"inline input"}
              aria-label={"input"}
            ></Input>{" "}
            is rendered inline{" "}
          </h2>
        </div>
      ),
    },
    {
      cardHeader: "Placeholder",
      cardSubtext:
        " An input can have placeholder text. If using the placeholder as a\n" +
        "              label (which is not recommended for usability), be sure to provide\n" +
        "              an aria-label for screen reader users.",
      cardComponent: (
        <div>
          <Input placeholder={"This is the placeholder text!"}></Input>
        </div>
      ),
    },
    {
      cardHeader: "Size",
      cardSubtext:
        " An input can have different sizes. Those being small (sm) medium (md) and large (lg)",
      cardComponent: (
        <div className={"flex flex-col"}>
          <Input size="sm" placeholder={"Small Input"}></Input>
        </div>
      ),
    },
    {
      cardHeader: "Type",
      cardSubtext:
        " An input can have a custom text-based type such as email, url, or password based on the type of value the user will enter. Note that no custom styling is currently applied for alternative types, and some types may activate browser-default styling which does not match the Fluent design language.",
      cardComponent: (
        <div>
          <Input placeholder={"This is the placeholder text!"}></Input>
        </div>
      ),
    },
  ],
}
