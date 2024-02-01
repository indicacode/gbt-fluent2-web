"use client"

import "./globals.css"

import Link from "next/link"
import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

// export const metadata = {
//     title: 'MailPage',
//     description: 'Shadcn like mailpage',
// }

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <nav className="flex h-20 w-full bg-gray-900 shrink-0 items-center justify-between px-4 md:px-6">
            <Link className="mr-6 text-white flex items-center gap-2" href="#">
              Home
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Button variant="outline">Willien</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="outline">Bruno</Button>
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
