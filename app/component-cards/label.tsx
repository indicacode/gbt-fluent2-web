import { Label } from "@/components/done/label"
export const label_card = {
  header: "Label",
  subText: "A label provides a name or title for an input.",
  cards: [
    {
      cardComponent: <Label>This is a label</Label>,
    },
    {
      cardHeader: "Size",
      cardSubtext: "A Label supports small, medium, and large sizes.",
      cardComponent: (
        <div>
          <Label size="small">This is a label</Label>
          <Label size="medium">This is a label</Label>
          <Label size="large">This is a label</Label>
        </div>
      ),
    },
    {
      cardHeader: "Weight",
      cardSubtext: "A Label with a semibold font weight.",
      cardComponent: <Label weight="semibold">Strong label</Label>,
    },
    {
      cardHeader: "Disabled",
      cardSubtext:
        "A Label can be disabled. Since this state does not meet the required accessibility contrast ratio, it should be used sparingly and make it clear that there's no interaction with the control associated with it.",
      cardComponent: <Label disabled >Disabled label</Label>,
    },
    {
      cardHeader: "Required",
      cardSubtext:
        "A Label can display a required asterisk or a custom required indicator. This custom required indicator canbe a custom string or jsx content.",
      cardComponent: <Label required>Disabled label</Label>,
    },
  ],
}
