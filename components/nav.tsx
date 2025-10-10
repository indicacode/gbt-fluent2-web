import { CaretDownIcon, CaretRightIcon, ListIcon } from "@phosphor-icons/react"
import { usePathname, useSearchParams } from "next/navigation"
import { useState } from "react"

export function NavHeader({ href, logo: Logo, children }) {
  return (
    <a
      href={href}
      className="mb-4 flex items-center gap-3 rounded-md transition-colors hover:bg-gray-50 dark:hover:bg-slate-800"
    >
      <Logo
        size={32}
        weight="regular"
        className="text-gray-800 dark:text-white"
      />
      <span className="font-semibold text-gray-800 dark:text-white">
        {children}
      </span>
    </a>
  )
}

export function NavCategory({ icon: Icon, title, children }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center gap-3 rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
      >
        <Icon size={20} weight="regular" />
        <span className="flex-1 text-left text-sm font-medium">{title}</span>
        {isExpanded ? (
          <CaretDownIcon size={16} />
        ) : (
          <CaretRightIcon size={16} />
        )}
      </button>
      {isExpanded && <div className="mt-2 flex flex-col gap-1">{children}</div>}
    </div>
  )
}

export function NavSubItem({ children, href, onClick }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isActive = searchParams.get("section") === children

  return (
    <a
      href={href}
      onClick={onClick}
      className={`block rounded-md px-9 py-2 text-sm transition-colors ${
        isActive
          ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
          : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
      }`}
    >
      {children}
    </a>
  )
}

export function NavSection({ title, children }) {
  return (
    <div className="pt-4">
      {title && (
        <h2 className="mb-2 px-2 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
          {title}
        </h2>
      )}
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  )
}

export function Nav({ isOpen, onToggle, children }) {
  return (
    <div
      className={`flex flex-col border-r border-gray-200 bg-white transition-all duration-300 dark:border-slate-700 dark:bg-slate-900 ${isOpen ? "w-64" : "w-0"} overflow-hidden p-4`}
    >
      <div className="">
        <button
          onClick={onToggle}
          className="rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-slate-800"
          title="Close Navigation"
        >
          <ListIcon
            size={24}
            weight="regular"
            className="text-gray-800 dark:text-white"
          />
        </button>
      </div>

      {/* Body */}
      <div className="">{children}</div>
    </div>
  )
}
