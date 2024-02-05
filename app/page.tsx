"use client"

import {Avatar, AvatarFallback, AvatarImage} from "@/components/done/avatar"

export default function Page() {
    return (
        <div>
            <Avatar variant="default">
                <AvatarImage src="https://th.bing.com/th/id/OIP.DGu9im2kr0eKsYb4EkI7ZQHaEo?w=2560&h=1600&rs=1&pid=ImgDetMain"/>
                <AvatarFallback/>
            </Avatar>
        </div>
    )
}
