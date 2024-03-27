"use client"

import React, { Fragment, useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@/components/done"
import { Card, CardContent } from "@/components/not-done/card"

import { components, sideBar } from "./page.inputs"

type SideBarType = keyof typeof sideBar

type ItemsType = {
  [Key in SideBarType]: (typeof sideBar)[Key][number]
}[SideBarType]

export default function Page() {
  const [currentDocs, setCurrentDocs] = useState<ItemsType>("Button")

  const sideBarKeys = Object.keys(sideBar)
  return (
    <div className="flex h-[100%] min-h-screen w-full flex-grow flex-col bg-blue-500 lg:flex-row">
      <div className="flex min-h-full w-full max-w-44 flex-col gap-10 border-r-2 border-zinc-700 bg-zinc-900 pt-4 dark:bg-slate-950">
        <div className="flex gap-2 pl-1 text-black dark:text-white">
          <h2 className="text-2xl font-bold">Fluent2</h2>
        </div>
        <Accordion
          type="multiple"
          className="flex h-full w-full flex-col bg-transparent pt-4"
        >
          {sideBarKeys.map((key, idx) => (
            <AccordionItem
              key={idx}
              className="bg-transparent font-bold"
              value={"item" + idx}
            >
              <AccordionTrigger>
                <span className="pb-1 text-[1.2em]">{key}</span>
              </AccordionTrigger>
              <AccordionContent>
                {sideBar[key as SideBarType].map(
                  (component: ItemsType, itemIdx: number) => (
                    <Button
                      key={itemIdx}
                      className="h-auto w-full justify-start rounded-none p-0"
                      variant="subtle"
                      onClick={() => setCurrentDocs(component)}
                      aria-labelledby={`${key}-${itemIdx}`}
                    >
                      {component}
                    </Button>
                  )
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <main className="flex  min-h-full w-full items-center justify-center bg-slate-100 dark:bg-gradient-to-r dark:from-slate-950 dark:to-zinc-950">
        {components.map(({ header, subText, cards }, idx) => {
          return (
            currentDocs === header && (
              <div
                key={idx}
                className="flex w-[60%] flex-col gap-12 dark:text-white"
              >
                <div className="flex flex-col">
                  <h1 className="text-3xl font-semibold dark:text-white">
                    {header}
                  </h1>
                  {subText}
                </div>
                <div className="flex flex-col justify-around gap-5">
                  {cards.map(
                    ({ cardHeader, cardSubtext, cardComponent }, idx) => (
                      <Fragment key={idx}>
                        {cardHeader && (
                          <>
                            <h2 className="text-2xl font-semibold dark:text-white">
                              {cardHeader}
                            </h2>
                            {cardSubtext}
                          </>
                        )}
                        <Card>
                          <CardContent className="flex gap-4">
                            {cardComponent}
                          </CardContent>
                        </Card>
                      </Fragment>
                    )
                  )}
                </div>
              </div>
            )
          )
        })}
      </main>
    </div>
  )
}
