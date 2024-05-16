import "./globals.css"

import { ReactNode, Suspense } from "react"
import Providers from "@/utils/providers"

export const metadata = {
  title: "Fluent 2 to tailwind",
  description: "Fluent 2 to tailwind by GRBTec",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="font-Segoe dark:bg-gradient-to-r dark:from-slate-950 dark:to-zinc-950">
        <Providers>
          <Suspense>
            <div id="root">{children}</div>
            <div id="portal-root"></div>
          </Suspense>
        </Providers>
      </body>
    </html>
  )
}
