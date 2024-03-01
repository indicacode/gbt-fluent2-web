"use client"
import {AnimatePresence, motion} from "framer-motion";
import {Switch} from "@radix-ui/react-switch";


import {Button} from "@/components/done/button";
import {wait} from "next/dist/lib/wait";
import {Drawer} from "@/components/reviewing/drawer";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/app/test-place/bruno/dialog";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";

export default function Page() {
    return (<>
            <div className={"bg-gray-50 overflow-x-hidden flex  w-screen h-screen"}>
                <AnimatePresence>
                        <Dialog>
                            <DialogTrigger>
                                <Button variant={"default"} >Open Dialog</Button>
                            </DialogTrigger>
                            <DialogBody>

                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>This is a dialog.</DialogTitle>
                                        <DialogDescription>
                                            This is a dialog component, made to convey a message that is important to users!
                                        </DialogDescription>
                                    </DialogHeader>
                                            <h2>Put your message in here!</h2>
                                                    <div className={"flex justify-end flex-row"}>
                                                <Button className={"mr-2"}   size={"default"} variant={"secondary"}>Deny</Button>
                                        <Button className={""} variant={"default"}>Agree</Button>
                                                    </div>

                                    </DialogContent>
                            </DialogBody>
                        </Dialog>
                </AnimatePresence>

            </div>
        </>
    )
}
