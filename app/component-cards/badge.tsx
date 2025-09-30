import { Badge } from "@/components/reviewing/badge"
import { AiFillCalendar } from "react-icons/ai"

export const badge_card = {
  header: "Badge",
  subText: "A badge is a visual decoration for UI elements.",
  cards: [
    {
      cardComponent: <Badge></Badge>,
    },
    {
      cardHeader: "Appearance",
      cardSubtext:
        "A badge can have a filled, ghost, outline, or tint appearance. The default is filled.",
      cardComponent: (
        <div className="flex gap-2">
          <Badge appearance="filled">999+</Badge>
          <Badge appearance="ghost">999+</Badge>
          <Badge appearance="outline">999+</Badge>
          <Badge appearance="tint">999+</Badge>
        </div>
      ),
    },
    {
      cardHeader: "Sizes",
      cardSubtext:
        "A badge supports tiny, extra-small, small, medium, large, and extra-large sizes. The default is medium.",
      cardComponent: (
        <div className="flex items-center gap-2">
          <Badge size="tiny" />
          <Badge size="extra-small" />
          <Badge size="small" />
          <Badge size="medium" />
          <Badge size="large" />
          <Badge size="extra-large" />
        </div>
      ),
    },
    {
      cardHeader: "Shapes",
      cardSubtext:
        "A badge can have square, rounded or circular shape. The default is circular.",
      cardComponent: (
        <div className="flex gap-2">
          <Badge shape="square" />
          <Badge shape="rounded" />
          <Badge shape="circular" />
        </div>
      ),
    },
    {
      cardHeader: "Color",
      cardSubtext:
        "A badge can have different colors. The available colors are brand, danger, important, informative, severe, subtle, success or warning. The default is brand. Information conveyed by color should also be communicated in another way to meet accessibility requirements.",
      cardComponent: (
        <div className="flex gap-2">
          <Badge color="brand">999+</Badge>
          <Badge color="danger">999+</Badge>
          <Badge color="important">999+</Badge>
          <Badge color="informative">999+</Badge>
          <Badge color="severe">999+</Badge>
          <Badge color="subtle">999+</Badge>
          <Badge color="success">999+</Badge>
          <Badge color="warning">999+</Badge>
        </div>
      ),
    },
    {
      cardHeader: "Icon",
      cardSubtext:
        "A badge can display an icon. If the icon is meaningful, then either the icon must have a label or the parent control's label must include the information conveyed by the icon.",
      cardComponent: <Badge icon={<AiFillCalendar />} />,
    },
  ],
}
