import "./globals.css"

import { ReactNode } from "react"
import Providers from "@/utils/providers"

export const metadata = {
  title: "Fluent 2 to tailwind",
  description: "Fluent 2 to tailwind for GRBTec",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="bg-red-500 font-Segoe">
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
