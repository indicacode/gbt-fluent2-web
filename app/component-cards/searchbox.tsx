"use client"

import { SearchBox } from "@/components/not-done/searchbox"

export const searchbox_card = {
  header: "SearchBox",
  subText:
    "The SearchBox component allows the users to access information with ease, providing flexibility and the ability to clear and filter the search.",
  cards: [
    {
      cardComponent: (
        <div className="w-[500px]">
          <p>Sample SearchBox</p>
          <SearchBox className="mt-2" />
        </div>
      ),
    },
    {
      cardHeader: "Appearance",
      cardSubtext:
        "A SearchBox can have different appearances. The colors adjacent to the SearchBox should have a sufficient contrast.",
      cardComponent: (
        <div className="flex flex-col gap-4">
          <div className="w-[500px] p-2">
            <div>
              <p>Outline appearance (default)</p>
              <SearchBox className="mt-2" appearance="outline" />
            </div>
            <div className="mt-4">
              <p>Underline appearance</p>
              <SearchBox className="mt-2" appearance="underline" />
            </div>
          </div>
          <div className="w-[500px] bg-neutral-800 p-2 text-white">
            <div>
              <p>Filled lighter appearance</p>
              <SearchBox className="mt-2" appearance="filled-lighter" />
            </div>
            <div className="mt-4">
              <p>Filled darker appearance</p>
              <SearchBox className="mt-2" appearance="filled-darker" />
            </div>
          </div>
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
