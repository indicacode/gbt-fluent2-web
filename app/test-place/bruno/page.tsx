"use client"
import {AnimatePresence, motion} from "framer-motion";
import {Toggle} from "@/components/not-done/toggle";


export default function Page() {
    return (<>
            <div className={"bg-gray-900 overflow-x-hidden flex  w-screen h-screen"}>
                <AnimatePresence >


                    <Toggle></Toggle>

                </AnimatePresence>

            </div>
        </>
    )
}
