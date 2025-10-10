import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/done/select"

export const select_card = {
  header: "Select",
  subText:
    "A Select allows one option to be selected from multiple options. The Select component is a wrapper around the native <select> element.",
  cards: [
    {
      cardHeader: "Default",
      cardSubtext: "",
      cardComponent: (
        <Select>
          <SelectTrigger className={"w-40"}>
            <SelectValue placeholder={"Select something"}></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className={""}>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem className={""} value={"apple"}>
                Apple
              </SelectItem>
              <SelectItem value={"banana"}>Banana</SelectItem>
              <SelectItem value={"blueberry"}>Blueberry</SelectItem>
              <SelectItem value={"grapes"}>Grapes</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
    },
    {
      cardHeader: "Appearance",
      cardSubtext:
        "Select can have different appearances. The colors adjacent to the input should have a sufficient contrast. Particularly, the color of input with filled darker and lighter styles needs to provide greater than 3 to 1 contrast ratio against the immediate surrounding color to pass accessibility requirements.",
      cardComponent: (
        <Select>
          <SelectTrigger className={"w-40"}>
            <SelectValue placeholder={"Select something"}></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className={""}>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem className={""} value={"apple"}>
                Apple
              </SelectItem>
              <SelectItem value={"banana"}>Banana</SelectItem>
              <SelectItem value={"blueberry"}>Blueberry</SelectItem>
              <SelectItem value={"grapes"}>Grapes</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
    },
    {
      cardHeader: "Disabled",
      cardSubtext: "A Select can be disabled through the native disabled prop",
      cardComponent: (
        <Select disabled={true}>
          <SelectTrigger className={"w-40"}>
            <SelectValue placeholder={"Select something"}></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className={""}>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem className={""} value={"apple"}>
                Apple
              </SelectItem>
              <SelectItem value={"banana"}>Banana</SelectItem>
              <SelectItem value={"blueberry"}>Blueberry</SelectItem>
              <SelectItem value={"grapes"}>Grapes</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
    },
    {
      cardHeader: "Size",
      cardSubtext:
        "A Select's size can be set to small,k medium (default), or large.",
      cardComponent: (
        <Select>
          <SelectTrigger className={"w-40"}>
            <SelectValue placeholder={"Select something"}></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className={""}>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem className={""} value={"apple"}>
                Apple
              </SelectItem>
              <SelectItem value={"banana"}>Banana</SelectItem>
              <SelectItem value={"blueberry"}>Blueberry</SelectItem>
              <SelectItem value={"grapes"}>Grapes</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
    },
  ],
}
