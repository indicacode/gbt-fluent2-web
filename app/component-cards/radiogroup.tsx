import { Label } from "@/components/done/label"
import { RadioGroup, RadioGroupItem } from "@/components/done/radio-group"

export const radiogroup_card = {
  header: "RadioGroup",
  subText:
    " A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
  cards: [
    {
      cardHeader: "Default",
      cardSubtext:
        "This is the default Radio Group component provided by fluent2",
      cardComponent: (
        <RadioGroup defaultValue="1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="r1" />
            <Label htmlFor="r1">Example 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="r2" />
            <Label htmlFor="r2">Example 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="r3" />
            <Label htmlFor="r3">Example 3</Label>
          </div>
        </RadioGroup>
      ),
    },

    {
      cardComponent: (
        <div>
          <h2 className={"font-extrabold"}>Layout</h2>
          <h2>
            This component has layout options, you can either have it as a
            horizontal radio group, or as a vertical radio group, you can take
            advantage of this to{" "}
          </h2>
        </div>
      ),
    },

    {
      cardHeader: "Default Value",
      cardSubtext:
        "The initially selected item can be set by setting the defaultValue of RadioGroup. Alternatively, one Radio item can have defaultChecked set. Both methods have the same effect, but only one should be used in a given RadioGroup.",
      cardComponent: (
        <RadioGroup defaultValue="4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4" id="r4" />
            <Label htmlFor="r4">Example 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="5" id="r5" />
            <Label htmlFor="r5">Example 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="6" id="r6" />
            <Label htmlFor="r6">Example 3</Label>
          </div>
        </RadioGroup>
      ),
    },

    {
      cardHeader: "Required",
      cardSubtext:
        "Use the required prop to indicate that one of the radio items must be selected. Or, if the RadioGroup is inside a Field, it will inherit the required prop from the Field.",
      cardComponent: (
        <RadioGroup required={true} defaultValue="10">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="10" id="r10" />
            <Label htmlFor="r10">Example 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="11" id="r11" />
            <Label htmlFor="r11">Example 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="12" id="r12" />
            <Label htmlFor="r12">Example 3</Label>
          </div>
        </RadioGroup>
      ),
    },
    {
      cardHeader: "Disabled",
      cardSubtext:
        "RadioGroup can be disabled, which disables all Radio Items inside.",
      cardComponent: (
        <RadioGroup disabled={true} defaultValue="13">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="13" id="r13" />
            <Label htmlFor="r13">Example 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="14" id="r14" />
            <Label htmlFor="r14">Example 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="15" id="r15" />
            <Label htmlFor="r15">Example 3</Label>
          </div>
        </RadioGroup>
      ),
    },
    {
      cardHeader: "Disabled Item",
      cardSubtext: "Radio Items can be disabled manually and individually",
      cardComponent: (
        <RadioGroup defaultValue="16">
          <div className="flex items-center space-x-2">
            <RadioGroupItem disabled={true} value="2" id="r16" />
            <Label htmlFor="r16">Example 1 - Disabled</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="17" id="r17" />
            <Label htmlFor="r17">Example 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem disabled={true} value="18" id="r18" />
            <Label htmlFor="r18">Example 3 - Disabled</Label>
          </div>
        </RadioGroup>
      ),
    },
  ],
}
