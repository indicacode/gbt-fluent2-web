"use client"
import Link from "next/link";
import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/reviewing/navigation-menu";
import {Button} from "@/components/done/button";
import {usePathname} from "next/navigation"

export default function Navbar() {
    const pathname = usePathname()

    return (<nav className="flex h-[10vh] w-full bg-gray-900 shrink-0 items-center justify-between px-4 md:px-6">
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
                    <Link href="/test-place/willien">
                        <Button variant="outline">Willien</Button>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/test-place/bruno">
                        <Button variant="outline">Bruno</Button>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </nav>)
}
