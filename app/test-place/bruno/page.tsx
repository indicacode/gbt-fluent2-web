"use client"
import {AnimatePresence, motion} from "framer-motion";
import {Switch} from "@radix-ui/react-switch";







export default function Page() {
    return (<>
            <div className={"bg-gray-600 overflow-x-hidden flex  w-screen h-screen"}>
                <AnimatePresence >
                    <Switch >SIHD</Switch>

                </AnimatePresence>

            </div>
        </>
    )
}
