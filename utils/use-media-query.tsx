import { useEffect, useState } from "react"

import { useCallbackRef } from "./use-callback-ref"

export interface UseMediaQueryOptions {
  fallback?: boolean[]
  ssr?: boolean

  getWindow?(): typeof window
}

export function useMediaQuery(
  query: string[],
  options: UseMediaQueryOptions
): boolean[] {
  if (typeof window === "undefined") {
    return options.fallback ?? []
  }
  const { fallback: _fallback, ssr = true, getWindow } = options
  const getWin = useCallbackRef(getWindow)

  const queries = Array.isArray(query) ? query : [query]

  const fallback = _fallback?.filter((v) => v != null) as boolean[]

  const [value, setValue] = useState(() => {
    return queries.map((query, index) =>
      !ssr
        ? (getWin() ?? window).matchMedia?.(query)?.matches
        : !!fallback[index]
    )
  })

  useEffect(() => {
    const win = getWin() ?? window
    const mql = queries.map((query) => win.matchMedia(query))

    const handler = (evt: MediaQueryListEvent) => {
      setValue((prev) => {
        return prev.map((item, index) => {
          if (mql[index].media === evt.media) return evt.matches
          return item
        })
      })
    }

    mql.forEach((v) => {
      if (v.addEventListener) {
        v.addEventListener("change", handler)
      } else {
        v.addListener(handler)
      }
    })

    return () => {
      mql.forEach((v) => {
        if (v.removeEventListener) {
          v.removeEventListener("change", handler)
        } else {
          v.removeListener(handler)
        }
      })
    }

    // eslint-disable-next-line
  }, [getWin])

  return value
}
