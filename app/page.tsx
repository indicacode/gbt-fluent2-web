"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/not-done/avatar"

export default function Page() {
  return (
    <div>
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback />
      </Avatar>
    </div>
  )
}
