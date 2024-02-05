"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/done/avatar"

export default function Page() {
  return (
    <div>
      <Avatar variant="default">
        <AvatarImage src="" />
        <AvatarFallback />
      </Avatar>
    </div>
  )
}
