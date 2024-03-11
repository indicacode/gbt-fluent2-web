"use client"

import { DialogBody } from "next/dist/client/components/react-dev-overlay/internal/components/Dialog"
import { AnimatePresence } from "framer-motion"

import { Button } from "@/components/done/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/test-place/bruno/dialog"

import DataTable from "@/components/reviewing/data-table";

export default function Page() {
  return (
    <>
      <div className={"flex h-screen w-screen  overflow-x-hidden dark:bg-gray-900 bg-gray-50"}>
        <AnimatePresence>
         <div>

            <DataTable></DataTable>
         </div>
        </AnimatePresence>
      </div>
    </>
  )
}
