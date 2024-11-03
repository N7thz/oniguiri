"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from "@/providers/user-provider"
import { Icon } from "@/components/icon"
import { Ellipsis } from "lucide-react"
import Link from "next/link"
import { useSidebar } from "@/components/ui/sidebar"

export const Header = () => {

    const { user: { image } } = useUser()
    const { toggleSidebar } = useSidebar()

    return (
        <div
            className="w-full h-[72px] absolute border-b-2 flex justify-between items-center px-3 text-xl"
        >
            <Link href={"/home"}>
                <Icon
                    src="/oniguiri.jpg"
                    alt="icon"
                    width={36}
                    height={36}
                    className="size-10 rounded-full object-cover"
                />
            </Link>
            <Avatar
                onClick={toggleSidebar}
                className="cursor-pointer hover:scale-95 duration-200"
            >
                <AvatarImage
                    src={image}
                    alt="@shadcn"
                />
                <AvatarFallback>
                    <Ellipsis />
                </AvatarFallback>
            </Avatar>
        </div>
    )
}
