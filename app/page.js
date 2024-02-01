"use client"
import { Button } from '@/components/ui/button'
import { NavigationMenu,NavigationMenuContent,NavigationMenuItem } from '@/components/ui/navigation-menu'
import Image from 'next/image'
import {Input} from "@/components/ui/input";

import {sendMessage} from "next/dist/client/dev/error-overlay/websocket";

export default function Home() {
  return (
    <main>
      <div className="flex w-full max-w-sm items-center ">
            <div className={"flex w-screen h-screen justify-center items-center"}>
          <Input type="email" className={"text-black"}  PlaceholderClasses={""} Subtext={" coloque aqui certa informaçao"} SubtextClasses={"text-md text-gray-600"} placeholder={"texto por dentro"} PlaceholderText={"Input Placeholder"}   variant={"default"}  />
            </div>
      </div>

    </main>
  )
}

