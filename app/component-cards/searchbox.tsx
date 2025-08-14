"use client"

import { SearchBox } from "@/components/not-done/searchbox"

export const searchbox_card = {
  header: "SearchBox",
  subText:
    "The SearchBox component allows the users to access information with ease, providing flexibility and the ability to clear and filter the search.",
  cards: [
    {
      cardComponent: <SearchBox />,
    },
    {
      cardHeader: "Appearance",
      cardSubtext:
        "A SearchBox can have different appearances. The colors adjacent to the SearchBox should have a sufficient contrast.",
      cardComponent: (
        <div className="flex flex-col gap-4">
          <SearchBox />
          <SearchBox />
          <SearchBox />
          <SearchBox />
        </div>
      ),
    },
    {
      cardHeader: "Content before/after",
      cardSubtext:
        "A SearchBox supports a custom element such as an icon or a button before the input text.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Disabled",
      cardSubtext: "A SearchBox can be disabled.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Placeholder",
      cardSubtext:
        "A SearchBox can have placeholder text. If using the placeholder as a label (which is not recommended for usability), be sure to provide an aria-label for screen reader users.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Size",
      cardSubtext: "A SearchBox can have different sizes.",
      cardComponent: <div></div>,
    },
    {
      cardHeader: "Controlled",
      cardSubtext:
        "A SearchBox can be controlled: the consuming component tracks the SearchBox's value in its state and manually handles all updates.",
      cardComponent: <div></div>,
    },
  ],
}
