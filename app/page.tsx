"use client"

import {Input} from "@/components/reviewing/input"

export default function Page() {
    return (
        <div className="flex justify-center items-center w-full min-h-screen bg-gray-300">
            <div className="w-1/2 h-1/2 bg-gray-500 rounded-[8px]">
      <Input subtext={"dasdasd"} subtextClasses={"bg-red-500"} placeholderClasses={"bg-gray-100"} placeholderText="oi"/>
            </div>
        </div>
    )
}
