"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex h-[10vh] w-full shrink-0 items-center justify-between border-b-[1px] border-slate-300 bg-slate-50/10 px-4 md:px-6 dark:border-slate-800 dark:bg-stone-950">
      <Link className="flex items-center gap-2 dark:text-white" href="/">
        <MountainIcon className="h-6 w-6" />
        <span className="text-2xl font-bold">Fluent 2</span>
      </Link>
    </nav>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
