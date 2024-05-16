"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { GoMoon, GoSun } from "react-icons/go"

import { cn } from "@/lib/utils"

export default function ThemeSwitch({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        className="opacity-0"
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    )

  if (resolvedTheme === "dark") {
    return (
      <div
        className={cn(
          "flex aspect-square w-8 cursor-pointer items-center justify-center rounded-full",
          className
        )}
      >
        <GoSun size={24} onClick={() => setTheme("light")} />
      </div>
    )
  }

  if (resolvedTheme === "light") {
    return (
      <div
        className={cn(
          "flex aspect-square w-8 cursor-pointer items-center justify-center rounded-full",
          className
        )}
      >
        <GoMoon size={24} onClick={() => setTheme("dark")} />
      </div>
    )
  }
}
