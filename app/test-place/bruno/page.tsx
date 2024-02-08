"use client"
import {AnimatePresence, motion} from "framer-motion";
import {Button} from "@/components/done/button";


export default function Page() {
    return (<>
            <div className={"bg-gray-900 flex  w-screen h-screen"}>
                <AnimatePresence >
                    <motion.div
                        className={" transition-colors duration-200 "}
                        initial={{scale: 1, rotate: 0, backgroundColor: 'blue'}}
                        animate={{scale: 2, rotate: 360, backgroundColor: ["#FFFAAF", "#AAFFAA"]}}
                        transition={{duration: 2, repeat:Infinity,repeatType:"reverse", ease: 'easeInOut'}}
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '47%',

                        }}
                    >

                        <Button variant={"default"} hasIcon={true} Icon > asdkowkoaksdwasd</Button>
                    </motion.div>
                </AnimatePresence>

            </div>
        </>
    )
}
