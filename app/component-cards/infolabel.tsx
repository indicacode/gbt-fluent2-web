import InfoLabel from "@/components/done/infoLabel"
import { Input } from "@/components/done/input"

export const infolabel_card = {
  header: "InfoLabel",
  subText: <></>,
  cards: [
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <div className="flex gap-2">
          <InfoLabel size={"large"}>This is an example of a InfoLabel </InfoLabel>
        </div>
      ),
    },
    {
      cardHeader: "Required",
      cardSubtext:
        "When marked required, the indicator asterisk is placed before the InfoButton.",
      cardComponent: (
        <div className="flex gap-2">
          <InfoLabel size={"large"}>
            This is an example of a Required InfoLabel{" "}
            <h2 className={"text-red-500"}>*</h2>{" "}
          </InfoLabel>
        </div>
      ),
    },
    {
      cardHeader: "Size",
      cardSubtext:
        "InfoLabel's size prop affects the size of the Label and InfoButton. The default size is medium.",
      cardComponent: (
        <div className="flex gap-2">
          <InfoLabel size={"large"}>
            This is an example of a Required InfoLabel{" "}
            <h2 className={"text-red-500"}>*</h2>{" "}
          </InfoLabel>
        </div>
      ),
    },
    {
      cardHeader: "In a Field",
      cardSubtext:
        "An InfoLabel can be used in a Field by rendering the label prop as an InfoLabel. This uses the slot render function support. See the code from this story for an example.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <InfoLabel size={"large"}>
            This is an example of a Field With an Info Label
          </InfoLabel>
          <Input placeholder={"Input email here!"}></Input>
        </div>
      ),
    },
  ],
}
