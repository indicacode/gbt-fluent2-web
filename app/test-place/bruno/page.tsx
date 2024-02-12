"use client"
import {AnimatePresence, motion} from "framer-motion";
import {Button} from "@/components/done/button";


export default function Page() {
    return (<>
            <div className={"bg-gray-900 overflow-x-hidden flex  w-screen h-screen"}>
                <AnimatePresence >

                    <Button variant={"default"} buttonType={"split"} dropdownclassName={} dropdownContent={} > SPLIT BUTTON</Button>

                </AnimatePresence>

            </div>
        </>
    )
}
