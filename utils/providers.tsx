"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

import { Toaster } from "@/components/reviewing/toaster"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster />
    </ThemeProvider>
  )
}
