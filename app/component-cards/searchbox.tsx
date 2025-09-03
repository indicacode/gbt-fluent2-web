"use client"

import { SearchBox } from "@/components/reviewing/searchbox"
import { useState } from "react"
import { PiMicrophone, PiUserLight } from "react-icons/pi"

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
        <div className="flex w-[500px] flex-col gap-4">
          <div className="p-2">
            <div>
              <p>Outline appearance (default)</p>
              <SearchBox className="mt-2" appearance="outline" />
            </div>
            <div className="mt-4">
              <p>Underline appearance</p>
              <SearchBox className="mt-2" appearance="underline" />
            </div>
          </div>
          <div className="bg-neutral-800 p-2 text-white">
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
      cardComponent: (
        <div className="flex w-[500px] flex-col gap-4">
          <div>
            <p>Search by name</p>
            <SearchBox beforeContent={<PiUserLight />} className="mt-2 mb-1" />
            <p className="text-sm text-neutral-500">
              A SearchBox with a custom icon in the contentBefore slot.
            </p>
          </div>
          <div>
            <p>Search by voice</p>
            <SearchBox
              afterContent={
                <PiMicrophone className="hover:text-brand-primary" />
              }
              className="mt-2 mb-1"
            />
            <p className="text-sm text-neutral-500">
              A SearchBox with a button in the contentAfter slot.
            </p>
          </div>
          <div>
            <p>Search with filter</p>
            <SearchBox
              beforeContent={<p>Search:</p>}
              afterContent={<p>Filter</p>}
              className="mt-2 mb-1"
            />
            <p className="text-sm text-neutral-500">
              A SearchBox with a presentational value in the contentBefore slot
              and another presentational value in the contentAfter slot.
            </p>
          </div>
        </div>
      ),
    },
    {
      cardHeader: "Disabled",
      cardSubtext: "A SearchBox can be disabled.",
      cardComponent: (
        <div className="w-[500px]">
          <p>Disabled SearchBox</p>
          <SearchBox
            disabled
            defaultValue={"disabled value"}
            className="mt-2 mb-1"
          />
        </div>
      ),
    },
    {
      cardHeader: "Placeholder",
      cardSubtext:
        "A SearchBox can have placeholder text. If using the placeholder as a label (which is not recommended for usability), be sure to provide an aria-label for screen reader users.",
      cardComponent: (
        <div className="w-[500px]">
          <p>SearchBox with a placeholder</p>
          <SearchBox
            placeholder="This is a placeholder"
            className="mt-2 mb-1"
          />
        </div>
      ),
    },
    {
      cardHeader: "Size",
      cardSubtext: "A SearchBox can have different sizes.",
      cardComponent: (
        <div className="flex w-[500px] flex-col gap-4">
          <div>
            <p>Small SearchBox</p>
            <SearchBox size={"small"} className="mt-2 mb-1" />
          </div>
          <div>
            <p>Medium SearchBox</p>
            <SearchBox size={"medium"} className="mt-2 mb-1" />
          </div>
          <div>
            <p>Large SearchBox</p>
            <SearchBox size={"large"} className="mt-2 mb-1" />
          </div>
        </div>
      ),
    },
    {
      cardHeader: "Controlled",
      cardSubtext:
        "A SearchBox can be controlled: the consuming component tracks the SearchBox's value in its state and manually handles all updates.",
      cardComponent: (() => {
        const ControlledExample = () => {
          const [text, setText] = useState("")

          return (
            <div className="w-[500px]">
              <p>Controlled SearchBox limiting the value to 20 characters</p>
              <SearchBox
                maxLength={20}
                onChange={(e) => {
                  const length = e.target.value.length
                  setText(length >= 20 ? "⚠️ Input is limited to 20 characters." : "")
                }}
                size="medium"
                className="mt-2 mb-1"
              />
              <p className="text-sm text-gray-600">{text}</p>
            </div>

          )
        }
        return <ControlledExample />
      })(),
    },
  ],
}
