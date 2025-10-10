import { Checkbox } from "@/components/done/checkbox"

export const checkbox_card = {
  header: "Checkbox",
  subText: (
    <>
      Checkboxes give people a way to select one or more items from a group, or
      switch between two mutually exclusive options (checked or unchecked).
    </>
  ),
  cards: [
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <div className="flex gap-2">
          <Checkbox size="large" onChange={(checked) => console.log(checked)} />
          <Checkbox
            size="large"
            checked
            onChange={(checked) => console.log(checked)}
          />
        </div>
      ),
    },
    {
      cardHeader: "Disabled",
      cardSubtext: "A Checkbox can be disabled.",
      cardComponent: (
        <div className="flex gap-2">
          <Checkbox
            disabled={true}
            size="large"
            onChange={(checked) => console.log(checked)}
          />
          <Checkbox
            disabled={true}
            size="large"
            onChange={(checked) => console.log(checked)}
            checked
          />
        </div>
      ),
    },
    {
      cardHeader: "Large",
      cardSubtext: "A Checkbox can be large in size.",
      cardComponent: (
        <div className="flex gap-2">
          <Checkbox size="large" onChange={(checked) => console.log(checked)} />
          <Checkbox
            size="large"
            onChange={(checked) => console.log(checked)}
            checked
          />
        </div>
      ),
    },
    {
      cardHeader: "Mixed",
      cardSubtext:
        "A checkbox can be initially mixed (also known as indeterminate) using the checked={indeterminate} property, In this example, the mixed state is used when a group of options has differing values.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <div className={"flex flex-row items-center text-center"}>
            <Checkbox
              checked={"indeterminate"}
              size="large"
              onChange={(checked) => console.log(checked)}
            />

            <h2 className={"ml-2"}>All of the options</h2>
          </div>
          <div className={"flex flex-row items-center text-center"}>
            <Checkbox
              size="large"
              onChange={(checked) => console.log(checked)}
            />
            <h2 className={"ml-2"}>Apples</h2>
          </div>
          <div className={"flex flex-row items-center text-center"}>
            <Checkbox
              size="large"
              onChange={(checked) => console.log(checked)}
            />
            <h2 className={"ml-2"}>Cherry</h2>
          </div>
        </div>
      ),
    },
    {
      cardHeader: "Label Before",
      cardSubtext: "The label can be placed before the checkbox.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <div className={"flex flex-row items-center text-center"}>
            <h2 className={"ml-2"}>Cherries</h2>

            <Checkbox
              className={"ml-2"}
              size="large"
              onChange={(checked) => console.log(checked)}
            />
          </div>
          <div className={"ml-1 flex flex-row items-center text-center"}>
            <h2 className={"ml-2"}>Apples</h2>

            <Checkbox
              size="large"
              className={"ml-3"}
              onChange={(checked) => console.log(checked)}
            />
          </div>
        </div>
      ),
    },
    {
      cardHeader: "Circular",
      cardSubtext:
        "A checkbox can have a circular shape. Usage warning: Unless you are designing a tasks experience, we strongly discourage using this styling variant, as it can be confused with RadioItem",
      cardComponent: (
        <div className="flex gap-2">
          <Checkbox
            rounded={true}
            size="large"
            onChange={(checked) => console.log(checked)}
          />
          <Checkbox
            rounded={true}
            size="large"
            onChange={(checked) => console.log(checked)}
            checked
          />
        </div>
      ),
    },
    {
      cardHeader: "Required",
      cardSubtext:
        "When a checkbox is marked as required, its label also gets the required styling.",
      cardComponent: (
        <div className="flex gap-2">
          <Checkbox
            rounded={true}
            size="large"
            required={true}
            onChange={(checked) => console.log(checked)}
          />
          <Checkbox
            rounded={true}
            size="large"
            onChange={(checked) => console.log(checked)}
            checked
          />
        </div>
      ),
    },
    {
      cardHeader: "Label Wrapping",
      cardSubtext:
        "The label will wrap if it is wider than the available space. The checkbox indicator will stay aligned to the first line of text.",
      cardComponent: (
        <div className="flex gap-2">
          <Checkbox
            size="large"
            aria-label={"Label Wrapping text"}
            onChange={(checked) => console.log(checked)}
          />
          <h2 className={"max-w-64"}>
            This label`s text will wrap around if it gets too big!
          </h2>
        </div>
      ),
    },
  ],
}
