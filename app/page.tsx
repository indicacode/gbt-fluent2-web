"use client"

import {
  Nav,
  NavCategory,
  NavHeader,
  NavSection,
  NavSubItem,
} from "@/components/nav"
import { ArticleIcon, UserCircleIcon } from "@phosphor-icons/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useMemo, useState } from "react"
import { components, sideBar } from "./page.inputs"

type SideBarType = keyof typeof sideBar
// trigger build
export default function Page() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const sideBarKeys = useMemo(() => Object.keys(sideBar), [])
  const currentDocs = searchParams.get("section")

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
    setIsCollapsed((prev) => !prev)
  }, [])

  return (
    <div className="flex h-[100%] min-h-screen w-full flex-row bg-gradient-to-r from-white to-slate-200 transition-colors dark:from-slate-950 dark:to-zinc-950">
      <Nav isOpen={!isCollapsed} onToggle={handleSidebarToggle}>
        <NavHeader href="#" logo={UserCircleIcon}>
          Fluent2
        </NavHeader>
        {sideBarKeys.map((key, idx) => {
          const category = sideBar[key as SideBarType]
          return (
            <NavSection title={"title"} key={idx}>
              <NavCategory icon={category.icon} title={key}>
                {category.items.map((item, itemIdx) =>
                  typeof item === "string" ? (
                    <NavSubItem
                      key={itemIdx}
                      href={`?section=${item}`}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavigate("section", item)
                      }}
                    >
                      {item}
                    </NavSubItem>
                  ) : (
                    <span key={itemIdx}>{item.title}</span>
                  )
                )}
              </NavCategory>
            </NavSection>
          )
        })}
      </Nav>

      <main className="flex min-h-full w-full items-start justify-center px-6 py-12">
        {isCollapsed && (
          <button
            onClick={handleSidebarToggle}
            className="fixed top-4 left-4 z-50 rounded-md border border-gray-200 bg-white p-2 shadow-md transition-colors hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
            title="Open Navigation"
          >
            <ArticleIcon
              size={24}
              weight="regular"
              className="text-gray-800 dark:text-white"
            />
          </button>
        )}

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
