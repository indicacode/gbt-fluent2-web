import "./globals.css"

import { ReactNode } from "react"

export const metadata = {
  title: "Fluent 2 to tailwind",
  description: "Fluent 2 to tailwind for GRBTec",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="min-h-full scroll-smooth  font-Segoe">
        <div>{children}</div>
      </body>
    </html>
  )
}
