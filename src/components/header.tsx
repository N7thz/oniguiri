"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from "@/providers/user-provider"
import { Icon } from "./icon"
import { Ellipsis } from "lucide-react"
import Link from "next/link"

export const Header = () => {

    const { user: { image } } = useUser()

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
            <Avatar>
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
