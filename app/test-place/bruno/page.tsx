"use client"

import { AnimatePresence } from "framer-motion"

import DataTable from "@/components/reviewing/data-table"

export default function Page() {
  return (
    <>
      <div
        className={
          "flex h-screen w-screen  overflow-x-hidden bg-gray-50 dark:bg-gray-900"
        }
      >
        <AnimatePresence>
          <div>
            <DataTable></DataTable>
          </div>
        </AnimatePresence>
      </div>
    </>
  )
}
