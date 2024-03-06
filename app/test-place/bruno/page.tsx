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

export default function Page() {
  return (
    <>
      <div className={"flex h-screen w-screen  overflow-x-hidden bg-gray-50"}>
        <AnimatePresence>
          <Dialog>
            <DialogTrigger>
              <Button variant={"default"}>Open Dialog</Button>
            </DialogTrigger>
            <DialogBody>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>This is a dialog.</DialogTitle>
                  <DialogDescription>
                    This is a dialog component, made to convey a message that is
                    important to users!
                  </DialogDescription>
                </DialogHeader>
                <h2>Put your message in here!</h2>
                <div className={"flex flex-row justify-end"}>
                  <Button
                    className={"mr-2"}
                    size={"default"}
                    variant={"secondary"}
                  >
                    Deny
                  </Button>
                  <Button className={""} variant={"default"}>
                    Agree
                  </Button>
                </div>
              </DialogContent>
            </DialogBody>
          </Dialog>
        </AnimatePresence>
      </div>
    </>
  )
}
