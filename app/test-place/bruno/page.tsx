"use client"

import { AnimatePresence } from "framer-motion"

import { Button } from "@/components/done/button"

export default function Page() {
  return (
    <>
      <div className={"flex h-screen w-screen  overflow-x-hidden bg-gray-900"}>
        <AnimatePresence>
          <Button
            variant={"default"}
            buttonType={"split"}
            dropdownclassName=""
            dropdownContent=""
          >
            SPLIT BUTTON
          </Button>
        </AnimatePresence>
      </div>
    </>
  )
}
