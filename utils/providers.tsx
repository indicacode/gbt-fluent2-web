"use client"

import { ReactNode } from "react"
import StyleProvider from "@/context/styleProvider"

export default function Providers({ children }: { children: ReactNode }) {
  return <StyleProvider>{children}</StyleProvider>
}
