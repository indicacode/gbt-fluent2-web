"use client"

import ThemeSwitch from "@/utils/themeSwitch"
import { useMediaQuery } from "@/utils/use-media-query"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Fragment, useCallback, useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/done/accordion"
import { ArrowLeft16Regular } from "@fluentui/react-icons"
import { PiFileTextThin } from "@react-icons/all-files/pi/PiFileTextThin"
import { components, sideBar } from "./page.inputs"

type SideBarType = keyof typeof sideBar

type ItemsType = {
  [Key in SideBarType]: (typeof sideBar)[Key]["items"][number]
}[SideBarType]

export default function Page() {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isMobile = useMediaQuery(["(max-width: 640px)"], {
    ssr: true,
    fallback: [false],
  })[0]

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  const sideBarKeys = Object.keys(sideBar)
  const currentDocs = searchParams.get("section")
  const currentAccordion = searchParams.get("accordion")
  return (
    <div className="flex h-[100%] min-h-screen w-full flex-grow flex-row bg-gradient-to-r from-white to-slate-200 transition-colors dark:from-slate-950 dark:to-zinc-950">
      <span
        className={`w-full ${isMobile && isCollapsed ? "max-w-14" : "max-w-44"}`}
      />
      <div
        className={`fixed z-50 flex max-h-screen min-h-screen w-full flex-col justify-between overflow-y-auto bg-transparent pt-4 shadow-2xl transition-all dark:border-zinc-700 dark:bg-transparent ${
          isMobile && isCollapsed ? "max-w-14" : "max-w-44"
        }`}
      >
        <div className="flex h-fit flex-col gap-10">
          <div
            onClick={() => {
              if (isMobile) {
                setIsCollapsed((p) => !p)
              }
            }}
            className="flex h-[1.5rem] min-w-fit items-center justify-center gap-2 overflow-hidden pl-1 text-black dark:text-white"
          >
            <HamburgerMenuIcon
              className={`font-4xl flex w-fit font-extrabold text-black dark:text-white ${isMobile ? "" : "hidden"}`}
            />
            <h2
              className={`whitespace-nowrap text-2xl font-bold ${isMobile && isCollapsed ? "opacity-0" : "opacity-100"}`}
            >
              Fluent2
            </h2>
          </div>

          <Accordion
            className="flex h-full w-full flex-col bg-transparent pt-4"
            type="multiple"
            defaultValue={[currentAccordion!]}
          >
            {sideBarKeys.map((key, idx) => (
              <AccordionItem
                key={idx}
                className={`bg-transparent font-bold transition-all ${isMobile && isCollapsed ? "opacity-0" : "opacity-100"}`}
                value={"item" + idx}
              >
                <AccordionTrigger>
                  <span
                    onClick={() =>
                      router.push(
                        pathname +
                          "?" +
                          createQueryString("accordion", "item" + idx)
                      )
                    }
                    className="flex cursor-pointer gap-2 pb-1 pl-2 text-[1.2em]"
                  >
                    {sideBar[key as SideBarType].icon}
                    {key}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {sideBar[key as SideBarType].items.map(
                    (component: ItemsType, itemIdx: number) => (
                      <span
                        key={itemIdx}
                        className="flex h-fit w-full cursor-pointer items-center py-1 pl-3 text-[14px] font-normal hover:bg-brand-light focus:bg-brand-light active:bg-brand-light"
                        onClick={() =>
                          router.push(
                            pathname +
                              "?" +
                              createQueryString("section", component)
                          )
                        }
                        aria-labelledby={`${key}-${itemIdx}`}
                      >
                        <PiFileTextThin size={17} />
                        {component}
                      </span>
                    )
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <ThemeSwitch className="self-center" />
      </div>
      <div onClick={() => router.back()} className={"h-fit w-fit"}>
        <div
          className={
            "z-40 ml-2 mt-2 flex h-8 w-8 items-center justify-center rounded-full ring-[1px] ring-black hover:bg-brand-light active:bg-brand-secondary"
          }
        >
          <ArrowLeft16Regular />
        </div>
      </div>
      <main className="flex min-h-full w-full items-center justify-center py-12">
        {components.map(({ header, subText, cards }, idx: number) => {
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
                {cards.map(
                  ({ cardHeader, cardSubtext, cardComponent }, idx: number) => (
                    <Fragment key={idx}>
                      {cardHeader && (
                        <>
                          <h2 className="text-2xl font-semibold dark:text-white">
                            {cardHeader}
                          </h2>
                          {cardSubtext}
                        </>
                      )}
                      <div className="relative flex min-w-fit overflow-hidden rounded border border-zinc-400 bg-[#fafafa] p-4 text-slate-950 shadow dark:border-zinc-200 dark:bg-slate-950 dark:text-slate-50">
                        {cardComponent}
                      </div>
                    </Fragment>
                  )
                )}
              </div>
            )
          )
        })}
      </main>
    </div>
  )
}
