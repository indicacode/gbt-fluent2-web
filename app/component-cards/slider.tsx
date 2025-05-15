import { Slider } from "@/components/done/slider"

export const slider_card = {
  header: "Slider",
  subText:
    "A Slider represents an input that allows user to choose a value from within a specific range.",
  cards: [
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: <Slider size={"sm"} step={1} />,
    },
    {
      cardHeader: "Step",
      cardSubtext:
        "You can define the step value of a slider so that the value will always be a multiple of that step",
      cardComponent: <Slider size={"sm"} step={25} />,
    },
    {
      cardHeader: "Min Max",
      cardSubtext: "A slider with min and max values displayed",
      cardComponent: (
        <div className={"flex flex-row"}>
          {" "}
          <h2 className={"mr-1"}>Min: 10</h2>{" "}
          <Slider className={"w-[40vw]"} size={"sm"} step={10} />{" "}
          <h2 className={"ml-1 flex flex-row"}>Max: 100</h2>{" "}
        </div>
      ),
    },
    {
      cardHeader: "Disabled",
      cardSubtext:
        "A disabled slider will not change or fire events on click or keyboard press.",
      cardComponent: (
        <Slider disabled={true} className={"w-[40vw]"} size={"sm"} step={10} />
      ),
    },
  ],
}
