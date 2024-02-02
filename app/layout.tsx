"use client"

import "./globals.css"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/done/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/done/navigation-menu"

// export const metadata = {
//     title: 'MailPage',
//     description: 'Shadcn like mailpage',
// }

export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    <html>
      <body className={"dark:bg-red-500"}>
        <header>
          <nav className="flex h-[10vh] w-full bg-gray-900 shrink-0 items-center justify-between px-4 md:px-6">
            <Link
              className="mr-6 text-white text-2xl font-[Times] flex items-center gap-2"
              href="/"
            >
              {pathname !== "/"
                ? pathname.replace("/", "").toUpperCase()
                : "HOME"}
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/willien">
                    <Button variant="outline">Willien</Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/bruno">
                    <Button variant="outline">Bruno</Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
