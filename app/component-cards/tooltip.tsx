import Button from "@/components/done/button"
import InfoLabel from "@/components/done/infoLabel"
import Tooltip from "@/components/done/tooltip"

import { FaArrowDown, FaBold, FaItalic, FaUnderline } from "react-icons/fa"
import { IoIosMenu } from "react-icons/io"

export const tooltip_card = {
  header: "Tooltip",
  subText:
    "A tooltip displays additional information about another component. The information is displayed above and near the target component. Tooltip is not expected to handle interactive content.",
  cards: [
    {
      cardComponent: (
        <Tooltip content={"Example Tooltip"} relationship="label">
          <Button>
            <IoIosMenu />
          </Button>
        </Tooltip>
      ),
    },
    {
      cardHeader: "Relationship: label",
      cardSubtext:
        "A tooltip can be used as the label of its trigger. For example, a label tooltip can be used for buttons that have only an icon and no visible label text.",
      cardComponent: (
        <div className="flex gap-2">
          <Tooltip content={"Bold"} relationship="label">
            <Button>
              <FaBold />
            </Button>
          </Tooltip>
          <Tooltip content={"Italic"} relationship="label">
            <Button>
              <FaItalic />
            </Button>
          </Tooltip>
          <Tooltip content={"Underline"} relationship="label">
            <Button>
              <FaUnderline />
            </Button>
          </Tooltip>
        </div>
      ),
    },
    {
      cardHeader: "Relationship: description",
      cardSubtext:
        "A tooltip can be used as the description of its trigger. For example, this is used for controls that have a visible label, but the tooltip provides additional descriptive information.",
      cardComponent: (
        <Tooltip
          content={"This is the description of the button"}
          relationship="description"
        >
          <Button>Button</Button>
        </Tooltip>
      ),
    },
    {
      cardHeader: "Appearance: inverted",
      cardSubtext:
        "The appearance prop can be set to inverted to use the theme's inverted colors.",
      cardComponent: (
        <Tooltip
          appearance="inverted"
          content={"Example inverted tooltip"}
          relationship="label"
        >
          <Button>
            <IoIosMenu />
          </Button>
        </Tooltip>
      ),
    },
    {
      cardHeader: "With Arrow",
      cardSubtext:
        "The withArrow prop causes the tooltip to have an arrow pointing to its target.",
      cardComponent: (
        <Tooltip
          withArrow
          content={"Example tooltip with an arrow"}
          relationship="label"
        >
          <Button>
            <FaArrowDown />
          </Button>
        </Tooltip>
      ),
    },
    {
      cardHeader: "Styled",
      cardSubtext:
        "To style a tooltip, classNames must be passed through the content slot.",
      cardComponent: (
        <Tooltip
          content={"Example tooltip"}
          relationship="label"
          className="bg-green-500 text-white"
        >
          <Button>
            <IoIosMenu />
          </Button>
        </Tooltip>
      ),
    },
    {
      cardHeader: "Positioning",
      cardSubtext:
        "The positioning attribute can be used to change the relative placement of the tooltip to its anchor.",
      cardComponent: (
        <div className="flex gap-5">
          <Tooltip
            content={"Left"}
            withArrow
            relationship="label"
            positioning="left"
          >
            <Button>
              <FaArrowDown className="rotate-90" />
            </Button>
          </Tooltip>
          <Tooltip
            content={"Up"}
            withArrow
            relationship="label"
            positioning="top"
          >
            <Button>
              <FaArrowDown className="rotate-180" />
            </Button>
          </Tooltip>
          <Tooltip
            content={"Below"}
            withArrow
            relationship="label"
            positioning="bottom"
          >
            <Button>
              <FaArrowDown />
            </Button>
          </Tooltip>
          <Tooltip
            content={"Right"}
            withArrow
            relationship="label"
            positioning="right"
          >
            <Button>
              <FaArrowDown className="-rotate-90" />
            </Button>
          </Tooltip>
        </div>
      ),
    },
    {
      cardHeader: "Icon",
      cardSubtext:
        "When tooltips are attached to icons, they should use the InfoLabel control to be accessible. Tooltips should not be attached directly to static elements like icons, and nor should static elements be given a tabindex.",
      cardComponent: (
        <InfoLabel>
          This is an icon with an InfoLabel to show extra information
        </InfoLabel>
      ),
    },
  ],
}
