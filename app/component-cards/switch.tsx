import { Label } from "@/components/done/label"
import { Switch } from "@/components/done/switch"

export const switch_card = {
  header: "Switch",
  subText: (
    <>
      A switch represents a physical switch that allows someone to choose
      between two mutually exclusive options. For example, "On/Off" and
      "Show/Hide". Choosing an option should produce an immediate result.
    </>
  ),
  cards: [
    {
      cardComponent: (
        <div className={"flex flex-row items-center"}>
          <Switch className={""} />
          <h2 className={"ml-2"}>This is a switch.</h2>
        </div>
      ),
    },
    {
      cardHeader: "Required",
      cardSubtext:
        " When a Switch is marked as , its label also gets the required styling",
      cardComponent: (
        <div className={"flex flex-row items-center"}>
          <Switch className={""} />
          <Label className={"ml-2"} required={true}>
            Required
          </Label>
        </div>
      ),
    },

    {
      cardHeader: "Checked",
      cardSubtext:
        "A Switch can be initially checked by passing a value to the defaultChecked property, or have its checked value controlled via the checked property.",
      cardComponent: (
        <div className={"flex flex-row items-center"}>
          <Switch className={""} checked={true} />
          <h2 className={"ml-2"}>Checked Switch</h2>
        </div>
      ),
    },
    {
      cardHeader: "Disabled",
      cardSubtext: " A Switch can be disabled.",
      cardComponent: (
        <div className={"flex flex-row items-center"}>
          <Switch checked={true} className={""} disabled={true} />
          <h2 className={"ml-2"}> This is a disabled switch!</h2>
        </div>
      ),
    },
    {
      cardHeader: "Label",
      cardSubtext:
        "A label can be provided to the Switch and is positioned above, before or after the component.\n",
      cardComponent: (
        <div className={"flex flex-row gap-3"}>
          <div className={"flex flex-row items-center"}>
            <h2 className="mr-2">With label before and unchecked</h2>
            <Switch/>
          </div>
          <div className={"ml-2 flex flex-col items-center"}>
            <h2>With label above and checked</h2>
            <Switch checked={true} />
          </div>
          <div className={"ml-2 flex flex-row items-center"}>
            <Switch  className="mr-2"/>
            <h2>With label after and unchecked</h2>
          </div>
        </div>
      ),
    },
    {
      cardHeader: "Required",
      cardSubtext:
        "When a Switch is marked as required, its label also gets the required styling.",
      cardComponent: (
        <div className={"flex flex-row items-center"}>
          <Switch checked={true} className={""} />

          <h2 className={"ml-2"}>Required</h2>
          <h2 className={"mb-2 text-red-500"}>*</h2>
        </div>
      ),
    },
  ],
}
