import { Divider } from "@/components/done/divider"

export const divider_card = {
  header: "Divider",
  subText:
    "A Select allows one option to be selected from multiple options. The Select component is a wrapper around the native <select> element.",
  cards: [
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <div className="flex h-fit w-full flex-col gap-10">
          <Divider orientation="horizontal" align="center">
            1
          </Divider>

          <Divider variant="subtle" orientation="horizontal" align="start">
            2
          </Divider>
          <Divider variant="brand" orientation="horizontal" align="center">
            3
          </Divider>
          <Divider variant="strong" orientation="horizontal" align="end">
            4
          </Divider>
        </div>
      ),
    },
    {
      cardHeader: "Vertical",
      cardSubtext: "",
      cardComponent: (
        <div className="flex h-80 w-full flex-row gap-10">
          <Divider orientation="vertical" align="center">
            1
          </Divider>
          <Divider variant="subtle" orientation="vertical" align="center">
            2
          </Divider>
          <Divider variant="brand" orientation="vertical" align="center">
            3
          </Divider>
          <Divider variant="strong" orientation="vertical" align="center">
            4
          </Divider>
          <Divider orientation="vertical" align="center">
            5
          </Divider>
          <Divider variant="subtle" orientation="vertical" align="center">
            6
          </Divider>
          <Divider variant="brand" orientation="vertical" align="center">
            7
          </Divider>
          <Divider variant="strong" orientation="vertical" align="center">
            8
          </Divider>
          <Divider orientation="vertical" align="center">
            9
          </Divider>
          <Divider variant="subtle" orientation="vertical" align="center">
            10
          </Divider>
          <Divider variant="brand" orientation="vertical" align="center">
            11
          </Divider>
          <Divider variant="strong" orientation="vertical" align="center">
            12
          </Divider>
          <Divider orientation="vertical" align="center">
            13
          </Divider>
          <Divider variant="subtle" orientation="vertical" align="center">
            14
          </Divider>
          <Divider variant="brand" orientation="vertical" align="center">
            15
          </Divider>
          <Divider variant="strong" orientation="vertical" align="center">
            16
          </Divider>
          <Divider variant="brand" orientation="vertical" align="center">
            17
          </Divider>
        </div>
      ),
    },
    {
      cardHeader: "Appearance",
      cardSubtext:
        "A divider can have a brand, subtle, or strong appearance. When not specified, it has its default experience",
      cardComponent: (
        <div className="flex h-fit w-full flex-col">
          <Divider orientation="horizontal" align="center">
            1
          </Divider>

          <Divider variant="subtle" orientation="horizontal" align="center">
            2
          </Divider>
          <Divider variant="brand" orientation="horizontal" align="center">
            3
          </Divider>
          <Divider variant="strong" orientation="horizontal" align="center">
            4
          </Divider>
        </div>
      ),
    },
    {
      cardHeader: "Align Content",
      cardSubtext:
        "The label associated with the divider can be aligned at the start, center, or end of the divider line.",
      cardComponent: (
        <div className="flex h-fit w-full flex-col">
          <Divider orientation="horizontal" align="start">
            Start
          </Divider>
          <Divider variant="subtle" orientation="horizontal" align="center">
            Center
          </Divider>
          <Divider variant="brand" orientation="horizontal" align="end">
            End
          </Divider>
        </div>
      ),
    },
    {
      cardHeader: "Custom Styles",
      cardSubtext:
        "A divider can have custom styles applied to both the label and the line.",
      cardComponent: (
        <div className="flex h-fit w-full flex-col">
          <Divider orientation="horizontal" align="start">
            Start
          </Divider>
          <Divider variant="subtle" orientation="horizontal" align="center">
            Center
          </Divider>
          <Divider variant="brand" orientation="horizontal" align="end">
            End
          </Divider>
          <Divider variant="strong" orientation="horizontal" align="center">
            4
          </Divider>
          <Divider
            variant={"primary"}
            orientation={"horizontal"}
            align={"center"}
          >
            5
          </Divider>
        </div>
      ),
    },
  ],
}
