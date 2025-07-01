import { Button } from "@/components/done/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/done/tooltip"
export const tooltip_card = {
  header: "Tooltip",
  subText:
    "A tooltip displays additional information about another component. The information is displayed above and near the target component. Tooltip is not expected to handle interactive content.",
  cards: [
    {
      cardComponent: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button>aaaa</Button>
            </TooltipTrigger>
            <TooltipContent>wadwad</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
    },
    {
      cardHeader: "Relationship: label",
      cardSubtext:
        "A tooltip can be used as the label of its trigger. For example, a label tooltip can be used for buttons that have only an icon and no visible label text.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Relationship: description",
      cardSubtext:
        "A tooltip can be used as the description of its trigger. For example, this is used for controls that have a visible label, but the tooltip provides additional descriptive information.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Appearance: inverted",
      cardSubtext:
        "The appearance prop can be set to inverted to use the theme's inverted colors.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "With Arrow",
      cardSubtext:
        "The withArrow prop causes the tooltip to have an arrow pointing to its target.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Styled",
      cardSubtext:
        "To style a tooltip, classNames must be passed through the content slot.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Custom Mount",
      cardSubtext:
        "Tooltips are rendered in a React Portal. By default that Portal is the outermost div. A custom mountNode can be provided in the case that the tooltip needs to be rendered elsewhere.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Controlled",
      cardSubtext:
        "The visibility of the tooltip can be controlled using the visible and onVisibleChange props.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Positioning",
      cardSubtext:
        "The positioning attribute can be used to change the relative placement of the tooltip to its anchor.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Target",
      cardSubtext:
        "The tooltip can be placed relative to a custom element using positioning.target. In this example, the tooltip points to the icon inside the button, but it could point to any element.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Icon",
      cardSubtext:
        "When tooltips are attached to icons, they should use the InfoLabel control to be accessible. Tooltips should not be attached directly to static elements like icons, and nor should static elements be given a tabindex.",
      cardComponent: <div></div>,
    },
  ],
}
