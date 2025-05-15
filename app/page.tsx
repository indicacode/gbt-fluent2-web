"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/done/accordion"
import { useMediaQuery } from "@/utils/use-media-query"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useMemo, useState } from "react"
import { FaRegFileAlt } from "react-icons/fa"
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

  // Memoize these values to prevent unnecessary recalculations
  const sideBarKeys = useMemo(() => Object.keys(sideBar), [])
  const currentDocs = searchParams.get("section")
  const currentAccordion = searchParams.get("accordion") || "item0"

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const handleNavigate = useCallback(
    (paramName: string, value: string) => {
      router.push(`${pathname}?${createQueryString(paramName, value)}`)
    },
    [router, pathname, createQueryString]
  )

  const handleSidebarToggle = useCallback(() => {
    if (isMobile) {
      setIsCollapsed((prev) => !prev)
    }
  }, [isMobile])

  const isCollapsedClass = isMobile && isCollapsed ? "max-w-14" : "max-w-44"
  const isContentHidden = isMobile && isCollapsed ? "opacity-0" : "opacity-100"

  return (
    <div className="flex h-[100%] min-h-screen w-full flex-row bg-gradient-to-r from-white to-slate-200 transition-colors dark:from-slate-950 dark:to-zinc-950">
      {/* Spacer div that reserves the width of the sidebar */}
      <span className={`w-full ${isCollapsedClass}`} />

      {/* Sidebar */}
      <aside
        className={`fixed z-50 flex h-full min-h-screen w-full flex-col border-r border-slate-200 bg-white shadow-lg transition-all dark:border-zinc-700 dark:bg-slate-900 ${isCollapsedClass}`}
        aria-label="Sidebar navigation"
      >
        {/* Header */}
        <div
          onClick={handleSidebarToggle}
          className="flex h-16 w-full items-center justify-start gap-2 overflow-hidden border-b border-slate-200 px-4 dark:border-zinc-700"
        >
          <HamburgerMenuIcon
            className={`text-2xl text-slate-800 dark:text-white ${isMobile ? "cursor-pointer" : "hidden"}`}
            aria-hidden={!isMobile}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          />
          <h2
            className={`text-2xl font-bold whitespace-nowrap text-slate-800 transition-opacity duration-200 dark:text-white ${isContentHidden}`}
          >
            Fluent2
          </h2>
        </div>

        {/* Navigation */}
        <nav className="overflow-y-auto py-4">
          <Accordion
            className="flex w-full flex-col bg-transparent"
            type="multiple"
            defaultValue={[currentAccordion]}
          >
            {sideBarKeys.map((key, idx) => (
              <AccordionItem
                key={idx}
                className={`border-b-0 bg-transparent font-bold transition-opacity duration-200 ${isContentHidden}`}
                value={"item" + idx}
              >
                <AccordionTrigger className="mx-1 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span
                    onClick={() => handleNavigate("accordion", "item" + idx)}
                    className="flex cursor-pointer items-center gap-2 text-base font-semibold text-slate-800 dark:text-slate-200"
                  >
                    {sideBar[key as SideBarType].icon}
                    {key}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="mx-1 space-y-1">
                    {sideBar[key as SideBarType].items.map(
                      (component: ItemsType, itemIdx: number) => (
                        <li key={itemIdx}>
                          <button
                            className={`group flex h-10 w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 focus:ring-2 focus:ring-slate-500 focus:outline-none dark:text-slate-300 dark:hover:bg-slate-800 ${
                              currentDocs === component
                                ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                                : ""
                            }`}
                            onClick={() => handleNavigate("section", component)}
                            aria-current={
                              currentDocs === component ? "page" : undefined
                            }
                          >
                            <FaRegFileAlt
                              size={16}
                              className="text-slate-500 dark:text-slate-400"
                            />
                            <span className="truncate">{component}</span>
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </nav>

        {/* Theme Toggle - Positioned at bottom */}
        <div className="mt-auto border-t border-slate-200 p-4 dark:border-zinc-700">
          {/* Placeholder for theme toggle */}
          {/* <ThemeSwitch /> */}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex min-h-full w-full items-start justify-center px-6 py-12">
        {components.map(({ header, subText, cards }, idx: number) => {
          return (
            currentDocs === header && (
              <div
                key={idx}
                className="flex w-full max-w-4xl flex-col gap-12 dark:text-white"
              >
                <header className="flex flex-col space-y-2">
                  <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
                    {header}
                  </h1>
                  <div className="text-slate-700 dark:text-slate-300">
                    {subText}
                  </div>
                </header>

                {cards.map(
                  (
                    { cardHeader, cardSubtext, cardComponent },
                    cardIdx: number
                  ) => (
                    <section key={cardIdx} className="space-y-4">
                      {cardHeader && (
                        <div className="space-y-2">
                          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                            {cardHeader}
                          </h2>
                          <div className="text-slate-700 dark:text-slate-300">
                            {cardSubtext}
                          </div>
                        </div>
                      )}
                      <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-slate-900">
                        {cardComponent}
                      </div>
                    </section>
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
