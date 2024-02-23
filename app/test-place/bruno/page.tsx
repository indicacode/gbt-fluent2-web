"use client"
import {AnimatePresence, motion} from "framer-motion";
import {Switch} from "@radix-ui/react-switch";

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/app/test-place/bruno/drawer";
import {Button} from "@/components/done/button";
import {wait} from "next/dist/lib/wait";

export default function Page() {
    return (<>
            <div className={"bg-gray-50 overflow-x-hidden flex  w-screen h-screen"}>
                <AnimatePresence>
                        <Drawer>
                            <DrawerTrigger>
                                <Button>Open drawer</Button>
                            </DrawerTrigger>

                            <DrawerContent>
                                <div className={"w-screen flex flex-col items-center h-[50vh]"}>


                                    <DrawerHeader className={"flex flex-col items-center "}>
                                        <DrawerTitle className={"dark:text-white"}>
                                            Welcome to GBT-PMS!
                                        </DrawerTitle>
                                        <DrawerDescription>Grbtec`s Property Management System, is soon to
                                            come! for now, try and track this little ball for as long as you can!</DrawerDescription>
                                    </DrawerHeader>
                                    <div>
                                        <motion.div animate={{rotate: 360}}
                                                    transition={{duration: 1, repeat: Infinity,repeatType:"reverse", repeatDelay: 0.7}}
                                                    className={"h-20 rounded-[49%] items-center bg-gray-300 w-20"}>
                                            <motion.div animate={{rotate: 360}}
                                                        transition={{duration: 1.6, repeat: Infinity,repeatType:"reverse", repeatDelay: 0.2}}
                                                        className={"h-10 mr-6 rounded-[47%] items-center bg-green-600 w-10"}>
                                                <motion.div animate={{rotate: 360}}
                                                            transition={{duration: 1.6, repeat: Infinity,repeatType:"reverse", repeatDelay: 0.4}}
                                                            className={"h-20  hover:bg-red-400 rounded-[46%] items-center bg-gray-400 w-20"}>

                                                </motion.div>
                                        </motion.div>


                                        </motion.div>
                                    </div>


                                </div>
                            </DrawerContent>
                        </Drawer>
                </AnimatePresence>

            </div>
        </>
    )
}
