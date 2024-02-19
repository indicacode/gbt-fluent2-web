"use client"
import {AnimatePresence, motion} from "framer-motion";
import {Switch} from "@radix-ui/react-switch";
import {
    Select,
    SelectContent,
    SelectGroup, SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/not-done/select";

export default function Page() {
    return (<>
            <div className={"bg-gray-600 overflow-x-hidden flex  w-screen h-screen"}>
                <AnimatePresence>
                    <Select >
                        <SelectTrigger className={"w-40"}>
                            <SelectValue placeholder={"Select something"}></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className={""}>
                                <SelectLabel>
                                    Fruits
                                </SelectLabel>
                                <SelectItem value={"apple"} >Apple</SelectItem>
                                <SelectItem value={"banana"} >Banana</SelectItem>
                                <SelectItem value={"blueberry"} >Blueberry</SelectItem>
                                <SelectItem value={"grapes"} >Grapes</SelectItem>

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </AnimatePresence>

            </div>
        </>
    )
}
