"use client"

import { ReactNode } from "react"
import StyleProvider from "@/context/styleProvider"
import { ThemeProvider } from "next-themes"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <StyleProvider>{children}</StyleProvider>
    </ThemeProvider>
  )
}
