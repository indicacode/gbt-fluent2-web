"use client"
import {AnimatePresence, motion} from "framer-motion";
import {Button} from "@/components/reviewing/button";





export default function Page() {
    return (<>
            <div className={"bg-gray-900 overflow-x-hidden flex  w-screen h-screen"}>
                <AnimatePresence >
                    <Button className={""}  variant={"default"} >

                    </Button>


                </AnimatePresence>

            </div>
        </>
    )
}
