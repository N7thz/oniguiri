"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession } from "next-auth/react"

export const Header = () => {

    const { data } = useSession()

    if (!data || !data.user || !data.user.image) return

    const { user: { image } } = data

    return (
        <div
            className="w-full h-[72px] absolute border border-b flex justify-between items-center px-3"
        >
            Home
            <Avatar>
                <AvatarImage
                    src={image}
                    alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}
